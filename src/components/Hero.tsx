import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden" id="hero">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070" 
          alt="Semiconductor background" 
          className="w-full h-full object-cover grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded mb-6">
            INNOVATION FOR TOMORROW
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            세상을 움직이는<br />
            나노 반도체 기술
          </h1>
          <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
            우리는 기술의 한계를 넘어 더 나은 미래를 설계합니다.<br />
            초정밀 나노 공정을 통해 구현하는 차세대 AI 반도체 솔루션.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-brand-red text-white flex items-center gap-2 font-bold hover:bg-brand-red/90 transition-all cursor-pointer group">
              솔루션 상세보기 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/20 transition-all cursor-pointer">
              기업 홍보영상
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative side element (Vertical text) */}
      <div className="absolute right-6 bottom-32 hidden lg:block vertical-rl transform rotate-180">
        <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-bold">
          2026 NANO SEMICONDUCTOR BRAND IDENTITY
        </span>
      </div>
    </section>
  );
}
