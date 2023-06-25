import { ProgressBarProps } from './types';

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className="h-2 bg-gray-200 rounded">
          <div className="h-2 bg-blue-500 rounded" style={{ width: `${progress}%` }}></div>
        </div>
      );
};

