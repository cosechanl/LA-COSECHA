import { motion } from "motion/react";
import { Send, Phone, MapPin, Mail } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="section-padding bg-white" id="contacto">
      <div className="container mx-auto">
        <div className="bg-harvest-green rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/3 p-12 lg:p-20 bg-harvest-olive text-white flex flex-col">
            <h2 className="text-4xl mb-8 font-serif italic text-harvest-accent">Hablemos de negocios</h2>
            <p className="text-white/70 mb-12 leading-relaxed">
              ¿Listo para mejorar la calidad de tu producto y aumentar tu rentabilidad? 
              Nuestro equipo comercial te contactará en menos de 2 horas.
            </p>
            
            <div className="space-y-8 mt-auto">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-harvest-accent">Llámanos</p>
                  <p className="font-bold">+52 (81) 1234 5678</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-harvest-accent">Ubicación</p>
                  <p className="font-bold text-sm">Parque Industrial, Nuevo León, México</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-harvest-accent">Correo</p>
                  <p className="font-bold">ventas@lacosecha.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-12 lg:p-20 bg-white">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold tracking-widest text-harvest-ink/50 mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    className="w-full bg-harvest-beige/50 border border-harvest-green/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 ring-harvest-accent/50 transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold tracking-widest text-harvest-ink/50 mb-2">Nombre del Negocio</label>
                  <input
                    type="text"
                    className="w-full bg-harvest-beige/50 border border-harvest-green/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 ring-harvest-accent/50 transition-all"
                    placeholder="Ej. Carnicería El Regio"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold tracking-widest text-harvest-ink/50 mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    className="w-full bg-harvest-beige/50 border border-harvest-green/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 ring-harvest-accent/50 transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold tracking-widest text-harvest-ink/50 mb-2">Volumen Estimado (kg/día)</label>
                  <select className="w-full bg-harvest-beige/50 border border-harvest-green/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 ring-harvest-accent/50 transition-all">
                    <option>Menos de 20kg</option>
                    <option>20kg - 100kg</option>
                    <option>100kg - 500kg</option>
                    <option>Más de 500kg</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold tracking-widest text-harvest-ink/50 mb-2">Mensaje o Dudas</label>
                <textarea
                  rows={4}
                  className="w-full bg-harvest-beige/50 border border-harvest-green/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 ring-harvest-accent/50 transition-all"
                  placeholder="Compártenos tus requerimientos..."
                ></textarea>
              </div>

              <button className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3">
                <Send size={20} />
                Solicitar Cotización Mayorista
              </button>
              
              <p className="text-center text-sm text-harvest-ink/40">
                Al enviar este formulario, aceptas que nuestro equipo comercial te contacte vía WhatsApp o correo electrónico.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
