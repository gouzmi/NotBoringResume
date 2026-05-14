import {
  FaCity,
  FaAddressBook,
  FaLinkedin,
  FaGithub,
  FaResearchgate,
} from "react-icons/fa";
import { Text } from "@/templates/lean/ui/text";
import { ContentSection } from "@/templates/lean/ui/content-section";
import type { Contact as ContactProps } from "@/types/cv";

function Contact({ mail, city, linkedin, github, researchgate }: ContactProps) {
  return (
    <ContentSection>
      <Text variant="lg" as="h2">
        Contact
      </Text>
      <div className="flex flex-col">
        {mail && (
          <div className="flex flex-row gap-1.5">
            <FaAddressBook className="w-3 h-3 shrink-0 relative top-1" />
            <Text as="span" variant="xs">
              {mail}
            </Text>
          </div>
        )}
        {city && (
          <div className="flex flex-row gap-1.5">
            <FaCity className="w-3 h-3 shrink-0 relative top-0.75" />
            <Text as="span" variant="xs">
              {city}
            </Text>
          </div>
        )}
        {linkedin && (
          <a
            href={linkedin.url ?? undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1.5"
          >
            <FaLinkedin className="w-3 h-3 shrink-0 relative top-0.75" />
            <Text as="span" variant="xs">
              {linkedin.title}
            </Text>
          </a>
        )}
        {github && (
          <a
            href={github.url ?? undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1.5"
          >
            <FaGithub className="w-3 h-3 shrink-0 relative top-0.75" />
            <Text as="span" variant="xs">
              {github.title}
            </Text>
          </a>
        )}
        {researchgate && (
          <a
            href={researchgate.url ?? undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1.5"
          >
            <FaResearchgate className="w-3 h-3 shrink-0 relative top-0.75" />
            <Text as="span" variant="xs">
              {researchgate.title}
            </Text>
          </a>
        )}
      </div>
    </ContentSection>
  );
}

export default Contact;
