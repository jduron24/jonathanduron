import { cn } from "@/lib/utils";

const sizeClasses = [
  "col-span-2 row-span-2 text-2xl sm:text-3xl",
  "col-span-2 text-xl sm:text-2xl",
  "col-span-1 text-lg sm:text-xl",
  "col-span-1 text-base sm:text-lg"
];

export function SkillCloud({ skills }: { skills: string[] }) {
  return (
    <div className="grid auto-rows-[110px] grid-cols-2 gap-4 md:grid-cols-4">
      {skills.map((skill, index) => (
        <div
          key={skill}
          className={cn(
            "flex items-end rounded-[1.75rem] border border-border bg-card/60 p-5 font-semibold tracking-[-0.02em] text-foreground transition hover:-translate-y-1 hover:shadow-glow",
            sizeClasses[index % sizeClasses.length]
          )}
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
