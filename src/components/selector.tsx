import type { CVData } from "@/types/cv";
import type { Dispatch, SetStateAction } from "react";
import ProfileInput from "@/components/selector/ProfileInput";
import ContactInput from "@/components/selector/ContactInput";
import SkillsInput from "@/components/selector/SkillsInput";
import CertificationsInput from "@/components/selector/CertificationsInput";
import LanguagesInput from "@/components/selector/LanguagesInput";
import AboutInput from "@/components/selector/AboutInput";
import ExperiencesInput from "@/components/selector/ExperiencesInput";
import EducationInput from "@/components/selector/EducationInput";
import ProjectsInput from "@/components/selector/ProjectsInput";
import { Button } from "@/components/ui/button";
import { CollapsibleSection } from "@/components/ui/content-section";
import { downloadYaml, uploadYaml } from "@/lib/utils";

interface SelectorProps {
  initialCv: CVData;
  cv: CVData;
  setCv: Dispatch<SetStateAction<CVData>>;
  printPdf: () => void;
}

function Selector({ initialCv, cv, setCv, printPdf }: SelectorProps) {
  return (
    <section className="w-[30vw] p-4 flex flex-col gap-4 overflow-y-auto bg-background-secondary">
      <div className="flex gap-2">
        <Button
          size="lg"
          variant="outline"
          onClick={printPdf}
          className="px-4 py-2 bg-primary text-background"
        >
          Generate to PDF
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => setCv(initialCv)}
          className="px-4 py-2 bg-primary text-background"
        >
          Reset
        </Button>
      </div>
      <div className="flex gap-2">
        <Button
          size="lg"
          variant="outline"
          onClick={() => downloadYaml(cv)}
          className="px-4 py-2 bg-primary text-background"
        >
          Download YAML
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => uploadYaml<CVData>().then(setCv)}
          className="px-4 py-2 bg-primary text-background"
        >
          Upload YAML
        </Button>
      </div>

      {/* Profile */}
      <CollapsibleSection title="Profile" defaultOpen={false}>
        <ProfileInput
          profile={cv.profile}
          onChange={(profile) => setCv((prev) => ({ ...prev, profile }))}
        />
      </CollapsibleSection>

      {/* Contact */}
      <CollapsibleSection title="Contact" defaultOpen={false}>
        <ContactInput
          contact={cv.contact}
          onChange={(contact) => setCv((prev) => ({ ...prev, contact }))}
        />
      </CollapsibleSection>

      {/* Skills */}
      <CollapsibleSection title="Skills" defaultOpen={false}>
        <SkillsInput
          skills={cv.skills}
          onChange={(skills) => setCv((prev) => ({ ...prev, skills }))}
        />
      </CollapsibleSection>

      {/* Certifications */}
      <CollapsibleSection title="Certifications" defaultOpen={false}>
        <CertificationsInput
          certifications={cv.certifications}
          onChange={(certifications) =>
            setCv((prev) => ({ ...prev, certifications }))
          }
        />
      </CollapsibleSection>

      {/* Languages */}
      <CollapsibleSection title="Languages" defaultOpen={false}>
        <LanguagesInput
          languages={cv.languages}
          onChange={(languages) => setCv((prev) => ({ ...prev, languages }))}
        />
      </CollapsibleSection>

      {/* About */}
      <CollapsibleSection title="About" defaultOpen={false}>
        <AboutInput
          about={cv.about}
          onChange={(about) => setCv((prev) => ({ ...prev, about }))}
        />
      </CollapsibleSection>

      {/* Experiences */}
      <CollapsibleSection title="Experiences" defaultOpen={false}>
        <ExperiencesInput
          experiences={cv.experiences}
          onChange={(experiences) =>
            setCv((prev) => ({ ...prev, experiences }))
          }
        />
      </CollapsibleSection>

      {/* Education */}
      <CollapsibleSection title="Education" defaultOpen={false}>
        <EducationInput
          education={cv.education}
          onChange={(education) => setCv((prev) => ({ ...prev, education }))}
        />
      </CollapsibleSection>

      {/* Projects */}
      <CollapsibleSection title="Projects" defaultOpen={false}>
        <ProjectsInput
          projects={cv.projects}
          onChange={(projects) => setCv((prev) => ({ ...prev, projects }))}
        />
      </CollapsibleSection>
    </section>
  );
}

export default Selector;
