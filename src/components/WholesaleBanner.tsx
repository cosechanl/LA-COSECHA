import { motion } from "motion/react";
import { TrendingUp, Globe, Truck } from "lucide-react";

export default function WholesaleBanner() {
  return (
    <section className="section-padding bg-harvest-olive text-white" id="mayoreo">
      <div className="container mx-auto">
        <div className="bg-harvest-beige rounded-[3rem] p-12 lg:p-20 text-harvest-green flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
              Programa de <br />
              <span className="italic text-harvest-accent">Distribuidores 2024</span>
            </h2>
            <p className="text-xl text-harvest-ink/70 mb-12">
              Estamos expandiendo nuestra red en Nuevo León y próximamente en el Sur de Texas. 
              Únase a una marca reconocida por su calidad y reciba soporte logístico completo.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: TrendingUp, title: "Márgenes de hasta el 40%", desc: "Esquema altamente rentable para tu ruta de distribución." },
                { icon: Globe, title: "Exclusividad de Zona", desc: "Protegemos tu territorio para asegurar tu crecimiento." },
                { icon: Truck, title: "Soporte de Carga", desc: "Ayuda con racks y equipos de exhibición para tus clientes." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-harvest-green text-white flex items-center justify-center flex-shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-harvest-ink/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="aspect-square bg-harvest-green/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] blur-3xl" />
            <motion.div
              initial={{ rotate: 10, scale: 0.9 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="https://picsum.photos/seed/truck/800/800"
                alt="Distribución"
                className="rounded-[2.5rem] shadow-2xl skew-y-2 group-hover:skew-y-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
