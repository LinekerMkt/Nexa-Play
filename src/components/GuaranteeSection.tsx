import React from 'react';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import { WHATSAPP_FORMATTED, getWhatsAppLink } from '../data/nexaPlayData';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-6 px-4 max-w-4xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-r from-darkSurface to-darkSurfaceVariant border border-accentEmerald/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-accentEmerald/15 border border-accentEmerald/30 flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-9 h-9 text-accentEmerald" />
        </div>

        <div className="text-center sm:text-left flex-1">
          <span className="text-xs font-bold uppercase tracking-widest text-accentEmerald">
            Risco Zero Para Você
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            Garantia Incondicional de 7 Dias
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Teste todos os canais, filmes e séries sem compromisso. Se por qualquer motivo você não ficar 100% satisfeito, basta nos chamar no WhatsApp <strong className="text-white">{WHATSAPP_FORMATTED}</strong> que devolvemos todo o seu dinheiro na hora, sem perguntas e sem enrolação.
          </p>
        </div>

        <a
          href={getWhatsAppLink("Olá! Gostaria de entender mais sobre a garantia de 7 dias do Nexa Play.")}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-accentEmerald/20 hover:bg-accentEmerald/30 border border-accentEmerald/40 text-accentEmerald text-xs font-bold tracking-wide transition-colors whitespace-nowrap flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
