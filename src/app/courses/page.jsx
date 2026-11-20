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
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#F3F6FA] text-[#142F50]">

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-[#DFE6EF] bg-gradient-to-br from-white via-[#F3F6FA] to-white px-6 py-20 text-center md:py-24">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#21845A]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#D5AD62]/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <span className="inline-block rounded-full border border-[#DFE6EF] bg-white px-6 py-3 text-sm font-extrabold text-[#21845A] shadow-sm">
            Simulation Lab
          </span>

          <h1 className="mt-7 text-4xl font-black leading-relaxed text-[#142F50] md:text-6xl">
            المقرر التعليمي
            <span className="mt-2 block text-[#21845A]">
              رحلتك لاكتشاف المحاكاة
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-9 text-[#536579] md:text-lg">
            اكتشف دروس المحاكاة باستخدام جداول البيانات،
            وتعلّم من خلال الشرح والأمثلة والتطبيقات العملية.
          </p>

        </div>
      </section>

      {/* Lessons Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-12 text-center">

          <span className="inline-block rounded-full border border-[#DFE6EF] bg-white px-5 py-2 text-sm font-bold text-[#21845A] shadow-sm">
            محتوى تعليمي تفاعلي
          </span>

          <h2 className="mt-5 text-3xl font-black text-[#142F50] md:text-4xl">
            اكتشفي دروس المقرر
          </h2>

          <p className="mt-4 text-base leading-8 text-[#536579]">
            اختاري الدرس الذي تريدين دراسته وابدئي رحلة التعلم.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-9 md:grid-cols-2">

          {lessons.map((lesson) => (
            <article
              key={lesson.number}
              className="group overflow-hidden rounded-[2rem] border border-[#DFE6EF] bg-white shadow-lg shadow-[#142F50]/5 transition duration-300 hover:-translate-y-2 hover:border-[#21845A]/50 hover:shadow-xl hover:shadow-[#142F50]/10"
            >

              {/* Lesson Image */}
              <div className="relative overflow-hidden border-b border-[#DFE6EF] bg-[#F3F6FA] p-4">

                <img
                  src={lesson.image}
                  alt={lesson.alt}
                  className="h-64 w-full rounded-2xl bg-white object-contain transition duration-500 group-hover:scale-[1.04] md:h-72"
                />

                <span className="absolute right-7 top-7 rounded-xl border border-[#DFE6EF] bg-white px-5 py-3 text-sm font-black text-[#142F50] shadow-md">
                  الدرس {lesson.number}
                </span>

              </div>

              {/* Lesson Information */}
              <div className="p-7 md:p-8">

                <div className="mb-5 flex items-center gap-4">

                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#21845A]/20 bg-[#21845A]/10 text-lg font-black text-[#21845A]">
                    {lesson.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-black text-[#142F50]">
                      {lesson.title}
                    </h3>

                    <p className="mt-2 text-sm font-bold text-[#21845A]">
                      {lesson.subtitle}
                    </p>
                  </div>

                </div>

                <p className="min-h-[110px] text-sm leading-9 text-[#536579]">
                  {lesson.description}
                </p>

                <div className="mt-6 border-t border-[#DFE6EF] pt-6">

                  <Link
                    href={lesson.href}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#142F50] px-6 py-4 font-extrabold text-white shadow-md shadow-[#142F50]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#21845A] hover:shadow-lg"
                  >
                    ابدأ دراسة الدرس
                    <span className="text-xl">←</span>
                  </Link>

                </div>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* Comprehensive Quiz Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">

        <div className="relative overflow-hidden rounded-[2rem] border border-[#D5AD62]/40 bg-gradient-to-l from-[#F3F6FA] via-white to-[#F3F6FA] p-9 text-center shadow-lg shadow-[#142F50]/5 md:p-12">

          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D5AD62]/20 blur-2xl" />

          <div className="relative">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#142F50] text-3xl text-[#D5AD62] shadow-md">
              🏆
            </div>

            <h2 className="mt-5 text-2xl font-black text-[#142F50] md:text-3xl">
              استعدي لاختبار معلوماتك!
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-9 text-[#536579]">
              بعد الانتهاء من دراسة الدروس، اختبري مدى فهمك للمقرر
              من خلال الاختبار الشامل.
            </p>

            <Link
              href="/comprehensive-quiz"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#142F50] px-9 py-4 font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#21845A]"
            >
              ابدئي الاختبار الشامل
              <span>←</span>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
