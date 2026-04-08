import { cn } from "@/lib/utils";

export function MotionSection({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={cn(className)}>{children}</section>;
}
