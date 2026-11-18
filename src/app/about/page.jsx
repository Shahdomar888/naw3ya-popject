
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#263B49]">

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#EAF4F3] via-[#F2F8FA] to-[#FFF6E5] px-6 py-24 text-center md:py-32">

        {/* Decorative Shapes */}
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#35A99A]/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#176B78]/15 blur-3xl" />
        <div className="absolute right-1/4 top-20 h-16 w-16 rotate-12 rounded-2xl bg-[#E9B44C]/30" />

        <div className="relative z-10 mx-auto max-w-5xl">

          <span className="mb-7 inline-block rounded-full border border-[#35A99A]/30 bg-white/90 px-7 py-3 text-sm font-bold text-[#176B78] shadow-sm">
            ✨ مرحبًا بك في منصتك التعليمية
          </span>

          <h1 className="mb-8 text-4xl font-black leading-relaxed text-[#263B49] md:text-6xl">
            اكتشف عالم المحاكاة
            <span className="mt-2 block bg-gradient-to-l from-[#176B78] via-[#35A99A] to-[#B68A2D] bg-clip-text text-transparent">
              باستخدام جداول البيانات
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-10 text-[#526B78] md:text-xl">
            تعرّف على مفهوم المحاكاة وتطبيقاتها العملية،
            واكتشف كيف تساعدنا جداول البيانات في تحليل
            المواقف وحل المشكلات بطريقة سهلة ومبتكرة.
          </p>

          <Link
            href="/courses"
            className="inline-block rounded-2xl bg-gradient-to-l from-[#176B78] to-[#35A99A] px-12 py-5 text-lg font-extrabold text-white shadow-xl shadow-[#176B78]/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            ابدأ التعلّم الآن ←
          </Link>

          {/* Student Name */}
          <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-white bg-white/90 px-6 py-8 shadow-xl shadow-[#176B78]/10 backdrop-blur-md">

            <span className="mb-3 inline-block rounded-full bg-[#FFF2D5] px-5 py-2 text-sm font-bold text-[#946B1D]">
              إعداد الطالبة
            </span>

            <h2 className="text-2xl font-black leading-relaxed text-[#176B78] md:text-4xl">
              شهد أحمد صابر عمر
            </h2>

            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-l from-[#35A99A] to-[#E9B44C]" />

          </div>

        </div>
      </section>

      {/* Educational Image */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">

        <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-[#176B78]/10">

          <img
            src="/images/ExcelSimulationEducational.png"
            alt="المحاكاة باستخدام برنامج Excel"
            className="h-[280px] w-full object-cover transition duration-700 hover:scale-[1.02] md:h-[500px]"
          />

        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">

          <span className="inline-block rounded-full bg-[#EAF4F3] px-6 py-2 text-sm font-bold text-[#176B78]">
            التعلم بالتطبيق والتجربة
          </span>

          <p className="mt-4 text-lg font-semibold leading-9 text-[#526B78]">
            المحاكاة وتحليل البيانات باستخدام جداول البيانات
          </p>

        </div>

      </section>

      {/* Final Section */}
      <section className="relative overflow-hidden bg-gradient-to-l from-[#176B78] via-[#238B8B] to-[#35A99A] px-6 py-20 text-center text-white">

        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#E9B44C]/20 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-white/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">

          <span className="mb-5 inline-block text-4xl">💡</span>

          <h2 className="mb-6 text-3xl font-black leading-relaxed md:text-4xl">
            المعرفة تبدأ بالتجربة
          </h2>

          <p className="text-lg leading-10 text-white/95">
            تعلّم مفاهيم جديدة، واستكشف تطبيقات المحاكاة،
            وطوّر مهاراتك في تحليل البيانات وحل المشكلات.
          </p>

          <Link
            href="/courses"
            className="mt-9 inline-block rounded-2xl bg-[#E9B44C] px-11 py-4 font-extrabold text-[#263B49] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#F3CC76]"
          >
            تصفح المقرر الدراسي ←
          </Link>

        </div>

      </section>

    </main>
  );
}
