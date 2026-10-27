import Link from "next/link";
import { ShieldCheck, Dumbbell, Users, School, Trophy, Phone, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center px-4 py-16 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
      {/* Small line above */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-100 text-sky-800 mb-6">
        <ShieldCheck className="w-4 h-4 text-sky-600" />
        ONE PARTNER. ALL SPORTS SOLUTIONS.
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
        Your Community. Your Sports.{" "}
        <span className="text-fitpro-blue-600">Your Champions.</span>
      </h1>

      {/* Tagline */}
      <p className="text-lg sm:text-xl font-bold text-fitpro-lime-600 mb-6 tracking-wide">
        Train • Play • Achieve
      </p>

      {/* Supporting text */}
      <p className="text-base sm:text-lg text-slate-600 max-w-2xl mb-8">
        Discover professional sports coaching, qualified trainers and customised sports
        programmes for gated communities and schools with FITPRO SPORTS SOLUTIONS — so
        your children can train safely, close to home.
      </p>

      {/* Trust Strip */}
      <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-6 my-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-xs font-medium text-slate-700">
        <div className="flex flex-col items-center gap-2">
          <Dumbbell className="w-5 h-5 text-sky-600" />
          <span>Qualified Coaches</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Users className="w-5 h-5 text-sky-600" />
          <span>Gated Communities</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <School className="w-5 h-5 text-sky-600" />
          <span>Schools</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-sky-600" />
          <span>Facility Management</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-sky-600" />
          <span>Lifeguard Services</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Trophy className="w-5 h-5 text-sky-600" />
          <span>Championships</span>
        </div>
      </div>

      {/* Phase 0 Setup Notice */}
      <div className="mt-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl max-w-xl text-left text-sm text-emerald-900">
        <p className="font-semibold mb-1">Phase 0: Setup Complete</p>
        <p className="text-xs text-emerald-700 mb-2">
          Next.js App Router, TypeScript, Tailwind CSS, Prisma PostgreSQL schema, and
          test harness are initialized.
        </p>
        <div className="flex items-center gap-4 text-xs font-mono text-emerald-800">
          <span>Source: /docs/content.md</span>
          <span>•</span>
          <span>Open items: /docs/OPEN_ITEMS.md</span>
        </div>
      </div>

      {/* Official Contact Footer snippet */}
      <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
        <a
          href="tel:9392201344"
          className="inline-flex items-center gap-2 hover:text-sky-600 transition"
        >
          <Phone className="w-4 h-4 text-sky-600" />
          <span>9392201344</span>
        </a>
        <a
          href="mailto:fitpro.sportssolutions@gmail.com"
          className="inline-flex items-center gap-2 hover:text-sky-600 transition"
        >
          <Mail className="w-4 h-4 text-sky-600" />
          <span>fitpro.sportssolutions@gmail.com</span>
        </a>
      </div>
    </main>
  );
}
