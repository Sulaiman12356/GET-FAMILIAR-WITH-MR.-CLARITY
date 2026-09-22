import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';

const rootDir = typeof import.meta.dirname !== 'undefined'
  ? import.meta.dirname
  : path.dirname(fileURLToPath(import.meta.url));

function platformConfigApiPlugin(): Plugin {
  return {
    name: 'platform-config-api',
    configureServer(server) {
      server.middlewares.use('/api/config', (req, res, next) => {
        const configPath = path.resolve(rootDir, 'src/data/platform-config.json');

        if (req.method === 'GET') {
          try {
            if (fs.existsSync(configPath)) {
              const raw = fs.readFileSync(configPath, 'utf-8');
              const data = JSON.parse(raw);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                config: data.config,
                heroImage: data.heroImage || '',
                lastUpdated: data.lastUpdated || '',
                hasPassword: Boolean(data.adminPassword)
              }));
              return;
            }
          } catch (e) {
            console.error('Error reading platform-config.json:', e);
          }
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Config file not found' }));
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body || '{}');
              const raw = fs.readFileSync(configPath, 'utf-8');
              const data = JSON.parse(raw);

              // Validate admin password
              if (!parsed.password || parsed.password !== data.adminPassword) {
                res.statusCode = 401;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Incorrect administrator password. Access denied.' }));
                return;
              }

              if (parsed.config) {
                data.config = { ...data.config, ...parsed.config };
              }
              if (parsed.heroImage !== undefined) {
                data.heroImage = parsed.heroImage;
              }
              if (parsed.newPassword && typeof parsed.newPassword === 'string' && parsed.newPassword.trim().length > 0) {
                data.adminPassword = parsed.newPassword.trim();
              }
              data.lastUpdated = new Date().toISOString();

              fs.writeFileSync(configPath, JSON.stringify(data, null, 2), 'utf-8');

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                config: data.config,
                heroImage: data.heroImage,
                lastUpdated: data.lastUpdated
              }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Failed to update platform configuration' }));
            }
          });
          return;
        }

        next();
      });

      server.middlewares.use('/api/auth/verify', (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body || '{}');
              const configPath = path.resolve(rootDir, 'src/data/platform-config.json');
              const raw = fs.readFileSync(configPath, 'utf-8');
              const data = JSON.parse(raw);

              if (parsed.password && parsed.password === data.adminPassword) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, authorized: true }));
                return;
              }
              res.statusCode = 401;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Incorrect administrator password.' }));
            } catch (e) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Verification error' }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), platformConfigApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
