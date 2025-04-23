
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/3e7c53b2-1a93-4204-b584-6168c13e1edb.png" 
                alt="MORE Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
              <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>
                Products
              </Link>
              <Link to="/our-story" className={`nav-link ${location.pathname === '/our-story' ? 'active' : ''}`}>
                Our Story
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-more-darkGray hover:text-more-green focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md">
          <Link 
            to="/" 
            className={`block px-3 py-2 rounded-md font-medium ${location.pathname === '/' 
              ? 'text-more-green' 
              : 'text-more-darkGray hover:text-more-green'}`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`block px-3 py-2 rounded-md font-medium ${location.pathname === '/products' 
              ? 'text-more-green' 
              : 'text-more-darkGray hover:text-more-green'}`}
          >
            Products
          </Link>
          <Link 
            to="/our-story" 
            className={`block px-3 py-2 rounded-md font-medium ${location.pathname === '/our-story' 
              ? 'text-more-green' 
              : 'text-more-darkGray hover:text-more-green'}`}
          >
            Our Story
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
