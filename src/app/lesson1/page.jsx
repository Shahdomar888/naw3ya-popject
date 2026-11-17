
import Link from "next/link";

const lessonParts = [
  {
    number: "01",
    title: "المراجع في جداول البيانات",
    intro:
      "تساعدنا المراجع في تحديد الخلايا التي نستخدم بياناتها داخل المعادلات في جداول البيانات.",
    topics: [
      {
        title: "المرجع النسبي",
        text: "هو مرجع يتغير تلقائيًا عند نسخ المعادلة إلى خلية أخرى، مثل A1.",
        example: "A1",
      },
      {
        title: "المرجع المطلق",
        text: "هو مرجع يظل ثابتًا عند نسخ المعادلة، ونستخدم علامة الدولار لتثبيت العمود والصف.",
        example: "$A$1",
      },
    ],
  },
  {
    number: "02",
    title: "مفهوم المحاكاة",
    intro:
      "المحاكاة هي إنشاء نموذج مبسط يمثل موقفًا أو نظامًا واقعيًا، بهدف فهمه ودراسة النتائج المتوقعة.",
    topics: [
      {
        title: "ما المقصود بالمحاكاة؟",
        text: "هي تمثيل موقف من الواقع باستخدام نموذج يمكن من خلاله تجربة التغييرات وملاحظة النتائج.",
        example: "نموذج يحاكي الواقع",
      },
      {
        title: "أهمية المحاكاة",
        text: "تساعد على فهم الأنظمة المختلفة ودراسة الاحتمالات ومقارنة النتائج بطريقة منظمة.",
        example: "التجربة والتحليل",
      },
    ],
  },
  {
    number: "03",
    title: "تطبيقات المحاكاة باستخدام جداول البيانات",
    intro:
      "يمكن استخدام برنامج Excel لإنشاء نماذج محاكاة تساعدنا على دراسة بعض المواقف الحياتية.",
    topics: [
      {
        title: "محاكاة حجم الماء",
        text: "نستخدم جدول البيانات لتمثيل التغير في كمية الماء داخل وعاء وفقًا لمعدل التدفق والزمن.",
        example: "كمية الماء والزمن",
      },
      {
        title: "محاكاة النمو المالي",
        text: "نستخدم الحسابات لتمثيل نمو مبلغ من المال عند تطبيق الفائدة المركبة خلال فترات زمنية مختلفة.",
        example: "الفائدة المركبة",
      },
      {
        title: "استخدام Excel",
        text: "يساعدنا البرنامج على إدخال البيانات وتنظيمها واستخدام المعادلات لمتابعة نتائج المحاكاة.",
        example: "تنظيم البيانات",
      },
    ],
  },
];

