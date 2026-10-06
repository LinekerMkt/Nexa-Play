import React from 'react';
import { Play, Shield, MessageCircle } from 'lucide-react';
import { WHATSAPP_FORMATTED, getWhatsAppLink } from '../data/nexaPlayData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#070A11] border-t border-darkBorder py-12 px-4 pb-24 sm:pb-12 text-center text-xs text-slate-400">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-primaryPurple to-secondaryCyan flex items-center justify-center">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </div>
          <span className="text-base font-black tracking-wider text-white">NEXA PLAY</span>
        </div>

        <p className="max-w-md text-slate-400 leading-relaxed mb-4">
          A melhor plataforma de entretenimento digital e streaming em alta definição. Canais ao vivo, filmes, séries e esportes em qualquer lugar.
        </p>

        <a
          href={getWhatsAppLink("Olá! Gostaria de falar com o suporte oficial do Nexa Play.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-whatsAppGreen font-bold hover:underline mb-6"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Atendimento Oficial no WhatsApp: {WHATSAPP_FORMATTED}</span>
        </a>

        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 mb-6 flex-wrap">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-accentEmerald" />
            Conexão Segura SSL 256 bits
          </span>
          <span>•</span>
          <span>Ativação Imediata</span>
          <span>•</span>
          <span>Sem Fidelidade</span>
        </div>

        <div className="border-t border-darkBorder/40 pt-6 w-full text-[11px] text-slate-500">
          <p>© 2026 Nexa Play Telecom. Todos os direitos reservados.</p>
          <p className="mt-1 text-[10px]">
            Este serviço depende de conexão com a internet para transmissão de dados em streaming.
          </p>
        </div>
      </div>
    </footer>
  );
};
