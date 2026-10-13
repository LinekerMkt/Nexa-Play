import React from 'react';
import { Zap, Shield, Tv, Clock, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/nexaPlayData';

interface HeroVideoProps {
  onScrollToPricing: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onScrollToPricing }) => {
  const videoUrl = 'https://www.youtube.com/embed/e7AIYABaBag?rel=0';

  return (
    <section className="relative w-full max-w-5xl mx-auto px-3 py-5 text-center sm:px-4 sm:py-8">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primaryPurple/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-secondaryCyan/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primaryPurple/15 border border-primaryPurple/40 text-primaryPurpleGlow text-xs font-bold mb-6 tracking-wide">
        <span className="w-2 h-2 rounded-full bg-accentEmerald animate-ping"></span>
        <span>SERVIDORES 100% ONLINE • ATIVAÇÃO IMEDIATA</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight sm:leading-none max-w-4xl mx-auto">
        O Melhor do Streaming e TV <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-secondaryCyan via-primaryPurpleGlow to-secondaryCyan bg-clip-text text-transparent">
          Sem Travamentos em 4K
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Tenha mais de 120 mil conteúdos, todos os canais de esportes ao vivo, estreias do cinema e séries completas na sua Smart TV ou celular a partir de <strong className="text-secondaryCyan font-semibold">R$ 19,90 em pagamento único</strong>.
      </p>

      {/* Vídeo vertical, sem elementos extras para manter o foco no conteúdo */}
      <div className="mt-7 mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-black shadow-2xl shadow-primaryPurple/20">
        <div className="relative aspect-[9/16] w-full">
          <iframe
            src={videoUrl}
            title="Vídeo de apresentação Nexa Play"
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

      </div>

      {/* Feature Badges */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-darkSurface border border-darkBorder text-slate-200 text-xs font-medium">
          <Zap className="w-4 h-4 text-secondaryCyan flex-shrink-0" />
          <span>Anti-Travamento Turbo</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-darkSurface border border-darkBorder text-slate-200 text-xs font-medium">
          <Tv className="w-4 h-4 text-secondaryCyan flex-shrink-0" />
          <span>Smart TV & Celular</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-darkSurface border border-darkBorder text-slate-200 text-xs font-medium">
          <Shield className="w-4 h-4 text-secondaryCyan flex-shrink-0" />
          <span>Garantia de 7 Dias</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-darkSurface border border-darkBorder text-slate-200 text-xs font-medium">
          <Clock className="w-4 h-4 text-secondaryCyan flex-shrink-0" />
          <span>Ativação em 3 Minutos</span>
        </div>
      </div>

      {/* Hero Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
        <button
          onClick={onScrollToPricing}
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primaryPurple to-primaryPurpleGlow text-white font-black text-sm tracking-wide shadow-xl shadow-primaryPurple/30 hover:brightness-110 active:scale-98 transition-all"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>VER PLANOS E OFERTAS</span>
        </button>

        <a
          href={getWhatsAppLink("Olá! Vi o vídeo de apresentação do Nexa Play e gostaria de tirar dúvidas e testar!")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-whatsAppGreen hover:bg-emerald-600 text-white font-black text-sm tracking-wide shadow-xl shadow-whatsAppGreen/20 active:scale-98 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>TESTAR NO WHATSAPP</span>
        </a>
      </div>

    </section>
  );
};
