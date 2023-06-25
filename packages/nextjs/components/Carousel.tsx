import { CarouselProps } from './types';
import { Card } from './Card'

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
    return (
        <div className="overflow-hidden py-4 px-2 flex">
          {items.map((item, index) => (
            <Card
              item={item}
              key={index}
              //name_title={item.name_title}
              //imageUrl={item.imageUrl}
              //progress={item.progress}
            />
          ))}
        </div>
      );
};
