export type Item = {
  name_title: string;
  imageUrl: string;
  progress: number;
};
  
export type CardProps = {
  item: Item;
};

export type ProgressBarProps = {
  progress: number;
};

export type CarouselProps = {
  items: Item[];
};
  