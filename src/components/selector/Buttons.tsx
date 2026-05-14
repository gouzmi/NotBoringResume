import { Button } from "@/components/ui/button";

interface ButtonProps {
  onClick: () => void;
}

export function AddButton({ onClick }: ButtonProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button size="xs" variant="outline" onClick={onClick} className="bg-add text-white">
        Add
      </Button>
    </div>
  );
}

export function DeleteButton({ onClick }: ButtonProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button size="xs" variant="outline" onClick={onClick} className="bg-delete text-white">
        Delete
      </Button>
    </div>
  );
}
