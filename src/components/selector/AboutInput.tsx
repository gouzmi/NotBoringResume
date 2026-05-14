import type { About } from "@/types/cv";
import { Textarea } from "@/components/ui/textarea";

interface AboutInputProps {
  about: About;
  onChange: (about: About) => void;
}

function AboutInput({ about, onChange }: AboutInputProps) {
  return (
    <div className="pl-2 border-l">
      <Textarea
        rows={8}
        value={about.description}
        onChange={(e) => onChange({ description: e.target.value })}
        placeholder="Write a brief description about yourself..."
      />
    </div>
  );
}

export default AboutInput;
