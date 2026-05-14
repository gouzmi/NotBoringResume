import type { Language } from "@/types/cv";
import { AddButton, DeleteButton } from "./Buttons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LanguagesInputProps {
  languages: Language[];
  onChange: (languages: Language[]) => void;
}

function LanguagesInput({ languages, onChange }: LanguagesInputProps) {
  const updateLanguage = (index: number, updated: Language) => {
    const newLanguages = [...languages];
    newLanguages[index] = updated;
    onChange(newLanguages);
  };

  return (
    <div className="flex flex-col gap-3 pl-2 border-l">
      {languages.map((language, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div>
            <Label className="text-xs text-gray-500">Language</Label>
            <Input
              type="text"
              value={language.name}
              onChange={(e) =>
                updateLanguage(index, { ...language, name: e.target.value })
              }
            />
            <DeleteButton
              onClick={() => onChange(languages.filter((_, i) => i !== index))}
            />
          </div>
          <div>
            <Label className="text-xs text-gray-500">Level</Label>
            <Input
              type="text"
              value={language.level}
              onChange={(e) =>
                updateLanguage(index, { ...language, level: e.target.value })
              }
            />
          </div>
        </div>
      ))}
      <AddButton onClick={() => onChange([...languages, { name: "", level: "" }])} />
    </div>
  );
}

export default LanguagesInput;
