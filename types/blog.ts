export interface IPost {
  frontmatter: {
    title: string;
    description: string;
  }
  content: string;
  slug: string
}