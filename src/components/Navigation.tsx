import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#portfolio",
    label: "Portfolio"
  }, {
    href: "#contact",
    label: "Contact"
  }];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="text-slate-300 hover:text-orange-400 transition-colors duration-200 font-medium">
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-orange-400 absolute right-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-slate-900 border-t border-slate-700">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="block py-3 text-slate-300 hover:text-orange-400 transition-colors duration-200 font-medium" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
