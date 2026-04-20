import { motion } from "motion/react";
import { Check } from "lucide-react";

const products = [
  {
    name: "Tortilla de Maíz Blanco",
    type: "Premium",
    desc: "La clásica tortilla de mesa, con el nixtamal perfecto para acompañar cualquier platillo.",
    img: "https://picsum.photos/seed/tort1/600/400",
    features: ["Suavidad extendida", "Nixtamal natural", "Ideal para mesa"],
  },
  {
    name: "Tortilla Taquera",
    type: "Especializada",
    desc: "Diseñada para aguantar la grasa y el calor de la plancha sin romperse. El aliado del parrillero.",
    img: "https://picsum.photos/seed/tort2/600/400",
    features: ["Alta resistencia", "Tamaño estándar 12cm", "Doble cara"],
  },
  {
    name: "Tortilla Amarilla",
    type: "Industrial",
    desc: "Sabor intenso a maíz con una textura más firme, preferida para frituras y botanas.",
    img: "https://picsum.photos/seed/tort3/600/400",
    features: ["Color natural", "Crujiente al freír", "Sabor tradicional"],
  },
];

export default function Products() {
  return (
    <section className="section-padding" id="productos">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl text-harvest-green mb-6">
              Variedad diseñada para <span className="italic">cada necesidad</span>
            </h2>
            <p className="text-lg text-harvest-ink/60">
              Desde la mesa del restaurante hasta la vitrina de la carnicería, 
              nuestros productos cumplen con los más altos estándares de Nuevo León.
            </p>
          </div>
          <a href="#contacto" className="btn-secondary whitespace-nowrap">
            Ver catálogo completo
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-harvest-green/5 border border-harvest-green/5 group hover:shadow-2xl transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-harvest-accent text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                  {product.type}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-harvest-green mb-4">
                  {product.name}
                </h3>
                <p className="text-harvest-ink/70 mb-6 flex-1">
                  {product.desc}
                </p>
                <div className="space-y-3 mb-8">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-harvest-ink/80">
                      <div className="bg-harvest-accent/10 text-harvest-accent p-1 rounded-full">
                        <Check size={12} />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
                <a href="#contacto" className="w-full text-center py-3 bg-harvest-green/5 text-harvest-green font-bold rounded-xl hover:bg-harvest-green hover:text-white transition-all">
                  Cotizar Mayoreo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
