import Markdown from "react-markdown";
import { cn } from "@/lib/utils";

interface MarkdownTextProps {
  children: string;
  className?: string;
}

export function MarkdownText({ children, className }: MarkdownTextProps) {
  return (
    <div
      className={cn(
        "text-justify font-sans text-[12px] leading-4.5 font-extralight [&_a]:text-blue-600 [&_a]:underline [&_ul]:list-disc [&_ul]:marker:text-primary [&_ul]:ml-4",
        className
      )}
    >
      <Markdown>{children}</Markdown>
    </div>
  );
}