export default function LessonOne() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-50 text-slate-800">

      {/* Header */}
      <section className="bg-gradient-to-l from-[#102B46] to-[#087E91] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <span className="rounded-full border border-white/30 px-5 py-2 text-sm">
            المقرر الدراسي
          </span>

          <h1 className="mt-7 text-3xl font-extrabold leading-relaxed md:text-5xl">
            الدرس الأول
            <br />
            المحاكاة باستخدام جداول البيانات
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/85">
            اكتشف مفهوم المحاكاة وأنواع المراجع في جداول البيانات،
            وتعرف على كيفية استخدام برنامج Excel في إنشاء نماذج تحاكي الواقع.
          </p>

          <a
            href="#content"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-bold text-[#102B46] transition hover:bg-cyan-50"
          >
            ابدأ التعلم
          </a>
        </div>
      </section>

      {/* Main Image */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
          <img
            src="/images/lesson1.png"
            alt="المحاكاة باستخدام جداول البيانات"
            className="w-full h-auto object-contain rounded-3xl"
          />

          <div className="p-5 text-center">
            <h2 className="text-xl font-extrabold text-[#102B46]">
              عالم المحاكاة والتطبيقات التفاعلية
            </h2>

            <p className="mt-2 text-slate-500">
              التعلم من خلال النماذج والتجارب باستخدام جداول البيانات
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl border-r-4 border-[#087E91] bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-extrabold text-[#102B46]">
            مقدمة الدرس
          </h2>

          <p className="mt-4 text-lg leading-9 text-slate-600">
            في هذا الدرس سنتعرف على كيفية التعامل مع المراجع داخل جداول
            البيانات، ونتعلم معنى المحاكاة وأهميتها، ثم نستكشف بعض
            التطبيقات التي يمكن تنفيذها باستخدام برنامج Excel.
          </p>
        </div>
      </section>

      {/* Lesson Parts */}
      <section id="content" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-12 text-center">
          <span className="font-bold text-[#087E91]">
            محتوى الدرس
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#102B46]">
            أقسام الدرس التعليمية
          </h2>

          <p className="mt-4 text-slate-500">
            تعرف على المعلومات الخاصة بكل جزء.
          </p>
        </div>

        <div className="space-y-10">
          {lessonParts.map((part) => (
            <article
              key={part.number}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex items-center gap-4 bg-[#102B46] p-6 text-white">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#087E91] text-xl font-extrabold">
                  {part.number}
                </div>

                <h3 className="text-xl font-extrabold md:text-2xl">
                  {part.title}
                </h3>
              </div>

              <div className="p-6 md:p-8">
                <p className="mb-7 text-lg leading-9 text-slate-600">
                  {part.intro}
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  {part.topics.map((topic, index) => (
                    <div
                      key={topic.title}
                      className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087E91] font-bold text-white">
                          {index + 1}
                        </span>

                        <h4 className="text-lg font-extrabold text-[#102B46]">
                          {topic.title}
                        </h4>
                      </div>

                      <p className="mt-4 leading-8 text-slate-600">
                        {topic.text}
                      </p>

                      <div
                        dir="ltr"
                        className="mt-5 inline-block rounded-lg bg-white px-4 py-2 font-bold text-[#087E91]"
                      >
                        {topic.example}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Learning Note */}
      <section
        id="learning"
        className="mx-auto max-w-6xl px-6 pb-14"
      >
        <div className="rounded-3xl bg-[#E8F5F6] p-8 md:p-10">
          <h2 className="text-2xl font-extrabold text-[#102B46]">
            تذكر
          </h2>

          <p className="mt-4 leading-9 text-slate-700">
            تساعدنا المحاكاة على فهم الأنظمة والمواقف المختلفة من خلال
            إنشاء نماذج وتجربة تغييرات متعددة، بينما توفر جداول البيانات
            أدوات لتنظيم البيانات وإجراء الحسابات ومتابعة النتائج.
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-extrabold text-[#102B46]">
            ملخص الدرس
          </h2>

          <ul className="space-y-4 leading-8 text-slate-700">
            <li>✓ تعرفنا على المرجع النسبي والمرجع المطلق.</li>
            <li>✓ فهمنا معنى المحاكاة وأهميتها.</li>
            <li>✓ تعرفنا على استخدام جداول البيانات في المحاكاة.</li>
            <li>✓ تعرفنا على محاكاة حجم الماء والنمو المالي.</li>
          </ul>
        </div>
      </section>

      {/* Quiz Button */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-3xl bg-[#102B46] p-8 text-center text-white md:p-12">
          <div className="text-4xl">🎓</div>

          <h2 className="mt-5 text-2xl font-extrabold md:text-3xl">
            هل أنت مستعد لاختبار معلوماتك؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/80">
            بعد الانتهاء من دراسة الدرس الأول، اختبر مدى فهمك
            من خلال مجموعة من الأسئلة التفاعلية.
          </p>

          <Link
            href="/quiz1"
            className="mt-7 inline-block rounded-xl bg-[#087E91] px-10 py-4 font-extrabold text-white transition hover:bg-[#066777]"
          >
            ابدأ الاختبار الآن
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <Link
            href="/courses"
            className="rounded-xl border border-[#102B46] px-6 py-3 font-bold text-[#102B46] transition hover:bg-slate-100"
          >
            العودة إلى المقرر
          </Link>

          <Link
            href="/lesson2"
            className="rounded-xl bg-[#087E91] px-6 py-3 font-bold text-white transition hover:bg-[#066777]"
          >
            الدرس التالي
          </Link>
        </div>
      </section>

    </main>
  );
}
