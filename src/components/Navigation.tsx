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
    <nav 
      className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8" role="menubar">
            {navItems.map(item => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-slate-300 hover:text-orange-400 transition-colors duration-200 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded px-2 py-1"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-orange-400 absolute right-4 p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden pb-4 bg-slate-900 border-t border-slate-700"
            role="menu"
          >
            {navItems.map(item => (
              <a 
                key={item.href} 
                href={item.href} 
                className="block py-3 px-2 text-slate-300 hover:text-orange-400 transition-colors duration-200 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-inset rounded" 
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
