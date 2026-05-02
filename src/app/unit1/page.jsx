"use client";
import React from 'react';
import Link from 'next/link';

export default function UnitOnePage() {
  const lessons = [
    {
      id: 1,
      title: "الدرس الأول: قارات العالم القديم",
      desc: "آسيا - أفريقيا - أوروبا",
      color: "bg-blue-600",
      borderColor: "border-blue-600",
      link: "/unit1/lesson1" // ده هيفتح الدرس الأول
    },
    {
      id: 2,
      title: "الدرس الثاني: قارات العالم الجديد",
      desc: "أمريكا الشمالية - أمريكا الجنوبية - أستراليا - القارة القطبية",
      color: "bg-emerald-600",
      borderColor: "border-emerald-600",
      link: "/unit1/lesson2" // ده اللي كان بيفتح عندك علطول
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12 text-right" dir="rtl">
      {/* هيدر الصفحة */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-12 rounded-[3.5rem] text-white mb-16 shadow-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4">الوحدة الأولى</h1>
        <p className="text-2xl opacity-90 font-bold">الجغرافيا الطبيعية للعالم</p>
      </div>

      {/* قائمة الدروس */}
      <div className="grid gap-10">
        {lessons.map((lesson) => (
          <div 
            key={lesson.id} 
            className={`bg-white p-8 rounded-[3rem] border-r-[20px] ${lesson.borderColor} shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 transition-transform hover:scale-[1.02]`}
          >
            <div>
              <h2 className="text-3xl font-black text-slate-800 mb-2">{lesson.title}</h2>
              <p className="text-xl font-bold text-slate-500">{lesson.desc}</p>
            </div>
            
            <Link 
              href={lesson.link} 
              className={`${lesson.color} text-white px-12 py-5 rounded-2xl font-black text-2xl hover:shadow-2xl transition-all`}
            >
              دخول الدرس
            </Link>
          </div>
        ))}
      </div>

      {/* زرار للرجوع للخلف */}
      <div className="mt-16 text-center">
        <Link href="/units" className="text-slate-400 font-bold hover:text-slate-600 underline text-xl">
          العودة لقائمة الوحدات
        </Link>
      </div>
    </div>
  );
}