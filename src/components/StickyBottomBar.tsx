import React from 'react';
import { Zap, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/nexaPlayData';

interface StickyBottomBarProps {
  onScrollToPricing: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onScrollToPricing }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-darkSurface/95 backdrop-blur-md border-t border-darkBorder p-3 shadow-2xl safe-bottom">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-secondaryCyan uppercase tracking-wider">A partir de</span>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-black text-white">R$ 19,90</span>
            <span className="text-[10px] text-slate-400">/mês</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onScrollToPricing}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-primaryPurple to-primaryPurpleGlow text-white text-xs font-black tracking-wide shadow-md shadow-primaryPurple/30 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>VER PLANOS</span>
          </button>

          <a
            href={getWhatsAppLink("Olá! Gostaria de falar com o atendimento oficial do Nexa Play.")}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-whatsAppGreen text-white active:scale-95 transition-all shadow-md shadow-whatsAppGreen/20"
            aria-label="Abrir WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
        </div>
      </div>
    </div>
  );
};
