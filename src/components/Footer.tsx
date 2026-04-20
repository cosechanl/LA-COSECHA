import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-harvest-green text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-harvest-green font-serif font-bold text-xl">
                C
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                La Cosecha
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Tortillería líder en Nuevo León enfocada en el sector B2B. 
              Calidad premium y frescura diaria para su negocio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-harvest-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-harvest-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-harvest-accent transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-harvest-accent transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-harvest-accent transition-colors">Nosotros</a></li>
              <li><a href="#productos" className="hover:text-harvest-accent transition-colors">Productos</a></li>
              <li><a href="#mayoreo" className="hover:text-harvest-accent transition-colors">Mayoreo</a></li>
              <li><a href="#contacto" className="hover:text-harvest-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Productos</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#productos" className="hover:text-harvest-accent transition-colors">Tortilla Blanca</a></li>
              <li><a href="#productos" className="hover:text-harvest-accent transition-colors">Tortilla Amarilla</a></li>
              <li><a href="#productos" className="hover:text-harvest-accent transition-colors">Tortilla Taquera</a></li>
              <li><a href="#productos" className="hover:text-harvest-accent transition-colors">Totopos</a></li>
              <li><a href="#productos" className="hover:text-harvest-accent transition-colors">Masa Fina</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="text-harvest-accent flex-shrink-0" size={18} />
                <span>Parque Industrial Sta. Catarina, Nuevo León, México</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-harvest-accent flex-shrink-0" size={18} />
                <span>+52 (81) 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-harvest-accent flex-shrink-0" size={18} />
                <span>ventas@lacosecha.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2024 Tortillería La Cosecha. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
