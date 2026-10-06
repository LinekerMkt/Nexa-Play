import React from 'react';
import { Play, MessageCircle } from 'lucide-react';
import { WHATSAPP_FORMATTED, getWhatsAppLink } from '../data/nexaPlayData';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-darkSurface/90 backdrop-blur-md border-b border-darkBorder">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primaryPurple to-secondaryCyan flex items-center justify-center shadow-lg shadow-primaryPurple/30 group-hover:scale-105 transition-transform">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-wider text-white">NEXA</span>
              <span className="text-xl font-black tracking-wider text-secondaryCyan">PLAY</span>
            </div>
            <p className="text-[9px] font-bold tracking-widest text-primaryPurple uppercase -mt-1">Streaming 4K Turbo</p>
          </div>
        </a>

        {/* Status + WhatsApp Action */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Servidores 100% Online
          </div>

          <a
            href={getWhatsAppLink("Olá! Gostaria de falar com o atendimento oficial do Nexa Play.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-whatsAppGreen/15 border border-whatsAppGreen/40 text-whatsAppGreen hover:bg-whatsAppGreen hover:text-white transition-all text-xs font-bold"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden xs:inline">{WHATSAPP_FORMATTED}</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
