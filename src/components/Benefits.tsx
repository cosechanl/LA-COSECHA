import { motion } from "motion/react";
import { DollarSign, ShieldCheck, Truck, BarChart3 } from "lucide-react";

const benefits = [
  {
    title: "Precio de Productor",
    desc: "Al ser fabricantes, eliminamos intermediarios para ofrecerte los márgenes más competitivos del mercado.",
    icon: DollarSign,
  },
  {
    title: "Calidad Estandarizada",
    desc: "Nuestra tecnología nos permite mantener la misma textura, sabor y durabilidad en cada lote, sin variaciones.",
    icon: ShieldCheck,
  },
  {
    title: "Logística Profesional",
    desc: "Rutas optimizadas para asegurar que tu producto llegue fresco y a tiempo, todos los días de la semana.",
    icon: Truck,
  },
  {
    title: "Impulsa tu Rentabilidad",
    desc: "Ayudamos a carnicerías y tiendas a aumentar sus ganancias con un producto de alta rotación.",
    icon: BarChart3,
  },
];

export default function Benefits() {
  return (
    <section className="section-padding bg-white" id="nosotros">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-harvest-green mb-6">
            ¿Por qué elegir <span className="italic">La Cosecha</span>?
          </h2>
          <p className="text-lg text-harvest-ink/60">
            No solo vendemos tortillas, construimos relaciones sólidas con negocios 
            que buscan profesionalismo y consistencia en su cadena de suministro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-harvest-beige/50 border border-harvest-green/5 hover:border-harvest-accent/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-harvest-green text-white flex items-center justify-center mb-6 group-hover:bg-harvest-accent transition-colors">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-harvest-green mb-3">
                {benefit.title}
              </h3>
              <p className="text-harvest-ink/70 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
