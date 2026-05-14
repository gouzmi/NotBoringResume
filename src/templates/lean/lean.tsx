import Profile from "@/templates/lean/profile";
import Contact from "@/templates/lean/contact";
import Skills from "@/templates/lean/skills";
import Certifications from "@/templates/lean/certifications";
import Languages from "@/templates/lean/languages";
import About from "@/templates/lean/about";
import Experiences from "@/templates/lean/experiences";
import Education from "@/templates/lean/education";
import Projects from "@/templates/lean/projects";
import type { CVData } from "@/types/cv";
import profilImage from "@/assets/profil.jpeg";

interface LeanProps {
  CVData: CVData;
}

function Lean({ CVData }: LeanProps) {
  return (
    <>
      <div id="side" className="bg-background-secondary basis-[29%]">
        <Profile
          image={CVData.profile.image ? CVData.profile.image : profilImage}
          name={CVData.profile.name}
          position={CVData.profile.position}
        />
        <Contact
          mail={CVData.contact.mail}
          city={CVData.contact.city}
          linkedin={CVData.contact.linkedin}
          github={CVData.contact.github}
          researchgate={CVData.contact.researchgate}
        />
        <Skills Skills={CVData.skills} />
        <Certifications certifications={CVData.certifications} />
        <Languages languages={CVData.languages} />
      </div>
      <div id="body" className="flex-1">
        <About {...CVData.about} />
        <Experiences experiences={CVData.experiences} />
        <Education education={CVData.education} />
        <Projects projects={CVData.projects} />
      </div>
    </>
  );
}

export default Lean;
