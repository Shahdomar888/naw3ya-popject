"use client";

import React from 'react';

export default function PopulationDistribution() {
  const distributionData = [
    {
      id: 1,
      title: "مناطق يتركز بها السكان",
      image: "/images/crowdedcity.jpg", // صورة مدينة مزدحمة
      points: [
        { label: "السهول الفيضية", detail: "حيث وفره المياه والتربة الخصبة مثل وادي النيل." },
        { label: "السهول الساحلية", detail: "حيث المناخ المعتدل والنشاط السياحي." },
        { label: "المدن الكبرى", detail: "بسبب توافر فرص العمل والخدمات والمصانع." }
      ],
      theme: "emerald"
    },
    {
      id: 2,
      title: "مناطق يقل بها السكان",
      image: "/images/sparselypopulatedareas.jpg", // صورة صحراء أو منطقة نائية
      points: [
        { label: "المناطق الاستوائية", detail: "بسبب الغابات الكثيفة والظروف الطبيعية القاسية." },
        { label: "المناطق الصحراوية", detail: "مثل الصحراء الكبرى بسبب الندرة الشديدة للمياه." },
        { label: "المناطق القطبية والجبلية", detail: "بسبب شدة البرودة أو وعورة السطح." }
      ],
      theme: "orange"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 text-right bg-slate-50 min-h-screen" dir="rtl">
      
      {/* هيدر الدرس */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-4">
          توزيع السكان في العالم
        </h1>
        <div className="h-2 w-40 bg-purple-600 mx-auto rounded-full"></div>
      </header>

      {/* المحتوى الرئيسي */}
      <div className="grid gap-16">
        {distributionData.map((section) => (
          <section key={section.id} className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border-b-8 border-purple-200">
            <div className="flex flex-col lg:flex-row">
              
              {/* صورة القسم */}
              <div className="lg:w-1/3 h-64 lg:h-auto relative">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                   <h2 className="text-white text-3xl font-black">{section.title}</h2>
                </div>
              </div>

              {/* تفاصيل القسم */}
              <div className="lg:w-2/3 p-8 md:p-12">
                <div className="space-y-8">
                  {section.points.map((point, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-black">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-800 mb-2">{point.label}</h3>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">{point.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* حقيقة جغرافية */}
      <footer className="mt-20 bg-purple-600 rounded-[3rem] p-10 text-white text-center shadow-xl">
        <h3 className="text-2xl font-black mb-4 underline decoration-wavy">💡 حقيقة جغرافية:</h3>
        <p className="text-2xl md:text-3xl font-bold leading-relaxed">
          تعد قارة "آسيا" أكبر قارات العالم سكاناً، ويتركز معظمهم في دولتي الصين والهند.
        </p>
      </footer>
      
    </div>
  );
}