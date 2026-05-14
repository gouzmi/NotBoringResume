import { cn } from "@/lib/utils";

type Variant = "lg" | "base" | "sm" | "xs" | "xxs";

interface TextProps {
  children?: React.ReactNode;
  className?: string;
  variant?: Variant;
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  dangerouslySetInnerHTML?: { __html: string };
}

export function Text({
  children,
  className,
  variant = "lg",
  as: Tag = "p",
  dangerouslySetInnerHTML,
}: TextProps) {
  if (dangerouslySetInnerHTML) {
    return <Tag className={cn(variants[variant], className)} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />;
  }
  return <Tag className={cn(variants[variant], className)}>{children}</Tag>;
}

const variants = {
  lg: "text-justify font-sans text-[18px] leading-[28px] text-primary font-bold uppercase mb-1",
  base: "text-justify font-sans text-[18px] leading-[28px]",
  sm: "text-justify font-sans text-[13px] leading-[20px] font-light",
  xs: "text-justify font-sans text-[12px] leading-[18px] font-extralight",
  xxs: "text-justify font-sans text-[11px] leading-[16px] font-extralight",
};
