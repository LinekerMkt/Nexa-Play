import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_FORMATTED, getWhatsAppLink } from '../data/nexaPlayData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Suporte WhatsApp" className="fixed bottom-18 sm:bottom-6 right-4 sm:right-6 z-30">
      <a
        href={getWhatsAppLink("Olá! Gostaria de falar com o suporte oficial do Nexa Play.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-whatsAppGreen text-white shadow-2xl shadow-whatsAppGreen/50 hover:scale-110 active:scale-95 transition-all pulse-glow"
        aria-label={`Falar no WhatsApp oficial ${WHATSAPP_FORMATTED}`}
      >
        <MessageCircle className="w-7 h-7 fill-current" />

        {/* Tooltip on hover (desktop) */}
        <span className="hidden sm:group-hover:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-darkSurface border border-darkBorder text-xs text-white whitespace-nowrap shadow-xl font-semibold">
          Fale no WhatsApp {WHATSAPP_FORMATTED}
        </span>
      </a>
    </aside>
  );
};
