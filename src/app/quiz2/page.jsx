
"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    question: "ما المقصود بالأرقام العشوائية؟",
    options: [
      "أرقام يتم اختيارها دون نمط محدد مسبقًا",
      "أرقام مرتبة تصاعديًا دائمًا",
      "أرقام ثابتة لا تتغير",
      "أرقام ناتجة عن عملية الجمع فقط",
    ],
    correct: 0,
    explanation:
      "الأرقام العشوائية هي أرقام يتم توليدها دون ترتيب أو نمط ثابت.",
  },
  {
    question: "ما وظيفة الدالة RAND في Excel؟",
    options: [
      "حساب المجموع",
      "توليد رقم عشوائي بين 0 و1",
      "إيجاد أكبر قيمة",
      "حساب المتوسط",
    ],
    correct: 1,
    explanation:
      "تستخدم RAND لتوليد رقم عشوائي أكبر من أو يساوي صفرًا وأقل من واحد.",
  },
  {
    question: "ما وظيفة الدالة SUM؟",
    options: [
      "توليد أرقام عشوائية",
      "اختبار شرط",
      "جمع مجموعة من الأرقام",
      "حذف البيانات",
    ],
    correct: 2,
    explanation:
      "تستخدم SUM لجمع القيم الموجودة في الخلايا.",
  },
  {
    question: "ما وظيفة الدالة IF؟",
    options: [
      "تنفيذ عملية بناءً على تحقق شرط",
      "توليد رقم عشوائي",
      "جمع الأرقام فقط",
      "ترتيب البيانات",
    ],
    correct: 0,
    explanation:
      "تختبر IF شرطًا معينًا ثم تعرض نتيجة عند تحققه ونتيجة أخرى عند عدم تحققه.",
  },
  {
    question: "ما المقصود بطريقة مونت كارلو؟",
    options: [
      "طريقة لتنسيق الجداول",
      "طريقة تعتمد على التجارب العشوائية والمحاكاة",
      "طريقة لحذف البيانات",
      "طريقة لرسم الصور",
    ],
    correct: 1,
    explanation:
      "تعتمد طريقة مونت كارلو على استخدام أعداد عشوائية وتجارب متعددة لتقدير النتائج.",
  },
  {
    question: "ما الهدف من استخدام طريقة مونت كارلو لتقدير قيمة π؟",
    options: [
      "حساب مجموع الأرقام",
      "إنشاء جدول بيانات",
      "تقدير قيمة π باستخدام نقاط عشوائية",
      "ترتيب الأرقام",
    ],
    correct: 2,
    explanation:
      "نستخدم نقاطًا عشوائية داخل مربع ونحسب نسبة النقاط التي تقع داخل ربع الدائرة.",
  },
  {
    question: "ماذا يحدث غالبًا عند زيادة عدد التجارب في محاكاة مونت كارلو؟",
    options: [
      "تزداد دقة التقدير غالبًا",
      "تختفي الأرقام العشوائية",
      "تتوقف المحاكاة",
      "تصبح النتيجة دائمًا صفرًا",
    ],
    correct: 0,
    explanation:
      "زيادة عدد التجارب تساعد غالبًا على الحصول على تقدير أكثر استقرارًا.",
  },
  {
    question: "أي الدوال التالية تُستخدم لتوليد أرقام عشوائية في Excel؟",
    options: ["SUM", "IF", "RAND", "MAX"],
    correct: 2,
    explanation:
      "الدالة RAND تستخدم لتوليد أرقام عشوائية بين صفر وواحد.",
  },
];

