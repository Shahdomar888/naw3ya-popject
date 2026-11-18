
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#102B46] via-[#174D70] to-[#087E91] px-6 py-24 text-center text-white">

        <div className="mx-auto max-w-4xl relative z-10">

          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm">
            مرحبًا بك في منصتك التعليمية
          </span>

          <h1 className="mb-7 text-4xl font-extrabold leading-relaxed md:text-6xl">
            اكتشف عالم المحاكاة
            <span className="block text-cyan-300">
              باستخدام جداول البيانات
            </span>
          </h1>

          <p className="mx-auto mb-9 max-w-2xl text-lg leading-9 text-slate-200">
            تعرّف على مفهوم المحاكاة وتطبيقاتها العملية،
            واكتشف كيف تساعدنا جداول البيانات في تحليل
            المواقف وحل المشكلات بطريقة سهلة ومبتكرة.
          </p>

          <Link
            href="/courses"
            className="inline-block rounded-xl bg-cyan-400 px-10 py-4 font-bold text-[#102B46] shadow-lg transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            ابدأ التعلّم الآن
          </Link>

          <p className="mt-8 text-base font-semibold text-cyan-100">
            إعداد الطالبة: شهد أحمد صابر عمر
          </p>

        </div>

        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

      </section>

      {/* Main Educational Image */}
      <section className="mx-auto max-w-6xl px-6 pt-14">

        <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl">

          <img
            src="/images/ExcelSimulationEducational.png"
            alt="المحاكاة باستخدام برنامج Excel"
            className="h-[280px] w-full object-cover md:h-[500px]"
          />

        </div>

        <p className="mt-5 text-center text-sm text-slate-500">
          المحاكاة وتحليل البيانات باستخدام جداول البيانات
        </p>

      </section>

      {/* Platform Sections */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12 text-center">

          <span className="font-bold text-cyan-700">
            اكتشف المنصة
          </span>

          <h2 className="mb-4 mt-3 text-3xl font-extrabold text-[#102B46]">
            أقسام المنصة
          </h2>

          <p className="text-slate-500">
            كل ما تحتاجه للتعلّم في مكان واحد
          </p>

        </div>

        <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-1">

          {/* Courses */}
          <Link
            href="/courses"
            className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl">
              📚
            </div>

            <h3 className="mb-4 text-xl font-bold text-[#102B46]">
              المقرر الدراسي
            </h3>

            <p className="leading-8 text-slate-500">
              تعرّف على محتوى المقرر ومفاهيم المحاكاة
              وتطبيقاتها باستخدام جداول البيانات.
            </p>

            <span className="mt-6 inline-block font-bold text-cyan-700">
              استكشف المقرر ←
            </span>

          </Link>

        </div>

      </section>

      {/* Final Section */}
      <section className="bg-gradient-to-l from-[#102B46] to-[#174D70] px-6 py-16 text-center text-white">

        <h2 className="mb-5 text-3xl font-extrabold">
          المعرفة تبدأ بالتجربة
        </h2>

        <p className="mx-auto max-w-2xl leading-9 text-slate-200">
          تعلّم مفاهيم جديدة، واستكشف تطبيقات المحاكاة،
          وطوّر مهاراتك في تحليل البيانات وحل المشكلات.
        </p>

        <Link
          href="/courses"
          className="mt-8 inline-block rounded-xl bg-cyan-400 px-9 py-4 font-bold text-[#102B46] transition hover:bg-cyan-300"
        >
          تصفح المقرر
        </Link>

      </section>

    </main>
  );
}
