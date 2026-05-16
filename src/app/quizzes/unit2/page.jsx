"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Unit2Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  // إضافة حالة لتخزين الإجابة المختارة لتلوينها
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      q: "تتركز السلالة المغولية (الصفراء) في قارة...؟",
      options: ["أفريقيا", "أوروبا", "آسيا", "أستراليا"],
      a: "آسيا"
    },
    {
      q: "ينتمي معظم العرب إلى السلالة...؟",
      options: ["الزنجية", "القوقازية", "المغولية", "النوردية"],
      a: "القوقازية"
    },
    {
      q: "أكبر دول قارة أمريكا الجنوبية سكاناً هي دولة...؟",
      options: ["الأرجنتين", "البرازيل", "تشيلي", "كولومبيا"],
      a: "البرازيل"
    },
    {
      q: "تعد قارة ........ أعلى قارات العالم في معدل المواليد؟",
      options: ["أوروبا", "آسيا", "أفريقيا", "أستراليا"],
      a: "أفريقيا"
    },
    {
      q: "يقل السكان في مناطق الحرارة المرتفعة والغابات الكثيفة مثل حوض...؟",
      options: ["النيل", "الكونغو", "الراين", "الميسيسيبي"],
      a: "الكونغو"
    },
    {
      q: "تصل نسبة المتعلمين إلى أكثر من 95% في دول...؟",
      options: ["أمريكا الشمالية", "أفريقيا", "الهند", "مصر"],
      a: "أمريكا الشمالية"
    },
    {
      q: "أقل قارات العالم في معدل المواليد (11 في الألف) هي قارة...؟",
      options: ["أوروبا", "أستراليا", "آسيا", "أمريكا الجنوبية"],
      a: "أوروبا"
    },
    {
      q: "تعتبر دولة ........ من الدول ذات الرعاية الطبية المنخفضة؟",
      options: ["روسيا", "الإمارات", "النيجر", "مصر"],
      a: "النيجر"
    },
    {
      q: "يقل السكان في شمال آسيا (سيبيريا) بسبب...؟",
      options: ["شدة الحرارة", "شدة البرودة", "الجبال", "الغابات"],
      a: "شدة البرودة"
    },
    {
      q: "الهجرات التي تتم من خلال وسائل غير قانونية تسمى هجرات...؟",
      options: ["داخلية", "شرعية", "غير شرعية", "موسمية"],
      a: "غير شرعية"
    }
  ];

  const handleAnswer = (selected) => {
    setSelectedAnswer(selected); // تلوين الزر المختار فوراً

    // انتظار 500 ملي ثانية ليرى الطالب اختياره
    setTimeout(() => {
      if (selected === questions[currentQuestion].a) {
        setScore(score + 1);
      }
      
      const next = currentQuestion + 1;
      if (next < questions.length) {
        setCurrentQuestion(next);
        setSelectedAnswer(null); // إعادة التلوين للوضع الطبيعي للسؤال القادم
      } else {
        setShowScore(true);
      }
    }, 500);
  };

  return (
    <div style={{ backgroundColor: '#050b18', minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'sans-serif' }} dir="rtl">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {showScore ? (
          <div style={{ textAlign: 'center', background: '#1e293b', padding: '40px', borderRadius: '20px', border: '1px solid #334155' }}>
            <h2 style={{ fontSize: '32px', color: '#a855f7' }}>انتهى اختبار السكان! 🎉</h2>
            <p style={{ fontSize: '24px', margin: '20px 0' }}>نتيجتك في الوحدة الثانية: {score} من {questions.length}</p>
            <button onClick={() => window.location.reload()} style={{ background: '#a855f7', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>إعادة المحاولة</button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>
              <span style={{ color: '#a855f7', fontWeight: 'bold' }}>السؤال {currentQuestion + 1} من {questions.length} (الوحدة الثانية)</span>
              <h2 style={{ fontSize: '24px', marginTop: '10px' }}>{questions[currentQuestion].q}</h2>
            </div>
            <div style={{ display: 'grid', gap: '15px' }}>
              {questions[currentQuestion].options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handleAnswer(opt)} 
                  style={{ 
                    textAlign: 'right', 
                    padding: '18px', 
                    // التعديل السحري للألوان (يتحول للبنفسجي عند الاختيار)
                    background: selectedAnswer === opt ? '#a855f7' : '#1e293b', 
                    border: selectedAnswer === opt ? '1px solid #c084fc' : '1px solid #334155', 
                    color: 'white', 
                    borderRadius: '12px', 
                    cursor: 'pointer', 
                    fontSize: '18px', 
                    transition: '0.3s' 
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}