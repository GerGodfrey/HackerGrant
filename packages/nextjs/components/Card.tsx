import { CardProps } from './types';
import {ProgressBar} from './ProgressBar';

export const Card: React.FC<CardProps> = ({ item: { name_title, imageUrl, progress } }) => {
    return (
        <div className="bg-white shadow-md rounded p-6 m-2 w-64 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">{name_title}</h2>
          <img src={imageUrl} alt={name_title} className="w-full mb-4"/>
          <ProgressBar progress={progress} />
        </div>
      );
};

