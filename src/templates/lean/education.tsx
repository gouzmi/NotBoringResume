import { Text } from "@/templates/lean/ui/text";
import { ContentSection } from "@/templates/lean/ui/content-section";
import { MarkdownText } from "@/templates/lean/ui/markdown-text";
import type { Education as EducationProps } from "@/types/cv";

function Education({ education }: { education: EducationProps[] }) {
  if (education.length === 0) return null;
  return (
    <ContentSection>
      <Text variant="lg" as="h2">
        Education
      </Text>
      <div className="flex flex-col gap-2">
        {education.map((education) => (
          <div key={education.name + education.year}>
            <div className="flex justify-between">
              <div className="flex flex-row">
                <Text
                  as="p"
                  variant="sm"
                  className="font-semibold content-center"
                >
                  {education.name}
                </Text>
                <Text as="p" variant="xs" className="content-center">
                  , {education.location}
                </Text>
              </div>
              <Text as="p" variant="xs" className="content-center">
                {education.year}
              </Text>
            </div>
            <Text as="p" variant="xxs" className="italic">
              {education.diplomaName}
            </Text>
            {education.description && (
              <MarkdownText className="text-[10px]">
                {education.description}
              </MarkdownText>
            )}
          </div>
        ))}
      </div>
    </ContentSection>
  );
}

export default Education;
