import type { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';
import path from 'path';

// In-memory fallback if filesystem is read-only (e.g. deployed serverless container)
let memoryStore: any = null;

function getStore() {
  if (memoryStore) return memoryStore;
  try {
    const configPath = path.join(process.cwd(), 'src', 'data', 'platform-config.json');
    if (fs.existsSync(configPath)) {
      const raw = fs.readFileSync(configPath, 'utf-8');
      memoryStore = JSON.parse(raw);
      return memoryStore;
    }
  } catch (e) {
    console.warn('Could not read platform-config.json from disk, using fallback', e);
  }
  memoryStore = {
    adminPassword: 'clarity2026',
    lastUpdated: new Date().toISOString(),
    heroImage: '',
    config: {}
  };
  return memoryStore;
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const store = getStore();

  if (req.method === 'GET') {
    return res.status(200).json({
      config: store.config,
      heroImage: store.heroImage || '',
      lastUpdated: store.lastUpdated || '',
      hasPassword: Boolean(store.adminPassword)
    });
  }

  if (req.method === 'POST') {
    const body = req.body || {};
    const enteredPassword = body.password;

    if (!enteredPassword || enteredPassword !== store.adminPassword) {
      return res.status(401).json({ error: 'Incorrect administrator password' });
    }

    if (body.config) {
      store.config = { ...store.config, ...body.config };
    }
    if (body.heroImage !== undefined) {
      store.heroImage = body.heroImage;
    }
    if (body.newPassword && typeof body.newPassword === 'string' && body.newPassword.trim()) {
      store.adminPassword = body.newPassword.trim();
    }
    store.lastUpdated = new Date().toISOString();

    // Attempt to persist to disk if filesystem is writable
    try {
      const configPath = path.join(process.cwd(), 'src', 'data', 'platform-config.json');
      fs.writeFileSync(configPath, JSON.stringify(store, null, 2), 'utf-8');
    } catch (e) {
      console.warn('Disk write not supported in read-only environment, persisted in memory', e);
    }

    return res.status(200).json({
      success: true,
      config: store.config,
      heroImage: store.heroImage,
      lastUpdated: store.lastUpdated
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
