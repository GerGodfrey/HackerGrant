import React from 'react';
import { CarouselProps } from './types';
import { Card } from './Card';

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
    return (
        <div className="flex flex-nowrap overflow-x-auto py-4 px-2">
            {items.map((item, index) => (
                <Card
                    item={item}
                    key={index}
                />
            ))}
        </div>
    );
};
