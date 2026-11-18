
"use client";

import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    question: "ما المقصود بالمرجع النسبي في جداول البيانات؟",
    options: [
      "مرجع يتغير عند نسخ المعادلة إلى خلية أخرى",
      "مرجع يظل ثابتًا دائمًا",
      "مرجع يستخدم للصور فقط",
      "مرجع لا يمكن استخدامه في المعادلات",
    ],
    answer: 0,
    explanation:
      "المرجع النسبي يتغير تلقائيًا عند نسخ المعادلة إلى مكان آخر.",
  },
  {
    question: "أي من المراجع التالية يمثل مرجعًا مطلقًا؟",
    options: ["A1", "B2", "$A$1", "C3"],
    answer: 2,
    explanation:
      "المرجع المطلق يستخدم علامة الدولار لتثبيت العمود والصف، مثل $A$1.",
  },
  {
    question: "ما العلامة المستخدمة لتثبيت الخلية في المرجع المطلق؟",
    options: ["#", "&", "@", "$"],
    answer: 3,
    explanation:
      "نستخدم علامة الدولار ($) لتثبيت العمود والصف في المرجع المطلق.",
  },
  {
    question: "ما المقصود بالمحاكاة؟",
    options: [
      "حذف البيانات من جدول البيانات",
      "إنشاء نموذج مبسط يمثل موقفًا أو نظامًا واقعيًا",
      "كتابة النصوص فقط",
      "تغيير ألوان الخلايا",
    ],
    answer: 1,
    explanation:
      "المحاكاة هي إنشاء نموذج يمثل موقفًا أو نظامًا واقعيًا لدراسته وفهمه.",
  },
  {
    question: "ما أهمية استخدام المحاكاة؟",
    options: [
      "إلغاء الحاجة إلى البيانات",
      "زيادة حجم الملفات فقط",
      "فهم الأنظمة وتجربة الاحتمالات وملاحظة النتائج",
      "منع إجراء الحسابات",
    ],
    answer: 2,
    explanation:
      "تساعد المحاكاة على دراسة الأنظمة وتجربة التغييرات ومقارنة النتائج.",
  },
  {
    question: "أي برنامج يمكن استخدامه لإنشاء نماذج المحاكاة باستخدام جداول البيانات؟",
    options: ["Excel", "Paint", "Notepad", "Calculator فقط"],
    answer: 0,
    explanation:
      "يمكن استخدام برنامج Excel لتنظيم البيانات وإجراء الحسابات وإنشاء نماذج المحاكاة.",
  },
  {
    question: "في محاكاة حجم الماء، ما البيانات التي يمكن متابعتها؟",
    options: [
      "لون الشاشة",
      "عدد الصور",
      "نوع الخط",
      "كمية الماء والزمن ومعدل التدفق",
    ],
    answer: 3,
    explanation:
      "تساعد هذه البيانات على متابعة تغير كمية الماء بمرور الزمن.",
  },
  {
    question: "ما المقصود بمحاكاة النمو المالي باستخدام الفائدة المركبة؟",
    options: [
      "حذف المبلغ المالي",
      "تمثيل نمو مبلغ من المال عبر فترات زمنية",
      "تغيير شكل جدول البيانات",
      "إيقاف العمليات الحسابية",
    ],
    answer: 1,
    explanation:
      "توضح المحاكاة كيف ينمو المبلغ المالي عند تطبيق الفائدة المركبة خلال فترات زمنية مختلفة.",
  },
];

