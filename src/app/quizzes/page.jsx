"use client";
import React from 'react';
import Link from 'next/link';

export default function QuizzesMainPage() {
  return (
    <div className="min-h-screen bg-white p-10 text-right" dir="rtl">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl font-black text-slate-900 mb-4">نظام الاختبارات</h1>
        <p className="text-slate-600 text-xl font-bold">اختر الوحدة لبدء التحدي:</p>
      </div>
      
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {/* كارت الوحدة الأولى */}
        <Link href="/quizzes/unit1" className="bg-slate-900 p-10 rounded-[3rem] flex justify-between items-center hover:bg-blue-900 transition-all shadow-2xl border-4 border-white">
          <div className="text-right">
            <span className="text-blue-400 font-black text-sm uppercase mb-2 block">Section 01</span>
            <h2 className="text-3xl font-black text-white">اختبار الوحدة الأولى: جغرافيا العالم</h2>
          </div>
          <span className="text-white text-4xl">←</span>
        </Link>

        {/* كارت الوحدة الثانية */}
        <Link href="/quizzes/unit2" className="bg-slate-800 p-10 rounded-[3rem] flex justify-between items-center hover:bg-purple-900 transition-all shadow-2xl border-4 border-white">
          <div className="text-right">
            <span className="text-purple-400 font-black text-sm uppercase mb-2 block">Section 02</span>
            <h2 className="text-3xl font-black text-white">اختبار الوحدة الثانية: جغرافيا السكان</h2>
          </div>
          <span className="text-white text-4xl">←</span>
        </Link>
      </div>
    </div>
  );
}