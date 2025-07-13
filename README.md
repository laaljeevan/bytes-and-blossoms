# Your Personal Blog & Portfolio

A modern, responsive blog and portfolio website built with React, TypeScript, and Tailwind CSS. Perfect for developers, designers, and creators who want to showcase their work and share their thoughts.

## 🚀 Features

- **Modern Design**: Clean, professional design with beautiful typography and smooth animations
- **Responsive**: Looks great on desktop, tablet, and mobile devices
- **Blog System**: Write and publish articles with markdown support
- **Portfolio Showcase**: Display your projects with descriptions, tech stacks, and links
- **Dark/Light Mode**: Toggle between themes (built-in support)
- **GitHub Pages Ready**: Easy deployment to GitHub Pages
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Fast loading and excellent user experience

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui components
- **Routing**: React Router
- **Icons**: Lucide React
- **Markdown**: React Markdown for blog posts
- **Build Tool**: Vite
- **Deployment**: GitHub Pages (automated with GitHub Actions)

## 📋 Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/your-blog-portfolio.git
   cd your-blog-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## ✏️ Customization

### Personal Information

1. **Update site configuration** in `src/data/siteConfig.ts`:
   - Change your name, title, description
   - Update social media links
   - Modify contact information

2. **Update the navigation** in `src/components/Navigation.tsx`:
   - Change the logo/name in the navigation bar

3. **Customize the hero section** in `src/components/Hero.tsx`:
   - Update your name, tagline, and description
   - Modify social media links

### Adding Blog Posts

1. **Edit** `src/data/blogPosts.ts`
2. **Add new blog post objects** with the following structure:
   ```typescript
   {
     id: "unique-id",
     title: "Your Post Title",
     excerpt: "Brief description of your post",
     content: "Full markdown content here",
     date: "YYYY-MM-DD",
     readTime: "X min read",
     tags: ["tag1", "tag2"],
     slug: "url-friendly-slug"
   }
   ```

### Adding Portfolio Projects

1. **Edit** `src/data/portfolioProjects.ts`
2. **Add new project objects**:
   ```typescript
   {
     id: "unique-id",
     title: "Project Name",
     description: "Brief description",
     longDescription: "Detailed description",
     technologies: ["React", "TypeScript", "etc"],
     githubUrl: "https://github.com/...",
     liveUrl: "https://your-project.com",
     featured: true, // Show in featured section
     category: "web" // web, mobile, design, other
   }
   ```

### Design Customization

The design system is defined in:
- `src/index.css` - Color palette, gradients, shadows
- `tailwind.config.ts` - Extended Tailwind configuration

**Color Scheme**: Edit the CSS variables in `src/index.css` to change colors:
```css
:root {
  --primary: 262 90% 50%; /* Your brand color */
  --hero-gradient: linear-gradient(...); /* Hero background */
}
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source
   - The deployment will happen automatically on every push to main

3. **Update base URL** (if needed):
   - If your repository name is not your username, update the base URL in `vite.config.ts`

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting platform of choice

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn components
│   ├── Navigation.tsx  # Main navigation
│   ├── Hero.tsx        # Homepage hero section
│   ├── BlogCard.tsx    # Blog post preview card
│   └── ProjectCard.tsx # Portfolio project card
├── data/               # Content and configuration
│   ├── blogPosts.ts    # Blog posts data
│   ├── portfolioProjects.ts # Portfolio projects
│   └── siteConfig.ts   # Site configuration
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── Blog.tsx        # Blog listing page
│   ├── BlogPost.tsx    # Individual blog post
│   └── Portfolio.tsx   # Portfolio page
└── lib/                # Utility functions
```

## 🤝 Contributing

This is a personal blog/portfolio template, but if you find bugs or have suggestions for improvements, feel free to open an issue or submit a pull request!

## 📄 License

MIT License - feel free to use this template for your own blog and portfolio!

---

**Happy blogging and showcasing your work!** 🎉
