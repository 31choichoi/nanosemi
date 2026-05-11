import { motion } from 'motion/react';
import { Cpu, Zap, BarChart, ShieldCheck } from 'lucide-react';

export default function FeaturedTech() {
  const techs = [
    {
      icon: <Cpu className="text-brand-red" size={32} />,
      title: "HBM4 AI Memory",
      desc: "세계 최고 속도의 AI 가속기용 초고성능 메모리 솔루션입니다. 나노 공정 기술의 집약체입니다.",
      specs: "적층 효율 20% 향상"
    },
    {
      icon: <Zap className="text-brand-orange" size={32} />,
      title: "LPCAMM2",
      desc: "차세대 모바일 및 PC를 위한 고대역폭, 초절전 메모리 규격으로 효율적인 설계를 지원합니다.",
      specs: "전력 효율 35% 개선"
    },
    {
      icon: <BarChart className="text-brand-red" size={32} />,
      title: "PIM Technology",
      desc: "데이터 처리 기능을 메모리 내부에 탑재하여 연산 속도를 획기적으로 개선합니다.",
      specs: "Processing in Memory"
    },
    {
      icon: <ShieldCheck className="text-brand-orange" size={32} />,
      title: "Zero Defect",
      desc: "완벽을 넘어선 품질 관리를 통해 고객사의 시스템 안정성을 보장합니다.",
      specs: "Global Quality Standard"
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="tech-innovation">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-brand-red mb-4 tracking-widest uppercase">Tech Innovation</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">초격차 기술로 여는 반도체 르네상스</h3>
          <p className="text-gray-600 leading-relaxed">
            나노반도체는 AI 시대를 선도하는 기술 리더십을 바탕으로 메모리 이상의 미래를 만듭니다. 우리는 매 순간 최고의 기술적 완성도를 추구합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techs.map((tech, i) => (
            <motion.div 
              key={tech.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl">
                {tech.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{tech.desc}</p>
              <div className="mt-auto px-4 py-1 bg-brand-orange/10 text-brand-orange text-[10px] font-bold rounded-full uppercase tracking-wider">
                {tech.specs}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner inspired by SK Hynix professional look */}
        <div className="mt-20 relative overflow-hidden rounded-[2.5rem] bg-gray-900 py-16 px-12 md:px-20 text-white">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                 <h4 className="text-3xl font-bold mb-4">함께 도전하고 성장할 인재를 찾습니다</h4>
                 <p className="text-white/60 max-w-md">세상을 바꾸는 기술, 나노반도체에서 당신의 꿈을 펼쳐보세요.</p>
              </div>
              <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-brand-orange hover:text-white transition-all whitespace-nowrap cursor-pointer">
                채용 서비스 바로가기
              </button>
           </div>
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-10 blur-[100px]" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange opacity-10 blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
