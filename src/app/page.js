import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white text-right p-6" dir="rtl">
      {/* خلفية جمالية خفيفة */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-black mb-6 tracking-tighter">
          منصة <span className="text-blue-500">الجغرافيا</span> التعليمية
        </h1>
        <p className="text-2xl mb-12 text-slate-400 font-bold">
          رحلتك المعرفية لاستكشاف كوكب الأرض تبدأ من هنا
        </p>
        
        <Link href="/units" className="group bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-3xl text-2xl font-black shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all flex items-center gap-4 mx-auto w-fit">
          ابدأ رحلة التعلم 
          <span className="group-hover:translate-x-[-10px] transition-transform">←</span>
        </Link>
      </div>
    </div>
  );
}