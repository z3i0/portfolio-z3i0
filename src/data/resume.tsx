import { Icons } from "@/components/icons";
import {
  HomeIcon,
  Box,
  Layers,
  Network,
  ShieldCheck,
  Server,
} from "lucide-react";
import { Php } from "@/components/ui/svgs/php";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Django } from "@/components/ui/svgs/django";
import { Javascript } from "@/components/ui/svgs/javascript";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Vue } from "@/components/ui/svgs/vue";
import { Html5 } from "@/components/ui/svgs/html5";
import { Css3 } from "@/components/ui/svgs/css3";
import { Bootstrap } from "@/components/ui/svgs/bootstrap";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Redis } from "@/components/ui/svgs/redis";
import { Git } from "@/components/ui/svgs/git";
import { Postman } from "@/components/ui/svgs/postman";
import { Composer } from "@/components/ui/svgs/composer";
import { Linux } from "@/components/ui/svgs/linux";

export const DATA = {
  name: "Ziad Hany",
  initials: "ZH",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  githubUsername: "z3i0",
  description:
    "Software engineer and innovator passionate about modern technology and developing impactful technical solutions.",
  summary:
    "I’m a full-stack developer and [BIS student](/#education) passionate about [building modern web applications](/#projects) and turning ideas into real-world products. I enjoy working across both [frontend and backend development](/#skills), exploring new technologies, and constantly improving my skills. I’m always looking for [opportunities to learn and build](/#contact) while tackling [challenging projects](/#projects) that push me to grow.",
  avatarUrl: "/me.jpg",
  skills: [
    // Backend
    { name: "PHP", category: "Backend", icon: Php },
    { name: "Laravel", category: "Backend", icon: Laravel },
    { name: "Node.js", category: "Backend", icon: Nodejs },
    { name: "Python", category: "Backend", icon: Python },
    { name: "Django", category: "Backend", icon: Django },
    { name: "OOP", category: "Backend", icon: Box },
    { name: "MVC Architecture", category: "Backend", icon: Layers },

    // Frontend
    { name: "Next.js", category: "Frontend", icon: Icons.nextjs },
    { name: "React.js", category: "Frontend", icon: ReactLight },
    { name: "Vue.js", category: "Frontend", icon: Vue },
    { name: "JavaScript", category: "Frontend", icon: Javascript },
    { name: "Tailwind CSS", category: "Frontend", icon: Icons.tailwindcss },
    { name: "Bootstrap", category: "Frontend", icon: Bootstrap },
    { name: "HTML5", category: "Frontend", icon: Html5 },
    { name: "CSS3", category: "Frontend", icon: Css3 },

    // Databases
    { name: "PostgreSQL", category: "Databases", icon: Postgresql },
    { name: "MySQL", category: "Databases", icon: Mysql },
    { name: "MongoDB", category: "Databases", icon: Mongodb },
    { name: "Redis", category: "Databases", icon: Redis },

    // APIs & Security
    { name: "RESTful APIs", category: "APIs & Auth", icon: Network },
    { name: "Authentication (JWT / Sanctum)", category: "APIs & Auth", icon: ShieldCheck },

    // Tools & DevOps
    { name: "Git", category: "Tools & DevOps", icon: Git },
    { name: "GitHub", category: "Tools & DevOps", icon: Icons.github },
    { name: "Postman", category: "Tools & DevOps", icon: Postman },
    { name: "Composer", category: "Tools & DevOps", icon: Composer },
    { name: "Linux", category: "Tools & DevOps", icon: Linux },
    { name: "VPS Deployment", category: "Tools & DevOps", icon: Server },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "zedohany@outlook.com",
    tel: "+201205210034",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/z3i0-github",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/z3i0-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:zedohany@outlook.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance (ERP System Company)",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Freelance ERP System Developer",
      logoUrl: "",
      start: "Jan 2026",
      end: "Present",
      description:
        "• Engineered and deployed custom ERP features using Laravel and Python, expanding core operational capabilities.\n• Boosted client revenue by 10% through UI/UX optimizations and streamlined checkout/inventory workflows.\n• Managed the end-to-end lifecycle from technical requirements gathering to remote deployment and maintenance.",
    },
    {
      company: "3D Printing Company",
      href: "#",
      badges: [],
      location: "On-site",
      title: "Operations Manager",
      logoUrl: "/orek.png",
      start: "Oct 2025",
      end: "Present",
      description:
        "• Managed daily production workflows and operational logistics, ensuring high-quality output and on-time delivery.\n• Coordinated cross-functional teams and internal communications, developing strong organizational and client-facing processes.\n• Streamlined operations and integrated modern technical solutions to enhance overall workflow efficiency.",
    },
    {
      company: "Laravel Edu",
      href: "#",
      badges: [],
      location: "Egypt",
      title: "Full Stack Web Developer",
      logoUrl: "",
      start: "2022",
      end: "2023",
      description:
        "• Contributed to building an Egyptian educational platform from scratch using Laravel, PHP, and modern web tools.\n• Developed end-to-end features including course management, student dashboards, authentication, and payment workflows.\n• Designed robust database schemas and RESTful APIs to ensure a seamless interactive learning experience.",
    },
  ],
  education: [
    {
      school: "Cairo Higher Institute",
      href: "https://chi-eg.net/",
      degree: "Bachelor's Degree in Business Information Systems (BIS)",
      logoUrl: "/chi.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "High School",
      href: "#",
      degree: "General Secondary Certificate",
      logoUrl: "",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Whisk",
      href: "https://whisk-nu.vercel.app",
      dates: "September 2026",
      active: true,
      description:
        "A modern web application for exploring global culinary recipes, built with Next.js 16 and React 19. Features interactive preparation steps, seamless recipe search, and easy saving of favorite meals.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Motion",
        "shadcn/ui",
        "TheMealDB API",
      ],
      links: [
        {
          type: "Website",
          href: "https://whisk-z3i0.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/z3i0/whisk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/whisk.gif",
      video: "",
    },
    {
      title: "GlotWeave",
      href: "https://github.com/z3i0/GlotWeave",
      dates: "July 2026",
      active: true,
      description:
        "Built a Windows desktop assistant providing real-time, hotkey-driven translation with in-place text replacement across any application. Features multi-provider routing across Google, DeepL, OpenAI, Gemini, and local Ollama LLMs, plus voice-to-text translation and searchable history.",
      technologies: [
        "Python",
        "PySide6",
        "OpenAI",
        "Gemini",
        "DeepL",
        "Ollama",
        "Speech-to-Text",
        "Win32 API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/z3i0/GlotWeave",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/glotweave.png",
      video: "",
    },
    {
      title: "PrintMan",
      href: "https://github.com/z3i0/PrintMan",
      dates: "August 2026",
      active: true,
      description:
        "Developed a Windows desktop agent that connects Laravel ERP and POS systems to local thermal printers via real-time WebSockets (Laravel Reverb). Implements direct HTML-to-image receipt rendering and raw ESC/POS printing over TCP with DPAPI encryption and offline SQLite logging.",
      technologies: [
        "Python",
        "PySide6",
        "Laravel Reverb",
        "WebSockets",
        "ESC/POS",
        "Playwright",
        "SQLite",
        "Windows DPAPI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/z3i0/PrintMan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/printman.jpg",
      video: "",
    },
    {
      title: "Adam's Dance Studio",
      href: "https://adamsdancestudio.vercel.app/",
      dates: "February 2026",
      active: true,
      description:
        "A modern, interactive landing page and showcase website for a premier dance academy, built with Vue 3 and Tailwind CSS. Features dynamic course showcases (Ballet, Hip Hop, Bachata), a responsive media gallery, student testimonials, and smooth scroll navigation.",
      technologies: [
        "Vue.js",
        "Vite",
        "TailwindCSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://adamsdancestudio.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/z3i0/adamsdancestudio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/adamsdancestudio.png",
      video: "",
    },
    {
      title: "Nexora",
      href: "https://nexorax.xyz/",
      dates: "2025 - Present",
      active: true,
      description:
        "A comprehensive Discord bot and server management dashboard serving 380+ servers and 160K+ users. Features automated moderation, custom voice channels, server economy systems, and an interactive real-time web control panel.",
      technologies: [
        "Laravel",
        "Inertia.js",
        "Vue.js",
        "TailwindCSS",
        "Discord API",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://nexorax.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nexora.png",
      video: "",
    },
  ],
  certificates: [
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      image: "/umich.svg",
      dates: "Jul 2026",
      credentialId: "I7I0Y15O0YGV",
      description:
        "Comprehensive training in foundational Python programming, algorithmic logic, data structures, conditional execution, and function architecture.",
      skills: ["Python", "Programming Basics", "Data Structures", "Problem Solving"],
      link: "https://www.coursera.org/account/accomplishments/records/I7I0Y15O0YGV",
    },
    {
      title: "Questions, Present Progressive and Future Tenses",
      issuer: "UC Irvine",
      image: "/ucirvine.svg",
      dates: "Aug 2026",
      credentialId: "VJGGV0R1ATPV",
      description:
        "Advanced study of English grammar, syntax structuring, question dynamics, and future/progressive tenses for clear professional and technical communication.",
      skills: ["English Communication", "Grammar", "Professional Writing"],
      link: "https://www.coursera.org/account/accomplishments/records/VJGGV0R1ATPV",
    },
    {
      title: "Word Forms and Simple Present Tense",
      issuer: "UC Irvine",
      image: "/ucirvine.svg",
      dates: "Jul 2026",
      credentialId: "CSIPKJSJH5AZ",
      description:
        "In-depth analysis of word formation, morphological patterns, grammatical agreement, and precise present tense usage for global collaboration.",
      skills: ["English Proficiency", "Grammar & Syntax", "Vocabulary"],
      link: "https://www.coursera.org/account/accomplishments/records/CSIPKJSJH5AZ",
    },
  ],
} as const;

export const DATA_AR = {
  ...DATA,
  name: "زياد هاني",
  initials: "زه",
  location: "سان فرانسيسكو، كاليفورنيا",
  description:
    "مهندس برمجيات ومبتكر. شغوف ببناء الأنظمة البرمجية وتطوير الحلول التقنية ومساعدة الآخرين.",
  summary:
    "أنا مطور ويب متكامل و[طالب في تخصص نظم معلومات الأعمال (BIS)](/#education)، شغوف [ببناء تطبيقات ويب حديثة](/#projects) وتحويل الأفكار إلى منتجات حقيقية. أستمتع بالعمل في [تطوير الواجهات الأمامية والخلفية (Full Stack)](/#skills)، واستكشاف التقنيات الجديدة، وتطوير مهاراتي باستمرار. وأسعى دائمًا إلى [اقتناص فرص جديدة للتعلم والبناء](/#contact)، والعمل على [مشاريع مميزة](/#projects) تدفعني للتطور باستمرار.",
  work: [
    {
      company: "Freelance (ERP System Company)",
      href: "#",
      badges: [],
      location: "عن بُعد",
      title: "مطور أنظمة ERP مستقل",
      logoUrl: "",
      start: "يناير 2026",
      end: "حتى الآن",
      description:
        "• تطوير وبرمجة ميزات مخصصة لأنظمة ERP باستخدام Laravel وPython لتوسيع القدرات التشغيلية الأساسية.\n• زيادة إيرادات العملاء بنسبة 10% من خلال تحسينات واجهة وتجربة المستخدم (UI/UX) وتبسيط مسارات الدفع والمخزون.\n• إدارة دورة حياة المشروع بالكامل من جمع المتطلبات التقنية حتى النشر والصيانة السحابية عن بُعد.",
    },
    {
      company: "3D Printing Company",
      href: "#",
      badges: [],
      location: "حضوريًا",
      title: "مدير عمليات",
      logoUrl: "/orek.png",
      start: "أكتوبر 2025",
      end: "حتى الآن",
      description:
        "• إدارة العمليات التشغيلية اليومية وسير خطوط الإنتاج والطلبات لضمان أعلى معايير الجودة والالتزام بالمواعيد.\n• تنسيق المهام بين فرق العمل والتواصل الداخلي، وتطوير آليات تنظيمية متقدمة وسلسة في التعامل مع العملاء.\n• تحسين كفاءة العمليات وتوظيف الحلول التقنية الحديثة لأتمتة مسارات العمل ورفع الإنتاجية.",
    },
    {
      company: "Laravel Edu",
      href: "#",
      badges: [],
      location: "مصر",
      title: "مطور ويب متكامل (Full Stack)",
      logoUrl: "",
      start: "2022",
      end: "2023",
      description:
        "• المشاركة في بناء وتأسيس منصة تعليمية مصرية من الصفر باستخدام Laravel وPHP وأحدث تقنيات الويب.\n• تطوير مزايا كاملة (Full Stack) تشمل إدارة الدورات التعليمية، لوحات تحكم الطلاب، وبوابات الدفع والتسجيل.\n• تصميم قواعد البيانات وبناء واجهات برمجة التطبيقات (RESTful APIs) لتقديم تجربة تعليمية تفاعلية وسريعة.",
    },
  ],
  education: [
    {
      school: "معهد القاهرة العالي",
      href: "https://chi-eg.net/",
      degree: "بكالوريوس نظم معلومات الأعمال (BIS)",
      logoUrl: "/chi.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "الثانوية العامة",
      href: "#",
      degree: "شهادة إتمام الثانوية العامة",
      logoUrl: "",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Whisk",
      href: "https://whisk-nu.vercel.app",
      dates: "سبتمبر 2026",
      active: true,
      description:
        "منصة ويب حديثة وسريعة لاستكشاف وصفات الطهي العالمية، مبنية باستخدام Next.js 16 وReact 19. تتيح تصفح آلاف الوصفات، متابعة خطوات التحضير التفاعلية، وحفظ الأكلات المفضلة للرجوع إليها في أي وقت.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Motion",
        "shadcn/ui",
        "TheMealDB API",
      ],
      links: [
        {
          type: "الموقع",
          href: "https://whisk-nu.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "الكود",
          href: "https://github.com/z3i0/whisk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/whisk.gif",
      video: "",
    },
    {
      title: "GlotWeave",
      href: "https://github.com/z3i0/GlotWeave",
      dates: "يوليو 2026",
      active: true,
      description:
        "تطبيق لسطح المكتب لنظام Windows يوفر ترجمة فورية وسلسة عبر اختصارات لوحة المفاتيح مع استبدال النص تلقائيًا داخل أي تطبيق. يدعم مزودات ذكاء اصطناعي متعددة تشمل OpenAI وGemini وDeepL ونماذج Ollama المحلية، مع ميزة الإدخال الصوتي وسجل ترجمة قابل للبحث والتصدير.",
      technologies: [
        "Python",
        "PySide6",
        "OpenAI",
        "Gemini",
        "DeepL",
        "Ollama",
        "Speech-to-Text",
        "Win32 API",
      ],
      links: [
        {
          type: "الكود",
          href: "https://github.com/z3i0/GlotWeave",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/glotweave.png",
      video: "",
    },
    {
      title: "PrintMan",
      href: "https://github.com/z3i0/PrintMan",
      dates: "أغسطس 2026",
      active: true,
      description:
        "برنامج لسطح المكتب لنظام Windows يربط أنظمة ERP ونقاط البيع المبنية بـ Laravel بالطابعات الحرارية المحلية عبر WebSockets لحظية (Laravel Reverb). يُصيّر إيصالات HTML ويطبعها فوريًا بأوامر ESC/POS عبر TCP مع تشفير DPAPI وسجل طباعة محلي عبر SQLite.",
      technologies: [
        "Python",
        "PySide6",
        "Laravel Reverb",
        "WebSockets",
        "ESC/POS",
        "Playwright",
        "SQLite",
        "Windows DPAPI",
      ],
      links: [
        {
          type: "الكود",
          href: "https://github.com/z3i0/PrintMan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/printman.jpg",
      video: "",
    },
    {
      title: "Adam's Dance Studio",
      href: "https://adamsdancestudio.vercel.app/",
      dates: "فبراير 2026",
      active: true,
      description:
        "موقع تعريفي وتفاعلي حديث لأكاديمية رقص وفنون استعراضية، مبني باستخدام Vue 3 وTailwind CSS. يتضمن استعراضًا تفاعليًا للبرامج التدريبية (الباليه، والهيب هوب، والباتشاتا)، ومعرض وسائط متجاوبًا، وقسمًا لآراء المتدربين مع تجربة تنقل سلسة.",
      technologies: [
        "Vue.js",
        "Vite",
        "TailwindCSS",
        "JavaScript",
      ],
      links: [
        {
          type: "الموقع",
          href: "https://adamsdancestudio.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "الكود",
          href: "https://github.com/z3i0/adamsdancestudio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/adamsdancestudio.png",
      video: "",
    },
    {
      title: "Nexora",
      href: "https://nexorax.xyz/",
      dates: "2025 - حتى الآن",
      active: true,
      description:
        "لوحة تحكم وبوت ديسكورد متكامل لإدارة الخوادم، يخدم أكثر من 380 خادمًا و160 ألف مستخدم. يتيح أتمتة الإشراف، وإدارة القنوات الصوتية المؤقتة، والأنظمة الاقتصادية، مع لوحة تحكم تفاعلية متطورة لإدارة جميع الإعدادات لحظيًا.",
      technologies: [
        "Laravel",
        "Inertia.js",
        "Vue.js",
        "TailwindCSS",
        "Discord API",
        "MySQL",
      ],
      links: [
        {
          type: "الموقع",
          href: "https://nexorax.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nexora.png",
      video: "",
    },
  ],
  certificates: [
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "جامعة ميشيغان",
      image: "/umich.svg",
      dates: "يوليو 2026",
      credentialId: "I7I0Y15O0YGV",
      description:
        "تدريب شامل على أساسيات لغة Python، والتفكير الخوارزمي، وهياكل البيانات، وبناء الدوال، والتحكم في تدفق تنفيذ البرامج.",
      skills: ["Python", "أساسيات البرمجة", "هياكل البيانات", "حل المشكلات"],
      link: "https://www.coursera.org/account/accomplishments/records/I7I0Y15O0YGV",
    },
    {
      title: "Questions, Present Progressive and Future Tenses",
      issuer: "جامعة كاليفورنيا، إيرفاين",
      image: "/ucirvine.svg",
      dates: "أغسطس 2026",
      credentialId: "VJGGV0R1ATPV",
      description:
        "دراسة متقدمة في قواعد اللغة الإنجليزية، صياغة الأسئلة، واستخدامات أزمنة المضارع المستمر والمستقبل للتواصل التقني والمهني الفعّال.",
      skills: ["التواصل بالإنجليزية", "قواعد اللغة", "الكتابة المهنية"],
      link: "https://www.coursera.org/account/accomplishments/records/VJGGV0R1ATPV",
    },
    {
      title: "Word Forms and Simple Present Tense",
      issuer: "جامعة كاليفورنيا، إيرفاين",
      image: "/ucirvine.svg",
      dates: "يوليو 2026",
      credentialId: "CSIPKJSJH5AZ",
      description:
        "إتقان أشكال الكلمات وبنيتها المورفولوجية، وتراكيب الجمل وصياغة المضارع البسيط للتحدث والتوثيق البرمجي السليم.",
      skills: ["إتقان الإنجليزية", "بنية الجمل والقواعد", "المصطلحات"],
      link: "https://www.coursera.org/account/accomplishments/records/CSIPKJSJH5AZ",
    },
  ],
};

export type ResumeData = typeof DATA | typeof DATA_AR;

export function getResumeData(lang: "en" | "ar" = "en") {
  return lang === "ar" ? DATA_AR : DATA;
}

