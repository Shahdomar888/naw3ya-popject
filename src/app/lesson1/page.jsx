
import Link from "next/link";
import ReferenceActivity from "./ReferenceActivity";

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
        title: "محاكاة حجم المياه",
        text: "نستخدم جدول البيانات لتمثيل التغير في كمية المياه داخل وعاء وفقًا لمعدل التدفق والزمن.",
        example: "كمية المياه والزمن",
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

const simulationApplications = [
  {
    number: "01",
    title: "محاكاة النمو المالي",
    image: "/images/money.png",
    alt: "محاكاة النمو المالي باستخدام Excel",
    concept:
      "تُستخدم المحاكاة المالية لدراسة كيفية تغير مبلغ من المال بمرور الوقت عند تطبيق الفائدة المركبة عليه. ومن خلالها نستطيع ملاحظة تأثير معدل الفائدة وعدد السنوات على قيمة المبلغ.",
    explanation:
      "تبدأ المحاكاة بتحديد مبلغ ابتدائي ومعدل فائدة سنوي وعدد السنوات. ثم تُجرى الحسابات لكل سنة لمعرفة المبلغ الجديد، وتُعرض النتائج في جدول أو رسم بياني يوضح تطور المبلغ.",
    example:
      "إذا بدأنا بمبلغ 1000 جنيه، وكان معدل الزيادة السنوي 5%، فإن المبلغ يصبح 1050 جنيهًا بعد السنة الأولى. وتستمر المحاكاة في حساب الزيادة في السنوات التالية.",
    takeaway:
      "نتعلم من هذا التطبيق كيف نستخدم الحسابات والنماذج لدراسة النمو المالي ومقارنة النتائج خلال فترات زمنية مختلفة.",
  },
  {
    number: "02",
    title: "محاكاة حجم المياه والزمن",
    image: "/images/water.png",
    alt: "محاكاة حجم المياه والزمن",
    concept:
      "توضح هذه المحاكاة العلاقة بين كمية المياه المتدفقة والزمن. فعندما يتدفق الماء بمعدل ثابت، تزداد كمية المياه داخل الوعاء كلما زاد الزمن.",
    explanation:
      "نحدد معدل تدفق المياه في الدقيقة، ثم نحدد الزمن الذي يستمر فيه التدفق. بعد ذلك نحسب حجم المياه الناتج بضرب معدل التدفق في الزمن.",
    example:
      "إذا كان معدل تدفق المياه 15 لترًا في الدقيقة، واستمر التدفق لمدة 5 دقائق، فإن حجم المياه يساوي 15 × 5 = 75 لترًا.",
    takeaway:
      "نتعلم من هذا التطبيق كيف نستخدم المحاكاة لتمثيل التغير في كمية المياه مع مرور الزمن، وكيف تؤثر قيمة معدل التدفق على النتيجة.",
  },
  {
    number: "03",
    title: "استخدام Excel في المحاكاة",
    image: "/images/excel-simulation.png",
    alt: "استخدام برنامج Excel في المحاكاة وتنظيم البيانات",
    concept:
      "يُعد Excel أداة تساعدنا على إنشاء نماذج المحاكاة من خلال إدخال البيانات في جداول، واستخدام المعادلات الحسابية، ومتابعة النتائج بطريقة منظمة.",
    explanation:
      "يمكن إدخال البيانات في صفوف وأعمدة، ثم كتابة معادلة لحساب النتائج تلقائيًا. وعند تغيير إحدى القيم، تتغير النتائج وفقًا للمعادلة، مما يساعدنا على تجربة سيناريوهات مختلفة.",
    example:
      "إذا كان سعر المنتج في الخلية B2 والكمية في الخلية C2، يمكن استخدام المعادلة =B2*C2 لحساب إجمالي السعر. وعند تغيير السعر أو الكمية، تتغير النتيجة تلقائيًا.",
    takeaway:
      "نتعلم من هذا التطبيق كيف يساعدنا Excel على تنظيم البيانات وإجراء الحسابات وتحليل نتائج نماذج المحاكاة.",
  },
];

