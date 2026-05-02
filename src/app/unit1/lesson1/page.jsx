export default function LessonOne() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 text-right" dir="rtl">
      {/* العنوان الرئيسي */}
      <div className="bg-blue-600 p-12 rounded-[3.5rem] text-white mb-12 shadow-2xl transition-transform hover:scale-[1.01]">
        <h1 className="text-5xl font-black mb-4">الدرس الأول: قارات العالم القديم</h1>
        <p className="text-2xl font-bold opacity-90">رحلة في أقدم بقاع الأرض: آسيا - أفريقيا - أوروبا</p>
      </div>

      {/* قسم نسب الماء واليابس - الصور مكبرة */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white p-10 rounded-[3rem] border-b-[12px] border-blue-500 shadow-xl flex flex-col items-center">
          <img src="/images/image2.jpg" className="w-64 h-64 object-contain mb-8" alt="المحيطات" />
          <p className="text-2xl font-bold text-slate-500">المحيطات والبحار</p>
          <p className="text-7xl font-black text-blue-600">70.7%</p>
        </div>
        <div className="bg-white p-10 rounded-[3rem] border-b-[12px] border-orange-500 shadow-xl flex flex-col items-center">
          <img src="/images/landspace.jpg" className="w-64 h-64 object-contain mb-8" alt="اليابس" />
          <p className="text-2xl font-bold text-slate-500">اليابس (القارات)</p>
          <p className="text-7xl font-black text-orange-600">29.3%</p>
        </div>
      </div>

      {/* محتوى القارات الثلاث */}
      <div className="space-y-16">
        
        {/* 1. قارة آسيا */}
        <section className="bg-white p-12 rounded-[4rem] shadow-lg border border-slate-100">
          <h2 className="text-4xl font-black mb-8 text-blue-800 border-r-[12px] border-blue-800 pr-6">أولاً: قارة آسيا</h2>
          <p className="text-2xl leading-relaxed text-slate-700 font-medium mb-10">
            تعتبر آسيا أكبر قارات العالم مساحة، يحدها المحيط القطبي الشمالي شمالاً، والمحيط الهادي شرقاً، والمحيط الهندي جنوباً، ويفصلها عن أوروبا جبال أورال.
          </p>
          <img src="/images/oldworld.jpg" className="w-full rounded-[3rem] shadow-2xl border-8 border-white mb-6" />
        </section>

        {/* 2. قارة أفريقيا */}
        <section className="bg-slate-50 p-12 rounded-[4rem] shadow-lg border border-slate-100">
          <h2 className="text-4xl font-black mb-8 text-emerald-800 border-r-[12px] border-emerald-800 pr-6">ثانياً: قارة أفريقيا</h2>
          <p className="text-2xl leading-relaxed text-slate-700 font-medium mb-10">
            ثاني قارات العالم مساحة، يحدها شمالاً البحر المتوسط الذي يفصلها عن أوروبا، وشرقاً البحر الأحمر والمحيط الهندي، وغرباً المحيط الأطلنطي.
          </p>
          <div className="bg-white p-4 rounded-[3rem] shadow-inner">
             {/* يمكنك وضع صورة مخصصة لأفريقيا هنا */}
             <img src="/images/afircamap.jpg" className="w-full rounded-[2.5rem]" />
          </div>
        </section>

        {/* 3. قارة أوروبا */}
        <section className="bg-white p-12 rounded-[4rem] shadow-lg border border-slate-100">
          <h2 className="text-4xl font-black mb-8 text-indigo-800 border-r-[12px] border-indigo-800 pr-6">ثالثاً: قارة أوروبا</h2>
          <p className="text-2xl leading-relaxed text-slate-700 font-medium mb-10">
            تتميز سواحلها بالتعرج وكثرة الجزر، مما ساعد على إنشاء الموانئ الطبيعية. يحدها شمالاً المحيط القطبي الشمالي، وجنوباً البحر المتوسط، وغرباً المحيط الأطلنطي.
          </p>
          <img src="/images/europeanmap.jpg" className="w-full rounded-[3rem] shadow-2xl border-8 border-white" />
        </section>

      </div>

      {/* خاتمة الدرس */}
      <div className="mt-20 bg-blue-50 p-10 rounded-[3rem] text-center">
        <p className="text-2xl font-black text-blue-900">هذا هو العالم القديم.. مهد الحضارات!</p>
      </div>
    </div>
  );
}