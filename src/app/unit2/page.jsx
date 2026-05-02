"use client";
import Link from 'next/link';

export default function UnitTwo() {
  return (
    <div className="max-w-5xl mx-auto p-12 text-right" dir="rtl">
      <div className="bg-indigo-600 p-10 rounded-[3rem] text-white mb-10 text-center">
        <h1 className="text-4xl font-black">دروس الوحدة الثانية: جغرافيا السكان</h1>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-[2rem] border-r-[15px] border-indigo-600 shadow-lg flex justify-between items-center">
          <h2 className="text-2xl font-black text-slate-800">الدرس الأول: السلالات البشرية</h2>
          <Link href="/unit2/lesson1" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold">دخول الدرس</Link>
        </div>
        
        <div className="bg-white p-6 rounded-[2rem] border-r-[15px] border-purple-600 shadow-lg flex justify-between items-center">
          <h2 className="text-2xl font-black text-slate-800">الدرس الثاني: توزيع السكان</h2>
          <Link href="/unit2/lesson2" className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold">دخول الدرس</Link>
        </div>
      </div>
    </div>
  );
}