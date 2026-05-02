"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Unit1Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      q: "أكبر قارات العالم من حيث المساحة هي قارة...؟",
      options: ["أفريقيا", "آسيا", "أوروبا", "أستراليا"],
      a: "آسيا"
    },
    {
      q: "يحد قارة أفريقيا من الغرب المحيط...؟",
      options: ["الهندي", "الهادي", "الأطلنطي", "القطبي"],
      a: "الأطلنطي"
    },
    {
      q: "أعلى قمة جبلية في العالم هي قمة...؟",
      options: ["إيفرست", "كينيا", "أطلس", "الألب"],
      a: "إيفرست"
    },
    {
      q: "يفصل قارة آسيا عن قارة أوروبا جبال...؟",
      options: ["الأنديز", "الأورال", "الروكي", "الهملايا"],
      a: "الأورال"
    },
    {
      q: "أكبر بحر مغلق في العالم هو بحر...؟",
      options: ["الأحمر", "المتوسط", "قزوين", "أرال"],
      a: "قزوين"
    },
    {
      q: "هضبة 'سقف العالم' هي هضبة...؟",
      options: ["الدكن", "البرازيل", "التبت", "إثيوبيا"],
      a: "التبت"
    },
    {
      q: "أطول أنهار قارة أوروبا هو نهر...؟",
      options: ["السين", "الدانوب", "الفولجا", "الراين"],
      a: "الفولجا"
    },
    {
      q: "تمتد جبال الأنديز في قارة...؟",
      options: ["أمريكا الشمالية", "أستراليا", "أمريكا الجنوبية", "أفريقيا"],
      a: "أمريكا الجنوبية"
    },
    {
      q: "تقع هضبة 'اللابرادور' في شمال شرق قارة...؟",
      options: ["آسيا", "أمريكا الشمالية", "أوروبا", "أفريقيا"],
      a: "أمريكا الشمالية"
    },
    {
      q: "أصغر قارات العالم مساحة هي قارة...؟",
      options: ["أوروبا", "أستراليا", "أفريقيا", "أمريكا الجنوبية"],
      a: "أستراليا"
    }
  ];

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].a) {
      setScore(score + 1);
    }
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={{ backgroundColor: '#050b18', minHeight: '100vh', color: 'white', padding: '40px', fontFamily: 'sans-serif' }} dir="rtl">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {showScore ? (
          <div style={{ textAlign: 'center', background: '#1e293b', padding: '40px', borderRadius: '20px', border: '1px solid #334155' }}>
            <h2 style={{ fontSize: '32px', color: '#60a5fa' }}>انتهى الاختبار! 🎉</h2>
            <p style={{ fontSize: '24px', margin: '20px 0' }}>نتيجتك: {score} من {questions.length}</p>
            <button onClick={() => window.location.reload()} style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>إعادة المحاولة</button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>
              <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>السؤال {currentQuestion + 1} من {questions.length}</span>
              <h2 style={{ fontSize: '24px', marginTop: '10px' }}>{questions[currentQuestion].q}</h2>
            </div>
            <div style={{ display: 'grid', gap: '15px' }}>
              {questions[currentQuestion].options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(opt)} style={{ textAlign: 'right', padding: '18px', background: '#1e293b', border: '1px solid #334155', color: 'white', borderRadius: '12px', cursor: 'pointer', fontSize: '18px', transition: '0.3s' }}>
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