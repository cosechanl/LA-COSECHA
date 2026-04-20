import { motion } from "motion/react";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Productos", href: "#productos" },
    { name: "Mayoreo", href: "#mayoreo" },
    { name: "Proceso", href: "#proceso" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-harvest-beige/80 backdrop-blur-md border-b border-harvest-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-harvest-green rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">
              C
            </div>
            <span className="font-serif text-2xl font-bold text-harvest-green tracking-tight">
              La Cosecha
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-harvest-ink/80 hover:text-harvest-accent font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-harvest-green text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-harvest-olive transition-all"
            >
              <ShoppingBag size={18} />
              Cotizar
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-harvest-green p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-harvest-beige border-b border-harvest-green/10 px-4 pt-2 pb-6 space-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-lg font-medium text-harvest-ink hover:text-harvest-accent border-b border-harvest-green/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-harvest-green text-white py-4 rounded-xl mt-4 font-bold"
          >
            Cotizar Ahora
          </a>
        </motion.div>
      )}
    </nav>
  );
}
