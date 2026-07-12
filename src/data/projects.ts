export type ProjectCategory =
  | "Website Development"
  | "Graphic Design"
  | "Interactive Application"
  | "UX/UI Design"
  | "Motion Graphic";

export type MockupType = "laptop" | "mobile" | "browser" | "gallery" | "video";

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  year?: string;
  shortDescription: string;
  overview: string;
  role: string;
  projectType: string;
  audienceLabel: string;
  audience: string;
  tools: string[];
  mockupType: MockupType;
  thumbnail: string;
  images?: string[];
  ratingImages?: string[];
  video?: string;
  videos?: string[];
  featured?: boolean;
  featuredRank?: number;
  sections: {
    heading: string;
    body: string;
  }[];
}

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Website Development",
  "Graphic Design",
  "Interactive Application",
  "UX/UI Design",
  "Motion Graphic"
];

export const projects: Project[] = [
  {
    title: "Bahasa Melayu E-Learning Hub Web Application",
    slug: "bahasa-melayu-elearning-hub",
    category: "Website Development",
    year: "2025",
    shortDescription:
      "An interactive platform designed for beginners to learn Bahasa Melayu through multimedia content, quizzes, and assignments.",
    overview:
      "Bahasa Melayu E-Learning Hub supports self-paced language learning with tailored experiences for students, teachers, and web administrators. The platform brings course materials, assignments, performance records, and forums into one accessible learning environment.",
    role: "Leader, UX/UI Designer, Developer",
    projectType: "Group / Academic",
    audienceLabel: "Target Users",
    audience: "Students, Teachers, and Administrators",
    tools: ["C#", "HTML", "CSS", "JavaScript", "SQL Server"],
    mockupType: "video",
    thumbnail: "/assets/images/portfolio/lms-mockup-2.png",
    video: "/assets/videos/portfolio/LMS_Demo.mp4",
    videos: [
      "/assets/videos/portfolio/LMS_Demo2.mp4",
      "/assets/videos/portfolio/LMS_Demo3.mp4",
      "/assets/videos/portfolio/LMS_Demo4.mp4",
      "/assets/videos/portfolio/LMS_Demo5.mp4"
    ],
    sections: [
      {
        heading: "Key Features",
        body: "Course material and assignment management, student performance record access, and forum-based communication between user roles."
      },
      {
        heading: "Challenge",
        body: "Multiple team members developed components from a general briefing before a clear system architecture was fully established, which made integration difficult."
      },
      {
        heading: "Solution",
        body: "I merged the coding concepts into a finalized project direction, refined the code, and adjusted the data flow so each user role worked properly within one connected system."
      }
    ]
  },
  {
    title: "Top G's Travel Management Website",
    slug: "top-gs-travel-management",
    category: "Website Development",
    year: "2023",
    shortDescription: "A web-based platform that allows individuals and groups to book complete travel packages.",
    overview:
      "Top G's Travel Management Website lets users browse and book travel packages that include flights, hotels, and guided tours. The system includes online booking, secure payment processing, and booking history tracking for a smoother travel planning experience.",
    role: "Full-stack Developer, Database Designer",
    projectType: "Group / Academic",
    audienceLabel: "Target Users",
    audience: "Travellers, Public Audiences",
    tools: ["PHP", "HTML", "CSS", "JavaScript", "SQL Server"],
    mockupType: "video",
    thumbnail: "/assets/images/topg-video-poster.png",
    video: "/assets/videos/portfolio/TopG's_Demo.mp4",
    videos: [
      "/assets/videos/portfolio/TopG's_Demo2.mp4",
      "/assets/videos/portfolio/TopG's_Demo3.mp4",
      "/assets/videos/portfolio/TopG's_Demo4.mp4",
      "/assets/videos/portfolio/TopG's_Demo5.mp4"
    ],
    sections: [
      {
        heading: "Key Features",
        body: "Users can browse interesting travel packages, purchase selected packages, and view their purchase history."
      },
      {
        heading: "Challenge",
        body: "The system was developed under intense time constraints while I was still building familiarity with backend PHP development."
      },
      {
        heading: "Solution",
        body: "I studied PHP concepts through documentation and tutorials, then applied the learning directly to the system so each feature could be completed and tested quickly."
      }
    ]
  },
  {
    title: "Bonslay Event Brochure Design",
    slug: "bonslay-event-brochure-design",
    category: "Graphic Design",
    year: "2023",
    shortDescription:
      "A brochure created to promote a bonsai plant exhibition to the public and the bonsai enthusiast community.",
    overview:
      "Bonslay Event Brochure Design promotes a bonsai plant exhibition with event details, schedules, and exhibit previews. The visual direction uses minimal structure with earthy brown and green tones to connect the layout to the natural bonsai theme.",
    role: "Designer, Event Planner",
    projectType: "Individual / Academic",
    audienceLabel: "Target Audience",
    audience: "General public, Bonsai enthusiasts",
    tools: ["Adobe Photoshop"],
    mockupType: "gallery",
    thumbnail: "/assets/images/portfolio/brochure-mockup.jpg",
    images: [
      "/assets/images/portfolio/brochure-mockup.jpg",
      "/assets/images/portfolio/brochure-front-real.png",
      "/assets/images/portfolio/brochure-back.png"
    ],
    sections: [
      {
        heading: "Design Highlights",
        body: "The brochure uses a clear visual hierarchy, consistent text sizing, and colors that represent nature while keeping event information easy to scan."
      }
    ]
  },
  {
    title: "Marketing Graphic Design",
    slug: "marketing-graphic-design",
    category: "Graphic Design",
    year: "2024",
    shortDescription: "Promotional material designs for showcasing and promoting furniture products.",
    overview:
      "This internship project involved creating promotional materials for client campaigns, including event posters, social graphics, product brochures, email banners, flyers, and catalogs. The work followed supervisor direction while keeping a modern, minimal, and luxurious feel.",
    role: "Graphic Designer, Marketing",
    projectType: "Individual / Internship",
    audienceLabel: "Target Audience",
    audience: "Potential clients, Furniture seekers, The general public",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva"],
    mockupType: "gallery",
    thumbnail: "/assets/images/portfolio/marketing-mockup.png",
    images: [
      "/assets/images/portfolio/MarketingDesign_1.png",
      "/assets/images/portfolio/MarketingDesign_2.jpg",
      "/assets/images/portfolio/MarketingDesign_3.jpg",
      "/assets/images/portfolio/MarketingDesign_4.jpg",
      "/assets/images/portfolio/MarketingDesign_5.jpg",
      "/assets/images/portfolio/MarketingDesign_6.jpg",
      "/assets/images/portfolio/MarketingDesign_7.png",
      "/assets/images/portfolio/MarketingDesign_8.png"
    ],
    sections: [
      {
        heading: "Design Highlights",
        body: "The designs emphasize clear hierarchy, image-led product presentation, and colors that complement the furniture or specific campaign theme."
      }
    ]
  },
  {
    title: "Da Driving Decency Interactive Animation",
    slug: "da-driving-decency-interactive-animation",
    category: "Interactive Application",
    year: "2024",
    shortDescription: "A storyline interactive animation created to educate audiences about driving and traffic rules.",
    overview:
      "Da Driving Decency is an Adobe Animate and ActionScript 3.0 interactive animation that teaches driving and traffic rules through selectable story moments, drag-and-drop puzzles, and clickable objects.",
    role: "Leader, UX/UI Designer, Developer",
    projectType: "Group / Academic",
    audienceLabel: "Target Audience",
    audience: "Teen drivers, Future license applicants, Road users",
    tools: ["Adobe Animate", "ActionScript 3.0"],
    mockupType: "video",
    thumbnail: "/assets/images/portfolio/interactive-animation-mockup-real.png",
    video: "/assets/videos/portfolio/Interactive Animation_MockUp.mp4",
    videos: [
      "/assets/videos/portfolio/Interactive Animation_Demo2.mp4",
      "/assets/videos/portfolio/Interactive Animation_Demo3.mp4"
    ],
    sections: [
      {
        heading: "Key Features & Design Highlights",
        body: "The project uses selectable storylines, reusable vector art assets, tweened animation, and vibrant color to keep the learning experience engaging."
      },
      {
        heading: "Challenge",
        body: "Animation scenes were divided between two group members, making it difficult to maintain one consistent visual direction."
      },
      {
        heading: "Solution",
        body: "We discussed the art direction thoroughly, created clear storyboards, and reused shared visual assets so the final animation felt cohesive."
      }
    ]
  },
  {
    title: "Fumme Mobile E-Commerce Web Application",
    slug: "fumee-mobile-ecommerce-web-application",
    category: "Website Development",
    year: "2026",
    shortDescription: "A mobile-based e-commerce web application for luxury fragrance and home aroma products.",
    overview:
      "Fumee is a niche e-commerce platform for luxury fragrance and home aroma products, including body perfumes, room sprays, reed diffusers, and scented candles. The project focuses on elegant mobile-first UI, multimedia product presentation, and a smooth shopping journey.",
    role: "UX/UI Designer, Developer",
    projectType: "Individual / Academic",
    audienceLabel: "Target Users",
    audience: "Perfume enthusiasts, Public audiences, Administrators",
    tools: ["C#", "HTML", "CSS", "JavaScript", "SQL Server"],
    mockupType: "video",
    thumbnail: "",
    video: "/assets/videos/portfolio/MWM_Demo1.mp4",
    videos: [
      "/assets/videos/portfolio/MWM_Demo2.mp4",
      "/assets/videos/portfolio/MWM_Demo3.mp4",
      "/assets/videos/portfolio/MWM_Demo4.mp4"
    ],
    featured: true,
    featuredRank: 2,
    sections: [
      {
        heading: "Key Features",
        body: "Product listing and product detail pages, Cart and checkout flows with discounts, CRUD management for product discount codes and user accounts."
      }
    ]
  },
  {
    title: "Knightmare Quest Interactive Platformer Game",
    slug: "knightmare-quest-interactive-platformer-game",
    category: "Interactive Application",
    year: "2026",
    shortDescription: "An interactive platformer game with an old castle theme.",
    overview:
      "Knightmare Quest is an interactive platformer game where players control the main character through castle-themed levels, avoid traps, and reach the exit door to progress.",
    role: "Leader, Level Designer, Backend Coding Developer",
    projectType: "Group / Academic",
    audienceLabel: "Target Users",
    audience: "Young adults aged 16 to 30",
    tools: ["Adobe Animate", "ActionScript 3.0"],
    mockupType: "gallery",
    thumbnail: "/assets/images/portfolio/ipg-mockup.png",
    videos: ["/assets/videos/portfolio/IPG_Demo1.mp4"],
    sections: [
      {
        heading: "Key Features",
        body: "Arrow-key movement, progressively increasing level complexity, and eight connected levels."
      },
      {
        heading: "Challenge",
        body: "Frontend assets from different group members arrived in inconsistent formats, which made project integration difficult."
      },
      {
        heading: "Solution",
        body: "I standardized the asset format and merged the files into one working project with connected progression and consistent interaction."
      }
    ]
  },
  {
    title: "CaloTR Calorie Tracking Application Prototype",
    slug: "calotr-calorie-tracking-application-prototype",
    category: "UX/UI Design",
    year: "2026",
    shortDescription: "A prototype of a calorie tracking application focused on mobile-sized user experience.",
    overview:
      "CaloTR is a mobile app prototype for AI-powered food recognition. The concept estimates calories from food scans, deducts them from a daily goal, and suggests meals to support healthier decision making.",
    role: "UX/UI Designer, Researcher",
    projectType: "Individual / Academic",
    audienceLabel: "Target Audience",
    audience: "General public, Fitness enthusiasts",
    tools: ["Figma"],
    mockupType: "video",
    thumbnail: "",
    images: [
      "/assets/images/portfolio/calotr-persona-1.png",
      "/assets/images/portfolio/calotr-persona-2.png",
      "/assets/images/portfolio/calotr-empathy-map-1.png",
      "/assets/images/portfolio/calotr-empathy-map-2.png"
    ],
    video: "/assets/videos/portfolio/CaloTR_Demo1.mp4",
    featured: true,
    featuredRank: 6,
    sections: [
      {
        heading: "Design Highlights",
        body: "The prototype uses a clear hierarchy, consistent text and layout patterns, and visual charts to make numerical calorie data easier to understand."
      }
    ]
  },
  {
    title: "HabitBloom Habit Tracking Application",
    slug: "habitbloom-habit-tracking-application",
    category: "Website Development",
    year: "2026",
    shortDescription: "A mobile-based habit tracking and motivational tool for young adults.",
    overview:
      "HabitBloom is an ASP.NET Web Forms application that supports daily habit tracking, streaks, points, levels, badges, personal and group goals, friends, groups, real-time messaging, and admin moderation. The system also includes category, badge, level, user, and analytics management through a mobile-responsive interface.",
    role: "UX/UI Designer, Developer, Test Conductor",
    projectType: "Individual / Final Year Project",
    audienceLabel: "Target Users",
    audience: "Youths aged 18 to 30, Administrators",
    tools: ["C#", "HTML", "CSS", "JavaScript", "SQL Server"],
    mockupType: "video",
    thumbnail: "",
    video: "/assets/videos/portfolio/HabitBloom_Demo1.mp4",
    videos: [
      "/assets/videos/portfolio/HabitBloom_Demo2.mp4",
      "/assets/videos/portfolio/HabitBloom_Demo3.mp4",
      "/assets/videos/portfolio/HabitBloom_Demo4.mp4",
      "/assets/videos/portfolio/HabitBloom_Demo5.mp4",
      "/assets/videos/portfolio/HabitBloom_Demo6.mp4",
      "/assets/videos/portfolio/HabitBloom_Demo7.mp4",
      "/assets/videos/portfolio/HabitBloom_Demo8.mp4",
      "/assets/videos/portfolio/HabitBloom_Demo9.mp4",
      "/assets/videos/portfolio/HabitBloom_Demo10.mp4",
      "/assets/videos/portfolio/HabitBloom_Demo11.mp4"
    ],
    featured: true,
    featuredRank: 1,
    sections: [
      {
        heading: "Key Features",
        body: "Personal habit tracking, Points XP levels, Goal management, Group goals, Leaderboards, Badges, Friends, Social features, Admin dashboard."
      }
    ]
  },
  {
    title: "JimBro Co Mobile Fitness Application",
    slug: "jimbro-co-mobile-fitness-application",
    category: "Interactive Application",
    year: "2026",
    shortDescription:
      "An interactive e-learning application that educates users about proper workout techniques and muscle group training.",
    overview:
      "JimBro Co is an interactive multimedia fitness application for workout techniques and muscle group training. It combines animated demonstrations, muscle highlights, text explanations, and quizzes that require users to score at least 70%.",
    role: "UX/UI Designer, Developer, Test Conductor",
    projectType: "Individual / Academic",
    audienceLabel: "Target Audience",
    audience: "Fitness enthusiasts aged 16 to 25",
    tools: ["Adobe Animate", "ActionScript 3.0"],
    mockupType: "video",
    thumbnail: "",
    video: "/assets/videos/portfolio/MobileFitnessApp_Demo1.mp4",
    videos: [
      "/assets/videos/portfolio/MobileFitnessApp_Demo2.mp4",
      "/assets/videos/portfolio/MobileFitnessApp_Demo3.mp4"
    ],
    featured: true,
    featuredRank: 5,
    sections: [
      {
        heading: "Key Features & Design Highlights",
        body: "Mobile-focused swipe and drag interactions, Self-developed animations, Quizzes and gamified learning supports."
      },
      {
        heading: "Challenge",
        body: "The first laptop-planned version did not fully consider mobile tapping areas, making some interactions difficult on smaller screens."
      },
      {
        heading: "Solution",
        body: "After UAT, I adjusted the second version for mobile interaction with larger tap areas and clearer swipe-based motion."
      }
    ]
  },
  {
    title: "Layar Jiwa Logo Animation",
    slug: "layar-jiwa-logo-animation",
    category: "Motion Graphic",
    year: "2026",
    shortDescription: "A simple static logo transformed into a subtle, luxurious logo animation.",
    overview:
      "Layar Jiwa Logo Animation was a freelance motion graphic project where a client requested a static logo to be transformed into a refined animated version. The brief, scope, and deliverables were discussed before production, and the first draft was accepted with minimal adjustment.",
    role: "Motion Graphic Designer, Editor",
    projectType: "Freelance",
    audienceLabel: "Target Audience",
    audience: "Viewers of Layar Jiwa Films",
    tools: ["Adobe After Effects"],
    mockupType: "video",
    thumbnail: "/assets/images/portfolio/layar-jiwa-ref-logo.jpeg",
    images: [
      "/assets/images/portfolio/layar-jiwa-ref-logo.jpeg"
    ],
    ratingImages: [
      "/assets/images/portfolio/layar-jiwa-evaluation-1.jpg",
      "/assets/images/portfolio/layar-jiwa-evaluation-2.jpg",
      "/assets/images/portfolio/layar-jiwa-evaluation-3.jpg",
      "/assets/images/portfolio/layar-jiwa-evaluation-4.jpg"
    ],
    video: "/assets/videos/portfolio/layar-jiwa-mockup.mp4",
    videos: ["/assets/videos/portfolio/layar-jiwa-final.mp4"],
    sections: [
      {
        heading: "Design Highlights",
        body: "Minimalistic motion with separated entrances for each logo component to create a subtle and premium feel."
      },
      {
        heading: "Client Rating",
        body: "Client feedback and evaluation screenshots are included below."
      }
    ]
  },
  {
    title: "Photobooth Frame Placeholder Design Teaching",
    slug: "photobooth-frame-placeholder-design-teaching",
    category: "Graphic Design",
    year: "2026",
    shortDescription: "A photobooth frame strip design used to guide a client through a hands-on learning session.",
    overview:
      "This freelance Photoshop lesson helped a client move from beginner to intermediate practice through an online demo and follow-along session. The final photobooth frame strip acted as proof of comprehension and applied learning.",
    role: "Teacher, Graphic Designer, Learning Material Preparator",
    projectType: "Freelance",
    audienceLabel: "Target Audience",
    audience: "Graphic design student",
    tools: ["Adobe Photoshop", "Claude"],
    mockupType: "gallery",
    thumbnail: "/assets/images/portfolio/photoshop-demo.jpg",
    images: [
      "/assets/images/portfolio/photoshop-demo.jpg",
      "/assets/images/portfolio/photoshop-learning-material-1.jpg",
      "/assets/images/portfolio/photoshop-learning-material-2.jpg"
    ],
    ratingImages: [
      "/assets/images/portfolio/photoshop-evaluation-1.jpg",
      "/assets/images/portfolio/photoshop-evaluation-2.jpg",
      "/assets/images/portfolio/photoshop-evaluation-3.jpg",
      "/assets/images/portfolio/photoshop-evaluation-4.jpg"
    ],
    featured: true,
    featuredRank: 7,
    sections: [
      {
        heading: "Design Highlights",
        body: "The learning outcome uses a minimalistic frame design while introducing multiple graphic design techniques."
      },
      {
        heading: "Client Rating",
        body: "Client feedback and evaluation screenshots are included below."
      }
    ]
  },
  {
    title: "Agensi Perkerjaan Kaler Website",
    slug: "agensi-perkerjaan-kaler-website",
    category: "Website Development",
    year: "2025",
    shortDescription: "A recruitment agency website for businesses and job seekers to connect.",
    overview:
      "Agensi Pekerjaan Kaler Website presents recruitment solutions backed by Malaysia Ministry of Human Resources licensing and more than two decades of industry experience. The site supports business clients and job seekers through a WordPress-based platform.",
    role: "UX/UI Designer, Developer",
    projectType: "Individual / Internship",
    audienceLabel: "Target Users",
    audience: "Recruiters and jobseekers",
    tools: ["WordPress"],
    mockupType: "gallery",
    thumbnail: "/assets/images/portfolio/kaler-mockup.png",
    images: [
      "/assets/images/portfolio/kaler-mockup.png",
      "/assets/images/portfolio/kaler-mockup-1.jpg",
      "/assets/images/portfolio/kaler-mockup-2.jpg"
    ],
    ratingImages: [
      "/assets/images/portfolio/kaler-evaluation-1.jpg",
      "/assets/images/portfolio/kaler-evaluation-2.jpg"
    ],
    sections: [
      {
        heading: "Live Website",
        body: "https://www.kalerjobs.com/"
      },
      {
        heading: "Key Features",
        body: "Resume and profile upload, company profile and job posting, and application accept or reject workflows."
      },
      {
        heading: "Client Rating",
        body: "Client evaluation screenshots are included below."
      }
    ]
  },
  {
    title: "Premier Language Centre Website",
    slug: "premier-language-centre-website",
    category: "Website Development",
    year: "2025",
    shortDescription: "A website for Premier Language Centre focused on courses and services.",
    overview:
      "Premier Language Centre Website presents a private language institute in KL Sentral, including intensive English courses, IELTS and MUET preparation, and university placement support for local and international learners.",
    role: "UX/UI Designer, Developer",
    projectType: "Individual / Internship",
    audienceLabel: "Target Users",
    audience: "Language students, international students, and school leavers",
    tools: ["WordPress"],
    mockupType: "gallery",
    thumbnail: "/assets/images/portfolio/premier-mockup.png",
    images: [
      "/assets/images/portfolio/premier-mockup.png",
      "/assets/images/portfolio/premier-mockup-1.jpg",
      "/assets/images/portfolio/premier-mockup-2.jpg"
    ],
    ratingImages: [
      "/assets/images/portfolio/premier-evaluation-1.jpg",
      "/assets/images/portfolio/premier-evaluation-2.jpg"
    ],
    featured: true,
    featuredRank: 4,
    sections: [
      {
        heading: "Live Website",
        body: "https://premier.edu.my/"
      },
      {
        heading: "Key Features",
        body: "Course and service showcases, brand identity presentation, and a contact form for collecting leads."
      },
      {
        heading: "Client Rating",
        body: "Client evaluation screenshots are included below."
      }
    ]
  }
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
