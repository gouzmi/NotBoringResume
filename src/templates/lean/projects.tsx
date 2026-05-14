import { Text } from "@/templates/lean/ui/text";
import { ContentSection } from "@/templates/lean/ui/content-section";
import { MarkdownText } from "@/templates/lean/ui/markdown-text";
import type { Project } from "@/types/cv";

function Projects({ projects }: {projects: Project[]}) {
  if (projects.length === 0) return null;
  return (
    <ContentSection>
      <Text variant="lg" as="h2">
        Projects
      </Text>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <div key={project.name + project.year}>
            <div className="flex justify-between">
              <Text as="p" variant="sm" className="font-semibold content-center">
                {project.name}
              </Text>
              <Text as="p" variant="xs" className="content-center">
                {project.year}
              </Text>
            </div>
            <MarkdownText>{project.description}</MarkdownText>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}

export default Projects;
