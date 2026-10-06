import React, { useState } from 'react';
import { X, Check, Copy, QrCode, Shield, MessageCircle } from 'lucide-react';
import { Plan } from '../types';
import { WHATSAPP_FORMATTED, getWhatsAppLink } from '../data/nexaPlayData';

interface CheckoutModalProps {
  plan: Plan;
  onClose: (shouldTriggerDecline: boolean) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, onClose }) => {
  const [showPix, setShowPix] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const pixKey = "pix@nexaplay.tv.br";
  const pixCopiaECola = `00020126580014br.gov.bcb.pix0136nexa-play-${plan.id}-pagamento520400005303986540${plan.price}.${plan.cents}5802BR5915NEXA PLAY TELECOM6009JOINVILLE62070503***6304ABCD`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCopiaECola);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleClose = () => {
    const isPremium = plan.id === 'premium';
    onClose(isPremium);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-darkSurface border border-primaryPurple/50 p-6 sm:p-7 shadow-2xl shadow-primaryPurple/20 text-left overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-darkBorder">
          <div>
            <h3 className="text-lg font-black text-white">Finalizar Assinatura</h3>
            <p className="text-xs text-accentEmerald font-semibold">Ativação em até 3 minutos</p>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resumo do Plano */}
        <div className="mt-4 p-4 rounded-2xl bg-darkSurfaceVariant border border-darkBorder/60">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-white text-base">{plan.name}</h4>
            <div className="text-right">
              <span className="text-lg font-black text-secondaryCyan">
                R$ {plan.price},{plan.cents}
              </span>
              <span className="text-[11px] text-slate-400 block">{plan.billingPeriod}</span>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            • {plan.screensDescription} • {plan.resolutionDescription}
          </p>
        </div>

        {/* Botão Principal: Ativar no WhatsApp */}
        <div className="mt-5 space-y-3">
          <a
            href={getWhatsAppLink(plan.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-5 rounded-xl bg-whatsAppGreen hover:bg-emerald-600 text-white font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-whatsAppGreen/25 flex items-center justify-center gap-2 transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>ATIVAR VIA WHATSAPP ({WHATSAPP_FORMATTED})</span>
          </a>

          {/* Botão Alternativo: Pagar via PIX */}
          <button
            onClick={() => setShowPix(!showPix)}
            className="w-full py-3 px-4 rounded-xl bg-darkSurfaceVariant hover:bg-slate-800 border border-secondaryCyan/40 text-secondaryCyan font-bold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors"
          >
            <QrCode className="w-4 h-4" />
            <span>{showPix ? 'Ocultar Código PIX' : 'Pagar via PIX com QR Code'}</span>
          </button>
        </div>

        {/* Bloco PIX Expansível */}
        {showPix && (
          <div className="mt-4 p-4 rounded-2xl bg-black/50 border border-darkBorder text-center animate-fadeIn">
            <p className="text-xs font-bold text-white">Chave PIX e Copia e Cola:</p>

            <div className="mt-2 p-2 rounded-lg bg-darkBg border border-darkBorder font-mono text-[10px] text-slate-400 break-all text-left max-h-16 overflow-y-auto">
              {pixCopiaECola}
            </div>

            <button
              onClick={handleCopyPix}
              className={`mt-3 w-full py-2.5 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors ${
                copied
                  ? 'bg-accentEmerald text-white'
                  : 'bg-primaryPurple hover:bg-primaryPurpleGlow text-white'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'PIX COPIADO COM SUCESSO!' : 'COPIAR CHAVE PIX'}</span>
            </button>

            <p className="mt-2 text-[11px] text-slate-400">
              Após a transferência, envie o comprovante no WhatsApp <strong className="text-white">{WHATSAPP_FORMATTED}</strong> para liberação imediata.
            </p>
          </div>
        )}

        {/* Selo de Garantia */}
        <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-slate-400">
          <Shield className="w-4 h-4 text-accentEmerald" />
          <span>7 Dias de Garantia • Pagamento 100% Seguro</span>
        </div>

        {/* Gatilho de Desconto para o Plano Premium */}
        {plan.id === 'premium' && (
          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={handleClose}
              className="text-[11px] text-slate-500 hover:text-accentAmber transition-colors"
            >
              Pensando em desistir? Ver oferta especial de desconto
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
