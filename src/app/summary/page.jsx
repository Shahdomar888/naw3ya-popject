
import Link from "next/link";

const sections = [
  {
    title: "أولًا: المراجع في جداول البيانات",
    points: [
      {
        name: "المرجع النسبي",
        detail: "يتغير عند نسخ المعادلة إلى موقع آخر، مثل A1.",
      },
      {
        name: "المرجع المطلق",
        detail: "يظل ثابتًا عند نسخ المعادلة، مثل $A$1.",
      },
      {
        name: "علامة الدولار ($)",
        detail: "تُستخدم لتثبيت العمود والصف في المرجع المطلق.",
      },
    ],
  },
  {
    title: "ثانيًا: مفهوم المحاكاة وتطبيقاتها",
    points: [
      {
        name: "مفهوم المحاكاة",
        detail: "إنشاء نموذج يمثل نظامًا أو موقفًا واقعيًا لدراسة سلوكه.",
      },
      {
        name: "محاكاة حجم الماء",
        detail: "تمثيل التغير في كمية الماء بمرور الزمن باستخدام البيانات والمعادلات.",
      },
      {
        name: "النمو المالي",
        detail: "استخدام الفائدة المركبة لدراسة نمو الأموال عبر فترات زمنية.",
      },
    ],
  },
  {
    title: "ثالثًا: الدوال والأرقام العشوائية",
    points: [
      {
        name: "RAND()",
        detail: "توليد قيمة عشوائية أكبر من أو تساوي صفرًا وأقل من 1.",
      },
      {
        name: "SUM()",
        detail: "جمع مجموعة من الأرقام أو نطاق من الخلايا.",
      },
      {
        name: "IF()",
        detail: "اختبار شرط وإرجاع نتيجة إذا تحقق الشرط ونتيجة أخرى إذا لم يتحقق.",
      },
    ],
  },
  {
    title: "رابعًا: طريقة مونت كارلو",
    points: [
      {
        name: "الفكرة الأساسية",
        detail: "إجراء عدد كبير من التجارب باستخدام قيم عشوائية لتقدير النتائج.",
      },
      {
        name: "تقدير قيمة π",
        detail: "استخدام نقاط عشوائية ومقارنة النقاط الواقعة داخل ربع الدائرة بإجمالي النقاط.",
      },
      {
        name: "عدد التجارب",
        detail: "زيادة عدد التجارب تساعد غالبًا على تحسين استقرار التقدير.",
      },
    ],
  },
];

export default function SummaryPage() {
  return (
    <main className="min-h-screen bg-[#F4F8FB]">
      <section className="bg-[#102B46] px-6 py-14 text-center text-white md:py-16">
        <span className="rounded-full border border-cyan-300/30 bg-white/10 px-5 py-2 text-sm font-bold text-cyan-200">
          Simulation Lab
        </span>

        <h1 className="mt-6 text-3xl font-black md:text-4xl">
          ملخص المقرر
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/80 md:text-base">
          مراجعة سريعة لأهم المفاهيم والدوال والتطبيقات التي
          تناولناها في الدرسين الأول والثاني.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8 rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-[#102B46]">
            ماذا ستجد في هذا الملخص؟
          </h2>
          <p className="mt-3 leading-8 text-slate-600">
            أهم التعريفات والمفاهيم، والمراجع المستخدمة في جداول البيانات،
            والدوال الأساسية، وتطبيقات المحاكاة وطريقة مونت كارلو.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="bg-[#102B46] px-6 py-5 text-white">
                <span className="text-xs font-bold text-cyan-300">
                  الجزء {index + 1}
                </span>
                <h2 className="mt-1 text-lg font-black md:text-xl">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4 p-6">
                {section.points.map((point) => (
                  <div
                    key={point.name}
                    className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-4"
                  >
                    <h3 className="font-extrabold text-[#087E91]">
                      {point.name}
                    </h3>
                    <p className="mt-2 text-sm leading-8 text-slate-600">
                      {point.detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-[#102B46] p-8 text-center text-white">
          <h2 className="text-2xl font-black">
            هل أنت مستعد لاختبار معلوماتك؟
          </h2>

          <p className="mt-3 leading-8 text-white/80">
            بعد مراجعة الملخص، جرّب الاختبار الشامل وتعرّف على مستواك
            في موضوعات المقرر.
          </p>

          <Link
            href="/comprehensive-quiz"
            className="mt-7 inline-flex rounded-xl bg-[#087E91] px-8 py-4 font-extrabold text-white transition hover:bg-[#066777]"
          >
            ابدأ الاختبار الشامل
          </Link>
        </div>
      </section>
    </main>
  );
}
