import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Peças', path: '/pecas' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(34)3691-1700</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Araxá - MG</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="/images/logo-prodoeste-0c9b6d90-1920w.png"
                alt="Prodoeste"
                className="h-6 w-auto"
              />
            </Link>

            {/* Right Side with Menu and Button */}
            <div className="flex items-center space-x-6">
              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center space-x-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-white border-b-2 border-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <Link
                to="/pecas"
                className="hidden md:flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Catálogo</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black border-t border-gray-700"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className={`font-medium py-2 transition-colors duration-200 ${
                        location.pathname === item.path
                          ? 'text-white border-l-4 border-white pl-4'
                          : 'text-gray-300 hover:text-white pl-4'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/pecas"
                    onClick={closeMenu}
                    className="flex items-center space-x-2 bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 mt-4"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Catálogo</span>
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
