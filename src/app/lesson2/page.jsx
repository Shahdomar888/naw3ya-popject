
import Link from "next/link";

const lessonParts = [
  {
    number: "01",
    title: "الأرقام العشوائية",
    description:
      "الأرقام العشوائية هي أرقام يتم توليدها دون ترتيب أو نمط ثابت، وتُستخدم في المحاكاة والتجارب التي تحتاج إلى تمثيل مواقف مختلفة.",
    points: [
      "تساعد في تمثيل المواقف غير المتوقعة.",
      "تُستخدم في التجارب والمحاكاة.",
      "تساعد في دراسة الاحتمالات.",
    ],
  },
  {
    number: "02",
    title: "الدوال المستخدمة في Excel",
    description:
      "يوفر برنامج Excel مجموعة من الدوال التي تساعد في إجراء العمليات الحسابية وإنشاء المحاكاة باستخدام جداول البيانات.",
    points: [
      "SUM: تستخدم لجمع مجموعة من القيم.",
      "IF: تستخدم لاختبار شرط وتحديد النتيجة بناءً عليه.",
      "RAND: تستخدم لتوليد رقم عشوائي بين صفر وواحد.",
    ],
  },
  {
    number: "03",
    title: "مفهوم طريقة مونت كارلو",
    description:
      "طريقة مونت كارلو هي أسلوب يعتمد على التجارب العشوائية المتكررة للوصول إلى تقديرات وحلول للمسائل المختلفة.",
    points: [
      "تعتمد على توليد قيم عشوائية.",
      "تُكرر التجربة عددًا كبيرًا من المرات.",
      "تساعد في تقدير النتائج التي يصعب حسابها مباشرة.",
    ],
  },
  {
    number: "04",
    title: "تقدير قيمة π",
    description:
      "يمكن استخدام طريقة مونت كارلو لتقدير قيمة العدد π عن طريق توزيع نقاط عشوائية داخل مربع يحتوي على ربع دائرة.",
    points: [
      "نولد نقاطًا عشوائية داخل المربع.",
      "نحدد النقاط التي تقع داخل ربع الدائرة.",
      "نستخدم نسبة النقاط داخل ربع الدائرة إلى إجمالي النقاط لتقدير قيمة π.",
    ],
  },
];

