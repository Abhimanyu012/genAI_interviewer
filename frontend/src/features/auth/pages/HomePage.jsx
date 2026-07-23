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
  'Add the role or job description you want to target.',
  'Get a score, tailored suggestions, and a refined draft.',
]

const metrics = [
  { value: '92%', label: 'ATS compatibility' },
  { value: '3x', label: 'faster resume iteration' },
  { value: '24/7', label: 'guided editing support' },
]

const trustLogos = ['ATS-safe formatting', 'Fast tailoring', 'Clean exports']

const HomePage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f5f7] text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f5f5f7_55%,#eef2f7_100%)]" />
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-100/70 blur-3xl animate-float-slow" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 lg:px-10">
        <header className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
              R
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">Resume Studio</p>
              <h1 className="font-display mt-1 text-base font-semibold tracking-[-0.02em] text-slate-950">
                Resume Analyzer & Creator
              </h1>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-950">Features</a>
            <a href="#workflow" className="transition hover:text-slate-950">Workflow</a>
            <a href="#benefits" className="transition hover:text-slate-950">Benefits</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="liquid-btn liquid-btn-secondary rounded-full px-4 py-2 text-sm font-medium"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="liquid-btn liquid-btn-primary rounded-full px-4 py-2 text-sm font-semibold"
            >
              Get started
            </Link>
          </div>
        </header>

        <section className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur animate-hero-title">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              Built for job seekers who want sharper results
            </div>

            <div className="space-y-5">
              <h2 className="font-display max-w-3xl text-[3.25rem] font-semibold leading-[0.96] tracking-tighter text-slate-950 sm:text-[4.4rem] lg:text-[5.8rem] animate-hero-title">
                Resume intelligence designed to feel effortless.
              </h2>
              <p className="font-body max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl animate-hero-muted">
                Analyze your resume against a job description, uncover what is missing, and generate a cleaner version that looks and
                reads like it was built for the role.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {trustLogos.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="liquid-btn liquid-btn-primary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
              >
                Start free analysis
              </Link>
              <Link
                to="/login"
                className="liquid-btn liquid-btn-secondary inline-flex items-center justify-center px-6 py-3 text-sm font-semibold"
              >
                See the dashboard
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] animate-card-rise"
                >
                  <p className="font-display text-3xl font-semibold tracking-[-0.03em] text-slate-950">{metric.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-sky-100 blur-2xl animate-pulse" />
            <div className="absolute -right-2 bottom-8 h-20 w-20 rounded-full bg-slate-200 blur-2xl animate-pulse" />

            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] animate-card-rise">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="font-display text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">Match Preview</p>
                  <p className="mt-1 text-xs text-slate-500">Product Designer · Remote · Mid-level</p>
                </div>
                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-900">
                  86% Match
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Overall fit</span>
                    <span className="font-medium text-slate-900">86 / 100</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-[86%] rounded-full bg-linear-to-r from-sky-500 via-cyan-500 to-indigo-500" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Top keywords</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Figma', 'Accessibility', 'Design systems', 'User research'].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Missing signals</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      <li>• Quantified impact</li>
                      <li>• UX metrics</li>
                      <li>• Cross-functional leadership</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">AI suggestion</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Rewrite your last role to emphasize outcomes. Example: reduced onboarding friction by 28% through a redesigned
                    task flow and clearer empty states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-5 border-t border-slate-200 py-10 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] animate-card-rise"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                {feature.icon}
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold tracking-[-0.02em] text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </section>

        <section id="workflow" className="grid gap-6 pb-4 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="rounded-4xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.25em]">Workflow</p>
            <h3 className="font-display mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              Simple steps. Clear output. Better results.
            </h3>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-6 text-slate-600">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="benefits" className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-4xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-7 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.25em]">Built for</p>
              <h3 className="font-display mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                Freshers, switchers, and experienced candidates
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                The layout is designed to help any job seeker turn one resume into a sharper version for each application.
              </p>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Ready to begin?</p>
              <h3 className="font-display mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                Turn one resume into many tailored versions.
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Start with a resume review, then generate a cleaner version for the role you want.
              </p>
              <Link
                to="/register"
                className="liquid-btn liquid-btn-primary mt-6 inline-flex px-5 py-3 text-sm font-semibold"
              >
                Create your resume
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomePage