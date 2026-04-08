import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentRoot = path.join(process.cwd(), "content");
const blogRoot = path.join(contentRoot, "blog");
const projectRoot = path.join(contentRoot, "projects");

export type BlogFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
};

export type ProjectFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  url?: string;
  github?: string;
  featured: boolean;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

export type ProjectMeta = ProjectFrontmatter & {
  slug: string;
};

function readDirectoryFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

function sortByDateDescending<T extends { date: string }>(items: T[]) {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function parseBlogFile(fileName: string): BlogPostMeta & { content: string } {
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(blogRoot, fileName);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);

  return {
    ...(data as BlogFrontmatter),
    slug,
    content,
    readingTime: readingTime(content).text
  };
}

function parseProjectFile(fileName: string): ProjectMeta & { content: string } {
  const slug = fileName.replace(/\.mdx$/, "");
  const fullPath = path.join(projectRoot, fileName);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);

  return {
    ...(data as ProjectFrontmatter),
    slug,
    content
  };
}

export function getAllPosts(): BlogPostMeta[] {
  const posts = readDirectoryFiles(blogRoot)
    .map(parseBlogFile)
    .filter((post) => post.published)
    .map(({ content, ...meta }) => meta);

  return sortByDateDescending(posts);
}

export function getLatestPost() {
  return getAllPosts()[0];
}

export function getAllProjects(): ProjectMeta[] {
  const projects = readDirectoryFiles(projectRoot)
    .map(parseProjectFile)
    .map(({ content, ...meta }) => meta);

  return sortByDateDescending(projects);
}

export function getFeaturedProject() {
  return getAllProjects().find((project) => project.featured);
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(blogRoot, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    ...(data as BlogFrontmatter),
    slug,
    content,
    readingTime: readingTime(content).text
  };
}

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(projectRoot, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    ...(data as ProjectFrontmatter),
    slug,
    content
  };
}

export function getAllPostSlugs() {
  return readDirectoryFiles(blogRoot).map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllProjectSlugs() {
  return readDirectoryFiles(projectRoot).map((file) => file.replace(/\.mdx$/, ""));
}
