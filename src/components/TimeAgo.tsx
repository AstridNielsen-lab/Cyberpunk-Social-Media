import React from 'react';

interface TimeAgoProps {
  timestamp: string;
  className?: string;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp, className }) => {
  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    
    const intervals = {
      ano: 31536000,
      mês: 2592000,
      semana: 604800,
      dia: 86400,
      hora: 3600,
      minuto: 60,
      segundo: 1
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit);
      
      if (interval >= 1) {
        return `há ${interval} ${unit}${interval > 1 ? 
          unit === 'mês' ? 'es' : 's' 
          : ''}`;
      }
    }
    
    return 'agora mesmo';
  };

  return (
    <time dateTime={timestamp} className={className}>
      {getTimeAgo(new Date(timestamp))}
    </time>
  );
};

export default TimeAgo;