import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

const SplashScreen: React.FC = () => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState('');
  const fullText = 'Inicializando manipulations...';

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    
    let index = 0;
    const typeTimer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typeTimer);
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(typeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <Terminal className="w-16 h-16 mx-auto text-[#00ff00] animate-pulse" />
        <h1 className="text-2xl font-bold text-[#00ff00] glitch-text">{text}</h1>
      </div>
    </div>
  );
};

export default SplashScreen;