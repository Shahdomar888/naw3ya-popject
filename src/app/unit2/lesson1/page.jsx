"use client";

import React from 'react';

export default function HumanRaces() {
  const races = [
    {
      id: 1,
      name: "السلالة السوداء (الزنجية)",
      desc: "تتميز بالبشرة الداكنة، والأنف العريض، والشفاه الغليظة.",
      image: "/images/image4.jpg",
      borderColor: "border-slate-900",
      textColor: "text-slate-900"
    },
    {
      id: 2,
      name: "السلالة الصفراء (المغولية)",
      desc: "تتميز بالبشرة الصفراء، والعيون المنحرفة، والشعر الأسود المسترسل.",
      image: "/images/image5.jpg",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-700"
    },
    {
      id: 3,
      name: "السلالة البيضاء (القوقازية)",
      desc: "تتميز بالبشرة البيضاء الوردية، والشعر المموج، والشفاه الرفيعة.",
      image: "/images/image6.jpg",
      borderColor: "border-blue-500",
      textColor: "text-blue-700"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-12 text-right bg-white" dir="rtl">
      
      {/* العنوان الرئيسي: نص فقط بدون أي صور أو أيقونات */}
      <div className="mb-16 border-b-8 border-emerald-500 pb-6 inline-block w-full">
        <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight">
          السلالات البشرية الرئيسية في العالم
        </h1>
      </div>

      {/* كروت السلالات */}
      <div className="space-y-12">
        {races.map((race) => (
          <div 
            key={race.id} 
            className={`flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-[3rem] border-4 ${race.borderColor} shadow-2xl transition-transform hover:scale-[1.02]`}
          >
            {/* النصوص */}
            <div className="flex-grow order-2 md:order-1">
              <h2 className={`text-3xl md:text-5xl font-black mb-4 ${race.textColor}`}>
                {race.id}. {race.name}
              </h2>
              <p className="text-xl md:text-3xl font-bold text-slate-600 leading-relaxed italic">
                {race.desc}
              </p>
            </div>

            {/* صورة السلالة (دي اللي كانت شغالة عندك في السكرين شوت) */}
            <div className="w-56 h-56 md:w-72 md:h-56 flex-shrink-0 order-1 md:order-2 overflow-hidden rounded-[2.5rem] border-4 border-slate-50 shadow-lg">
              <img 
                src={race.image} 
                className="w-full h-full object-cover" 
                alt={race.name}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400?text=Race+Photo";
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ملحوظة ختامية شيك */}
      <div className="mt-24 p-12 rounded-[4rem] bg-slate-900 text-white text-center shadow-2xl">
        <p className="text-2xl md:text-4xl font-black leading-tight">
          "في الوقت الحاضر، لا توجد سلالات نقية تماماً نتيجة لانصهار السلالات واختلاطها."
        </p>
      </div>

    </div>
  );
}