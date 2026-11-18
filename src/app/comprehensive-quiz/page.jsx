
"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    question: "ما المقصود بالمرجع النسبي في جداول البيانات؟",
    options: [
      "مرجع يتغير عند نسخ المعادلة إلى خلية أخرى",
      "مرجع لا يتغير مطلقًا",
      "مرجع يستخدم النصوص فقط",
      "مرجع يستخدم في الصور",
    ],
    answer: 0,
    explanation: "المرجع النسبي يتغير حسب موقع الخلية عند نسخ المعادلة.",
  },
  {
    question: "ما الرمز المستخدم لتثبيت المرجع المطلق؟",
    options: ["#", "&", "$", "%"],
    answer: 2,
    explanation: "تُستخدم علامة الدولار $ لتثبيت العمود والصف في المرجع المطلق.",
  },
  {
    question: "أي من المراجع التالية يُعد مرجعًا مطلقًا؟",
    options: ["A1", "B5", "$A$1", "C3"],
    answer: 2,
    explanation: "$A$1 مرجع مطلق لأن العمود والصف مثبتان.",
  },
  {
    question: "ما المقصود بالمحاكاة؟",
    options: [
      "حذف البيانات",
      "تمثيل نظام أو موقف واقعي باستخدام نموذج",
      "تغيير ألوان الجدول",
      "كتابة النصوص فقط",
    ],
    answer: 1,
    explanation: "المحاكاة تستخدم نموذجًا لتقليد نظام أو موقف واقعي ودراسة سلوكه.",
  },
  {
    question: "ما إحدى فوائد استخدام المحاكاة؟",
    options: [
      "منع تحليل النتائج",
      "زيادة صعوبة التجربة",
      "تجربة سيناريوهات مختلفة دون تنفيذها في الواقع",
      "حذف المتغيرات",
    ],
    answer: 2,
    explanation: "تسمح المحاكاة بدراسة سيناريوهات متعددة بطريقة آمنة ومنظمة.",
  },
  {
    question: "في محاكاة حجم الماء، ما الذي يمكن تمثيله؟",
    options: [
      "تغير كمية الماء بمرور الوقت",
      "لون شاشة الكمبيوتر",
      "عدد صفحات الكتاب",
      "نوع لوحة المفاتيح",
    ],
    answer: 0,
    explanation: "يمكن استخدام جدول البيانات لتمثيل تغير حجم الماء وفقًا لمعدل التدفق والزمن.",
  },
  {
    question: "ما المقصود بالفائدة المركبة؟",
    options: [
      "فائدة تُحسب على المبلغ الأصلي فقط دائمًا",
      "فائدة تُضاف إلى الأصل وتُحسب عليها فوائد لاحقًا",
      "مبلغ ثابت لا يتغير",
      "عملية حذف للأرباح",
    ],
    answer: 1,
    explanation: "في الفائدة المركبة تُضاف الفائدة إلى الرصيد، ثم تُحسب الفائدة التالية على الرصيد الجديد.",
  },
  {
    question: "ما فائدة استخدام جداول البيانات في المحاكاة؟",
    options: [
      "تنظيم البيانات وإجراء الحسابات ومتابعة النتائج",
      "إيقاف العمليات الحسابية",
      "منع إنشاء الرسوم البيانية",
      "إخفاء جميع القيم",
    ],
    answer: 0,
    explanation: "تساعد جداول البيانات في تنظيم المدخلات وتنفيذ المعادلات وتحليل النتائج.",
  },
  {
    question: "ما المقصود بالأرقام العشوائية؟",
    options: [
      "أرقام مرتبة دائمًا تصاعديًا",
      "أرقام يتم اختيارها دون نمط ثابت متوقع",
      "أرقام ثابتة لا تتغير",
      "أرقام نصية فقط",
    ],
    answer: 1,
    explanation: "الأرقام العشوائية تُستخدم لتمثيل نتائج غير محددة مسبقًا.",
  },
  {
    question: "ما وظيفة الدالة RAND في Excel؟",
    options: [
      "جمع الأرقام",
      "إرجاع قيمة عشوائية بين 0 و1",
      "حذف الخلايا",
      "حساب المتوسط فقط",
    ],
    answer: 1,
    explanation: "تُرجع RAND رقمًا عشوائيًا أكبر من أو يساوي صفرًا وأقل من 1.",
  },
  {
    question: "ما وظيفة الدالة SUM؟",
    options: [
      "جمع مجموعة من القيم",
      "إنشاء رقم عشوائي",
      "اختبار شرط منطقي",
      "تغيير تنسيق الخلية",
    ],
    answer: 0,
    explanation: "تُستخدم SUM لجمع الأرقام الموجودة في خلايا أو نطاقات محددة.",
  },
  {
    question: "ما وظيفة الدالة IF؟",
    options: [
      "جمع جميع الخلايا",
      "اختبار شرط وإرجاع نتيجة حسب تحققه",
      "إنشاء رسم بياني",
      "توليد أرقام عشوائية",
    ],
    answer: 1,
    explanation: "تختبر IF شرطًا؛ وتُرجع نتيجة إذا كان صحيحًا وأخرى إذا كان خطأ.",
  },
  {
    question: "أي دالة يمكن استخدامها لتوليد قيمة عشوائية بين صفر وواحد؟",
    options: ["SUM", "IF", "RAND", "MAX"],
    answer: 2,
    explanation: "الدالة RAND هي الدالة المستخدمة لتوليد قيمة عشوائية بين صفر وواحد.",
  },
  {
    question: "ما المقصود بطريقة مونت كارلو؟",
    options: [
      "طريقة تعتمد على المحاكاة والعينات العشوائية",
      "طريقة لتنسيق النصوص",
      "طريقة لحذف البيانات",
      "طريقة لرسم الجداول فقط",
    ],
    answer: 0,
    explanation: "تعتمد طريقة مونت كارلو على التجارب العشوائية المتكررة لتقدير النتائج.",
  },
  {
    question: "ما الفكرة الأساسية لتقدير قيمة π باستخدام مونت كارلو؟",
    options: [
      "استخدام ألوان مختلفة",
      "توليد نقاط عشوائية ومقارنة النقاط داخل الدائرة بإجمالي النقاط",
      "جمع أرقام الصف الأول فقط",
      "ترتيب الأرقام أبجديًا",
    ],
    answer: 1,
    explanation: "تُستخدم نسبة النقاط داخل ربع الدائرة إلى إجمالي النقاط لتقدير π.",
  },
  {
    question: "ماذا يحدث غالبًا عند زيادة عدد التجارب في محاكاة مونت كارلو؟",
    options: [
      "تختفي جميع النتائج",
      "قد يتحسن استقرار ودقة التقدير",
      "تتحول الأرقام إلى نصوص",
      "تتوقف الدوال عن العمل",
    ],
    answer: 1,
    explanation: "زيادة عدد التجارب تساعد غالبًا على الحصول على تقدير أكثر استقرارًا.",
  },
  {
    question: "أي دالة يمكن استخدامها لجمع نتائج عدة تجارب؟",
    options: ["RAND", "IF", "SUM", "TODAY"],
    answer: 2,
    explanation: "تُستخدم SUM لجمع القيم الناتجة عن التجارب.",
  },
  {
    question: "لماذا نستخدم الأرقام العشوائية في المحاكاة؟",
    options: [
      "لتمثيل حالات أو أحداث غير مؤكدة",
      "لجعل جميع النتائج متطابقة",
      "لمنع تكرار التجارب",
      "لحذف المعادلات",
    ],
    answer: 0,
    explanation: "تساعد الأرقام العشوائية على تمثيل عدم اليقين والاحتمالات في الأنظمة.",
  },
  {
    question: "ما الذي تمثله نتائج المحاكاة؟",
    options: [
      "حقيقة مضمونة في كل الحالات",
      "تقديرات تعتمد على النموذج والافتراضات والمدخلات",
      "نتائج لا يمكن تحليلها",
      "قيم لا تتغير مطلقًا",
    ],
    answer: 1,
    explanation: "نتائج المحاكاة تقديرية، وتتأثر بجودة النموذج والبيانات والافتراضات.",
  },
  {
    question: "ما أفضل طريقة للاستفادة من نتائج المحاكاة؟",
    options: [
      "تجاهل النتائج",
      "تحليل النتائج ومقارنتها بالهدف والافتراضات",
      "حذف البيانات المستخدمة",
      "الاعتماد على تجربة واحدة دائمًا",
    ],
    answer: 1,
    explanation: "تحليل النتائج ومقارنتها يساعد على فهم النموذج وتقييم مدى ملاءمته.",
  },
];

