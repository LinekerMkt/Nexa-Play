import React, { useEffect, useState } from 'react';
import { MessageCircle, Instagram, Star, ShieldCheck } from 'lucide-react';
import { instagramProofs, WHATSAPP_FORMATTED, getWhatsAppLink } from '../data/nexaPlayData';

const testimonialImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feedback_sobre_o_Nexa_Play-82v6VtFoFUonCEC9UA8tjQct3I46eF.png',
    alt: 'Conversa no WhatsApp com feedback sobre a qualidade e variedade do Nexa Play',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nexa%20Play%20support%20appreciation%20chat-woYX4yVWsLlXAje9VWhrZo3DtWGdSz.png',
    alt: 'Conversa no WhatsApp elogiando a facilidade de uso do Nexa Play',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nexa%20Play%20support%20chat%20header-MxVu3z0BfULdEaT4NWS1t242TQa0dh.png',
    alt: 'Conversa no WhatsApp destacando a variedade de conteúdos do Nexa Play',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nexa%20Play%20support%20chat-3bHtC23ByPbS4xckZtZnvaxA3BRRCm.png',
    alt: 'Conversa no WhatsApp sobre o atendimento rápido do Nexa Play',
  },
];

export const SocialProofSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'instagram'>('whatsapp');
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (activeTab !== 'whatsapp') return;
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % testimonialImages.length);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [activeTab]);

  return (
    <section className="w-full max-w-5xl mx-auto px-3 py-10 sm:px-4 sm:py-14">
      {/* Badge Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accentEmerald/15 border border-accentEmerald/30 text-accentEmerald text-xs font-bold uppercase tracking-wider mb-2">
          <Star className="w-3.5 h-3.5 fill-current text-accentAmber" />
          <span>Provas Sociais Reais • 99.8% Satisfação</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
          Quem Assina, Recomenda
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
          Veja prints e conversas reais de quem já economiza e assiste com a gente todos os dias:
        </p>
      </div>

      {/* Tabs Seletor: WhatsApp vs Instagram */}
      <div className="mt-8 flex justify-center">
        <div className="inline-flex p-1 rounded-2xl bg-darkSurface border border-darkBorder max-w-md w-full">
          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'whatsapp'
                ? 'bg-whatsAppGreen text-white shadow-lg shadow-whatsAppGreen/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Conversas no WhatsApp</span>
          </button>

          <button
            onClick={() => setActiveTab('instagram')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'instagram'
                ? 'bg-gradient-to-r from-instagramRose to-purple-600 text-white shadow-lg shadow-instagramRose/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Instagram className="w-4 h-4" />
            <span>Direct do Instagram</span>
          </button>
        </div>
      </div>

      {/* Carrossel de depoimentos enviados pelos clientes */}
      {activeTab === 'whatsapp' && (
        <div className="mt-8 mx-auto w-full max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-950/80 bg-whatsAppChatBg p-2 shadow-2xl shadow-black/30 sm:p-3">
            <img
              key={testimonialImages[activeImage].src}
              src={testimonialImages[activeImage].src}
              alt={testimonialImages[activeImage].alt}
              className="testimonial-slide block h-auto max-h-[720px] w-full rounded-2xl object-contain"
            />
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={() => setActiveImage((activeImage - 1 + testimonialImages.length) % testimonialImages.length)}
              className="absolute left-5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black/80"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={() => setActiveImage((activeImage + 1) % testimonialImages.length)}
              className="absolute right-5 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black/80"
            >
              ›
            </button>
          </div>
          <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Depoimentos">
            {testimonialImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-label={`Ver depoimento ${index + 1}`}
                aria-selected={activeImage === index}
                onClick={() => setActiveImage(index)}
                className={`h-2 rounded-full transition-all ${activeImage === index ? 'w-8 bg-whatsAppGreen' : 'w-2 bg-slate-600 hover:bg-slate-400'}`}
              />
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">Depoimentos reais de clientes Nexa Play</p>
        </div>
      )}

      {/* Lista de Mensagens do Direct do Instagram */}
      {activeTab === 'instagram' && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {instagramProofs.map((proof) => (
            <div
              key={proof.id}
              className="rounded-2xl overflow-hidden bg-instagramChatBg border border-purple-950/60 shadow-xl flex flex-col"
            >
              {/* Barra do Topo do Instagram */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-0.5 rounded-full bg-gradient-to-tr from-yellow-500 via-instagramRose to-purple-600">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-xs font-bold">
                      {proof.avatarInitials}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {proof.username}
                      </h4>
                      {proof.isVerified && (
                        <ShieldCheck className="w-3.5 h-3.5 text-[#3897F0] fill-current" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400">{proof.fullName}</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-instagramRose/15 text-instagramRose text-[10px] font-bold">
                  {proof.highlightTag}
                </span>
              </div>

              {/* Mensagens do Direct */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-end bg-[#121212]">
                {proof.messages.map((msg, idx) => (
                  <div key={idx} className="flex justify-start">
                    <div className="relative max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed bg-instagramBubble text-white shadow-sm">
                      <p>{msg.text}</p>
                      {msg.reaction && (
                        <div className="absolute -bottom-2 right-2 px-1.5 py-0.5 rounded-full bg-black/80 border border-white/10 text-[11px]">
                          {msg.reaction}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Chamada para Enviar Depoimento */}
      <div className="mt-8 text-center">
        <a
          href={getWhatsAppLink("Olá! Gostaria de enviar meu depoimento sobre o Nexa Play.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-whatsAppGreen hover:underline font-semibold"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Quer compartilhar sua experiência? Envie no WhatsApp {WHATSAPP_FORMATTED}</span>
        </a>
      </div>
    </section>
  );
};