export default function QuizOne() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const score = questions.reduce((total, question, index) => {
    return total + (answers[index] === question.answer ? 1 : 0);
  }, 0);

  const answeredCount = Object.keys(answers).length;

  function playCelebrationSound() {
    if (!soundEnabled) return;

    try {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContextClass) return;

      const audio = new AudioContextClass();

      const notes = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5];

      notes.forEach((frequency, index) => {
        const oscillator = audio.createOscillator();
        const volume = audio.createGain();

        const startTime = audio.currentTime + index * 0.16;

        oscillator.type = "sine";
        oscillator.frequency.value = frequency;

        volume.gain.setValueAtTime(0.001, startTime);
        volume.gain.exponentialRampToValueAtTime(
          0.15,
          startTime + 0.05
        );
        volume.gain.exponentialRampToValueAtTime(
          0.001,
          startTime + 0.35
        );

        oscillator.connect(volume);
        volume.connect(audio.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + 0.4);
      });

      window.setTimeout(() => {
        audio.close();
      }, 1800);
    } catch (error) {
      console.log("تعذر تشغيل الصوت:", error);
    }
  }

  function handleAnswer(questionIndex, optionIndex) {
    if (submitted) return;

    setAnswers((previous) => ({
      ...previous,
      [questionIndex]: optionIndex,
    }));
  }

  function handleSubmit() {
    if (answeredCount !== questions.length) return;

    setSubmitted(true);
    playCelebrationSound();
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F7F9FC] text-[#263B49]"
    >

      {/* Header */}
      <section className="bg-gradient-to-l from-[#176B78] to-[#263B49] text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">

          <span className="rounded-full border border-[#E9B44C]/50 bg-white/10 px-5 py-2 text-sm font-bold text-[#E9B44C]">
            Simulation Lab
          </span>

          <h1 className="mt-7 text-3xl font-extrabold md:text-5xl">
            اختبار الدرس الأول
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-white/85">
            اختبر معلوماتك حول المراجع في جداول البيانات
            ومفهوم المحاكاة وتطبيقاتها.
          </p>

        </div>
      </section>

      {/* Quiz Information */}
      <section className="mx-auto max-w-4xl px-6 pt-10">
        <div className="rounded-3xl border border-[#EAF4F3] bg-white p-6 shadow-sm">

          <div className="flex flex-wrap items-center justify-between gap-4">

            <div>
              <h2 className="text-xl font-extrabold text-[#176B78]">
                اختبر نفسك
              </h2>

              <p className="mt-2 text-[#71838B]">
                أجب عن جميع الأسئلة ثم اضغط على تصحيح الإجابات.
              </p>
            </div>

            <div className="rounded-xl bg-[#EAF4F3] px-5 py-3 text-center">
              <p className="text-sm text-[#71838B]">
                عدد الأسئلة
              </p>

              <p className="text-2xl font-extrabold text-[#176B78]">
                {questions.length}
              </p>
            </div>

          </div>

          {/* Sound Setting */}
          <div className="mt-6 flex items-center justify-between rounded-xl bg-[#F7F9FC] p-4">

            <div>
              <p className="font-bold text-[#176B78]">
                صوت الاحتفال
              </p>

              <p className="mt-1 text-sm text-[#71838B]">
                تشغيل الصوت عند إنهاء الاختبار
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`rounded-xl px-5 py-2 font-bold text-white transition ${
                soundEnabled
                  ? "bg-[#35A99A] hover:bg-[#278F83]"
                  : "bg-[#71838B]"
              }`}
            >
              {soundEnabled ? "الصوت يعمل 🔊" : "الصوت مغلق 🔇"}
            </button>

          </div>

          {/* Progress */}
          <div className="mt-7">

            <div className="mb-2 flex justify-between text-sm font-bold">
              <span className="text-[#263B49]">
                تقدم الإجابة
              </span>

              <span className="text-[#176B78]">
                {answeredCount} / {questions.length}
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-[#EAF4F3]">
              <div
                className="h-full rounded-full bg-[#35A99A] transition-all duration-300"
                style={{
                  width: `${(answeredCount / questions.length) * 100}%`,
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="mx-auto max-w-4xl space-y-7 px-6 py-10">

        {questions.map((question, questionIndex) => (
          <article
            key={questionIndex}
            className="overflow-hidden rounded-3xl border border-[#EAF4F3] bg-white shadow-sm"
          >

            <div className="flex items-center gap-4 bg-gradient-to-l from-[#176B78] to-[#263B49] p-5 text-white">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#35A99A] font-extrabold text-white">
                {questionIndex + 1}
              </div>

              <h3 className="text-lg font-bold leading-8">
                {question.question}
              </h3>

            </div>

            <div className="space-y-3 p-6">

              {question.options.map((option, optionIndex) => {

                const selected =
                  answers[questionIndex] === optionIndex;

                const correct =
                  question.answer === optionIndex;

                let optionStyle =
                  "border-[#EAF4F3] bg-white hover:border-[#35A99A] hover:bg-[#EAF4F3]";

                if (selected && !submitted) {
                  optionStyle =
                    "border-[#35A99A] bg-[#EAF4F3] text-[#176B78]";
                }

                if (submitted && correct) {
                  optionStyle =
                    "border-green-500 bg-green-50 text-green-800";
                } else if (submitted && selected && !correct) {
                  optionStyle =
                    "border-red-400 bg-red-50 text-red-800";
                }

                return (
                  <button
                    key={optionIndex}
                    type="button"
                    disabled={submitted}
                    onClick={() =>
                      handleAnswer(questionIndex, optionIndex)
                    }
                    className={`flex w-full items-center gap-3 rounded-xl border p-4 text-right transition ${optionStyle} ${
                      submitted
                        ? "cursor-default"
                        : "cursor-pointer"
                    }`}
                  >

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current text-sm font-bold">
                      {["أ", "ب", "ج", "د"][optionIndex]}
                    </span>

                    <span className="flex-1 leading-7">
                      {option}
                    </span>

                    {submitted && correct && (
                      <span className="font-bold">✓</span>
                    )}

                    {submitted && selected && !correct && (
                      <span className="font-bold">✕</span>
                    )}

                  </button>
                );
              })}

              {submitted && (
                <div className="mt-4 rounded-xl border border-[#EAF4F3] bg-[#EAF4F3] p-4 leading-8 text-[#526B78]">

                  <p className="font-extrabold text-[#176B78]">
                    التوضيح:
                  </p>

                  <p>{question.explanation}</p>

                </div>
              )}

            </div>
          </article>
        ))}

        {/* Submit Button */}
        {!submitted && (
          <div className="rounded-3xl border border-[#EAF4F3] bg-white p-7 text-center shadow-sm">

            {answeredCount < questions.length && (
              <p className="mb-4 text-sm text-[#71838B]">
                متبقي {questions.length - answeredCount} سؤال لم تتم الإجابة عنه.
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={answeredCount !== questions.length}
              className="w-full rounded-xl bg-[#35A99A] px-8 py-4 font-extrabold text-white transition hover:bg-[#278F83] disabled:cursor-not-allowed disabled:bg-slate-300 md:w-auto"
            >
              تصحيح الإجابات
            </button>

          </div>
        )}

        {/* Celebration and Results */}
        {submitted && (
          <div className="relative overflow-hidden rounded-3xl border border-[#EAF4F3] bg-white p-8 text-center shadow-lg md:p-12">

            <div className="mb-6 flex justify-center gap-5 text-4xl">
              <span className="animate-bounce">🎉</span>
              <span className="animate-bounce [animation-delay:150ms]">
                🎊
              </span>
              <span className="animate-bounce [animation-delay:300ms]">
                ✨
              </span>
            </div>

            <h2 className="text-3xl font-extrabold text-[#176B78]">
              أحسنت! انتهيت من الاختبار
            </h2>

            <p className="mt-4 text-[#71838B]">
              نتيجتك النهائية
            </p>

            <p className="mt-3 text-6xl font-extrabold text-[#35A99A]">
              {score} / {questions.length}
            </p>

            <p className="mt-3 text-lg font-bold text-[#263B49]">
              {score === questions.length
                ? "ممتاز! كل إجاباتك صحيحة 🏆"
                : score >= 5
                ? "أداء رائع! استمري في التقدم 🌟"
                : "لا تستسلمي، حاولي مرة أخرى 💪"}
            </p>

            <div className="mt-6 rounded-2xl bg-[#EAF4F3] p-5">
              <p className="text-lg font-bold text-[#176B78]">
                {Math.round((score / questions.length) * 100)}%
              </p>

              <p className="mt-2 text-[#526B78]">
                نسبة الإجابات الصحيحة
              </p>
            </div>

            <div className="mt-7 text-4xl">
              🥳 🎓 🏅
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="mt-7 rounded-xl bg-[#35A99A] px-8 py-3 font-bold text-white transition hover:bg-[#278F83]"
            >
              إعادة الاختبار
            </button>

          </div>
        )}

      </section>

      {/* Navigation */}
      <section className="border-t border-[#EAF4F3] bg-white">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-8">

          <Link
            href="/lesson1"
            className="rounded-xl border border-[#176B78] px-6 py-3 font-bold text-[#176B78] transition hover:bg-[#EAF4F3]"
          >
            العودة إلى الدرس الأول
          </Link>

          <Link
            href="/courses"
            className="rounded-xl bg-[#35A99A] px-6 py-3 font-bold text-white transition hover:bg-[#278F83]"
          >
            العودة إلى المقرر
          </Link>

        </div>
      </section>

    </main>
  );
}
