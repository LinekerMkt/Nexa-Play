import React, { useState } from 'react';
import { Edit3, Zap, Shield, Tv, Clock, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/nexaPlayData';

interface HeroVideoProps {
  onScrollToPricing: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onScrollToPricing }) => {
  const [videoUrl, setVideoUrl] = useState<string>('https://www.youtube.com/embed/e7AIYABaBag?rel=0');
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [tempUrlInput, setTempUrlInput] = useState<string>(videoUrl);

  return (
    <section className="relative pt-6 pb-12 px-4 max-w-5xl mx-auto text-center">
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

      {/* Container do Vídeo de Apresentação */}
      <div className="mt-8 relative max-w-3xl mx-auto rounded-2xl overflow-hidden border-2 border-primaryPurple/40 shadow-2xl shadow-primaryPurple/20 bg-darkSurface">
        {/* Top bar do player */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-darkSurfaceVariant/90 border-b border-darkBorder text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accentEmerald animate-pulse"></span>
            <span className="font-bold text-slate-200">VÍDEO DE APRESENTAÇÃO • STORY 9:16</span>
          </div>

          <button
            onClick={() => {
              setTempUrlInput(videoUrl);
              setShowEditModal(true);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-secondaryCyan font-medium transition-colors"
            title="Alterar URL do vídeo"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Link do Vídeo</span>
          </button>
        </div>

        {/* Player vertical do YouTube Shorts */}
        <div className="relative aspect-[9/16] w-full max-w-sm mx-auto bg-black overflow-hidden">
          <iframe
            src={videoUrl}
            title="Vídeo de apresentação Nexa Play"
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Rodapé da Fonte do Vídeo */}
        <div className="px-3.5 py-1.5 bg-darkSurfaceVariant text-[11px] text-slate-400 flex items-center justify-between border-t border-darkBorder">
          <span className="truncate max-w-[80%] text-left">Fonte: {videoUrl}</span>
          <span className="text-accentEmerald font-bold whitespace-nowrap">HD 1080p 60fps</span>
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

      {/* Modal para Editar/Adicionar URL do Vídeo */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md rounded-2xl bg-darkSurface border border-darkBorder p-6 shadow-2xl text-left">
            <h3 className="text-lg font-bold text-white">Configurar Vídeo de Apresentação</h3>
            <p className="mt-1 text-xs text-slate-400">
              Cole a URL do vídeo de demonstração (YouTube, Vimeo ou link direto MP4):
            </p>

            <div className="mt-4">
              <label className="block text-xs font-semibold text-slate-300 mb-1">URL do Vídeo</label>
              <input
                type="url"
                value={tempUrlInput}
                onChange={(e) => setTempUrlInput(e.target.value)}
                placeholder="https://exemplo.com/video.mp4 ou https://youtu.be/..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-darkBg border border-darkBorder text-white text-sm focus:outline-none focus:border-secondaryCyan"
              />
              <p className="mt-1 text-[11px] text-slate-500">
                Você pode usar qualquer link de vídeo para demonstrar o catálogo do Nexa Play.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  if (tempUrlInput.trim()) {
                    setVideoUrl(tempUrlInput.trim());
                  }
                  setShowEditModal(false);
                }}
                className="px-4 py-2 rounded-lg bg-primaryPurple hover:bg-primaryPurpleGlow text-white text-xs font-bold transition-colors"
              >
                Salvar Vídeo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