export default function LessonOne() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F3F6FA] text-[#142F50]">

      {/* Header */}
      <section className="relative isolate overflow-hidden border-b border-[#D5AD62]/30 bg-gradient-to-br from-[#142F50] via-[#1B4265] to-[#21845A] text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D5AD62]/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-bold text-white">
            المقرر الدراسي
          </span>

          <h1 className="mt-7 text-3xl font-extrabold leading-relaxed md:text-5xl">
            الدرس الأول
            <br />
            <span className="text-[#D5AD62]">
              المحاكاة باستخدام جداول البيانات
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/85">
            اكتشف مفهوم المحاكاة وأنواع المراجع في جداول البيانات،
            وتعرف على كيفية استخدام برنامج Excel في إنشاء نماذج تحاكي الواقع.
          </p>

          <a
            href="#content"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-bold text-[#142F50] transition hover:-translate-y-1 hover:bg-[#D5AD62]"
          >
            ابدأ التعلم
          </a>
        </div>
      </section>

      {/* Main Image */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="overflow-hidden rounded-3xl border border-[#DFE6EF] bg-white shadow-xl shadow-[#142F50]/10">
          <img
            src="/images/lesson1.png"
            alt="المحاكاة باستخدام جداول البيانات"
            className="h-auto w-full rounded-3xl object-contain"
          />

          <div className="border-t border-[#DFE6EF] p-5 text-center">
            <h2 className="text-xl font-extrabold text-[#142F50]">
              عالم المحاكاة والتطبيقات التفاعلية
            </h2>

            <p className="mt-2 text-[#536579]">
              التعلم من خلال النماذج والتجارب باستخدام جداول البيانات
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl border border-[#DFE6EF] border-r-4 border-r-[#21845A] bg-white p-7 shadow-lg shadow-[#142F50]/5">
          <h2 className="text-2xl font-extrabold text-[#142F50]">
            مقدمة الدرس
          </h2>

          <p className="mt-4 text-lg leading-9 text-[#536579]">
            في هذا الدرس سنتعرف على كيفية التعامل مع المراجع داخل جداول
            البيانات، ونتعلم معنى المحاكاة وأهميتها، ثم نستكشف بعض
            التطبيقات التي يمكن تنفيذها باستخدام برنامج Excel.
          </p>
        </div>
      </section>

      {/* Lesson Parts */}
      <section id="content" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-12 text-center">
          <span className="font-bold text-[#21845A]">
            محتوى الدرس
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#142F50]">
            أقسام الدرس التعليمية
          </h2>

          <p className="mt-4 text-[#536579]">
            تعرف على المعلومات الخاصة بكل جزء.
          </p>
        </div>

        <div className="space-y-10">
          {lessonParts.map((part) => (
            <article
              key={part.number}
              className="overflow-hidden rounded-3xl border border-[#DFE6EF] bg-white shadow-xl shadow-[#142F50]/5"
            >
              <div className="flex items-center gap-4 border-b border-[#DFE6EF] bg-[#F3F6FA] p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#142F50] text-xl font-extrabold text-white">
                  {part.number}
                </div>

                <h3 className="text-xl font-extrabold text-[#142F50] md:text-2xl">
                  {part.title}
                </h3>
              </div>

              <div className="p-6 md:p-8">
                <p className="mb-7 text-lg leading-9 text-[#536579]">
                  {part.intro}
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  {part.topics.map((topic, index) => (
                    <div
                      key={topic.title}
                      className="rounded-2xl border border-[#DFE6EF] bg-[#F3F6FA] p-6"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#21845A] font-bold text-white">
                          {index + 1}
                        </span>

                        <h4 className="text-lg font-extrabold text-[#142F50]">
                          {topic.title}
                        </h4>
                      </div>

                      <p className="mt-4 leading-8 text-[#536579]">
                        {topic.text}
                      </p>

                      <div
                        dir="ltr"
                        className="mt-5 inline-block rounded-lg border border-[#DFE6EF] bg-white px-4 py-2 font-bold text-[#21845A]"
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

      {/* Simulation Applications */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-12 text-center">
          <span className="font-bold text-[#21845A]">
            أمثلة من الحياة العملية
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#142F50]">
            تطبيقات المحاكاة
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#536579]">
            تساعدنا المحاكاة على فهم بعض المواقف الحياتية من خلال إنشاء
            نماذج مبسطة وتجربة القيم المختلفة وملاحظة النتائج.
            تعرف على التطبيقات التالية.
          </p>
        </div>

        <div className="space-y-10">
          {simulationApplications.map((app) => (
            <article
              key={app.number}
              className="overflow-hidden rounded-3xl border border-[#DFE6EF] bg-white shadow-xl shadow-[#142F50]/5"
            >
              <div className="flex items-center gap-4 border-b border-[#DFE6EF] bg-[#F3F6FA] p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#142F50] text-lg font-extrabold text-white">
                  {app.number}
                </div>

                <h3 className="text-xl font-extrabold text-[#142F50] md:text-2xl">
                  {app.title}
                </h3>
              </div>

              <div className="border-b border-[#DFE6EF] bg-[#F3F6FA] p-4 md:p-7">
                <div className="overflow-hidden rounded-2xl bg-white">
                  <img
                    src={app.image}
                    alt={app.alt}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-5 px-6 py-8 md:px-8">
                <div className="rounded-2xl border border-[#DFE6EF] border-r-4 border-r-[#21845A] bg-[#F3F6FA] p-5">
                  <h4 className="mb-3 text-lg font-extrabold text-[#142F50]">
                    المفهوم
                  </h4>

                  <p className="leading-9 text-[#536579]">
                    {app.concept}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#DFE6EF] bg-white p-5">
                  <h4 className="mb-3 text-lg font-extrabold text-[#142F50]">
                    كيف تعمل المحاكاة؟
                  </h4>

                  <p className="leading-9 text-[#536579]">
                    {app.explanation}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#D5AD62]/40 bg-[#D5AD62]/10 p-5">
                  <h4 className="mb-3 text-lg font-extrabold text-[#142F50]">
                    مثال توضيحي
                  </h4>

                  <p className="leading-9 text-[#34465A]">
                    {app.example}
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-[#DFE6EF] bg-[#F3F6FA] p-5">
                  <span className="text-2xl">💡</span>

                  <div>
                    <h4 className="mb-2 font-extrabold text-[#21845A]">
                      ماذا تعلمنا؟
                    </h4>

                    <p className="leading-8 text-[#536579]">
                      {app.takeaway}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Reference Activity */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <ReferenceActivity />
      </section>

      {/* Learning Note */}
      <section
        id="learning"
        className="mx-auto max-w-6xl px-6 pb-14"
      >
        <div className="rounded-3xl border border-[#D5AD62]/40 bg-[#142F50] p-8 text-white md:p-10">
          <h2 className="text-2xl font-extrabold text-[#D5AD62]">
            تذكر
          </h2>

          <p className="mt-4 leading-9 text-white/85">
            تساعدنا المحاكاة على فهم الأنظمة والمواقف المختلفة من خلال
            إنشاء نماذج وتجربة تغييرات متعددة، بينما توفر جداول البيانات
            أدوات لتنظيم البيانات وإجراء الحسابات ومتابعة النتائج.
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-3xl border border-[#DFE6EF] bg-white p-8 shadow-lg shadow-[#142F50]/5">
          <h2 className="mb-6 text-2xl font-extrabold text-[#142F50]">
            ملخص الدرس
          </h2>

          <ul className="space-y-4 leading-8 text-[#536579]">
            <li>✓ تعرفنا على المرجع النسبي والمرجع المطلق.</li>
            <li>✓ فهمنا معنى المحاكاة وأهميتها.</li>
            <li>✓ تعرفنا على استخدام جداول البيانات في المحاكاة.</li>
            <li>✓ تعرفنا على محاكاة حجم المياه والنمو المالي.</li>
            <li>✓ تعلمنا كيف يساعدنا Excel على تنظيم البيانات وتحليل النتائج.</li>
          </ul>
        </div>
      </section>

      {/* Quiz Button */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-3xl border border-[#D5AD62]/40 bg-gradient-to-br from-[#142F50] to-[#21845A] p-8 text-center text-white shadow-xl md:p-12">
          <div className="text-4xl">🎓</div>

          <h2 className="mt-5 text-2xl font-extrabold md:text-3xl">
            هل أنت مستعد لاختبار معلوماتك؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/85">
            بعد الانتهاء من دراسة الدرس الأول، اختبر مدى فهمك
            من خلال مجموعة من الأسئلة التفاعلية.
          </p>

          <Link
            href="/quiz1"
            className="mt-7 inline-block rounded-xl bg-white px-10 py-4 font-extrabold text-[#142F50] transition hover:-translate-y-1 hover:bg-[#D5AD62]"
          >
            ابدأ الاختبار الآن
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-[#D5AD62]/30 bg-[#142F50]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <Link
            href="/courses"
            className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
          >
            العودة إلى المقرر
          </Link>

          <Link
            href="/lesson2"
            className="rounded-xl bg-[#D5AD62] px-6 py-3 font-bold text-[#142F50] transition hover:bg-white"
          >
            الدرس التالي
          </Link>
        </div>
      </section>

    </main>
  );
}
