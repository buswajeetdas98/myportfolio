import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const Header = ({
  activeSection = "home",
  onSectionChange = () => {},
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);

    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-zinc-800/50 ${isScrolled ? "py-3 shadow-lg shadow-[#6f00ff]/10" : "py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <span className="text-[#6f00ff] font-['Poppins'] tracking-wide transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_#6f00ff]">
                Portfolio
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6f00ff] to-purple-400 transition-all duration-300 group-hover:w-full"></div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-all duration-300 hover:text-[#6f00ff] hover:drop-shadow-[0_0_6px_#6f00ff] relative group ${activeSection === item.id ? "text-[#6f00ff]" : "text-white"}`}
            >
              {item.label}
              <div
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#6f00ff] to-purple-400 transition-all duration-300 ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
              ></div>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-[#6f00ff] transition-all duration-300 hover:drop-shadow-[0_0_8px_#6f00ff] p-2 rounded-lg hover:bg-zinc-800/50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-zinc-800/50 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#6f00ff] hover:drop-shadow-[0_0_6px_#6f00ff] text-left py-2 px-3 rounded-lg hover:bg-zinc-800/30 ${activeSection === item.id ? "text-[#6f00ff] bg-zinc-800/20" : "text-white"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
