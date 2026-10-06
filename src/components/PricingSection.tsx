import React, { useState } from 'react';
import { Check, Tv, Flame, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { Plan } from '../types';
import { planStart, planPremium } from '../data/nexaPlayData';

interface PricingSectionProps {
  onSelectPlan: (plan: Plan) => void;
  onTriggerDeclineDiscount: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  onTriggerDeclineDiscount,
}) => {
  const [showComparison, setShowComparison] = useState<boolean>(false);

  return (
    <section id="planos" className="py-12 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Badge Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accentAmber/15 border border-accentAmber/30 text-accentAmber text-xs font-bold uppercase tracking-wider mb-2">
          <Tag className="w-3.5 h-3.5" />
          <span>Escolha Seu Plano</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
          Duas Ofertas Exclusivas
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-lg mx-auto">
          Sem fidelidade, sem taxas de cancelamento. Liberação instantânea no seu aparelho.
        </p>
      </div>

      {/* Grid com os 2 Planos: Start (19,90) e Premium (49,90) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
        {/* CARD PLANO START (R$ 19,90) */}
        <div className="flex flex-col rounded-3xl bg-darkSurface border border-darkBorder p-6 sm:p-8 hover:border-slate-600 transition-all shadow-xl relative">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-white">{planStart.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{planStart.subtitle}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold">
              {planStart.badge}
            </span>
          </div>

          {/* Preço */}
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-xl font-bold text-slate-300">R$</span>
            <span className="text-5xl font-black text-white tracking-tight">{planStart.price}</span>
            <span className="text-2xl font-bold text-white">,{planStart.cents}</span>
            <span className="text-xs text-slate-400 font-medium ml-1">{planStart.billingPeriod}</span>

            {planStart.originalPrice && (
              <div className="ml-auto text-right">
                <span className="text-xs text-slate-500 line-through">De {planStart.originalPrice}</span>
                <p className="text-[10px] text-accentEmerald font-bold">Econômico</p>
              </div>
            )}
          </div>

          {/* Destaque de Telas */}
          <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-black/30 border border-darkBorder/60 text-xs">
            <div className="flex items-center gap-2 text-slate-200 font-semibold">
              <Tv className="w-4 h-4 text-slate-400" />
              <span>{planStart.screensDescription}</span>
            </div>
            <span className="text-slate-400">{planStart.resolutionDescription}</span>
          </div>

          {/* Lista de Recursos */}
          <ul className="mt-6 space-y-3 flex-1 text-xs sm:text-sm text-slate-300">
            {planStart.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-secondaryCyan" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Botão de Assinatura */}
          <div className="mt-8">
            <button
              onClick={() => onSelectPlan(planStart)}
              className="w-full py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-black text-sm tracking-wide transition-all active:scale-98"
            >
              {planStart.buttonText}
            </button>
          </div>
        </div>

        {/* CARD PLANO PREMIUM VIP (R$ 49,90 - DESTAQUE) */}
        <div className="flex flex-col rounded-3xl bg-darkSurfaceVariant border-2 border-primaryPurple p-6 sm:p-8 hover:border-primaryPurpleGlow transition-all shadow-2xl shadow-primaryPurple/20 relative">
          {/* Badge Mais Vendido */}
          <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-primaryPurple to-secondaryCyan text-white text-xs font-black tracking-wide shadow-md flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>MAIS ESCOLHIDO 🔥</span>
          </div>

          <div>
            <h3 className="text-xl font-black text-white">{planPremium.name}</h3>
            <p className="text-xs text-slate-300 mt-1">{planPremium.subtitle}</p>
          </div>

          {/* Preço */}
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-xl font-bold text-secondaryCyan">R$</span>
            <span className="text-5xl font-black text-white tracking-tight">{planPremium.price}</span>
            <span className="text-2xl font-bold text-white">,{planPremium.cents}</span>
            <span className="text-xs text-slate-300 font-medium ml-1">{planPremium.billingPeriod}</span>

            {planPremium.originalPrice && (
              <div className="ml-auto text-right">
                <span className="text-xs text-slate-400 line-through">De {planPremium.originalPrice}</span>
                <p className="text-[10px] text-accentEmerald font-bold">Melhor Custo-Benefício</p>
              </div>
            )}
          </div>

          {/* Destaque de Telas e Resolução */}
          <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-black/40 border border-primaryPurple/30 text-xs">
            <div className="flex items-center gap-2 text-white font-bold">
              <Tv className="w-4 h-4 text-secondaryCyan" />
              <span>{planPremium.screensDescription}</span>
            </div>
            <span className="text-accentEmerald font-semibold">{planPremium.resolutionDescription}</span>
          </div>

          {/* Lista de Recursos */}
          <ul className="mt-6 space-y-3 flex-1 text-xs sm:text-sm text-slate-100">
            {planPremium.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-primaryPurple/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-secondaryCyan" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Botão de Assinatura */}
          <div className="mt-8 space-y-2.5">
            <button
              onClick={() => onSelectPlan(planPremium)}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primaryPurple to-primaryPurpleGlow hover:brightness-110 text-white font-black text-sm tracking-wide shadow-lg shadow-primaryPurple/40 transition-all active:scale-98"
            >
              {planPremium.buttonText}
            </button>

            {/* Gatilho para Oferta de Recusa (R$ 29,90) */}
            <div className="text-center pt-1">
              <button
                type="button"
                onClick={onTriggerDeclineDiscount}
                className="text-xs text-accentAmber hover:underline font-medium inline-flex items-center gap-1"
              >
                <Tag className="w-3.5 h-3.5" />
                <span>Achou R$ 49,90 caro? Toque aqui para oferta especial</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle para Comparativo Detalhado */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-secondaryCyan hover:underline font-semibold"
        >
          <span>{showComparison ? 'Ocultar comparativo detalhado' : 'Ver comparativo completo Start vs Premium'}</span>
          {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showComparison && (
          <div className="mt-6 max-w-2xl mx-auto rounded-2xl bg-darkSurface border border-darkBorder p-5 sm:p-6 text-left shadow-xl animate-fadeIn">
            <h4 className="font-bold text-white text-base mb-4 text-center">Tabela Comparativa Direta</h4>

            <div className="divide-y divide-darkBorder text-xs sm:text-sm">
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-400">Mensalidade</span>
                <span className="text-slate-300">Start: R$ 19,90</span>
                <span className="text-secondaryCyan font-bold">Premium: R$ 49,90</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-400">Telas Simultâneas</span>
                <span className="text-slate-300">1 Tela</span>
                <span className="text-secondaryCyan font-bold">4 Telas</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-400">Resolução</span>
                <span className="text-slate-300">SD / HD</span>
                <span className="text-secondaryCyan font-bold">Full HD & 4K Ultra</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-400">Futebol & Combate</span>
                <span className="text-slate-300">Canais Básicos</span>
                <span className="text-secondaryCyan font-bold">Todos os Canais Ao Vivo</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-400">Catálogo Filmes/Séries</span>
                <span className="text-slate-300">+40.000 títulos</span>
                <span className="text-secondaryCyan font-bold">+120.000 títulos (Diário)</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-400">Tecnologia Turbo CDN</span>
                <span className="text-slate-300">Padrão</span>
                <span className="text-secondaryCyan font-bold">Dedicado Anti-Travamento</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-400">Suporte no WhatsApp</span>
                <span className="text-slate-300">Padrão</span>
                <span className="text-secondaryCyan font-bold">VIP 24/7 Imediato</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
