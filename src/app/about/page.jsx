export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 text-right" dir="rtl">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-blue-600 mb-4 italic">عن منصة نوعية</h1>
          <p className="text-2xl text-slate-400 font-bold">رؤية جديدة لتعلم الجغرافيا الطبيعية</p>
        </div>

        <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-blue-50 border border-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-3 h-full bg-blue-600"></div>
          <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">✨ رؤيتنا التعليمية</h2>
          <p className="text-2xl text-slate-600 leading-relaxed font-medium">
            تأسست هذه المنصة لتبسيط مادة الجغرافيا لطلابنا، حيث نؤمن بأن المعرفة تبدأ من فهم كوكبنا. تبلغ مساحة الكرة الأرضية <span className="text-blue-600 font-bold italic">510 مليون كم²</span>، وهي مليئة بالعجائب التي نهدف لاستكشافها معاً[cite: 1].
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2">🌍 محتوى المنهج</h3>
            <p className="text-slate-300 text-lg leading-relaxed font-bold opacity-90">
              نركز في دروسنا على تقسيم العالم إلى قارات العالم القديم (آسيا، أفريقيا، أوروبا) وقارات العالم الجديد (الأمريكتين، أستراليا، والقارة القطبية الجنوبية)[cite: 1].
            </p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">🎯 أهداف الوحدة</h3>
            <ul className="space-y-4">
              {["توزيع قارات العالم على خريطة صماء[cite: 1]", "تحديد موقع مصر المتوسط بين القارات[cite: 1]", "المقارنة بين مظاهر السطح المختلفة[cite: 1]"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-black text-lg">
                  <span className="text-blue-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}