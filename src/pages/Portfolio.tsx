import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Layout } from "@/components/Layout";
import { portfolioProjects } from "@/data/portfolioProjects";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
    { id: "other", label: "Other" },
  ];

  const filteredProjects = filter === "all" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === filter);

  const featuredProjects = portfolioProjects.filter(project => project.featured);

  return (
    <Layout>
      <div className="min-h-screen pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-foreground">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my projects, experiments, and creative work.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold font-heading mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              size="sm"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
        </div>
      </div>
    </Layout>
  );
}