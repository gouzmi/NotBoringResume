import { Text } from "@/templates/lean/ui/text";
import { ContentSection } from "@/templates/lean/ui/content-section";
import { MarkdownText } from "@/templates/lean/ui/markdown-text";
import type { Experience } from "@/types/cv";

function Experiences({ experiences }: { experiences: Experience[] }) {
  if (experiences.length === 0) return null;
  return (
    <ContentSection>
      <Text variant="lg" as="h2">
        Experiences
      </Text>
      <div className="flex flex-col gap-2">
        {experiences.map((experience) => (
          <div key={experience.company + experience.year}>
            <div className="flex justify-between">
              <div className="flex flex-row gap-2">
                <Text
                  as="p"
                  variant="sm"
                  className="font-semibold content-center"
                >
                  {experience.position} - {experience.company}
                </Text>
                <Text as="p" variant="xs" className="content-center italic">
                   {experience.location}
                </Text>
              </div>
              <Text as="p" variant="xs" className="content-center">
                {experience.year}
              </Text>
            </div>
            <MarkdownText>{experience.description}</MarkdownText>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}

export default Experiences;
