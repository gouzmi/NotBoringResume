import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return (
    <div className={cn("self-stretch border-t border-gray-200 mx-4", className)} />
  );
}
