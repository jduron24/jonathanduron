import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "[PLACEHOLDER] A selection of things I built, tuned, and cared enough to write down."
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="space-y-12 pb-20 pt-10 md:pt-16">
      <SectionHeading
        eyebrow=""
        title="Selected builds"
        description=""
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
