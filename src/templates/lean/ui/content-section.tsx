import { cn } from "@/lib/utils";
interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({ children, className }: ContentSectionProps) {
  return (
    <section
      className={cn("px-3 py-1.5", className)}
    >
      {children}
    </section>
  );
}