export default function Quiz2Page() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const score = questions.reduce((total, question, index) => {
    return total + (answers[index] === question.correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  function playCelebrationSound() {
    if (!soundEnabled) return;

    try {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContextClass) return;

      const audioContext = new AudioContextClass();

      const notes = [
        523.25,
        659.25,
        783.99,
        1046.5,
        783.99,
        1046.5,
      ];

      notes.forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        const startTime = audioContext.currentTime + index * 0.16;

        oscillator.type = "sine";
        oscillator.frequency.value = frequency;

        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.12, startTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(
          0.001,
          startTime + 0.3
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + 0.32);
      });

      setTimeout(() => audioContext.close(), 1800);
    } catch (error) {
      console.log("تعذر تشغيل الصوت", error);
    }
  }

  function handleSubmit() {
    if (Object.keys(answers).length !== questions.length) {
      alert("من فضلك أجيبي عن جميع الأسئلة أولًا.");
      return;
    }

    setSubmitted(true);
    playCelebrationSound();
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  function getResultMessage() {
    if (percentage === 100) {
      return "ممتاز! لقد أجبتِ عن جميع الأسئلة بشكل صحيح.";
    }

    if (percentage >= 75) {
      return "أداء رائع! لديكِ فهم ممتاز لمحتوى الدرس.";
    }

    if (percentage >= 50) {
      return "أداء جيد! راجعي بعض النقاط وحاولي مرة أخرى.";
    }

    return "لا تقلقي! راجعي الدرس مرة أخرى ثم أعيدي الاختبار.";
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#F7F9FC]">

      {/* Header */}
      <section className="bg-gradient-to-l from-[#176B78] to-[#263B49] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">

          <p className="mb-3 font-bold text-[#E9B44C]">
            Simulation Lab
          </p>

          <h1 className="text-3xl font-extrabold md:text-5xl">
            اختبار الدرس الثاني
          </h1>

          <p className="mt-5 text-lg leading-8 text-white/85">
            اختبري معلوماتك حول الأرقام العشوائية ودوال Excel
            وطريقة مونت كارلو.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2">
              8 أسئلة
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2">
              اختيار من متعدد
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2">
              تصحيح تلقائي
            </span>
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">

        {!submitted ? (
          <>
            {/* Progress */}
            <div className="mb-8 flex items-center justify-between gap-3 rounded-2xl border border-[#EAF4F3] bg-white p-5 shadow-sm">

              <div>
                <p className="font-extrabold text-[#176B78]">
                  أجيبي عن جميع الأسئلة
                </p>

                <p className="mt-1 text-sm text-[#71838B]">
                  تم الإجابة عن {Object.keys(answers).length} من {questions.length}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`rounded-xl px-4 py-3 text-sm font-bold text-white transition ${
                  soundEnabled
                    ? "bg-[#35A99A] hover:bg-[#278F83]"
                    : "bg-[#71838B]"
                }`}
              >
                {soundEnabled ? "🔊 الصوت مفعل" : "🔇 الصوت مغلق"}
              </button>

            </div>

            <div className="mb-8 h-3 overflow-hidden rounded-full bg-[#EAF4F3]">
              <div
                className="h-full rounded-full bg-[#35A99A] transition-all duration-300"
                style={{
                  width: `${
                    (Object.keys(answers).length / questions.length) * 100
                  }%`,
                }}
              />
            </div>

            {/* Questions */}
            <div className="space-y-7">

              {questions.map((question, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-[#EAF4F3] bg-white p-6 shadow-sm md:p-8"
                >

                  <div className="mb-5 flex items-start gap-3">

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#176B78] font-extrabold text-white">
                      {index + 1}
                    </span>

                    <h2 className="pt-1 text-lg font-extrabold leading-8 text-[#176B78]">
                      {question.question}
                    </h2>

                  </div>

                  {/* Answers */}
                  <div className="space-y-3">

                    {question.options.map((option, optionIndex) => {

                      const isSelected =
                        answers[index] === optionIndex;

                      return (
                        <label
                          key={optionIndex}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all duration-200 ${
                            isSelected
                              ? "border-[#35A99A] bg-[#EAF4F3] shadow-sm"
                              : "border-[#EAF4F3] bg-white hover:border-[#35A99A] hover:bg-[#F7F9FC]"
                          }`}
                        >

                          <input
                            type="radio"
                            name={`question-${index}`}
                            checked={isSelected}
                            onChange={() =>
                              setAnswers((prev) => ({
                                ...prev,
                                [index]: optionIndex,
                              }))
                            }
                            className="h-5 w-5 shrink-0 accent-[#35A99A]"
                          />

                          <span
                            className={`flex-1 font-bold leading-7 ${
                              isSelected
                                ? "text-[#176B78]"
                                : "text-[#526B78]"
                            }`}
                          >
                            {option}
                          </span>

                          {isSelected && (
                            <span className="font-extrabold text-[#35A99A]">
                              ✓
                            </span>
                          )}

                        </label>
                      );
                    })}

                  </div>

                </div>
              ))}

            </div>

            {/* Submit */}
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-xl bg-[#35A99A] px-12 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-[#278F83]"
              >
                تصحيح الإجابات
              </button>
            </div>

          </>
        ) : (

          /* Result */
          <div className="space-y-8">

            <div className="overflow-hidden rounded-3xl border border-[#EAF4F3] bg-white text-center shadow-lg">

              <div className="bg-gradient-to-l from-[#176B78] to-[#263B49] px-6 py-12 text-white">

                <div className="mb-4 text-6xl">
                  {percentage >= 50 ? "🎉" : "🌟"}
                </div>

                <h2 className="text-3xl font-extrabold">
                  انتهى الاختبار!
                </h2>

                <p className="mt-3 text-lg text-white/90">
                  {getResultMessage()}
                </p>

                <div className="mt-8 text-6xl font-extrabold text-[#E9B44C]">
                  {score} / {questions.length}
                </div>

                <p className="mt-2 text-lg">
                  نسبتك المئوية: {percentage}%
                </p>

              </div>

              <div className="p-7">

                <div className="mb-5 flex justify-center gap-3 text-3xl">
                  🎊 ✨ 🥳 🏅 🎓
                </div>

                <p className="font-bold text-[#176B78]">
                  {percentage === 100
                    ? "إنجاز رائع! تستحقين التميز."
                    : "استمري في التعلم، فكل محاولة تقربك من النجاح."}
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-3">

                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-xl bg-[#35A99A] px-7 py-3 font-bold text-white transition hover:bg-[#278F83]"
                  >
                    إعادة الاختبار
                  </button>

                  <Link
                    href="/lesson2"
                    className="rounded-xl bg-[#176B78] px-7 py-3 font-bold text-white transition hover:bg-[#125762]"
                  >
                    مراجعة الدرس
                  </Link>

                </div>

              </div>
            </div>

            {/* Answer Review */}
            <div className="rounded-3xl border border-[#EAF4F3] bg-white p-6 shadow-sm md:p-8">

              <h2 className="mb-6 text-2xl font-extrabold text-[#176B78]">
                مراجعة الإجابات
              </h2>

              <div className="space-y-6">

                {questions.map((question, index) => {

                  const isCorrect =
                    answers[index] === question.correct;

                  return (
                    <div
                      key={index}
                      className={`rounded-2xl border p-5 ${
                        isCorrect
                          ? "border-green-200 bg-green-50"
                          : "border-red-200 bg-red-50"
                      }`}
                    >

                      <div className="flex items-start gap-3">

                        <span className="text-2xl">
                          {isCorrect ? "✅" : "❌"}
                        </span>

                        <div>

                          <h3 className="font-extrabold leading-7 text-[#263B49]">
                            {index + 1}. {question.question}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-[#526B78]">
                            إجابتك: {question.options[answers[index]]}
                          </p>

                          {!isCorrect && (
                            <p className="mt-2 text-sm font-bold leading-7 text-green-800">
                              الإجابة الصحيحة:{" "}
                              {question.options[question.correct]}
                            </p>
                          )}

                          <p className="mt-3 text-sm leading-7 text-[#526B78]">
                            {question.explanation}
                          </p>

                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        )}

      </section>

      <div className="pb-12 text-center">
        <Link
          href="/courses"
          className="font-bold text-[#176B78] underline decoration-[#35A99A] underline-offset-4"
        >
          العودة إلى المقرر
        </Link>
      </div>

    </main>
  );
}
