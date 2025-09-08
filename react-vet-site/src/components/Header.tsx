import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: "Anasayfa", href: "#" },
    { name: "Hakkımızda", href: "#" },
    { name: "Hizmetler", href: "#" },
    { name: "İletişim", href: "#" },
  ];
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-4 items-center">
          {/* Icon and Text */}
          <a href="#" className="flex items-center gap-3">
            <div className="bg-orange-500 p-3 rounded-full">
              <Heart color="white"></Heart>
            </div>
            <span className="text-2xl">Vet</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="space-x-8 hidden md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium 
              transition-colors duration-200 text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* Burger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden rounded-md text-gray-700 hover:text-orange-600 cursor-pointer hover:bg-orange-50"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-sm font-medium 
              transition-colors duration-200 text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
