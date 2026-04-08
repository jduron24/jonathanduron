import { compileMDX } from "next-mdx-remote/rsc";
import type { AnchorHTMLAttributes, BlockquoteHTMLAttributes } from "react";

const components = {
  a: ({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className={`font-medium text-accent underline-offset-4 hover:underline ${className ?? ""}`.trim()}
    >
      {props.children}
    </a>
  ),
  blockquote: ({
    className,
    children,
    ...props
  }: BlockquoteHTMLAttributes<HTMLElement>) => (
    <blockquote
      {...props}
      className={`border-l-2 border-accent pl-4 italic text-foreground/75 ${className ?? ""}`.trim()}
    >
      {children}
    </blockquote>
  )
};

export async function MDXContent({ source }: { source: string }) {
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: false
    },
    components
  });

  return <div className="prose-shell">{content}</div>;
}
