export default function LessonTwo() {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-right" dir="rtl">
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        
        {/* عنوان الدرس الفخم */}
        <div className="bg-emerald-600 p-12 rounded-[3.5rem] text-white mb-12 shadow-2xl">
          <h1 className="text-5xl font-black mb-4">الدرس الثاني: قارات العالم الجديد</h1>
          <p className="text-2xl font-bold opacity-90">استكشاف الأمريكتين، أستراليا، والقارة القطبية</p>
        </div>

        <div className="space-y-16">
          {/* 1. أمريكا الشمالية */}
          <section className="bg-white p-10 rounded-[3rem] shadow-lg border-r-[15px] border-emerald-500">
            <h2 className="text-4xl font-black mb-6 text-emerald-800">أولاً: أمريكا الشمالية</h2>
            <p className="text-2xl leading-relaxed text-slate-700 font-medium mb-10">
              تقع في نصف الكرة الشمالي الغربي. يحدها شمالاً المحيط القطبي الشمالي، وشرقاً المحيط الأطلنطي، وغرباً المحيط الهادي.
            </p>
            <img src="/images/new-world.jpg" className="w-full rounded-[2.5rem] shadow-xl border-4 border-white" alt="خريطة أمريكا الشمالية" />
          </section>

          {/* 2. أمريكا الجنوبية */}
          <section className="bg-white p-10 rounded-[3rem] shadow-lg border-r-[15px] border-green-600">
            <h2 className="text-4xl font-black mb-6 text-green-900">ثانياً: أمريكا الجنوبية</h2>
            <p className="text-2xl leading-relaxed text-slate-700 font-medium mb-10">
              تمتد في نصف الكرة الجنوبي وتبدو في شكل أقرب للمثلث. يحدها شمالاً البحر الكاريبي، وشرقاً المحيط الأطلنطي.
            </p>
            <img src="/images/new-world.jpg" className="w-full rounded-[2.5rem] shadow-xl border-4 border-white" alt="خريطة أمريكا الجنوبية" />
          </section>

          {/* 3. أستراليا (الأوقيانوسية) */}
          <section className="bg-white p-10 rounded-[3rem] shadow-lg border-r-[15px] border-teal-500">
            <h2 className="text-4xl font-black mb-6 text-teal-800">ثالثاً: قارة أستراليا</h2>
            <p className="text-2xl leading-relaxed text-slate-700 font-medium mb-10">
              أصغر قارات العالم مساحة، وهي عبارة عن جزيرة يحيط بها الماء من جميع الجهات. يحدها شرقاً المحيط الهادي وغرباً المحيط الهندي.
            </p>
            <img src="/images/new-world.jpg" className="w-full rounded-[2.5rem] shadow-xl border-4 border-white" alt="خريطة أستراليا" />
          </section>
        </div>

        {/* زرار الرجوع */}
        <div className="mt-20 text-center">
          <a href="/unit1" className="bg-slate-900 text-white px-16 py-5 rounded-3xl text-2xl font-black shadow-xl hover:bg-emerald-700 transition-all inline-block">
            العودة للوحدة الأولى
          </a>
        </div>
      </div>
    </div>
  );
}