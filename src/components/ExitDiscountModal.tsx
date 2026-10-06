import React, { useState, useEffect } from 'react';
import { X, Flame, Check, Timer, Zap } from 'lucide-react';

interface ExitDiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptSpecialOffer: () => void;
}

export const ExitDiscountModal: React.FC<ExitDiscountModalProps> = ({
  isOpen,
  onClose,
  onAcceptSpecialOffer,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(599); // 09:59

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTimer = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-darkSurface border-2 border-accentAmber p-6 sm:p-8 shadow-2xl shadow-accentAmber/20 text-center overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-accentAmber/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fechar popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge de Urgência */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-black uppercase tracking-wider mb-3">
          <Flame className="w-3.5 h-3.5 fill-current" />
          <span>Oferta Exclusiva de Recusa</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
          ESPERE! NÃO PERCA ESSA OPORTUNIDADE ÚNICA!
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-300">
          Liberamos uma condição especial para você ter a experiência máxima do Nexa Play agora:
        </p>

        {/* Caixa de Preço Promocional R$ 29,90 */}
        <div className="mt-5 p-5 rounded-2xl bg-darkSurfaceVariant border border-accentAmber/50 shadow-inner">
          <p className="text-xs font-bold text-secondaryCyan uppercase tracking-wider">
            Plano Premium VIP (4 Telas + 4K)
          </p>

          <div className="mt-2 flex items-center justify-center gap-3">
            <span className="text-sm text-slate-400 line-through">De R$ 49,90</span>
            <span className="px-2.5 py-0.5 rounded-md bg-accentEmerald/20 text-accentEmerald text-xs font-bold">
              ECONOMIZE R$ 20,00
            </span>
          </div>

          <div className="mt-2 flex items-baseline justify-center gap-1">
            <span className="text-lg font-bold text-accentAmber">Por apenas R$</span>
            <span className="text-5xl font-black text-white tracking-tight">29</span>
            <span className="text-2xl font-bold text-white">,90</span>
            <span className="text-xs text-slate-400 font-medium">/mês</span>
          </div>

          <p className="text-[11px] text-accentAmber font-medium mt-1">
            ★ Mensalidade promocional garantida todos os meses
          </p>
        </div>

        {/* Lista de Benefícios */}
        <ul className="mt-4 text-left space-y-2 text-xs text-slate-200 max-w-sm mx-auto">
          <li className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accentEmerald/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-accentEmerald" />
            </div>
            <span>4 Telas Simultâneas para toda a família</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accentEmerald/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-accentEmerald" />
            </div>
            <span>Resolução 4K Ultra HDR sem travamentos</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accentEmerald/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-accentEmerald" />
            </div>
            <span>+120.000 Conteúdos com futebol e cinema</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accentEmerald/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-accentEmerald" />
            </div>
            <span>Suporte VIP 24/7 no WhatsApp 47 9 9714-4452</span>
          </li>
        </ul>

        {/* Cronômetro */}
        <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-950/60 border border-red-800/40 text-red-300 text-xs font-bold">
          <Timer className="w-4 h-4 text-red-400 animate-pulse" />
          <span>Esta oferta expira em: {formattedTimer}</span>
        </div>

        {/* Botão de Aceite da Oferta */}
        <div className="mt-6 space-y-2.5">
          <button
            onClick={onAcceptSpecialOffer}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-accentEmerald to-emerald-600 hover:brightness-110 text-white font-black text-sm tracking-wide shadow-xl shadow-accentEmerald/30 transition-all transform hover:scale-102 active:scale-98 flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>QUERO O PREMIUM POR R$ 29,90 AGORA!</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-[11px] text-slate-500 hover:text-slate-400 transition-colors"
          >
            Não, prefiro abrir mão do desconto de R$ 20 e fechar
          </button>
        </div>
      </div>
    </div>
  );
};
