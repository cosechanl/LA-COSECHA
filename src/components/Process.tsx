import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Selección de Grano",
    desc: "Elegimos el mejor maíz nacional, asegurando pureza y calidad desde el origen.",
  },
  {
    num: "02",
    title: "Nixtamalización",
    desc: "Proceso tradicional con tecnología moderna para lograr el balance perfecto.",
  },
  {
    num: "03",
    title: "Molienda de Piedra",
    desc: "Molinos volcánicos que preservan la textura artesanal en una escala industrial.",
  },
  {
    num: "04",
    title: "Control de Calidad",
    desc: "Cada paquete es revisado para asegurar peso exacto y frescura óptima.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-harvest-green text-white" id="proceso">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl mb-8">
              De la tierra a su mesa: <br />
              Nuestra <span className="italic text-harvest-accent">maestría</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="block text-4xl font-serif text-harvest-accent mb-4 opacity-50">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12">
              <a href="#contacto" className="btn-primary bg-harvest-accent hover:bg-white hover:text-harvest-accent">
                Conoce nuestras instalaciones
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
              <img
                src="https://picsum.photos/seed/factory/800/1000"
                alt="Producción de tortillas"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-harvest-green/20" />
            </div>
            {/* Design element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-harvest-accent rounded-tr-[2rem]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-harvest-accent rounded-bl-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
