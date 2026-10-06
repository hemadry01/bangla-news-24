export interface INews {
  id: string;
  title: string;
  description: {
    blocks: {
      text?: string;
    }[]; //it is not empty array it's type script syntext
  };
  text: string;
  imageUrl: string;
  imageAlt?: string;
  category?: string;
  source?: string;
  link?: string;
  firstPublished?: string;
  lastPublished?: string;

  body: {
    type: string;
    text?: string;
    url?: string;
    width?: number;
    height?: number;
    caption?: string;
  }[];
}
