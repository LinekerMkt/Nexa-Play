import React from 'react';
import { Tv, Cast, Smartphone, Laptop } from 'lucide-react';

export const CompatibilitySection: React.FC = () => {
  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-xl sm:text-2xl font-black text-white">
          Compatível Com Todos os Seus Aparelhos
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
          Assista na TV, celular ou computador sem precisar de aparelhos adicionais caros
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <div className="flex flex-col items-center p-5 rounded-2xl bg-darkSurface border border-darkBorder hover:border-secondaryCyan/40 transition-colors text-center">
          <Tv className="w-8 h-8 text-secondaryCyan mb-2.5" />
          <h4 className="font-bold text-white text-sm">Smart TV</h4>
          <p className="text-[11px] text-slate-400 mt-0.5">Samsung, LG, Android TV</p>
        </div>

        <div className="flex flex-col items-center p-5 rounded-2xl bg-darkSurface border border-darkBorder hover:border-secondaryCyan/40 transition-colors text-center">
          <Cast className="w-8 h-8 text-secondaryCyan mb-2.5" />
          <h4 className="font-bold text-white text-sm">TV Box & Stick</h4>
          <p className="text-[11px] text-slate-400 mt-0.5">Fire Stick, Xiaomi, Chromecast</p>
        </div>

        <div className="flex flex-col items-center p-5 rounded-2xl bg-darkSurface border border-darkBorder hover:border-secondaryCyan/40 transition-colors text-center">
          <Smartphone className="w-8 h-8 text-secondaryCyan mb-2.5" />
          <h4 className="font-bold text-white text-sm">Smartphones</h4>
          <p className="text-[11px] text-slate-400 mt-0.5">Android e iPhone (iOS)</p>
        </div>

        <div className="flex flex-col items-center p-5 rounded-2xl bg-darkSurface border border-darkBorder hover:border-secondaryCyan/40 transition-colors text-center">
          <Laptop className="w-8 h-8 text-secondaryCyan mb-2.5" />
          <h4 className="font-bold text-white text-sm">Computadores</h4>
          <p className="text-[11px] text-slate-400 mt-0.5">PC, Notebook e Mac</p>
        </div>
      </div>
    </section>
  );
};
