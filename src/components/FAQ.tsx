import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    q: "¿Cuál es el pedido mínimo para entrega a domicilio?",
    a: "Dependiendo de la zona en Nuevo León, el mínimo suele ser de 20kg. Para pedidos menores, contamos con puntos de recolección estratégica.",
  },
  {
    q: "¿Tienen precios especiales para distribuidores?",
    a: "Sí, contamos con un esquema de precios por volumen escalonado diseñado para que los distribuidores mantengan un margen de utilidad saludable.",
  },
  {
    q: "¿Qué días realizan entregas?",
    a: "Contamos con rutas diarias de lunes a domingo para asegurar que negocios como restaurantes y carnicerías siempre tengan producto fresco.",
  },
  {
    q: "¿Sus tortillas tienen conservadores?",
    a: "Utilizamos procesos de nixtamalización natural y mínimos conservadores grado alimenticio aprobados para extender la vida de anaquel sin sacrificar el sabor tradicional.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl text-harvest-green text-center mb-16">Preguntas <span className="italic">Frecuentes</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-harvest-green/10">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex justify-between items-center py-6 text-left hover:text-harvest-accent transition-colors"
              >
                <span className="text-xl font-bold font-serif">{faq.q}</span>
                {open === idx ? <ChevronUp /> : <ChevronDown />}
              </button>
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-harvest-ink/70 text-lg leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
