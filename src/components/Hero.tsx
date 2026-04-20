import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/maize/1920/1080?blur=5"
          alt="Maíz background"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-harvest-beige via-transparent to-harvest-beige" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-harvest-accent/10 text-harvest-accent text-sm font-bold tracking-widest uppercase mb-6">
              NUEVO LEÓN · PRESIÓN Y CALIDAD
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-harvest-green leading-[0.9] mb-8">
              La Tortilla que <br />
              <span className="italic text-harvest-accent">Impulsa</span> tu Negocio
            </h1>
            <p className="text-xl text-harvest-ink/70 max-w-2xl mb-10 leading-relaxed">
              Frescura garantizada, producción a gran escala y el sabor auténtico 
              que tus clientes buscan. Somos el aliado estratégico de carnicerías, 
              restaurantes y distribuidores en todo el Norte del país.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contacto"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Cotiza Hoy mismo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/5211234567890"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Directo
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
              <div className="text-center">
                <span className="block text-2xl font-bold font-serif">+10k</span>
                <span className="text-xs uppercase tracking-tighter">Kilos Diarios</span>
              </div>
              <div className="h-8 w-px bg-harvest-green/20" />
              <div className="text-center">
                <span className="block text-2xl font-bold font-serif">+500</span>
                <span className="text-xs uppercase tracking-tighter">Clientes Activos</span>
              </div>
              <div className="h-8 w-px bg-harvest-green/20" />
              <div className="text-center">
                <span className="block text-2xl font-bold font-serif">100%</span>
                <span className="text-xs uppercase tracking-tighter">Maíz Seleccionado</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="aspect-square relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://picsum.photos/seed/tortilla/800/800"
                alt="Tortillas frescas"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-harvest-green/10 mix-blend-overlay" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-harvest-green/10 max-w-[200px]">
              <p className="text-xs font-bold text-harvest-accent uppercase tracking-widest mb-1">
                Garantía
              </p>
              <p className="text-sm font-medium text-harvest-ink leading-tight">
                Entregas puntuales en Nuevo León y alrededores.
              </p>
            </div>
          </motion.div>
          
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-harvest-olive/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
