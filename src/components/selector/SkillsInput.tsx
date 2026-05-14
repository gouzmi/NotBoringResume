import type { Skill } from "@/types/cv";
import { AddButton, DeleteButton } from "./Buttons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SkillsInputProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

function SkillsInput({ skills, onChange }: SkillsInputProps) {
  const updateSkill = (index: number, updated: Skill) => {
    const newSkills = [...skills];
    newSkills[index] = updated;
    onChange(newSkills);
  };

  return (
    <div className="flex flex-col gap-3 pl-2 border-l">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div>
            <Label className="text-xs text-gray-500">Category</Label>
            <Input
              type="text"
              value={skill.categoryName}
              onChange={(e) =>
                updateSkill(index, { ...skill, categoryName: e.target.value })
              }
            />
            <DeleteButton
              onClick={() => onChange(skills.filter((_, i) => i !== index))}
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">
              Skills (comma separated)
            </Label>
            <Input
              type="text"
              value={skill.skills.join(", ")}
              onChange={(e) =>
                updateSkill(index, {
                  ...skill,
                  skills: e.target.value.split(",").map((s) => s.trim()),
                })
              }
            />
          </div>
        </div>
      ))}
      <AddButton onClick={() => onChange([...skills, { categoryName: "", skills: [] }])} />
    </div>
  );
}

export default SkillsInput;
