import type { Contact, LinkInfo } from "@/types/cv";
import { DeleteButton } from "@/components/selector/Buttons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
interface ContactInputProps {
  contact: Contact;
  onChange: (contact: Contact) => void;
}

function LinkInput({
  label,
  link,
  onChange,
}: {
  label?: string;
  link?: LinkInfo | null;
  onChange: (link: LinkInfo) => void;
}) {
  const title = link?.title ?? "";
  const url = link?.url ?? "";
  return (
    <div className="pl-2 border-l">
      <Label className="text-xs text-gray-500 font-medium">{label}</Label>
      <div className="flex flex-col gap-1">
        <div>
          <Label className="text-xs text-gray-400">Title</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => onChange({ title: e.target.value, url })}
          />
        </div>
        <div>
          <Label className="text-xs text-gray-400">URL</Label>
          <Input
            type="url"
            value={url}
            onChange={(e) => onChange({ title, url: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

function ContactInput({ contact, onChange }: ContactInputProps) {
  return (
    <div className="flex flex-col gap-2 pl-2 border-l">
      <div>
        <Label className="text-xs text-gray-500">Email</Label>
        <Input
          type="email"
          value={contact.mail}
          onChange={(e) => onChange({ ...contact, mail: e.target.value })}
        />
        <DeleteButton onClick={() => onChange({ ...contact, mail: "" })} />
      </div>
      <div>
        <Label className="text-xs text-gray-500">City</Label>
        <Input
          type="text"
          value={contact.city}
          onChange={(e) => onChange({ ...contact, city: e.target.value })}
        />
        <DeleteButton onClick={() => onChange({ ...contact, city: "" })} />
      </div>
      <LinkInput
        label="LinkedIn"
        link={contact.linkedin}
        onChange={(linkedin) => onChange({ ...contact, linkedin })}
      />
      <DeleteButton onClick={() => onChange({ ...contact, linkedin: null })} />
      <LinkInput
        label="GitHub"
        link={contact.github}
        onChange={(github) => onChange({ ...contact, github })}
      />
      <DeleteButton onClick={() => onChange({ ...contact, github: null })} />
      <LinkInput
        label="ResearchGate"
        link={contact.researchgate}
        onChange={(researchgate) => onChange({ ...contact, researchgate })}
      />
      <DeleteButton onClick={() => onChange({ ...contact, researchgate: null })} />
    </div>
  );
}

export default ContactInput;
