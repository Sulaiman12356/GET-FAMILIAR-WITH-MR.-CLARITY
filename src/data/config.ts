import { SiteConfig } from '../types';
import { DEFAULT_PREFILLED_MESSAGE, DEFAULT_WHATSAPP_NUMBER } from '../utils/whatsapp';

export const initialConfig: SiteConfig = {
  name: "Onifade Sulaiman",
  nickname: "Mr. Clarity",
  brand: "The Auspicious Era",
  institution: "Olabisi Onabanjo University",
  
  whatsAppNumber: DEFAULT_WHATSAPP_NUMBER,
  whatsAppDefaultMessage: DEFAULT_PREFILLED_MESSAGE,
  personalWebsiteUrl: "", // Configurable URL

  heroHeadlineTop: "A NEW CHAPTER.",
  heroHeadlineHighlight: "A LASTING LEGACY.",
  
  heroBio1: "My name is Onifade Sulaiman, popularly known as Mr. Clarity. I am a Computer Science student, student leader, digital strategist and community builder passionate about helping students find clarity, discover opportunities and create meaningful progress.",
  heroBio2: "The Auspicious Era represents an intentional chapter of real service, practical ideas, and genuine impact built around what we as students can experience, access, and achieve together.",
  
  beyondNameSubtitle: "Before any title, there is identity. Before any office, there is a clear purpose.",
  whoIsIntro: "Onifade Sulaiman, popularly known as Mr. Clarity, is a Computer Science student at Olabisi Onabanjo University whose journey has been shaped by academics, student representation, digital innovation, entrepreneurship, and hands-on community service.",
  whoIsPhilosophy: "The name \"Mr. Clarity\" comes from a simple realization: when you give students clear information and honest direction, they make confident decisions and build better futures.",
  
  identityTags: [
    "Computer Science Student",
    "Student Leader",
    "Digital Strategist",
    "Technology Enthusiast",
    "Community Builder"
  ],

  storyHeadline: "I DIDN'T START WITH A TITLE. I STARTED WITH A DESIRE TO HELP.",
  storyQuote: "A position ends. A legacy can continue.",
  storyParagraphs: [
    "My journey through university has not been a straight line.",
    "I have had to learn, adapt, take responsibility, make mistakes, serve people, build skills and continuously figure out what direction I want my life to take.",
    "Along the way, leadership became one of the ways I could contribute to the people around me.",
    "But leadership also taught me something important: a position is temporary. What you build, what you teach, the people you help and the opportunities you create can last much longer."
  ],

  leadershipPillars: [
    {
      id: "class-rep",
      title: "CLASS REPRESENTATION",
      subtitle: "Grassroots Student Voice",
      description: "Experience representing students, communicating information and helping coordinate student concerns directly with academic staff and faculty.",
      icon: "Users",
      highlights: ["Open student communication", "Course coordination support", "Empathetic problem solving"]
    },
    {
      id: "gen-sec",
      title: "GENERAL SECRETARY",
      subtitle: "Executive Administration",
      description: "Experience in administration, communication, coordination, documentation and student leadership at the departmental and faculty level.",
      icon: "FileText",
      highlights: ["Transparent student reporting", "Inter-department coordination", "Operational efficiency"]
    },
    {
      id: "community-building",
      title: "COMMUNITY BUILDING",
      subtitle: "Peer Empowerment",
      description: "Working with students, sharing useful information and creating initiatives designed around student needs, study circles, and mutual growth.",
      icon: "HeartHandshake",
      highlights: ["Academic peer circles", "Mentorship sessions", "Accessible support channels"]
    },
    {
      id: "digital-tech",
      title: "DIGITAL & TECHNOLOGY PROJECTS",
      subtitle: "Practical Innovation",
      description: "Building digital ideas and platforms aimed at improving access to information, opportunities and services for university students.",
      icon: "Laptop",
      highlights: ["Student digital resource hubs", "Skill-sharing sessions", "Tech opportunity alerts"]
    }
  ],

  turningPointHeadline: "LEADERSHIP SHOULD NOT END WITH A POSITION.",
  turningPointParagraphs: [
    "The more I interacted with students, the more I understood that many challenges are not caused by a lack of capable students.",
    "Sometimes, students simply lack access to information, opportunities, support, connections and platforms where their ideas can be heard.",
    "That realization shaped the idea behind The Legacy Tenure."
  ],

  legacyTenureHeadline: "MORE THAN A TITLE. SOMETHING STUDENTS CAN ACTUALLY BENEFIT FROM.",
  legacyTenureIntro: "The Legacy Tenure represents a vision for practical student-focused initiatives that can improve access to information, opportunities, skills, technology, welfare support and stronger student communities.",
  
  legacyInitiatives: [
    {
      id: "01",
      number: "01",
      title: "ACADEMIC SUPPORT",
      summary: "Making useful academic information, resources, peer support and learning opportunities easier for students to discover.",
      areas: [
        "Academic resources & repositories",
        "Peer learning circles",
        "Exam preparation support",
        "Academic opportunities & scholarships",
        "Useful, timely academic information"
      ],
      icon: "GraduationCap"
    },
    {
      id: "02",
      number: "02",
      title: "STUDENT WELFARE",
      summary: "Creating stronger channels for students to communicate concerns, discover available support and feel better connected to their student community.",
      areas: [
        "Student feedback channels",
        "Welfare awareness & outreach",
        "Campus support channels",
        "Active student engagement"
      ],
      icon: "Heart"
    },
    {
      id: "03",
      number: "03",
      title: "TECHNOLOGY & INNOVATION",
      summary: "Encouraging students to use technology, AI and digital tools to solve real problems and create new possibilities.",
      areas: [
        "Practical digital skills",
        "AI awareness & responsible use",
        "Technology workshops",
        "Student innovation projects",
        "Digital work opportunities"
      ],
      icon: "Cpu"
    },
    {
      id: "04",
      number: "04",
      title: "SKILLS & OPPORTUNITIES",
      summary: "Helping students discover opportunities beyond the classroom and develop skills that can become useful beyond university.",
      areas: [
        "Internship alerts & prep",
        "Scholarship opportunities",
        "Competitions & hackathons",
        "Vocational & tech training",
        "Student entrepreneurship",
        "Career development guides"
      ],
      icon: "Briefcase"
    },
    {
      id: "05",
      number: "05",
      title: "COMMUNITY & UNITY",
      summary: "Creating stronger connections between students, departments and communities through collaboration and shared opportunities.",
      areas: [
        "Student networking forums",
        "Cross-department peer support",
        "Student talent discovery",
        "Interdepartmental collaboration",
        "Community impact projects"
      ],
      icon: "Network"
    }
  ],

  humanSideHeadline: "BECAUSE EVERY STUDENT HAS A STORY.",
  humanSideLines: [
    "Behind every matric number is a person.",
    "A student trying to graduate.",
    "Someone trying to find an internship.",
    "Someone learning a skill.",
    "Someone building a business.",
    "Someone looking for an opportunity.",
    "Someone simply trying to figure life out."
  ],
  humanSideConclusion: "Leadership should remember the person behind the number.",

  valuesHeadline: "THE VALUES BEHIND THE VISION",
  values: [
    {
      id: "clarity",
      title: "CLARITY",
      description: "Make information easier to understand.",
      icon: "Sparkles"
    },
    {
      id: "service",
      title: "SERVICE",
      description: "Create value before seeking recognition.",
      icon: "HeartHandshake"
    },
    {
      id: "accountability",
      title: "ACCOUNTABILITY",
      description: "Take responsibility for commitments.",
      icon: "ShieldCheck"
    },
    {
      id: "innovation",
      title: "INNOVATION",
      description: "Use technology to solve practical problems.",
      icon: "Lightbulb"
    },
    {
      id: "opportunity",
      title: "OPPORTUNITY",
      description: "Help students discover possibilities beyond the classroom.",
      icon: "Compass"
    },
    {
      id: "community",
      title: "COMMUNITY",
      description: "Build with people, not just for people.",
      icon: "Users"
    }
  ],

  whyEraHeadline: "WHY \"THE AUSPICIOUS ERA\"?",
  whyEraParagraphs: [
    "An auspicious era represents a period filled with promise, opportunity and the possibility of meaningful progress.",
    "For me, The Auspicious Era is not simply a name. It represents a chapter.",
    "A chapter where ideas should become action.",
    "Where students should discover more opportunities.",
    "Where technology can become a tool for progress.",
    "Where leadership should be measured by what people experience, not simply by what a title says."
  ],
  whyEraCallout: "THIS IS THE ERA WE CHOOSE TO BUILD.",

  philosophyQuote: "CLARITY CREATES DIRECTION. DIRECTION CREATES PROGRESS.",
  philosophyAuthor: "Onifade Sulaiman, Mr. Clarity",

  socials: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    x: "https://x.com"
  }
};
