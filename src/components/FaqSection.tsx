import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Headphones } from 'lucide-react';
import { faqList, WHATSAPP_FORMATTED, getWhatsAppLink } from '../data/nexaPlayData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 px-4 max-w-4xl mx-auto scroll-mt-20">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primaryPurple/15 border border-primaryPurple/30 text-primaryPurpleGlow text-xs font-bold uppercase tracking-wider mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Tire Suas Dúvidas</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Perguntas Frequentes
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
          Tudo o que você precisa saber antes de começar a assistir
        </p>
      </div>

      <div className="space-y-3">
        {faqList.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-darkSurface border border-darkBorder overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-white hover:text-secondaryCyan transition-colors"
              >
                <span>{item.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-secondaryCyan flex-shrink-0 ml-3" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-3" />
                )}
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-darkBorder/40 pt-3 animate-fadeIn">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Box de Suporte Oficial */}
      <div className="mt-10 rounded-2xl bg-darkSurface border border-whatsAppGreen/30 p-6 text-center max-w-xl mx-auto">
        <Headphones className="w-8 h-8 text-whatsAppGreen mx-auto mb-2" />
        <h4 className="text-base font-bold text-white">Ainda ficou com alguma dúvida?</h4>
        <p className="text-xs text-slate-300 mt-1">
          Nosso time humano está de plantão para te responder agora no número oficial <strong className="text-whatsAppGreen">{WHATSAPP_FORMATTED}</strong>.
        </p>

        <a
          href={getWhatsAppLink("Olá! Gostaria de falar com o suporte do Nexa Play para tirar dúvidas.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-whatsAppGreen hover:bg-emerald-600 text-white text-xs font-black tracking-wide shadow-lg shadow-whatsAppGreen/20 transition-all"
        >
          <span>CHAMAR NO WHATSAPP • {WHATSAPP_FORMATTED}</span>
        </a>
      </div>
    </section>
  );
};
