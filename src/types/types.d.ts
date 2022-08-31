// types.d.ts

interface Frontmatter {
  title?: string | null;
  date?: string | null;
  description?: string | null;
  keywords?: string[] | null;
  tags?: string[] | null;
}
interface Post {
  excerpt?: string | null;
  timeToRead?: number | null;
  id?: string | null;
  frontmatter?: Frontmatter | null;
  fields?: {
    slug?: string | null;
  } | null;
}

interface OgImage {
  path?: string;
  size?: {
    height?: number;
    width?: number;
  };
}
