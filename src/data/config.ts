import { SiteConfig } from '../types';

export const initialConfig: SiteConfig = {
  name: "Onifade Sulaiman",
  nickname: "Mr. Clarity",
  title: "Computer Science Student & Student Leader",
  brand: "The Auspicious Era",
  tagline: "A New Chapter. A Lasting Legacy.",
  alternativeTagline: "Better Students. Bigger Possibilities.",
  institution: "Olabisi Onabanjo University (OOU)",
  facultyOrDept: "Computer Science",
  
  heroHeadline: "A New Chapter.",
  heroHeadlineHighlight: "A Lasting Legacy.",
  heroBio: "Onifade Sulaiman, popularly known as Mr. Clarity, is a Computer Science student, student leader, digital strategist and community builder focused on helping students discover opportunities, develop useful skills and create meaningful impact.",
  
  aboutIntro: "I am Onifade Sulaiman, popularly known as Mr. Clarity, a Computer Science student at Olabisi Onabanjo University with a strong interest in technology, digital innovation, entrepreneurship, leadership and student development.",
  aboutBelief: "My journey has been shaped by one simple belief: when people have the right information, skills and opportunities, they can make better decisions and create better outcomes.",
  aboutImpact: "Through leadership, digital projects, mentoring, technology and community initiatives, I have continued to look for practical ways to create value around me.",
  
  quote: "Clarity creates direction. Direction creates progress.",
  quoteAuthor: "Onifade Sulaiman",
  
  personalWebsiteUrl: "", // Configurable URL variable
  contactEmail: "onifade.clarity@gmail.com",
  contactWhatsApp: "+2348000000000",
  
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    tiktok: "https://tiktok.com",
    x: "https://x.com",
    whatsapp: "https://wa.me/2348000000000",
    youtube: ""
  },
  
  roles: [
    "Computer Science Student",
    "Student Leader",
    "Digital Strategist",
    "Technology Enthusiast",
    "Community Builder",
    "Mentor"
  ],
  
  timeline: [
    {
      id: "step-1",
      step: "01",
      title: "The Student",
      role: "Academic Foundation",
      description: "Computer Science student at Olabisi Onabanjo University, building strong fundamentals in software concepts, analytical problem solving, and technological innovation.",
      highlights: ["Department of Computer Science", "Passionate about tech & practical solutions"]
    },
    {
      id: "step-2",
      step: "02",
      title: "The Representative",
      role: "Grassroots Advocacy",
      description: "Started serving students through class and departmental representation, bridging the gap between student concerns and departmental administration.",
      highlights: ["Class advocacy", "Active student liaison", "Open feedback channels"]
    },
    {
      id: "step-3",
      step: "03",
      title: "The General Secretary",
      role: "Executive Administration",
      description: "Served as General Secretary within student leadership, gaining hands-on experience in administration, communication, coordination and student affairs.",
      highlights: ["Administrative efficiency", "Inter-department coordination", "Transparent reporting"]
    },
    {
      id: "step-4",
      step: "04",
      title: "The Builder",
      role: "Innovation & Initiatives",
      description: "Started working on digital projects, student-focused platforms, technology ideas and community initiatives designed to solve campus pain points.",
      highlights: ["Digital tools for students", "Peer learning spaces", "Resource repositories"]
    },
    {
      id: "step-5",
      step: "05",
      title: "The Clarity Journey",
      role: "Personal Identity",
      description: "Developed a personal identity around simplifying confusing information and helping students understand academics, opportunities, skills and digital possibilities.",
      highlights: ["'Mr. Clarity' philosophy", "Demystifying tech & academic paths", "Empowering peers"]
    },
    {
      id: "step-6",
      step: "06",
      title: "The Next Chapter",
      role: "Forward Vision",
      description: "Final-year student preparing to transition from campus leadership into professional, entrepreneurial and technology-driven work while cementing a lasting legacy.",
      highlights: ["The Auspicious Era movement", "Sustainable student systems", "Future-ready leadership"]
    }
  ],
  
  leadershipPillars: [
    {
      id: "representation",
      title: "REPRESENTATION",
      focus: "Student Voice",
      description: "Listening to students and communicating their concerns with clarity, empathy, and steadfast dedication.",
      icon: "Megaphone",
      metrics: "Responsive feedback"
    },
    {
      id: "administration",
      title: "ADMINISTRATION",
      focus: "Operational Excellence",
      description: "Learning how to coordinate people, information and responsibilities efficiently to ensure smooth execution.",
      icon: "FileCheck",
      metrics: "Systematic coordination"
    },
    {
      id: "communication",
      title: "COMMUNICATION",
      focus: "Transparent Updates",
      description: "Helping students understand important information clearly, cutting through confusion and procedural bottlenecks.",
      icon: "MessageSquareShare",
      metrics: "Clarity-first approach"
    },
    {
      id: "service",
      title: "SERVICE",
      focus: "Action & Impact",
      description: "Creating practical value rather than simply holding a position. Grounded in empathy, accessibility, and follow-through.",
      icon: "HeartHandshake",
      metrics: "Tangible contribution"
    }
  ],
  
  legacyTenureIntro: "The Legacy Tenure represents the kind of student-focused impact I believe leadership should pursue: practical initiatives, better access to opportunities, stronger communication and a university experience where students can find useful support.",
  
  legacyInitiatives: [
    {
      id: "academic-excellence",
      number: "01",
      title: "ACADEMIC EXCELLENCE",
      focus: "Learning & Resource Access",
      summary: "Helping students access useful academic information, resources, peer support and learning opportunities.",
      initiatives: [
        "Academic resource sharing & past question repositories",
        "Peer learning communities and tutorial circles",
        "Exam preparation support and syllabus guidance",
        "Information about academic opportunities & scholarships",
        "Better, timely communication of important academic updates"
      ],
      ctaText: "Explore Academic Initiatives",
      icon: "GraduationCap",
      badge: "Core Foundation"
    },
    {
      id: "student-welfare",
      number: "02",
      title: "STUDENT WELFARE",
      focus: "Support & Responsive Channels",
      summary: "Creating stronger channels for students to communicate challenges and access available support.",
      initiatives: [
        "Structured student feedback channels and listening clinics",
        "Welfare information, campus health & safety guidance",
        "Mental well-being & academic stress relief awareness",
        "Active student community engagement & emergency support aid"
      ],
      ctaText: "Explore Welfare Initiatives",
      icon: "HeartPulse",
      badge: "Student Care"
    },
    {
      id: "technology-innovation",
      number: "03",
      title: "TECHNOLOGY & INNOVATION",
      focus: "Digital Tools & Skill Building",
      summary: "Encouraging students to use technology to solve practical problems and excel in the global digital economy.",
      initiatives: [
        "Hands-on digital skills sessions (coding, design, product)",
        "Technology workshops & hands-on toolkits",
        "Student innovation hackathons & showcase projects",
        "AI awareness, prompt literacy, and responsible tool usage",
        "Digital work opportunities & remote freelance awareness"
      ],
      ctaText: "Explore Innovation",
      icon: "Cpu",
      badge: "Tech Driven"
    },
    {
      id: "skills-opportunities",
      number: "04",
      title: "SKILLS & OPPORTUNITIES",
      focus: "Career & External Growth",
      summary: "Connecting students with opportunities beyond lectures to prepare them for life after campus.",
      initiatives: [
        "Curated internship opportunities & application guidelines",
        "National and international scholarship alerts",
        "Case competitions & hackathon team matching",
        "Practical professional training programmes",
        "Student entrepreneurship grants & business support",
        "Career development resources & resume writing sessions"
      ],
      ctaText: "Explore Opportunities",
      icon: "Briefcase",
      badge: "Career Ready"
    },
    {
      id: "community-unity",
      number: "05",
      title: "COMMUNITY & UNITY",
      focus: "Inter-Department Connection",
      summary: "Building stronger connections between students across departments, faculties, and academic levels.",
      initiatives: [
        "Cross-departmental student networking and forums",
        "Interdepartmental project collaboration hubs",
        "Community impact projects & volunteer drives",
        "Student talent, sports, and creative discovery spotlights",
        "Cross-level peer mentoring (fresher to final year)"
      ],
      ctaText: "Explore Community",
      icon: "Users",
      badge: "United OOU"
    }
  ],
  
  whyMattersStatement: "Students deserve more than information. They deserve access, connection and opportunity.",
  
  whyMattersPillars: [
    {
      title: "Information",
      description: "Students should know where opportunities, deadlines, and useful academic resources exist without gatekeeping.",
      icon: "Info"
    },
    {
      title: "Access",
      description: "Useful opportunities should be easier to discover, verify, and actually apply for regardless of department.",
      icon: "Key"
    },
    {
      title: "Connection",
      description: "Students should have stronger, supportive communities around them to collaborate, learn, and grow together.",
      icon: "Network"
    },
    {
      title: "Action",
      description: "Good ideas should not end in speeches—they should eventually become tangible, lasting, and practical initiatives.",
      icon: "Zap"
    }
  ],
  
  values: [
    {
      id: "clarity",
      title: "CLARITY",
      description: "Making complex information easier to understand and act upon.",
      icon: "Sparkles"
    },
    {
      id: "service",
      title: "SERVICE",
      description: "Putting usefulness, integrity, and student needs before personal recognition.",
      icon: "Hands"
    },
    {
      id: "innovation",
      title: "INNOVATION",
      description: "Using modern technology and creative thinking to solve real everyday problems.",
      icon: "Lightbulb"
    },
    {
      id: "accountability",
      title: "ACCOUNTABILITY",
      description: "Taking responsibility for commitments, feedback, and delivered outcomes.",
      icon: "ShieldCheck"
    },
    {
      id: "growth",
      title: "GROWTH",
      description: "Continuously learning, refining skills, and improving for the community.",
      icon: "TrendingUp"
    },
    {
      id: "community",
      title: "COMMUNITY",
      description: "Creating supportive opportunities for students to learn, build, and thrive together.",
      icon: "UsersRound"
    }
  ],
  
  testimonials: [
    {
      id: "t-1",
      quote: "Sulaiman's dedication to making complex information simple is unmatched. During our departmental work, he always ensured every single student understood what needed to be done.",
      name: "T. Adebayo",
      department: "Faculty of Science",
      level: "300 Level",
      role: "Course Representative",
      isPlaceholder: false
    },
    {
      id: "t-2",
      quote: "He doesn't just talk about leadership; he builds solutions. When tech resources were scarce, he organized peer study notes and guided students through software tools with genuine patience.",
      name: "C. Okonjo",
      department: "Computer Science",
      level: "400 Level",
      role: "Peer Collaborator",
      isPlaceholder: false
    },
    {
      id: "t-3",
      quote: "The Auspicious Era vision addresses the exact things students talk about every day: practical career support, transparent updates, and genuine community unity across levels.",
      name: "I. Mohammed",
      department: "Faculty of Law",
      level: "200 Level",
      role: "Student Volunteer",
      isPlaceholder: false
    },
    {
      id: "t-4",
      quote: "[Verified student testimonial from your faculty will appear here. The Auspicious Era welcomes all voices.]",
      name: "[Student Name Placeholder]",
      department: "[Department Placeholder]",
      level: "[Level Placeholder]",
      role: "Student Member",
      isPlaceholder: true
    }
  ]
};
