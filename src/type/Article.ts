export interface IArticle {
  id: string;
  title: string;
  description: string;
  text: string;
  imageUrl: string;
  imageAlt?: string;
  category?: string;
  source?: string;
}