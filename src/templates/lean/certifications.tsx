import { Text } from "@/templates/lean/ui/text";
import { ContentSection } from "@/templates/lean/ui/content-section";
import type { Certification } from "@/types/cv";

interface CertificationsProps {
  certifications: Certification[];
}

function Certifications({ certifications }: CertificationsProps) {
  if (certifications.length === 0) return null;
  return (
    <ContentSection>
      <Text variant="lg" as="h2">
        Certifications
      </Text>
      <div className="flex flex-col gap-1">
        {certifications.map((certification) => (
          <Text as="p" variant="xs">
            {certification.name}
          </Text>
        ))}
      </div>
    </ContentSection>
  );
}

export default Certifications;
