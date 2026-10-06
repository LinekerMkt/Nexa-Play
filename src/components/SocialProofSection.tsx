import React, { useState } from 'react';
import { MessageCircle, Instagram, CheckCheck, Star, ShieldCheck } from 'lucide-react';
import { whatsAppProofs, instagramProofs, WHATSAPP_FORMATTED, getWhatsAppLink } from '../data/nexaPlayData';

export const SocialProofSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'instagram'>('whatsapp');

  return (
    <section className="py-14 px-4 max-w-5xl mx-auto">
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

      {/* Lista de Conversas do WhatsApp */}
      {activeTab === 'whatsapp' && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {whatsAppProofs.map((proof) => (
            <div
              key={proof.id}
              className="rounded-2xl overflow-hidden bg-whatsAppChatBg border border-emerald-950/80 shadow-xl flex flex-col"
            >
              {/* Barra do Topo do WhatsApp */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1F2C34] border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#00A884] to-[#005C4B] flex items-center justify-center text-white text-xs font-bold">
                    {proof.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {proof.clientName}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {proof.clientCity} • <span className="text-whatsAppGreen font-medium">online</span>
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-whatsAppGreen/15 text-whatsAppGreen text-[10px] font-bold">
                  {proof.highlightTag}
                </span>
              </div>

              {/* Corpo da Conversa com Balões */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-end bg-gradient-to-b from-[#0B141A] to-[#0D1920]">
                {proof.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.isFromClient ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                        msg.isFromClient
                          ? 'bg-whatsAppBubbleReceived text-white rounded-bl-xs'
                          : 'bg-whatsAppBubbleSent text-white rounded-br-xs'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400">
                        <span>{msg.time}</span>
                        <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
