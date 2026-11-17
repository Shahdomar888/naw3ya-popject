
import Link from "next/link";

const lessons = [
  {
    number: "01",
    title: "الدرس الأول",
    subtitle: "المحاكاة باستخدام جداول البيانات",
    description:
      "تعرّف على المراجع النسبية والمطلقة في جداول البيانات، ومفهوم المحاكاة، وكيفية تطبيقها من خلال أمثلة عملية مثل محاكاة حجم الماء والنمو المالي.",
    image: "/images/1.png",
    alt: "المحاكاة باستخدام جداول البيانات",
    href: "/lesson1",
    color: "from-[#087E91] to-[#174D70]",
  },
  {
    number: "02",
    title: "الدرس الثاني",
    subtitle: "الأرقام العشوائية ومحاكاة مونت كارلو",
    description:
      "تعلّم كيفية استخدام الأرقام العشوائية ودوال SUM وIF وRAND، واكتشف طريقة مونت كارلو وتطبيقها في تقدير قيمة π.",
    image: "/images/2.png",
    alt: "الأرقام العشوائية ومحاكاة مونت كارلو",
    href: "/lesson2",
    color: "from-[#174D70] to-[#087E91]",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#F4F8FB]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#102B46] px-6 py-16 text-center text-white md:py-20">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#087E91]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <span className="inline-block rounded-full border border-cyan-300/30 bg-white/10 px-5 py-2 text-sm font-bold text-cyan-200">
            Simulation Lab
          </span>

          <h1 className="mt-6 text-3xl font-black md:text-5xl">
            المقرر التعليمي
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            اكتشف دروس المحاكاة باستخدام جداول البيانات،
            وتعلّم من خلال الشرح والأمثلة والتطبيقات العملية.
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-[#08B5C4]" />
        </div>
      </section>

      {/* Lessons Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black text-[#102B46] md:text-3xl">
            محتويات المقرر
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500 md:text-base">
            اختاري الدرس الذي تريدين دراسته وابدئي رحلة التعلم.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {lessons.map((lesson) => (
            <article
              key={lesson.number}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Lesson Image */}
              <div className="relative overflow-hidden bg-[#EAF5FA] p-3">
                <img
                  src={lesson.image}
                  alt={lesson.alt}
                  className="h-64 w-full rounded-2xl object-contain transition duration-500 group-hover:scale-[1.03] md:h-72"
                />

                <span className="absolute right-6 top-6 rounded-xl bg-[#102B46] px-4 py-2 text-sm font-extrabold text-white shadow-lg">
                  الدرس {lesson.number}
                </span>
              </div>

              {/* Lesson Information */}
              <div className="p-7 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${lesson.color} text-sm font-black text-white`}
                  >
                    {lesson.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-[#102B46]">
                      {lesson.title}
                    </h3>

                    <p className="mt-1 text-sm font-bold text-[#087E91]">
                      {lesson.subtitle}
                    </p>
                  </div>
                </div>

                <p className="min-h-[110px] text-sm leading-8 text-slate-600">
                  {lesson.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <Link
                    href={lesson.href}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l ${lesson.color} px-6 py-4 font-extrabold text-white shadow-md transition hover:brightness-110`}
                  >
                    ابدأ دراسة الدرس
                    <span className="text-lg">←</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl border border-cyan-100 bg-white p-8 text-center shadow-sm md:p-10">
          <h2 className="text-2xl font-black text-[#102B46]">
            ابدأ رحلتك في عالم المحاكاة
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
            ادرس الدروس بالترتيب، وتعرّف على المفاهيم الأساسية،
            ثم انتقل إلى الاختبارات التفاعلية لقياس مدى فهمك.
          </p>

          <Link
            href="/quizzes"
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#087E91] px-8 py-4 font-bold text-white transition hover:bg-[#066777]"
          >
            الانتقال إلى الاختبارات
          </Link>
        </div>
      </section>
    </main>
  );
}
