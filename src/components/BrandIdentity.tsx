import { motion } from 'motion/react';

export default function BrandIdentity() {
  const values = [
    {
      title: "Integrity",
      desc: "윤리와 도덕을 기반으로 가장 투명한 기술을 지향합니다.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: "Innovation",
      desc: "불가능을 가능으로 바꾸는 끊임없는 기술 혁신.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Sustainability",
      desc: "미래 세대를 위해 환경을 생각하는 지속 가능한 경영.",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white" id="brand-identity">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
             <h2 className="text-sm font-bold text-brand-orange mb-4 tracking-widest uppercase">Brand Identity</h2>
             <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
               나노반도체가 만드는<br />
               새로운 기술의 표본
             </h3>
          </div>
          <p className="text-gray-500 max-w-sm mb-2 leading-relaxed">
            나노반도체는 초정밀 기술력과 열린 기업문화를 바탕으로 전 세계 고객에게 신뢰받는 최고의 반도체 기업으로 성장하고 있습니다.
          </p>
        </div>

        {/* Logo Explanation Section inspired by SK site */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-y border-gray-100 py-20 mb-24">
          <div className="flex justify-center p-12 bg-gray-50 rounded-2xl relative overflow-hidden group">
            <div className="relative z-10 flex items-center justify-center scale-150">
               {/* Reusable Logo concept */}
                <div className="flex relative items-center justify-center w-32 h-32">
                  <div className="absolute w-full h-full border-t-[10px] border-r-[10px] border-brand-red rounded-tr-3xl" />
                  <div className="absolute w-full h-full border-b-[10px] border-l-[10px] border-brand-orange rounded-bl-3xl" />
                  <span className="text-4xl font-extrabold text-gray-800 italic">NS</span>
                </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-brand-red/10 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:bg-brand-orange/10 transition-all duration-700" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">NS 날개 (The Nano Wings)</h4>
            <p className="text-gray-600 mb-8 leading-relaxed">
              나노반도체의 기업이미지는 '미래를 향해 웅비하는 날개'를 형상화하였습니다.
              오렌지색과 빨강색의 조화는 열정과 에너지를 상징하며, 정밀한 나노 기술의 결합을 곡선과 직선의 조화로 표현했습니다.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 p-6 bg-gray-50 rounded-xl">
                 <div className="w-6 h-6 bg-brand-red rounded-full mb-3" />
                 <p className="text-xs font-bold text-gray-400 uppercase mb-1">Happiness Red</p>
                 <p className="text-sm font-medium text-gray-800">도전과 열정</p>
              </div>
              <div className="flex-1 p-6 bg-gray-50 rounded-xl">
                 <div className="w-6 h-6 bg-brand-orange rounded-full mb-3" />
                 <p className="text-xs font-bold text-gray-400 uppercase mb-1">Creativity Orange</p>
                 <p className="text-sm font-medium text-gray-800">창의와 가치</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
             <motion.div 
               key={v.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="group relative overflow-hidden rounded-2xl h-[400px]"
             >
                <img 
                  src={v.img} 
                  alt={v.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                   <h5 className="text-2xl font-bold text-white mb-2">{v.title}</h5>
                   <p className="text-white/70 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     {v.desc}
                   </p>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
