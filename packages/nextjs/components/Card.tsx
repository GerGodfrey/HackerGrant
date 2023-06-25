import React from 'react';
import { CardProps } from './types';

export const Card: React.FC<CardProps> = ({ item }) => {
    const handleClick = () => {
        if(item.link) {
            window.location.href = item.link;
        } else {
            // Handle the case where the link is undefined
            // You could show an alert, or do nothing
            alert("No link provided for this item.");
        }
    }

    return (
        <div className="flex flex-col items-center justify-between m-2 p-4 bg-white rounded-lg shadow-md w-64">
            <div className="text-lg font-semibold">{item.name_title}</div>
            <img className="w-full h-64 object-cover mt-2 rounded-md" src={item.imageUrl} alt={item.name_title} />
            <div className="w-full h-1 bg-gray-200 rounded mt-4">
                <div className="h-full bg-blue-500 rounded" style={{width: `${item.progress}%`}}></div>
            </div>
            <button onClick={handleClick} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go to page
            </button>
        </div>
    );
};
