import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({ children, className }: ContentSectionProps) {
  return (
    <section
      className={cn("bg-background p-4 pb-6 rounded-xl shadow-xs", className)}
    >
      {children}
    </section>
  );
}

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function CollapsibleSection({
  title,
  children,
  className,
  defaultOpen = true,
}: CollapsibleSectionProps) {
  return (
    <details
      open={defaultOpen}
      className={cn("bg-background p-4 rounded-xl shadow-xs group", className)}
    >
      <summary className="flex items-center gap-1 text-lg font-semibold cursor-pointer list-none">
        {title}
        <ChevronDown className="ml-1 transition-transform group-open:rotate-0 -rotate-90" />
      </summary>
      <div className="mt-2">{children}</div>
    </details>
  );
}
