export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a React project with TypeScript and explore the benefits of type safety in your applications.",
    content: `
# Getting Started with React and TypeScript

TypeScript has become an essential tool for modern React development. In this article, we'll explore how to set up a React project with TypeScript and understand why type safety matters.

## Why TypeScript?

TypeScript offers several advantages:
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Improved Documentation**: Types serve as documentation
- **Enhanced Developer Experience**: Better tooling and debugging

## Setting Up the Project

First, create a new React project with TypeScript:

\`\`\`bash
npx create-react-app my-app --template typescript
cd my-app
npm start
\`\`\`

## Basic TypeScript Concepts

Let's explore some fundamental TypeScript concepts in React:

### Props with Types

\`\`\`tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button className={\`btn btn-\${variant}\`} onClick={onClick}>
      {children}
    </button>
  );
};
\`\`\`

### State with Types

\`\`\`tsx
interface User {
  id: number;
  name: string;
  email: string;
}

const UserComponent = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  // Component logic here
};
\`\`\`

## Best Practices

1. **Start with strict mode**: Enable strict TypeScript checking
2. **Use interfaces for props**: Define clear contracts for components
3. **Leverage union types**: Use union types for variant props
4. **Type your hooks**: Always type useState and useEffect properly

## Conclusion

TypeScript enhances the React development experience by providing type safety and better tooling. Start incorporating it into your projects today!
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["React", "TypeScript", "Web Development"],
    slug: "getting-started-react-typescript"
  },
  {
    id: "2", 
    title: "Building a Modern Design System",
    excerpt: "Explore the fundamentals of creating a scalable design system with consistent components and design tokens.",
    content: `
# Building a Modern Design System

A well-crafted design system is the backbone of any scalable application. It ensures consistency, improves developer productivity, and creates a cohesive user experience.

## What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build applications.

## Key Components

### 1. Design Tokens

Design tokens are the visual design atoms of your system:

\`\`\`css
:root {
  --color-primary: hsl(262 90% 50%);
  --color-secondary: hsl(220 14% 96%);
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
}
\`\`\`

### 2. Component Library

Build reusable components with consistent APIs:

\`\`\`tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({ variant, size, children, ...props }: ButtonProps) => {
  return (
    <button 
      className={cn('btn', \`btn-\${variant}\`, \`btn-\${size}\`)}
      {...props}
    >
      {children}
    </button>
  );
};
\`\`\`

### 3. Documentation

Document your components with examples and usage guidelines.

## Tools and Technologies

- **Storybook**: Component development and documentation
- **Tailwind CSS**: Utility-first CSS framework
- **Figma**: Design tool integration
- **TypeScript**: Type safety for component APIs

## Implementation Strategy

1. **Start Small**: Begin with basic components (Button, Input, Card)
2. **Define Tokens**: Establish your color palette and spacing scale
3. **Build Systematically**: Create components following consistent patterns
4. **Document Everything**: Provide clear usage examples
5. **Test Thoroughly**: Ensure components work across different contexts

## Conclusion

A design system is an investment that pays dividends in consistency, productivity, and user experience. Start building yours today!
    `,
    date: "2024-01-08",
    readTime: "7 min read", 
    tags: ["Design Systems", "CSS", "Components"],
    slug: "building-modern-design-system"
  },
  {
    id: "3",
    title: "The Future of Web Development",
    excerpt: "Discussing emerging trends and technologies that are shaping the future of web development in 2024 and beyond.",
    content: `
# The Future of Web Development

Web development continues to evolve at a rapid pace. Let's explore the trends and technologies that are shaping our industry's future.

## Emerging Trends

### 1. Server Components

React Server Components are changing how we think about rendering:

\`\`\`tsx
// Server Component
async function BlogPost({ id }: { id: string }) {
  const post = await fetchPost(id);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

### 2. Edge Computing

Moving computation closer to users for better performance:

- Reduced latency
- Improved user experience
- Better scalability

### 3. AI-Powered Development

AI tools are transforming how we write code:

- Code completion and generation
- Automated testing
- Bug detection and fixes

## Technologies to Watch

### WebAssembly (WASM)

Bringing near-native performance to the web:

\`\`\`rust
#[wasm_bindgen]
pub fn calculate_fibonacci(n: u32) -> u32 {
    if n <= 1 {
        return n;
    }
    calculate_fibonacci(n - 1) + calculate_fibonacci(n - 2)
}
\`\`\`

### Progressive Web Apps (PWAs)

Bridging the gap between web and native apps:

- Offline functionality
- Push notifications
- App-like experience

## Best Practices for the Future

1. **Performance First**: Optimize for Core Web Vitals
2. **Accessibility**: Build inclusive experiences
3. **Sustainability**: Consider environmental impact
4. **Security**: Implement security by design

## Conclusion

The future of web development is exciting and full of possibilities. Stay curious, keep learning, and embrace change!
    `,
    date: "2024-01-01",
    readTime: "6 min read",
    tags: ["Future Tech", "Web Development", "Trends"],
    slug: "future-of-web-development"
  }
];