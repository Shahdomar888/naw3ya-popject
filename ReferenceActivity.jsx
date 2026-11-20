
"use client";

import { useState } from "react";

export default function ReferenceActivity() {
  const [increase, setIncrease] = useState(10);

  const [products, setProducts] = useState([
    { name: "المنتج الأول", price: 100, quantity: 2 },
    { name: "المنتج الثاني", price: 150, quantity: 3 },
    { name: "المنتج الثالث", price: 80, quantity: 4 },
  ]);

  const updateProduct = (index, field, value) => {
    setProducts((previous) =>
      previous.map((product, i) =>
        i === index
          ? { ...product, [field]: Math.max(0, Number(value) || 0) }
          : product
      )
    );
  };

  const formatNumber = (number) =>
    new Intl.NumberFormat("ar-EG", {
      maximumFractionDigits: 2,
    }).format(number);

  const total = products.reduce(
    (sum, product) =>
      sum + product.price * product.quantity * (1 + increase / 100),
    0
  );

  const resetActivity = () => {
    setIncrease(10);
    setProducts([
      { name: "المنتج الأول", price: 100, quantity: 2 },
      { name: "المنتج الثاني", price: 150, quantity: 3 },
      { name: "المنتج الثالث", price: 80, quantity: 4 },
    ]);
  };

  return (
    <section dir="rtl" className="mx-auto max-w-6xl px-6 py-14">

      {/* صورة النشاط */}
      <div className="mb-6 overflow-hidden rounded-2xl border border-[#DFE6EF] bg-white">
        <img
          src="/images/lesson(1).png"
          alt="توضيح تفاعلي للمراجع في Excel"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="overflow-hidden rounded-3xl border border-[#DFE6EF] bg-white shadow-xl">

        {/* Header */}
        <div className="bg-gradient-to-l from-[#142F50] via-[#21845A] to-[#D5AD62] p-8 text-center text-white">
          <span className="inline-block rounded-full border border-white/40 px-4 py-2 text-sm font-bold text-white">
            مختبر الحسابات التفاعلي
          </span>

          <h2 className="mt-5 text-2xl font-extrabold text-white md:text-3xl">
            اكتشفي قوة المراجع في Excel
          </h2>

          <p className="mt-3 leading-8 text-[#F3F6FA]">
            غيّري البيانات وشاهدي كيف تتغير نتائج المعادلات عند نسخها
            باستخدام المرجع النسبي والمرجع المطلق.
          </p>
        </div>

        <div className="space-y-8 p-5 md:p-9">

          {/* Explanation */}
          <div className="rounded-2xl border-r-4 border-[#21845A] bg-[#F3F6FA] p-5">
            <h3 className="font-extrabold text-[#142F50]">
              💡 فكرة التجربة
            </h3>

            <p className="mt-2 leading-8 text-[#536579]">
              تخيلي أنكِ تديرين متجرًا، وتريدين حساب إجمالي أسعار المنتجات
              بعد إضافة نسبة زيادة موحدة. سنستخدم المراجع النسبية للأسعار
              والكميات، والمرجع المطلق لنسبة الزيادة.
            </p>
          </div>

          {/* Increase Control */}
          <div className="rounded-2xl border border-[#DFE6EF] bg-[#F3F6FA] p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-extrabold text-[#142F50]">
                نسبة الزيادة الثابتة
              </h3>

              <span className="rounded-xl border border-[#DFE6EF] bg-white px-5 py-2 text-xl font-extrabold text-[#21845A]">
                {formatNumber(increase)}%
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={increase}
              onChange={(e) => setIncrease(Number(e.target.value))}
              className="mt-6 w-full cursor-pointer accent-[#21845A]"
            />

            <div className="mt-2 flex justify-between text-sm text-[#536579]">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
            </div>

            <p className="mt-4 text-sm text-[#536579]">
              تمثل هذه النسبة الخلية الثابتة F1 في جدول البيانات.
            </p>
          </div>

          {/* Spreadsheet */}
          <div>
            <h3 className="mb-4 text-xl font-extrabold text-[#142F50]">
              📊 جدول البيانات التفاعلي
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-[#DFE6EF]">
              <table className="w-full min-w-[650px] text-center">
                <thead>
                  <tr className="bg-[#142F50] text-white">
                    <th className="p-4">المنتج</th>
                    <th className="p-4">السعر (B)</th>
                    <th className="p-4">الكمية (C)</th>
                    <th className="p-4">الإجمالي بعد الزيادة (D)</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product, index) => {
                    const result =
                      product.price *
                      product.quantity *
                      (1 + increase / 100);

                    return (
                      <tr
                        key={product.name}
                        className="border-b border-[#DFE6EF] even:bg-[#F3F6FA]"
                      >
                        <td className="p-4 font-bold text-[#142F50]">
                          {product.name}
                        </td>

                        <td className="p-3">
                          <input
                            type="number"
                            min="0"
                            value={product.price}
                            onChange={(e) =>
                              updateProduct(index, "price", e.target.value)
                            }
                            className="w-24 rounded-lg border border-[#DFE6EF] bg-white p-2 text-center font-bold text-[#142F50] outline-none focus:border-[#21845A]"
                          />
                        </td>

                        <td className="p-3">
                          <input
                            type="number"
                            min="0"
                            value={product.quantity}
                            onChange={(e) =>
                              updateProduct(index, "quantity", e.target.value)
                            }
                            className="w-20 rounded-lg border border-[#DFE6EF] bg-white p-2 text-center font-bold text-[#142F50] outline-none focus:border-[#21845A]"
                          />
                        </td>

                        <td className="p-4 font-extrabold text-[#21845A]">
                          {formatNumber(result)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-sm text-[#536579]">
              يمكنكِ تعديل الأسعار والكميات مباشرة داخل الجدول.
            </p>
          </div>

          {/* Formula Explanation */}
          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl border border-[#DFE6EF] bg-[#F3F6FA] p-5">
              <h4 className="font-extrabold text-[#21845A]">
                المرجع النسبي
              </h4>

              <div dir="ltr" className="mt-4 rounded-xl border border-[#DFE6EF] bg-white p-4 text-center font-extrabold text-[#142F50]">
                B2 * C2
              </div>

              <p className="mt-3 leading-7 text-[#536579]">
                عند نسخ المعادلة إلى الصف التالي يتغير المرجع من B2 و C2
                إلى B3 و C3 تلقائيًا.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DFE6EF] bg-[#F3F6FA] p-5">
              <h4 className="font-extrabold text-[#142F50]">
                المرجع المطلق
              </h4>

              <div dir="ltr" className="mt-4 rounded-xl border border-[#DFE6EF] bg-white p-4 text-center font-extrabold text-[#142F50]">
                $F$1
              </div>

              <p className="mt-3 leading-7 text-[#536579]">
                يظل المرجع F1 ثابتًا عند نسخ المعادلة إلى بقية الصفوف،
                لأن علامة الدولار تثبت العمود والصف.
              </p>
            </div>
          </div>

          {/* Formula */}
          <div className="rounded-2xl border border-[#DFE6EF] bg-[#142F50] p-6 text-white">
            <h3 className="font-extrabold text-white">
              المعادلة المستخدمة في Excel
            </h3>

            <div dir="ltr" className="mt-4 overflow-x-auto rounded-xl border border-white/20 bg-[#21845A] p-4 text-center font-mono text-lg font-bold text-white">
              =B2*C2*(1+$F$1)
            </div>

            <p className="mt-4 leading-8 text-[#F3F6FA]">
              عند نسخ المعادلة للصف التالي تصبح:
            </p>

            <div dir="ltr" className="rounded-xl border border-white/20 bg-[#21845A] p-4 text-center font-mono font-bold text-white">
              =B3*C3*(1+$F$1)
            </div>
          </div>

          {/* Result */}
          <div className="rounded-3xl border border-[#DFE6EF] bg-[#F3F6FA] p-7 text-center">
            <p className="font-bold text-[#536579]">
              إجمالي قيمة المنتجات بعد الزيادة
            </p>

            <div className="mt-3 text-3xl font-extrabold text-[#142F50] md:text-4xl">
              {formatNumber(total)}
            </div>

            <p className="mt-3 text-sm text-[#536579]">
              تتغير النتيجة تلقائيًا عند تعديل الأسعار أو الكميات أو نسبة الزيادة.
            </p>
          </div>

          {/* Reset */}
          <div className="text-center">
            <button
              type="button"
              onClick={resetActivity}
              className="rounded-xl bg-[#142F50] px-8 py-3 font-extrabold text-white transition hover:bg-[#21845A]"
            >
              إعادة التجربة من البداية
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
