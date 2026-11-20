
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
    <main className="min-h-screen bg-[#F3F6FA]">

      {/* Header */}
      <section className="bg-gradient-to-br from-[#142F50] to-[#21845A] px-6 py-14 text-center text-white md:py-16">
        <span className="rounded-full border border-[#D5AD62]/40 bg-white/10 px-5 py-2 text-sm font-bold text-[#D5AD62]">
          Simulation Lab
        </span>

        <h1 className="mt-6 text-3xl font-black md:text-4xl">
          ملخص المقرر
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/85 md:text-base">
          مراجعة سريعة لأهم المفاهيم والدوال والتطبيقات التي
          تناولناها في الدرسين الأول والثاني.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">

        {/* Introduction */}
        <div className="mb-10 rounded-2xl border border-[#DFE6EF] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-[#142F50]">
            ماذا ستجد في هذا الملخص؟
          </h2>

          <p className="mt-3 leading-8 text-[#536579]">
            أهم التعريفات والمفاهيم، والمراجع المستخدمة في جداول البيانات،
            والدوال الأساسية، وتطبيقات المحاكاة وطريقة مونت كارلو.
          </p>
        </div>

        {/* Educational Video */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-[#DFE6EF] bg-white p-5 shadow-md md:p-7">

          <div className="mb-6 text-center">
            <span className="font-bold text-[#21845A]">
              التعلّم المرئي
            </span>

            <h2 className="mt-3 text-2xl font-black text-[#142F50]">
              فيديو شرح المقرر
            </h2>

            <p className="mt-3 leading-8 text-[#536579]">
              شاهدي الفيديو التعليمي لمراجعة موضوعات المحاكاة
              وتطبيقاتها باستخدام جداول البيانات.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#142F50] p-2 shadow-lg">
            <iframe
              className="aspect-video w-full rounded-xl"
              src="https://www.youtube-nocookie.com/embed/AlUePOGfU1s"
              title="الفيديو التعليمي عن المحاكاة"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

        </div>

        {/* Summary Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="overflow-hidden rounded-2xl border border-[#DFE6EF] bg-white shadow-sm"
            >
              <div className="bg-gradient-to-r from-[#142F50] to-[#21845A] px-6 py-5 text-white">
                <span className="text-xs font-bold text-[#D5AD62]">
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
                    className="rounded-xl border border-[#DFE6EF] bg-[#F3F6FA] p-4 transition hover:border-[#21845A]/50"
                  >
                    <h3 className="font-extrabold text-[#142F50]">
                      {point.name}
                    </h3>

                    <p className="mt-2 text-sm leading-8 text-[#536579]">
                      {point.detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Comprehensive Quiz */}
        <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#142F50] to-[#21845A] p-8 text-center text-white">
          <h2 className="text-2xl font-black">
            هل أنت مستعد لاختبار معلوماتك؟
          </h2>

          <p className="mt-3 leading-8 text-white/85">
            بعد مراجعة الملخص ومشاهدة الفيديو، جرّبي الاختبار الشامل
            وتعرّفي على مستواك في موضوعات المقرر.
          </p>

          <Link
            href="/comprehensive-quiz"
            className="mt-7 inline-flex rounded-xl bg-[#21845A] px-8 py-4 font-extrabold text-white transition hover:bg-[#176B49]"
          >
            ابدأ الاختبار الشامل
          </Link>
        </div>

      </section>
    </main>
  );
}
