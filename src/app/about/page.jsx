
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F3F6FA] px-5 py-14 text-[#142F50]">
      <section className="mx-auto flex max-w-5xl flex-col items-center rounded-[2rem] border border-[#DFE6EF] bg-white px-6 py-12 text-center shadow-xl shadow-[#142F50]/10">

        <span className="rounded-full bg-[#F3F6FA] px-6 py-3 font-bold text-[#21845A]">
          Simulation Lab
        </span>

        <h1 className="mt-7 text-4xl font-black leading-relaxed text-[#142F50] md:text-6xl">
          مختبر المحاكاة
        </h1>

        <p className="mt-4 text-xl font-bold text-[#21845A]">
          نتعلم بالمحاكاة، ونكتشف بالتجربة.
        </p>

        <img
          src="/images/ExcelSimulationEducational.png"
          alt="مختبر المحاكاة"
          className="mt-9 w-full max-w-2xl rounded-3xl border border-[#DFE6EF] object-contain"
        />

        <div className="mt-9 rounded-2xl bg-[#F3F6FA] px-8 py-6">
          <p className="text-lg font-bold text-[#142F50]">
            إعداد الطالبة
          </p>
          <p className="mt-2 text-xl font-extrabold text-[#21845A]">
            شهد أحمد صابر عمر
          </p>
        </div>

        <div className="mt-6 max-w-2xl">
          <p className="font-bold text-[#142F50]">
            تحت إشراف
          </p>
          <p className="mt-2 leading-8 text-[#536579]">
            أ.م.د/ وليد عبدالحميد
            <br />
            أستاذ تكنولوجيا التعليم المساعد بكلية التربية النوعية جامعة عين شمس
          </p>
        </div>

        <Link
          href="/courses"
          className="mt-9 rounded-2xl bg-[#142F50] px-10 py-4 font-extrabold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#21845A]"
        >
          ابدأ رحلتك التعليمية ←
        </Link>

      </section>
    </main>
  );
}
