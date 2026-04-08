import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import portraitImage from "@/images/pp_pic.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Jonathan Duron, his background, and his systems-focused approach to software engineering."
};

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-20 pt-10 md:space-y-16 md:pt-16">
      <MotionSection className="space-y-8 text-center">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Profile
          </p>
          <h1 className="font-display text-6xl uppercase leading-none tracking-[0.04em] text-foreground sm:text-7xl">
            About
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
            A closer look at how I think, what I build, and the kind of work I do
            best.
          </p>
        </div>
        <div className="mx-auto max-w-md overflow-hidden rounded-[2rem] border border-border bg-card/60 p-4 shadow-glow">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <Image
              src={portraitImage}
              alt="Portrait of Jonathan Duron"
              className="h-full w-full object-cover"
              placeholder="blur"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto grid max-w-4xl gap-10">
        <section className="border-t border-border/70 pt-8">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#5f77b4] dark:text-[#8fa8e8] sm:text-5xl">
            Contact
          </h2>
          <div className="mt-6 flex max-w-3xl flex-wrap gap-x-8 gap-y-3 text-lg leading-9">
            <Link
              href="https://github.com/jduron24/"
              className="text-[#5f77b4] underline decoration-transparent underline-offset-4 transition hover:decoration-current dark:text-[#8fa8e8]"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/jonathanduron25/"
              className="text-[#5f77b4] underline decoration-transparent underline-offset-4 transition hover:decoration-current dark:text-[#8fa8e8]"
            >
              LinkedIn
            </Link>
            <Link
              href="https://x.com/Jd5063699248456"
              className="text-[#5f77b4] underline decoration-transparent underline-offset-4 transition hover:decoration-current dark:text-[#8fa8e8]"
            >
              X
            </Link>
          </div>
        </section>

        <section className="border-t border-border/70 pt-8">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#5f77b4] dark:text-[#8fa8e8] sm:text-5xl">
            Career
          </h2>
          <div className="mt-6 grid max-w-4xl gap-6 text-lg leading-9 text-foreground/82 md:grid-cols-2">
            <p>
              I’m a systems-focused software engineer and consultant who helps
              businesses scale by identifying operational friction and building
              tailored solutions to remove it. I work best in environments where
              processes are messy or undefined, bringing structure, clarity, and
              speed to day-to-day operations.
            </p>
            <p>
              I think in systems, not isolated features, designing tools that align
              with how teams actually work. My approach is rooted in action:
              quickly turning ideas into usable software that drives real outcomes,
              whether that’s reducing manual work, improving visibility, or
              enabling teams to move faster.
            </p>
            <p>
              I’m also a continuous learner, constantly refining my craft and
              expanding how I think about problems, systems, and execution.
            </p>
          </div>
        </section>
        
        <section className="border-t border-border/70 pt-8">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#5f77b4] dark:text-[#8fa8e8] sm:text-5xl">
            Experience
          </h2>
          <div className="mt-6 grid gap-8 text-lg leading-9 text-foreground/82">
            <div>
              <p className="font-semibold text-foreground">DriveFlow</p>
              <p className="text-base text-muted-foreground">
                Full Stack Software Engineer | August 2025 - Present
              </p>
              <p className="mt-3 max-w-3xl">
                Designed and deployed automated document ingestion pipelines in
                Python and FastAPI to normalize high-volume unstructured files,
                built secure REST APIs for structured data workflows, and reduced
                manual document handling time by about 70% through backend
                automation.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Gripp</p>
              <p className="text-base text-muted-foreground">
                Software Engineer | May 2025 - August 2025
              </p>
              <p className="mt-3 max-w-3xl">
                Built and shipped production features supporting real-time asset
                tracking for more than 1,000 subscribed farms, designed QR-code
                workflows backed by backend services, and improved reliability for
                users working in low-connectivity environments.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">TagLink</p>
              <p className="text-base text-muted-foreground">
                Founder | May 2023 - May 2025
              </p>
              <p className="mt-3 max-w-3xl">
                Developed an RFID-based platform for car dealerships to track
                repair orders and communicate more efficiently across teams,
                integrated with Frazer dealership software, and built an FTPS-based
                data ingestion pipeline to securely move dealership data into
                internal relational systems.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Titan Tires</p>
              <p className="text-base text-muted-foreground">
                Software Engineer | August 2023 - May 2024
              </p>
              <p className="mt-3 max-w-3xl">
                Designed and deployed a web interface for a Product Lifecycle
                Management system, created MySQL-backed data management tools, and
                optimized SQL workflows to improve engineering operations and data
                accessibility across teams.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border/70 pt-8">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#5f77b4] dark:text-[#8fa8e8] sm:text-5xl">
            Skills
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-base font-semibold text-foreground">Languages</p>
              <p className="mt-2 text-lg leading-9 text-foreground/82">
                JavaScript, TypeScript, Python, Java, C, C++
              </p>
            </div>

            <div>
              <p className="text-base font-semibold text-foreground">Frontend</p>
              <p className="mt-2 text-lg leading-9 text-foreground/82">
                React, React Native, HTML/CSS, Responsive Design
              </p>
            </div>

            <div>
              <p className="text-base font-semibold text-foreground">
                Backend & APIs
              </p>
              <p className="mt-2 text-lg leading-9 text-foreground/82">
                Node.js, Express, FastAPI, REST APIs, Webhooks
              </p>
            </div>

            <div>
              <p className="text-base font-semibold text-foreground">Databases</p>
              <p className="mt-2 text-lg leading-9 text-foreground/82">
                MySQL, PostgreSQL, MongoDB, Firestore, SQL
              </p>
            </div>

            <div>
              <p className="text-base font-semibold text-foreground">
                Cloud & DevOps
              </p>
              <p className="mt-2 text-lg leading-9 text-foreground/82">
                AWS (S3, EC2, Lambda), Docker, CI/CD, Git, GCP
              </p>
            </div>

            <div>
              <p className="text-base font-semibold text-foreground">AI & ML</p>
              <p className="mt-2 text-lg leading-9 text-foreground/82">
                NumPy, Neural Networks, Self-play Training Loops, AlphaZero
                Concepts, AI-assisted Development
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border/70 pt-8">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#5f77b4] dark:text-[#8fa8e8] sm:text-5xl">
            University
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-foreground/82">
            Iowa state University | Software engineer
          </p>
        </section>
      </MotionSection>
    </div>
  );
}
