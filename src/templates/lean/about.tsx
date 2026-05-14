import { Text } from "@/templates/lean/ui/text";
import { ContentSection } from "@/templates/lean/ui/content-section";
import { FaQuoteLeft } from "react-icons/fa";
import type { About as AboutProps } from "@/types/cv";
import { Separator } from "@/templates/lean/ui/separator";

function About({ description }: AboutProps) {
  if (!description) return null;

  return (
    <>
      <ContentSection className="flex flex-row pt-5 gap-2">
        <FaQuoteLeft className="w-4 h-3 shrink-0" />
        <Text variant="xs" as="p" className="text-[13px] font-normal">
          {description}
        </Text>
      </ContentSection>
      <Separator />
    </>
  );
}

export default About;
