import type { Certification } from "@/types/cv";
import { AddButton, DeleteButton } from "./Buttons";
import { Input } from "@/components/ui/input";

interface CertificationsInputProps {
  certifications: Certification[];
  onChange: (certifications: Certification[]) => void;
}

function CertificationsInput({ certifications, onChange }: CertificationsInputProps) {
  const updateCertification = (index: number, updated: Certification) => {
    const newCertifications = [...certifications];
    newCertifications[index] = updated;
    onChange(newCertifications);
  };

  return (
    <div className="flex flex-col gap-3 pl-2 border-l">
      {certifications.map((certification, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div>
            <Input
              type="text"
              value={certification.name}
              onChange={(e) =>
                updateCertification(index, { name: e.target.value })
              }
            />
            <DeleteButton
              onClick={() => onChange(certifications.filter((_, i) => i !== index))}
            />
          </div>
        </div>
      ))}
      <AddButton onClick={() => onChange([...certifications, { name: ""}])} />
    </div>
  );
}

export default CertificationsInput;
