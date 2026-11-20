
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

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/courses", label: "المقرر" },
  { href: "/comprehensive-quiz", label: "اختبار شامل" },
  { href: "/summary", label: "ملخص المقرر" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <header className="sticky top-0 z-50 bg-[#142F50] text-white shadow-lg">
          <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl font-extrabold text-[#142F50]">
                S
              </div>

              <div>
                <div className="text-lg font-extrabold">
                  مختبر المحاكاة
                </div>
                <div className="text-xs text-[#D5AD62]">
                  Simulation Lab
                </div>
              </div>
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#142F50]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-[#142F50] px-5 py-8 text-center text-white">
          <div className="text-xl font-extrabold">
            مختبر المحاكاة
          </div>

          <p className="mt-2 text-sm text-[#D5AD62]">
            نتعلم بالمحاكاة، ونكتشف بالتجربة.
          </p>

          <div className="mt-5 border-t border-[#D5AD62]/30 pt-4 text-xs text-white/70">
            جميع الحقوق محفوظة © {new Date().getFullYear()} مختبر المحاكاة
          </div>
        </footer>
      </body>
    </html>
  );
}
