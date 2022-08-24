// types.d.ts

interface Frontmatter {
  title: string;
  date: string;
  description: string;
  keywords: string[];
  tags: string[];
}
interface Post {
  excerpt: string;
  timeToRead?: string;
  id?: string;
  frontmatter: Frontmatter;
  fields: {
    slug: string;
  };
}

interface OgImage {
  path?: string;
  size?: {
    height?: number;
    width?: number;
  };
}