export default function Lesson2Page() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-gradient-to-l from-[#102B46] to-[#174D70] px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">

          <div className="mb-5 inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-bold text-cyan-200">
            المقرر التعليمي | الدرس الثاني
          </div>

          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
            الأرقام العشوائية وطريقة مونت كارلو
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-white/80">
            تعرفي على الأرقام العشوائية ودوال Excel، وكيفية استخدام
            طريقة مونت كارلو في المحاكاة وتقدير قيمة العدد π.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-xl bg-white/10 px-5 py-3">
              الأرقام العشوائية
            </span>

            <span className="rounded-xl bg-white/10 px-5 py-3">
              دوال Excel
            </span>

            <span className="rounded-xl bg-white/10 px-5 py-3">
              محاكاة مونت كارلو
            </span>
          </div>

        </div>
      </section>

      {/* Main Image */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-3 shadow-md md:p-5">

          <img
            src="/images/lesson2.png"
            alt="الأرقام العشوائية ودوال Excel وطريقة مونت كارلو"
            className="h-auto w-full rounded-2xl object-contain"
          />

        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-7 md:p-9">

          <p className="mb-3 font-bold text-[#087E91]">
            مقدمة الدرس
          </p>

          <h2 className="mb-4 text-2xl font-extrabold text-[#102B46]">
            ماذا سنتعلم في هذا الدرس؟
          </h2>

          <p className="text-lg leading-9 text-slate-700">
            تُعد الأرقام العشوائية من الأدوات المهمة في بناء نماذج
            المحاكاة، حيث تساعدنا على تمثيل المواقف المختلفة ودراسة
            النتائج المحتملة. ومن خلال برنامج Excel يمكن استخدام
            مجموعة من الدوال مثل SUM وIF وRAND لتنفيذ عمليات حسابية
            وتجارب محاكاة، كما يمكن تطبيق طريقة مونت كارلو لتقدير
            قيمة العدد π.
          </p>

        </div>
      </section>

      {/* Lesson Contents */}
      <section className="mx-auto max-w-6xl px-6 py-8">

        <div className="mb-9">
          <p className="font-bold text-[#087E91]">
            محتويات الدرس
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#102B46]">
            أجزاء الدرس الثاني
          </h2>

          <p className="mt-3 leading-8 text-slate-500">
            تعرفي على الموضوعات الأساسية التي سنتناولها خلال الدرس.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {lessonParts.map((part) => (
            <article
              key={part.number}
              className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg md:p-8"
            >

              <div className="mb-5 flex items-center gap-4">

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102B46] text-lg font-extrabold text-white transition group-hover:bg-[#087E91]">
                  {part.number}
                </span>

                <div className="h-px flex-1 bg-slate-200" />

              </div>

              <h3 className="mb-4 text-xl font-extrabold text-[#102B46]">
                {part.title}
              </h3>

              <p className="leading-8 text-slate-600">
                {part.description}
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">

                <p className="mb-3 font-bold text-[#087E91]">
                  أهم النقاط
                </p>

                <ul className="space-y-3">
                  {part.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#087E91]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* Practical Application */}
      <section className="mx-auto max-w-6xl px-6 py-8">

        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-9">

          <p className="mb-3 font-bold text-[#087E91]">
            تطبيق عملي
          </p>

          <h2 className="mb-5 text-2xl font-extrabold text-[#102B46]">
            تقدير قيمة π باستخدام طريقة مونت كارلو
          </h2>

          <p className="leading-9 text-slate-600">
            تعتمد الفكرة على اختيار عدد كبير من النقاط العشوائية داخل
            مربع، ثم حساب عدد النقاط التي تقع داخل ربع دائرة مرسومة
            داخل المربع. وباستخدام نسبة النقاط داخل ربع الدائرة إلى
            إجمالي النقاط يمكن تقدير قيمة العدد π.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-6">

            <p className="mb-4 font-bold text-[#102B46]">
              العلاقة الرياضية المستخدمة:
            </p>

            <div
              dir="ltr"
              className="overflow-x-auto text-center text-lg font-extrabold text-[#087E91] md:text-2xl"
            >
              π ≈ 4 × (عدد النقاط داخل ربع الدائرة ÷ إجمالي النقاط)
            </div>

          </div>

        </div>
      </section>

      {/* Learning Note */}
      <section className="mx-auto max-w-6xl px-6 py-8">

        <div className="rounded-3xl border-r-4 border-[#087E91] bg-cyan-50 p-7 md:p-9">

          <h2 className="mb-4 text-2xl font-extrabold text-[#102B46]">
            معلومة مهمة
          </h2>

          <p className="leading-9 text-slate-700">
            تساعدنا الأرقام العشوائية والدوال الحسابية في إنشاء
            نماذج محاكاة، وتُعد طريقة مونت كارلو من الطرق المهمة
            التي تعتمد على التجارب المتكررة للوصول إلى تقديرات
            للنتائج.
          </p>

        </div>

      </section>

      {/* Summary */}
      <section className="mx-auto max-w-6xl px-6 py-8">

        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-9">

          <p className="mb-3 font-bold text-[#087E91]">
            مراجعة سريعة
          </p>

          <h2 className="mb-6 text-2xl font-extrabold text-[#102B46]">
            ملخص الدرس
          </h2>

          <ul className="space-y-4 leading-8 text-slate-700">
            <li>تعرفنا على مفهوم الأرقام العشوائية واستخداماتها.</li>
            <li>تعلمنا وظائف الدوال SUM وIF وRAND.</li>
            <li>تعرفنا على طريقة مونت كارلو.</li>
            <li>فهمنا كيفية استخدام المحاكاة لتقدير قيمة π.</li>
          </ul>

        </div>

      </section>

      {/* Quiz Button */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-6">

        <div className="rounded-3xl bg-gradient-to-l from-[#102B46] to-[#174D70] p-8 text-center text-white md:p-12">

          <p className="mb-4 text-sm font-bold tracking-wider text-cyan-300">
            اختبري معلوماتك
          </p>

          <h2 className="text-2xl font-extrabold md:text-3xl">
            هل أنتِ مستعدة لاختبار معلوماتك؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/80">
            بعد الانتهاء من دراسة الدرس الثاني، اختبري مدى فهمك
            للأرقام العشوائية ودوال Excel وطريقة مونت كارلو
            من خلال مجموعة من الأسئلة التفاعلية.
          </p>

          <Link
            href="/quiz2"
            className="mt-7 inline-block rounded-xl bg-[#087E91] px-10 py-4 font-extrabold text-white transition hover:bg-[#066777]"
          >
            ابدأ اختبار الدرس الثاني الآن
          </Link>

        </div>

      </section>

      {/* Navigation */}
      <section className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 pb-12">

        <Link
          href="/lesson1"
          className="rounded-xl border border-[#102B46] px-6 py-3 font-bold text-[#102B46] transition hover:bg-slate-100"
        >
          الدرس الأول
        </Link>

        <Link
          href="/courses"
          className="rounded-xl bg-[#102B46] px-6 py-3 font-bold text-white transition hover:bg-[#174D70]"
        >
          العودة إلى المقرر
        </Link>

      </section>

    </main>
  );
}
