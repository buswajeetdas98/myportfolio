import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  repoLink?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing the key features and technologies used in its development.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  demoLink = "#",
  repoLink = "#",
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border border-zinc-800 bg-zinc-900 text-white hover:border-purple-700 transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-white">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <CardDescription className="text-zinc-300 mb-4">
          {description}
        </CardDescription>

        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-zinc-800 text-purple-400 border-purple-700/50 hover:bg-purple-900/30"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-2 border-t border-zinc-800">
        {demoLink && (
          <Button
            variant="ghost"
            size="sm"
            className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
            asChild
          >
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}

        {repoLink && (
          <Button
            variant="ghost"
            size="sm"
            className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
            asChild
          >
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
