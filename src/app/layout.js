import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-slate-50 antialiased">
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* اللوجو */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center text-white font-black">N</div>
              <span className="text-2xl font-black text-slate-800">منصه نوعية التعليمية</span>
            </div>
            
            {/* أزرار التنقل السريع */}
            <div className="hidden md:flex items-center gap-8 font-bold text-slate-600">
              <a href="/" className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1">الرئيسية</a>
              <a href="/units" className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1">المقرر</a>
              <a href="/quizzes" className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1">الاختبارات</a>
             <a 
  href="https://wa.me/01002502843?text=أهلاً بك، أريد الاستفسار عن المنصة التعليمية" 
  target="_blank" 
  className="hover:text-green-500 transition-all border-b-2 border-transparent"
>
  تواصل معنا
</a>
              <a href="/about" className="hover:text-blue-600 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1">عن المشروع</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}