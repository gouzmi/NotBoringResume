import { Text } from "@/templates/lean/ui/text";
import { ContentSection } from "@/templates/lean/ui/content-section";
import type { Language } from "@/types/cv";

function Languages({ languages }: { languages: Language[] }) {
  if (languages.length === 0) return null;
  return (
    <ContentSection>
      <Text variant="lg" as="h2">
        Languages
      </Text>
      <div className="flex flex-col gap-1">
        {languages.map((language) => (
          <Text as="p" variant="xs">
            {language.name} - {language.level}
          </Text>
        ))}
      </div>
    </ContentSection>
  );
}

export default Languages;
