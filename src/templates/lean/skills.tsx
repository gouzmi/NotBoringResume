import { Text } from "@/templates/lean/ui/text";
import { ContentSection } from "@/templates/lean/ui/content-section";
import type { Skill } from "@/types/cv";

interface SkillsProps {
  Skills: Skill[];
}

function Skills({ Skills }: SkillsProps) {
  if (Skills.length === 0) {
    return null;
  }
  return (
    <ContentSection>
      <Text variant="lg" as="h2">
        Skills
      </Text>
      <div className="flex flex-col gap-1">
        {Skills.map((skill) => (
          <div key={skill.categoryName}>
            <Text as="p" variant="sm" className="font-normal">
              {skill.categoryName}
            </Text>
            <Text as="p" variant="xs">
              {skill.skills.join(", ")}
            </Text>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}

export default Skills;
