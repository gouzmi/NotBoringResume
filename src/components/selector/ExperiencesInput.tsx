import type { Experience } from "@/types/cv";
import { AddButton, DeleteButton } from "./Buttons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ExperiencesInputProps {
  experiences: Experience[];
  onChange: (experiences: Experience[]) => void;
}

function ExperiencesInput({ experiences, onChange }: ExperiencesInputProps) {
  const updateExperience = (index: number, updated: Experience) => {
    const newExperiences = [...experiences];
    newExperiences[index] = updated;
    onChange(newExperiences);
  };

  return (
    <div className="flex flex-col gap-3 pl-2 border-l">
      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div>
            <Label className="text-xs text-gray-500">Company</Label>
            <Input
              type="text"
              value={experience.company}
              onChange={(e) =>
                updateExperience(index, { ...experience, company: e.target.value })
              }
            />
            <DeleteButton
              onClick={() => onChange(experiences.filter((_, i) => i !== index))}
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Location</Label>
            <Input
              type="text"
              value={experience.location || ""}
              onChange={(e) =>
                updateExperience(index, { ...experience, location: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Position</Label>
            <Input
              type="text"
              value={experience.position}
              onChange={(e) =>
                updateExperience(index, { ...experience, position: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Year</Label>
            <Input
              type="text"
              value={experience.year}
              onChange={(e) =>
                updateExperience(index, { ...experience, year: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Description</Label>
            <Textarea
              value={experience.description}
              onChange={(e) =>
                updateExperience(index, { ...experience, description: e.target.value })
              }
            />
          </div>
        </div>
      ))}
      <AddButton
        onClick={() =>
          onChange([
            ...experiences,
            { company: "", position: "", year: "", description: "" },
          ])
        }
      />
    </div>
  );
}

export default ExperiencesInput;
