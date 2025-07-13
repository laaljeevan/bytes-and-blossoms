import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PortfolioProject } from "@/data/portfolioProjects";

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full">
      <CardHeader className="space-y-4">
        {project.featured && (
          <Badge className="w-fit bg-primary/10 text-primary border-primary/20">
            Featured
          </Badge>
        )}
        
        <h3 className="text-xl font-semibold font-heading group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </CardHeader>
      
      <CardContent className="space-y-4 flex flex-col h-full">
        <p className="text-muted-foreground leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 pt-4">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          
          {project.liveUrl && (
            <Button size="sm" asChild>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}