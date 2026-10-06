/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#090D16",
        darkSurface: "#111726",
        darkSurfaceVariant: "#1B2338",
        darkBorder: "#2B3754",
        primaryPurple: "#8B5CF6",
        primaryPurpleGlow: "#A78BFA",
        secondaryCyan: "#06B6D4",
        secondaryCyanGlow: "#67E8F9",
        accentEmerald: "#10B981",
        accentAmber: "#F59E0B",
        accentCoral: "#EF4444",
        whatsAppGreen: "#25D366",
        whatsAppDarkGreen: "#005C4B",
        whatsAppChatBg: "#0B141A",
        whatsAppBubbleReceived: "#202C33",
        whatsAppBubbleSent: "#005C4B",
        instagramRose: "#E1306C",
        instagramBubble: "#262626",
        instagramChatBg: "#121212",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
