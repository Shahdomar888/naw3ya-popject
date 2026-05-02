"use client";
import Link from 'next/link';

export default function Units() {
  const units = [
    {
      id: 1,
      title: "الوحدة الأولى: الجغرافيا الطبيعية",
      image: "/images/image1.jpg", // صورة كوكب الأرض
      link: "/unit1",
      color: "bg-blue-600"
    },
    {
      id: 2,
      title: "الوحدة الثانية: جغرافيا السكان",
      image: "/images/image3.jpg", // صورة ناس (سكان)
      link: "/unit2",
      color: "bg-indigo-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-10 text-right" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {units.map((unit) => (
          <div key={unit.id} className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border-2 border-slate-100 flex flex-col transition-transform hover:scale-105">
            <div className="h-64 relative">
              <img src={unit.image} className="w-full h-full object-cover" alt={unit.title} />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="p-8 text-center">
              <h2 className="text-3xl font-black mb-6 text-slate-800">{unit.title}</h2>
              <Link href={unit.link} className={`inline-block w-full py-5 rounded-3xl text-white font-black text-xl shadow-lg ${unit.color}`}>
                استكشاف الوحدة بالكامل
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}