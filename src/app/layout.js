
import "./globals.css";
import Link from "next/link";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "مختبر المحاكاة | Simulation Lab",
  description: "نتعلم بالمحاكاة، ونكتشف بالتجربة.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.className} min-h-screen bg-slate-50 text-slate-800`}
      >
        <div className="flex min-h-screen flex-col">
          <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#102B46] shadow-lg">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#087E91] text-2xl font-black text-white">
                  S
                </div>

                <div>
                  <h1 className="text-lg font-black text-white md:text-xl">
                    مختبر المحاكاة
                  </h1>
                  <p className="text-xs text-cyan-200">
                    Simulation Lab
                  </p>
                </div>
              </Link>

              <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-white md:gap-5">
                <Link
                  href="/"
                  className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-cyan-300"
                >
                  الرئيسية
                </Link>

                <Link
                  href="/courses"
                  className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-cyan-300"
                >
                  المقرر
                </Link>

                <Link
                  href="/comprehensive-quiz"
                  className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-cyan-300"
                >
                  اختبار شامل
                </Link>

                <Link
                  href="/summary"
                  className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-cyan-300"
                >
                  ملخص المقرر
                </Link>
              </div>
            </div>
          </nav>

          <main className="flex-1">{children}</main>

          <footer className="mt-16 bg-[#102B46] px-6 py-10 text-center text-white">
            <h2 className="text-2xl font-black">
              مختبر المحاكاة
            </h2>

            <p className="mt-2 text-sm font-semibold text-cyan-200">
              Simulation Lab
            </p>

            <p className="mt-3 text-sm leading-7 text-white/80">
              نتعلم بالمحاكاة، ونكتشف بالتجربة.
            </p>

            <div className="mx-auto mt-6 h-px max-w-4xl bg-white/20" />

            <p className="mt-5 text-xs text-white/60">
              جميع الحقوق محفوظة © {new Date().getFullYear()} مختبر المحاكاة
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
