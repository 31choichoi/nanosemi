import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };

  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (name: string) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      setActiveAccordion(null);
    }
  };

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: '기업', id: 'brand-identity', links: ['CEO 메시지', '기업문화', '윤리경영', '브랜드 정체성'] },
    { name: '기술', id: 'tech-innovation', links: ['반도체 솔루션', '핵심기술', '연구개발'] },
    { name: '지속가능경영', id: 'brand-identity', links: ['ESG 경영', '함께하는 경영', '내일을 위한 반도체'] },
    { name: '뉴스룸', id: 'footer', links: ['보도자료', '스토리', '미디어 라이브러리'] },
    { name: '인재개발', id: 'tech-innovation', links: ['인재상', '채용정보', '복리후생'] },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm h-20' : 'bg-transparent h-24'
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="flex items-center">
            {/* Simple representation of SK Wings style logo */}
            <div className="flex relative items-center justify-center w-10 h-10">
              <div className="absolute w-full h-full border-t-4 border-r-4 border-brand-red rounded-tr-lg" />
              <div className="absolute w-full h-full border-b-4 border-l-4 border-brand-orange rounded-bl-lg" />
              <span className={`text-[10px] font-bold italic transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>NS</span>
            </div>
            <div className="ml-3 flex flex-col items-start">
              <span className={`font-bold text-xl tracking-tight leading-none transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>나노반도체</span>
              <span className={`text-[9px] uppercase tracking-widest font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>Nano Semiconductor</span>
            </div>
          </div>
        </button>

        {/* ... existing desktop nav ... */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="group relative">
              <button 
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-1 font-medium transition-colors cursor-pointer py-2 ${
                  isScrolled ? 'text-gray-700 hover:text-brand-orange' : 'text-gray-700 md:text-white hover:text-brand-orange md:hover:text-white/80'
                }`}
              >
                {item.name}
              </button>
              {/* Dropdown Menu (Simplified) */}
              <div className="absolute top-full left-0 hidden group-hover:block pt-4">
                <div className="bg-white shadow-xl rounded-lg border border-gray-100 p-4 min-w-[180px]">
                  {item.links.map(link => (
                    <a key={link} href="#" className="block py-2 text-sm text-gray-600 hover:text-brand-orange transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <button className={`cursor-pointer ${isScrolled ? 'text-gray-700' : 'text-gray-700 md:text-white'}`}>
            <Search size={22} />
          </button>
          <button className="flex items-center gap-1 cursor-pointer">
             <Globe size={20} className={isScrolled ? 'text-gray-700' : 'text-gray-700 md:text-white'} />
             <span className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-700 md:text-white'}`}>KR</span>
             <ChevronDown size={14} className={isScrolled ? 'text-gray-700' : 'text-gray-700 md:text-white'} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden p-2 z-[70] transition-colors duration-300 ${mobileMenuOpen ? 'text-gray-900' : isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden z-50"
            />
            {/* Sidebar content (80% width, full height) */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-[320px] bg-white z-[60] lg:hidden overflow-y-auto pt-32 px-10 shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.3)] flex flex-col"
            >
              <div className="flex flex-col gap-4 flex-grow">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 pb-4">
                    <button 
                      onClick={() => toggleAccordion(item.name)}
                      className="text-lg font-bold text-gray-900 flex items-center justify-between w-full text-left py-2 active:bg-gray-50"
                    >
                      {item.name}
                      <ChevronDown 
                        size={18} 
                        className={`text-gray-400 transition-transform duration-300 ${activeAccordion === item.name ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {activeAccordion === item.name && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-4 pl-2 pt-4 pb-2">
                            {item.links.map(link => (
                              <a 
                                key={link} 
                                href="#" 
                                className="text-gray-500 hover:text-brand-orange text-sm active:text-brand-orange transition-colors"
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToSection(item.id);
                                }}
                              >
                                {link}
                              </a>
                            ))}
                            <button 
                              onClick={() => scrollToSection(item.id)}
                              className="text-brand-orange text-xs font-bold mt-2 flex items-center gap-1"
                            >
                              바로가기 <ChevronDown size={12} className="-rotate-90" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-6 pb-20 pt-8 border-t border-gray-100">
                 <button className="flex items-center gap-3 text-gray-900 font-bold text-sm">
                   <Globe size={18} className="text-gray-400" /> KR
                 </button>
                 <button className="flex items-center gap-3 text-gray-900 font-bold text-sm">
                   <Search size={18} className="text-gray-400" /> 검색
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
