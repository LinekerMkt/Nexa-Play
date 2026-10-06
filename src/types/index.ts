export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  cents: string;
  originalPrice?: string;
  billingPeriod: string;
  badge?: string;
  isHighlighted?: boolean;
  screensCount: number;
  screensDescription: string;
  resolutionDescription: string;
  features: string[];
  buttonText: string;
  whatsappMessage: string;
}

export interface ChatMessage {
  text: string;
  isFromClient: boolean;
  time: string;
  hasAudio?: boolean;
}

export interface WhatsAppProof {
  id: string;
  clientName: string;
  clientCity: string;
  lastSeen?: string;
  avatarInitials: string;
  messages: ChatMessage[];
  highlightTag: string;
}

export interface InstagramDirectMessage {
  text: string;
  isFromClient: boolean;
  reaction?: string;
}

export interface InstagramProof {
  id: string;
  username: string;
  fullName: string;
  isVerified?: boolean;
  avatarInitials: string;
  messages: InstagramDirectMessage[];
  highlightTag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
