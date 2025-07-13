export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'other';
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI and robust backend.",
    longDescription: "Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The frontend uses React with TypeScript for type safety, while the backend leverages Node.js with Express and MongoDB for data persistence. Implemented features like real-time inventory tracking, order management, and responsive design for mobile users.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce.netlify.app",
    featured: true,
    category: "web"
  },
  {
    id: "2", 
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team features.",
    longDescription: "Developed a modern task management application that allows teams to collaborate effectively. Features include drag-and-drop task boards, real-time updates using WebSockets, user roles and permissions, file attachments, and deadline tracking. The app uses React for the frontend with a clean, intuitive interface, and Firebase for backend services including authentication and real-time database.",
    technologies: ["React", "Firebase", "Material-UI", "WebSockets", "PWA"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-taskmanager.vercel.app",
    featured: true,
    category: "web"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A beautiful weather app with location-based forecasts and interactive maps.",
    longDescription: "Created a comprehensive weather dashboard that provides current conditions, 7-day forecasts, and interactive weather maps. The app features geolocation support, favorite locations, weather alerts, and beautiful data visualizations. Built with modern web technologies including React, integrated with multiple weather APIs for accurate data, and designed with a focus on user experience and accessibility.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation", "CSS Modules"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather.github.io",
    featured: false,
    category: "web"
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and blog posts.",
    longDescription: "Designed and developed a personal portfolio website that serves as both a showcase for projects and a platform for blogging. The site features a modern, clean design with smooth animations, responsive layout, and optimized performance. Built with React and TypeScript, styled with Tailwind CSS, and deployed on GitHub Pages for easy hosting and updates.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourusername.github.io/portfolio",
    featured: false,
    category: "web"
  },
  {
    id: "5",
    title: "API Documentation Tool",
    description: "A tool for automatically generating beautiful API documentation from code.",
    longDescription: "Built a developer tool that automatically generates comprehensive API documentation from code comments and schemas. The tool supports multiple programming languages, generates interactive examples, and creates beautiful, searchable documentation websites. Features include real-time preview, customizable themes, and integration with popular development workflows.",
    technologies: ["Node.js", "TypeScript", "React", "Express", "Swagger", "Docker"],
    githubUrl: "https://github.com/yourusername/api-docs-generator",
    featured: true,
    category: "other"
  },
  {
    id: "6",
    title: "Mobile Banking UI",
    description: "UI/UX design for a modern mobile banking application.",
    longDescription: "Designed a complete user interface for a mobile banking application focusing on security, accessibility, and user experience. The design includes account overview, transaction history, money transfers, bill payments, and budget tracking features. Created detailed wireframes, high-fidelity mockups, and interactive prototypes to demonstrate user flows and interactions.",
    technologies: ["Figma", "Sketch", "Principle", "InVision", "Adobe Creative Suite"],
    featured: false,
    category: "design"
  }
];