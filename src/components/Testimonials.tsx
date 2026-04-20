import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Méndez",
    business: "Carnicería San Juan",
    text: "Llevamos 3 años con La Cosecha y lo que más valoramos es la puntualidad. Nunca nos han dejado sin producto y la calidad es siempre la misma.",
    rating: 5,
  },
  {
    name: "Elena G. Villarreal",
    business: "Taquería El Pastor",
    text: "La tortilla taquera es de las mejores en Monterrey. No se rompe con la grasa y nuestros clientes notan la diferencia en el sabor del maíz.",
    rating: 5,
  },
  {
    name: "Javier Cantú",
    business: "Distribuidora Regia",
    text: "Excelentes márgenes para distribuidores. Su empaque mantiene la frescura mucho más tiempo que la competencia.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-harvest-beige overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-harvest-green mb-4">
            Confianza que <span className="italic">alimento</span> a negocios
          </h2>
          <p className="text-lg text-harvest-ink/60">
            Escucha lo que dicen nuestros aliados estratégicos en Nuevo León.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2rem] border border-harvest-green/5 shadow-xl shadow-harvest-green/5 relative"
            >
              <div className="absolute top-8 right-8 text-harvest-accent opacity-20">
                <Quote size={40} />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-harvest-accent text-harvest-accent" />
                ))}
              </div>
              <p className="text-lg text-harvest-ink/80 italic mb-8 font-serif leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-harvest-green">{t.name}</p>
                <p className="text-sm text-harvest-accent font-medium">{t.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