export default function ComprehensiveQuizPage() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const score = questions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.answer ? 1 : 0),
    0
  );

  const percentage = Math.round((score / questions.length) * 100);
  const answeredCount = Object.keys(answers).length;

  function playCelebration() {
    if (!soundEnabled || typeof window === "undefined") return;

    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    const audio = new AudioContextClass();
    const notes = [523.25, 659.25, 783.99, 1046.5];

    notes.forEach((frequency, index) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, audio.currentTime + index * 0.13);
      gain.gain.exponentialRampToValueAtTime(
        0.12,
        audio.currentTime + index * 0.13 + 0.03
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audio.currentTime + index * 0.13 + 0.22
      );

      oscillator.connect(gain);
      gain.connect(audio.destination);

      oscillator.start(audio.currentTime + index * 0.13);
      oscillator.stop(audio.currentTime + index * 0.13 + 0.23);
    });

    setTimeout(() => audio.close(), 1500);
  }

  function handleSubmit() {
    if (answeredCount !== questions.length) return;

    setSubmitted(true);
    playCelebration();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-[#F7F9FC] pb-16 text-[#263B49]">

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#176B78] via-[#238B8B] to-[#35A99A] px-6 py-12 text-center text-white md:py-16">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#E9B44C]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">

          <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-bold text-white">
            ✨ Simulation Lab
          </span>

          <h1 className="mt-6 text-3xl font-black md:text-5xl">
            الاختبار الشامل
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/90 md:text-base">
            اختبر معلوماتك في موضوعات الدرسين الأول والثاني
            من خلال 20 سؤالًا متنوعًا.
          </p>

          <div className="mx-auto mt-7 flex max-w-md justify-center gap-4">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-7 py-3">
              <p className="text-2xl font-black text-[#FFE09A]">20</p>
              <p className="mt-1 text-xs text-white/90">سؤال</p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 px-7 py-3">
              <p className="text-2xl font-black text-[#FFE09A]">2</p>
              <p className="mt-1 text-xs text-white/90">درسان</p>
            </div>
          </div>

          <div className="mx-auto mt-8 h-1.5 w-24 rounded-full bg-[#E9B44C]" />

        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10">

        {/* Result */}
        {submitted ? (
          <div className="mb-8 rounded-3xl border border-[#E2ECEC] bg-white p-8 text-center shadow-lg shadow-[#176B78]/10">

            <div className="text-5xl">
              {percentage >= 85 ? "🏆" : percentage >= 60 ? "🎉" : "📚"}
            </div>

            <h2 className="mt-4 text-2xl font-black text-[#176B78]">
              {percentage >= 85
                ? "ممتاز! أداء رائع"
                : percentage >= 60
                ? "أحسنت! نتيجة جيدة"
                : "استمر في التعلم والمحاولة"}
            </h2>

            <p className="mt-3 text-[#71838B]">
              لقد أكملت الاختبار الشامل بنجاح.
            </p>

            <div className="mx-auto mt-7 flex h-36 w-36 flex-col items-center justify-center rounded-full border-[10px] border-[#E9B44C]/50 bg-[#FFF8E8]">
              <span className="text-4xl font-black text-[#176B78]">
                {percentage}%
              </span>
              <span className="mt-1 text-xs text-[#71838B]">
                النسبة المئوية
              </span>
            </div>

            <p className="mt-6 text-lg font-bold text-[#176B78]">
              درجتك: {score} من {questions.length}
            </p>

            <p className="mt-2 text-sm text-[#71838B]">
              الإجابات الصحيحة: {score} — الإجابات غير الصحيحة:{" "}
              {questions.length - score}
            </p>

            <button
              onClick={resetQuiz}
              className="mt-7 rounded-xl bg-[#176B78] px-8 py-3 font-bold text-white transition hover:bg-[#125762]"
            >
              إعادة الاختبار
            </button>

          </div>
        ) : (
          /* Progress */
          <div className="mb-8 rounded-2xl border border-[#E2ECEC] bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between gap-3">
              <p className="font-bold text-[#176B78]">
                تقدمك في الاختبار
              </p>

              <p className="text-sm font-bold text-[#238B8B]">
                {answeredCount} / {questions.length}
              </p>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#EAF4F3]">
              <div
                className="h-full rounded-full bg-gradient-to-l from-[#176B78] to-[#35A99A] transition-all duration-300"
                style={{
                  width: `${(answeredCount / questions.length) * 100}%`,
                }}
              />
            </div>

          </div>
        )}

        {/* Sound Button */}
        <div className="mb-6 flex justify-end">
          <button
            type="button"
            onClick={() => setSoundEnabled((value) => !value)}
            className="rounded-xl border border-[#E2ECEC] bg-white px-4 py-2 text-sm font-bold text-[#176B78] shadow-sm transition hover:bg-[#EAF4F3]"
          >
            {soundEnabled ? "🔊 الصوت يعمل" : "🔇 الصوت مغلق"}
          </button>
        </div>

        {/* Questions */}
        {questions.map((question, index) => {
          const selected = answers[index];
          const isCorrect = selected === question.answer;

          return (
            <article
              key={index}
              className="mb-6 rounded-2xl border border-[#E2ECEC] bg-white p-5 shadow-sm transition hover:shadow-md md:p-7"
            >

              <div className="mb-5 flex items-start gap-3">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#176B78] font-black text-white">
                  {index + 1}
                </span>

                <h3 className="pt-1 font-extrabold leading-7 text-[#176B78]">
                  {question.question}
                </h3>

              </div>

              <div className="space-y-3">

                {question.options.map((option, optionIndex) => {
                  const isSelected = selected === optionIndex;
                  const isRightAnswer = optionIndex === question.answer;

                  let optionStyle =
                    "border-[#E2ECEC] bg-white hover:border-[#35A99A] hover:bg-[#EAF4F3]";

                  if (!submitted && isSelected) {
                    optionStyle =
                      "border-[#238B8B] bg-[#EAF4F3] shadow-sm";
                  }

                  if (submitted && isRightAnswer) {
                    optionStyle =
                      "border-green-500 bg-green-50 text-green-900";
                  } else if (submitted && isSelected && !isCorrect) {
                    optionStyle =
                      "border-red-400 bg-red-50 text-red-900";
                  }

                  return (
                    <label
                      key={optionIndex}
                      className={`flex items-center gap-3 rounded-xl border-2 p-4 transition ${optionStyle} ${
                        submitted ? "cursor-default" : "cursor-pointer"
                      }`}
                    >

                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={optionIndex}
                        checked={isSelected}
                        disabled={submitted}
                        onChange={() =>
                          setAnswers((previous) => ({
                            ...previous,
                            [index]: optionIndex,
                          }))
                        }
                        className="h-4 w-4 accent-[#176B78]"
                      />

                      <span className="flex-1 text-sm font-semibold leading-7">
                        {option}
                      </span>

                      {submitted && isRightAnswer && (
                        <span className="font-black text-green-600">✓</span>
                      )}

                      {submitted && isSelected && !isCorrect && (
                        <span className="font-black text-red-600">✕</span>
                      )}

                    </label>
                  );
                })}

              </div>

              {submitted && (
                <div
                  className={`mt-4 rounded-xl p-4 text-sm leading-7 ${
                    isCorrect
                      ? "bg-green-50 text-green-800"
                      : "bg-[#FFF6E5] text-[#795C21]"
                  }`}
                >
                  <p className="font-extrabold">
                    {isCorrect ? "إجابة صحيحة" : "إجابة غير صحيحة"}
                  </p>

                  <p className="mt-1">{question.explanation}</p>
                </div>
              )}

            </article>
          );
        })}

        {/* Submit */}
        {!submitted && (
          <div className="rounded-2xl bg-gradient-to-l from-[#176B78] to-[#238B8B] p-6 text-center text-white shadow-lg">

            <p className="mb-4 text-sm leading-7 text-white/90">
              {answeredCount === questions.length
                ? "أكملت الإجابة عن جميع الأسئلة. يمكنك الآن تصحيح الاختبار."
                : `أجيبي عن الأسئلة المتبقية أولًا. متبقي ${
                    questions.length - answeredCount
                  } سؤال.`}
            </p>

            <button
              onClick={handleSubmit}
              disabled={answeredCount !== questions.length}
              className="rounded-xl bg-[#E9B44C] px-10 py-4 font-extrabold text-[#263B49] transition hover:-translate-y-1 hover:bg-[#F3CC76] disabled:cursor-not-allowed disabled:opacity-40"
            >
              تصحيح الاختبار وإظهار النتيجة
            </button>

          </div>
        )}

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/courses"
            className="font-bold text-[#176B78] transition hover:text-[#35A99A]"
          >
            العودة إلى المقرر
          </Link>
        </div>

      </section>
    </main>
  );
}
