import React from 'react';

interface StatusIconProps {
  status: boolean;
}

export const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  const fillColor = status ? 'green' : 'red';
  
  return (
    <svg height="100" width="100">
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill={fillColor} />
    </svg>
  );
};
