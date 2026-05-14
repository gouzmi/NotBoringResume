import type { Education } from "@/types/cv";
import { AddButton, DeleteButton } from "./Buttons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface EducationInputProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

function EducationInput({ education, onChange }: EducationInputProps) {
  const updateEducation = (index: number, updated: Education) => {
    const newEducation = [...education];
    newEducation[index] = updated;
    onChange(newEducation);
  };

  return (
    <div className="flex flex-col gap-3 pl-2 border-l">
      {education.map((edu, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div>
            <Label className="text-xs text-gray-500">School/Institution</Label>
            <Input
              type="text"
              value={edu.name}
              onChange={(e) =>
                updateEducation(index, { ...edu, name: e.target.value })
              }
            />
            <DeleteButton
              onClick={() => onChange(education.filter((_, i) => i !== index))}
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Location</Label>
            <Input
              type="text"
              value={edu.location}
              onChange={(e) =>
                updateEducation(index, { ...edu, location: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Diploma/Degree</Label>
            <Input
              type="text"
              value={edu.diplomaName}
              onChange={(e) =>
                updateEducation(index, { ...edu, diplomaName: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Year</Label>
            <Input
              type="text"
              value={edu.year}
              onChange={(e) =>
                updateEducation(index, { ...edu, year: e.target.value })
              }
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Description</Label>
            <Textarea
              value={edu.description || ""}
              onChange={(e) =>
                updateEducation(index, { ...edu, description: e.target.value })
              }
            />
          </div>
        </div>
      ))}
      <AddButton
        onClick={() =>
          onChange([
            ...education,
            { name: "", location: "", diplomaName: "", year: "" },
          ])
        }
      />
    </div>
  );
}

export default EducationInput;
