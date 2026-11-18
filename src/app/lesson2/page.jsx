
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
    <main dir="rtl" className="min-h-screen bg-[#F7F9FC]">

      {/* Header */}
      <section className="bg-gradient-to-l from-[#176B78] to-[#263B49] px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">

          <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold text-[#E9B44C]">
            المقرر التعليمي | الدرس الثاني
          </div>

          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
            الأرقام العشوائية وطريقة مونت كارلو
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-white/85">
            تعرفي على الأرقام العشوائية ودوال Excel، وكيفية استخدام
            طريقة مونت كارلو في المحاكاة وتقدير قيمة العدد π.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-xl border border-white/15 bg-white/10 px-5 py-3">
              الأرقام العشوائية
            </span>

            <span className="rounded-xl border border-white/15 bg-white/10 px-5 py-3">
              دوال Excel
            </span>

            <span className="rounded-xl border border-white/15 bg-white/10 px-5 py-3">
              محاكاة مونت كارلو
            </span>
          </div>

        </div>
      </section>

      {/* Main Image */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="overflow-hidden rounded-3xl border border-[#EAF4F3] bg-white p-3 shadow-md md:p-5">

          <img
            src="/images/lesson2.png"
            alt="الأرقام العشوائية ودوال Excel وطريقة مونت كارلو"
            className="h-auto w-full rounded-2xl object-contain"
          />

        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rounded-3xl border border-[#D5EAE7] bg-[#EAF4F3] p-7 md:p-9">

          <p className="mb-3 font-bold text-[#35A99A]">
            مقدمة الدرس
          </p>

          <h2 className="mb-4 text-2xl font-extrabold text-[#176B78]">
            ماذا سنتعلم في هذا الدرس؟
          </h2>

          <p className="text-lg leading-9 text-[#263B49]">
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
          <p className="font-bold text-[#35A99A]">
            محتويات الدرس
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#176B78]">
            أجزاء الدرس الثاني
          </h2>

          <p className="mt-3 leading-8 text-[#71838B]">
            تعرفي على الموضوعات الأساسية التي سنتناولها خلال الدرس.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {lessonParts.map((part) => (
            <article
              key={part.number}
              className="group rounded-3xl border border-[#EAF4F3] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#35A99A]/50 hover:shadow-lg md:p-8"
            >

              <div className="mb-5 flex items-center gap-4">

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#176B78] text-lg font-extrabold text-white transition group-hover:bg-[#35A99A]">
                  {part.number}
                </span>

                <div className="h-px flex-1 bg-[#EAF4F3]" />

                <span className="text-sm font-bold text-[#E9B44C]">
                  {part.number}
                </span>

              </div>

              <h3 className="mb-4 text-xl font-extrabold text-[#176B78]">
                {part.title}
              </h3>

              <p className="leading-8 text-[#526B78]">
                {part.description}
              </p>

              <div className="mt-6 rounded-2xl bg-[#F7F9FC] p-5">

                <p className="mb-3 font-bold text-[#35A99A]">
                  أهم النقاط
                </p>

                <ul className="space-y-3">
                  {part.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-7 text-[#263B49]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E9B44C]" />
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

        <div className="rounded-3xl border border-[#EAF4F3] bg-white p-7 shadow-sm md:p-9">

          <p className="mb-3 font-bold text-[#35A99A]">
            تطبيق عملي
          </p>

          <h2 className="mb-5 text-2xl font-extrabold text-[#176B78]">
            تقدير قيمة π باستخدام طريقة مونت كارلو
          </h2>

          <p className="leading-9 text-[#526B78]">
            تعتمد الفكرة على اختيار عدد كبير من النقاط العشوائية داخل
            مربع، ثم حساب عدد النقاط التي تقع داخل ربع دائرة مرسومة
            داخل المربع. وباستخدام نسبة النقاط داخل ربع الدائرة إلى
            إجمالي النقاط يمكن تقدير قيمة العدد π.
          </p>

          <div className="mt-6 rounded-2xl border border-[#EAF4F3] bg-[#F7F9FC] p-6">

            <p className="mb-4 font-bold text-[#176B78]">
              العلاقة الرياضية المستخدمة:
            </p>

            <div
              dir="ltr"
              className="overflow-x-auto text-center text-lg font-extrabold text-[#35A99A] md:text-2xl"
            >
              π ≈ 4 × (عدد النقاط داخل ربع الدائرة ÷ إجمالي النقاط)
            </div>

          </div>

        </div>
      </section>

      {/* Learning Note */}
      <section className="mx-auto max-w-6xl px-6 py-8">

        <div className="rounded-3xl border-r-4 border-[#E9B44C] bg-[#EAF4F3] p-7 md:p-9">

          <h2 className="mb-4 text-2xl font-extrabold text-[#176B78]">
            معلومة مهمة
          </h2>

          <p className="leading-9 text-[#263B49]">
            تساعدنا الأرقام العشوائية والدوال الحسابية في إنشاء
            نماذج محاكاة، وتُعد طريقة مونت كارلو من الطرق المهمة
            التي تعتمد على التجارب المتكررة للوصول إلى تقديرات
            للنتائج.
          </p>

        </div>

      </section>

      {/* Summary */}
      <section className="mx-auto max-w-6xl px-6 py-8">

        <div className="rounded-3xl border border-[#EAF4F3] bg-white p-7 shadow-sm md:p-9">

          <p className="mb-3 font-bold text-[#35A99A]">
            مراجعة سريعة
          </p>

          <h2 className="mb-6 text-2xl font-extrabold text-[#176B78]">
            ملخص الدرس
          </h2>

          <ul className="space-y-4 leading-8 text-[#263B49]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E9B44C]" />
              تعرفنا على مفهوم الأرقام العشوائية واستخداماتها.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E9B44C]" />
              تعلمنا وظائف الدوال SUM وIF وRAND.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E9B44C]" />
              تعرفنا على طريقة مونت كارلو.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E9B44C]" />
              فهمنا كيفية استخدام المحاكاة لتقدير قيمة π.
            </li>
          </ul>

        </div>

      </section>

      {/* Quiz Button */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-6">

        <div className="rounded-3xl bg-gradient-to-l from-[#176B78] to-[#263B49] p-8 text-center text-white md:p-12">

          <p className="mb-4 text-sm font-bold tracking-wider text-[#E9B44C]">
            اختبري معلوماتك
          </p>

          <h2 className="text-2xl font-extrabold md:text-3xl">
            هل أنتِ مستعدة لاختبار معلوماتك؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/85">
            بعد الانتهاء من دراسة الدرس الثاني، اختبري مدى فهمك
            للأرقام العشوائية ودوال Excel وطريقة مونت كارلو
            من خلال مجموعة من الأسئلة التفاعلية.
          </p>

          <Link
            href="/quiz2"
            className="mt-7 inline-block rounded-xl bg-[#35A99A] px-10 py-4 font-extrabold text-white transition hover:bg-[#278F82]"
          >
            ابدئي اختبار الدرس الثاني الآن
          </Link>

        </div>

      </section>

      {/* Navigation */}
      <section className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 pb-12">

        <Link
          href="/lesson1"
          className="rounded-xl border border-[#176B78] px-6 py-3 font-bold text-[#176B78] transition hover:bg-[#EAF4F3]"
        >
          الدرس الأول
        </Link>

        <Link
          href="/courses"
          className="rounded-xl bg-[#176B78] px-6 py-3 font-bold text-white transition hover:bg-[#35A99A]"
        >
          العودة إلى المقرر
        </Link>

      </section>

    </main>
  );
}
