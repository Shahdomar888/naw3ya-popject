
"use client";

import { useState } from "react";

export default function MonteCarloSimulation() {
  const [numberOfPoints, setNumberOfPoints] = useState(500);
  const [points, setPoints] = useState([]);
  const [started, setStarted] = useState(false);

  const insideCount = points.filter((point) => point.inside).length;
  const totalCount = points.length;

  const estimatedPi =
    totalCount > 0 ? (4 * insideCount) / totalCount : 0;

  function startSimulation() {
    const newPoints = [];

    for (let i = 0; i < numberOfPoints; i++) {
      const x = Math.random();
      const y = Math.random();

      newPoints.push({
        x,
        y,
        inside: x * x + y * y <= 1,
      });
    }

    setPoints(newPoints);
    setStarted(true);
  }

  function resetSimulation() {
    setPoints([]);
    setStarted(false);
  }

  return (
    <section className="my-12 rounded-3xl border border-[#DFE6EF] bg-white p-6 shadow-md md:p-9">
      <div className="mb-6 text-center">
        <span className="font-bold text-[#21845A]">
          معمل المحاكاة التفاعلي
        </span>

        <h2 className="mt-3 text-2xl font-extrabold text-[#142F50] md:text-3xl">
          جربي تقدير قيمة π بطريقة مونت كارلو
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#536579]">
          اختاري عدد النقاط، ثم اضغطي على زر تشغيل التجربة.
          ستظهر نقاط عشوائية داخل المربع، وسنحسب عدد النقاط
          الموجودة داخل ربع الدائرة لتقدير قيمة π.
        </p>
      </div>

      {/* Controls */}
      <div className="mb-7 rounded-2xl bg-[#F3F6FA] p-5">
        <label
          htmlFor="points-count"
          className="mb-4 block font-bold text-[#142F50]"
        >
          عدد النقاط في التجربة
        </label>

        <select
          id="points-count"
          value={numberOfPoints}
          onChange={(event) => {
            setNumberOfPoints(Number(event.target.value));
            resetSimulation();
          }}
          className="w-full rounded-xl border border-[#DFE6EF] bg-white p-3 font-bold text-[#536579] outline-none focus:border-[#21845A]"
        >
          <option value={100}>100 نقطة</option>
          <option value={500}>500 نقطة</option>
          <option value={1000}>1000 نقطة</option>
          <option value={2000}>2000 نقطة</option>
        </select>

        <button
          type="button"
          onClick={startSimulation}
          className="mt-5 w-full rounded-xl bg-[#142F50] px-6 py-4 font-extrabold text-white transition hover:bg-[#21845A]"
        >
          تشغيل المحاكاة
        </button>

        <button
          type="button"
          onClick={resetSimulation}
          className="mt-3 w-full rounded-xl border border-[#142F50] px-6 py-3 font-bold text-[#142F50] transition hover:bg-[#DFE6EF]"
        >
          إعادة التجربة
        </button>
      </div>

      {/* Simulation Results */}
      <div className="grid gap-6 md:grid-cols-2 md:items-center">

        {/* Drawing */}
        <div className="rounded-2xl border border-[#DFE6EF] bg-[#F3F6FA] p-3">
          <svg
            viewBox="0 0 300 300"
            className="h-auto w-full"
            role="img"
            aria-label="رسم يوضح النقاط العشوائية داخل وخارج ربع الدائرة"
          >
            <rect
              x="10"
              y="10"
              width="280"
              height="280"
              fill="white"
              stroke="#142F50"
              strokeWidth="2"
            />

            <path
              d="M 10 290 L 290 290 A 280 280 0 0 0 10 10 Z"
              fill="#F3F6FA"
              stroke="#21845A"
              strokeWidth="2"
            />

            {points.map((point, index) => (
              <circle
                key={index}
                cx={10 + point.x * 280}
                cy={290 - point.y * 280}
                r={numberOfPoints > 1000 ? 1.5 : 2.5}
                fill={point.inside ? "#21845A" : "#D5AD62"}
                opacity="0.85"
              />
            ))}

            <text
              x="150"
              y="18"
              textAnchor="middle"
              fontSize="10"
              fill="#142F50"
            >
              1
            </text>

            <text
              x="292"
              y="305"
              textAnchor="end"
              fontSize="10"
              fill="#142F50"
            >
              1
            </text>
          </svg>

          <div className="mt-3 flex flex-wrap justify-center gap-5 text-sm font-bold">
            <span className="flex items-center gap-2 text-[#21845A]">
              <span className="h-3 w-3 rounded-full bg-[#21845A]" />
              داخل ربع الدائرة
            </span>

            <span className="flex items-center gap-2 text-[#536579]">
              <span className="h-3 w-3 rounded-full bg-[#D5AD62]" />
              خارج ربع الدائرة
            </span>
          </div>
        </div>

        {/* Statistics */}
        <div className="space-y-4">

          <div className="rounded-2xl border border-[#DFE6EF] bg-[#F3F6FA] p-5">
            <p className="font-bold text-[#536579]">
              إجمالي النقاط
            </p>
            <p className="mt-2 text-3xl font-extrabold text-[#142F50]">
              {totalCount}
            </p>
          </div>

          <div className="rounded-2xl border border-[#DFE6EF] bg-[#F3F6FA] p-5">
            <p className="font-bold text-[#536579]">
              النقاط داخل ربع الدائرة
            </p>
            <p className="mt-2 text-3xl font-extrabold text-[#21845A]">
              {insideCount}
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[#21845A] bg-[#F3F6FA] p-5">
            <p className="font-bold text-[#536579]">
              القيمة المقدرة للعدد π
            </p>

            <p className="mt-2 text-3xl font-extrabold text-[#142F50]">
              {started ? estimatedPi.toFixed(5) : "لم تبدأ التجربة"}
            </p>

            {started && (
              <p className="mt-2 text-sm text-[#536579]">
                القيمة التقريبية الحقيقية: 3.14159
              </p>
            )}
          </div>

        </div>
      </div>

      {/* Observation */}
      <div className="mt-7 rounded-2xl border-r-4 border-[#21845A] bg-[#F3F6FA] p-5">
        <h3 className="mb-2 font-extrabold text-[#142F50]">
          ماذا تلاحظين؟
        </h3>

        <p className="leading-8 text-[#536579]">
          كلما زاد عدد النقاط العشوائية، يمكن أن يصبح تقدير
          قيمة π أقرب إلى القيمة الحقيقية، لكن النتيجة تختلف
          من تجربة إلى أخرى بسبب العشوائية.
        </p>
      </div>

    </section>
  );
}
