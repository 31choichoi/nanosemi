export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-20" id="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="flex relative items-center justify-center w-8 h-8">
                <div className="absolute w-full h-full border-t-2 border-r-2 border-brand-red rounded-tr" />
                <div className="absolute w-full h-full border-b-2 border-l-2 border-brand-orange rounded-bl" />
              </div>
              <span className="font-bold text-xl tracking-tight">나노반도체</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              경기도 이천시 나노로 1 나노반도체 본사<br />
              대표번호: 031-1234-5678 (평일 09:00 ~ 18:00)<br />
              이메일: contact@nanosemi.com
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-2 h-4 bg-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
                 <span className="sr-only">LinkedIn</span>
                 <div className="w-3 h-3 bg-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors text-xs font-bold">
                 Blog
              </a>
            </div>
          </div>
          
          <div>
            <h6 className="font-bold mb-6 text-sm uppercase tracking-wider">Solution</h6>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">DRAM</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NAND Flash</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HBM3E / HBM4</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SSD</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-6 text-sm uppercase tracking-wider">Information</h6>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">개인정보 처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이메일 무단수집거부</a></li>
              <li><a href="#" className="hover:text-white transition-colors">영상정보 처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">윤리 제보센터</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-6 text-sm uppercase tracking-wider">Family Site</h6>
            <div className="relative group">
              <button className="w-full p-3 border border-gray-700 flex justify-between items-center text-sm text-gray-400">
                선택해주세요
                <span className="text-[10px]">▼</span>
              </button>
              {/* Simplified dropdown simulation */}
              <div className="absolute bottom-full left-0 right-0 bg-gray-800 border border-gray-700 hidden group-hover:block">
                <a href="#" className="block p-3 text-sm hover:bg-gray-700">하이닉스</a>
                <a href="#" className="block p-3 text-sm hover:bg-gray-700">매그나칩</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs text-center md:text-left">
            COPYRIGHT © {currentYear} NANO SEMICONDUCTOR. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-gray-500 font-bold tracking-widest uppercase">
            <span>Powered by Nano AI</span>
            <div className="w-px h-3 bg-gray-800" />
            <span>HQ KOREA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
