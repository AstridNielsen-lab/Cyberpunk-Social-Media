import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-[#00ff00]/20 p-4 text-center text-sm text-[#00ff00]/50">
      <p>
        Criado por{' '}
        <a
          href="https://likelook.wixsite.com/solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00ff00] transition-colors inline-flex items-center gap-1"
        >
          Julio Campos Machado
          <ExternalLink size={12} />
        </a>
      </p>
      <p className="mt-1">
        <a
          href="https://wa.me/5511970603441"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00ff00] transition-colors"
        >
          WhatsApp: +55 11 97060-3441
        </a>
      </p>
    </footer>
  );
};

export default Footer;