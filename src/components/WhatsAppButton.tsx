import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/5211234567890?text=Hola,%20me%20gustaría%20cotizar%20tortilla%20al%20mayoreo."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-harvest-ink px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¡Hablemos por WhatsApp!
      </span>
    </motion.a>
  );
}
