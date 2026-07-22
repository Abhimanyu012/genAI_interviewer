import React from 'react'
import { Link } from 'react-router-dom'

const features = [
  {
    title: 'JD Match Score',
    description: 'See how closely your resume aligns with the role before you apply.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 3.25l2.35 4.76 5.25.76-3.8 3.7.9 5.23L12 14.5l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76L12 3.25Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Bullet Rewriter',
    description: 'Turn rough experience into crisp, measurable bullets recruiters can scan fast.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M6 6h12M6 12h12M6 18h8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M16.5 16.5l1.8 1.8 3.2-3.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'ATS-Friendly Export',
    description: 'Export a clean layout designed to pass parsing and screening systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M7 3.75h7l5.25 5.25V20.25H7V3.75Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M14 3.75v5.25h5.25"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9.25 12h5.5M9.25 15.5h5.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

const steps = [
  'Upload your resume or paste your experience.',
  'Add the job description you want to target.',
  'Get a score, tailored suggestions, and a polished resume draft.',
]

const metrics = [
  { value: '92%', label: 'ATS compatibility' },
  { value: '3x', label: 'faster resume iteration' },
  { value: '24/7', label: 'guided editing support' },
]

const trustLogos = ['ATS-safe formatting', 'Fast tailoring', 'Clean exports']

const HomePage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff9f0] text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.18),transparent_24%),linear-gradient(180deg,#fffdf7_0%,#fff6ea_45%,#fff0fb_100%)]" />
      <div className="absolute -left-14 top-16 h-40 w-40 rounded-full bg-amber-300/60 blur-2xl animate-float-slow" />
      <div className="absolute right-0 top-28 h-56 w-56 rounded-full bg-sky-300/50 blur-3xl animate-float-delayed" />
      <div className="absolute bottom-4 left-1/3 h-44 w-44 rounded-full bg-pink-300/45 blur-3xl animate-float-slow" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-14 pt-8 lg:px-10">
        <header className="flex items-center justify-between gap-4 border-b-2 border-slate-900/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-slate-900 bg-amber-300 text-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.14)]">
              ✦
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-700">Resume Studio</p>
              <h1 className="font-display mt-2 text-lg font-semibold text-slate-900">Resume Analyzer & Creator</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="liquid-btn liquid-btn-secondary rounded-full px-4 py-2 text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="liquid-btn liquid-btn-primary rounded-full px-4 py-2 text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>
        </header>

        <section className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-14">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-amber-200 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[4px_4px_0_0_rgba(15,23,42,0.12)] backdrop-blur animate-hero-title">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500 animate-pulse" />
              Cartoon-style resume magic for job seekers
            </div>

            <div className="space-y-5">
              <h2 className="font-display max-w-3xl text-5xl font-bold leading-[0.92] tracking-tighter text-slate-950 sm:text-6xl lg:text-7xl animate-hero-title">
                Make your resume feel fun, smart, and instantly job-ready.
              </h2>
              <p className="font-body max-w-2xl text-base leading-7 text-slate-700 sm:text-lg animate-hero-muted">
                Upload your resume, paste a job description, and get colorful suggestions, stronger bullet points, and a polished
                version that feels playful without losing professionalism.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {trustLogos.map((item) => (
                <span key={item} className="rounded-full border-2 border-slate-900 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-600 shadow-[3px_3px_0_0_rgba(15,23,42,0.1)]">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/register"
                className="liquid-btn liquid-btn-primary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
              >
                Start Free Analysis
              </Link>
              <Link
                to="/login"
                className="liquid-btn liquid-btn-secondary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
              >
                View Demo Workspace
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border-2 border-slate-900 bg-white p-5 shadow-[6px_6px_0_0_rgba(15,23,42,0.12)] animate-card-rise"
                >
                  <p className="font-display text-3xl font-semibold text-slate-950">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-amber-300/40 blur-2xl animate-pulse" />
            <div className="absolute -right-3 bottom-8 h-20 w-20 rounded-full bg-rose-300/40 blur-2xl animate-pulse" />
            <div className="relative overflow-hidden rounded-4xl border-2 border-slate-900 bg-white p-5 shadow-[8px_8px_0_0_rgba(15,23,42,0.12)] backdrop-blur-xl animate-card-rise">
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4">
                <div>
                  <p className="font-display text-sm font-semibold text-sky-700">Job Match Report</p>
                  <p className="mt-1 text-xs text-slate-500">Product Designer · Remote · Mid-level</p>
                </div>
                <div className="rounded-full border-2 border-slate-900 bg-emerald-200 px-3 py-1 text-sm font-semibold text-slate-900 shadow-[3px_3px_0_0_rgba(15,23,42,0.1)]">
                  86% Match
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-3xl border-2 border-slate-900 bg-amber-50 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Overall fit</span>
                    <span className="font-medium text-slate-900">86 / 100</span>
                  </div>
                  <div className="mt-3 h-3 rounded-full bg-slate-200 border border-slate-900">
                    <div className="h-3 w-[86%] rounded-full bg-linear-to-r from-rose-400 via-amber-400 to-sky-500" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border-2 border-slate-900 bg-sky-50 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Top keywords</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Figma', 'Accessibility', 'Design systems', 'User research'].map((tag) => (
                        <span key={tag} className="rounded-full border-2 border-slate-900 bg-white px-3 py-1 text-xs font-semibold text-sky-700 shadow-[2px_2px_0_0_rgba(15,23,42,0.08)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-3xl border-2 border-slate-900 bg-pink-50 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Missing signals</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      <li>• Quantified impact</li>
                      <li>• UX metrics</li>
                      <li>• Cross-functional leadership</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-3xl border-2 border-slate-900 bg-emerald-100 p-4 shadow-[4px_4px_0_0_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-semibold text-emerald-700">AI suggestion</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Rewrite your last role to emphasize outcomes. Example: reduced onboarding friction by 28% through a redesigned
                    task flow and clearer empty states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t-2 border-slate-900/10 py-10 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[1.75rem] border-2 border-slate-900 bg-white p-6 shadow-[6px_6px_0_0_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:-rotate-1 animate-card-rise"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-slate-900 bg-amber-200 text-sky-700 shadow-[3px_3px_0_0_rgba(15,23,42,0.1)]">
                {feature.icon}
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 pb-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border-2 border-slate-900 bg-white p-7 shadow-[8px_8px_0_0_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <p className="text-sm font-semibold text-sky-700">How it works</p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-slate-950">A clear workflow for job seekers</h3>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border-2 border-slate-900 bg-amber-50 p-4 shadow-[4px_4px_0_0_rgba(15,23,42,0.08)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-slate-900 bg-rose-300 text-sm font-semibold text-slate-900">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-6 text-slate-600">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border-2 border-slate-900 bg-linear-to-br from-sky-50 to-amber-50 p-7 shadow-[8px_8px_0_0_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <p className="text-sm font-semibold text-sky-700">Built for</p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-slate-950">Freshers, switchers, and experienced candidates</h3>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                Whether you are entering the job market or targeting a better role, the layout helps you tailor your story quickly.
              </p>
            </div>

            <div className="rounded-[1.75rem] border-2 border-slate-900 bg-white p-7 shadow-[8px_8px_0_0_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <p className="text-sm font-semibold text-sky-700">Ready to begin?</p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-slate-950">Turn one resume into many tailored versions.</h3>
              <Link
                to="/register"
                className="liquid-btn liquid-btn-primary mt-5 inline-flex px-5 py-3 text-sm font-semibold"
              >
                Create Your Resume
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomePage