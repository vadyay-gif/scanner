export default function Home() {
  // Dummy data for Step 1 (we’ll replace later with real scan results)
  const demo = {
    overallScore: 54,
    status: "High Profit Risk",
    benchmark: "Businesses scaling paid traffic typically aim for a score above 75.",
    categories: [
      { name: "Hook Impact", score: 48 },
      { name: "Offer Strength", score: 63 },
      { name: "Message Match", score: 52 },
      { name: "Friction & Objections", score: 46 },
      { name: "Monetization Efficiency", score: 61 },
    ],
  };

  const scoreColor = (score: number) => {
    if (score >= 80) return "bg-emerald-500/80";
    if (score >= 65) return "bg-yellow-400/80";
    if (score >= 50) return "bg-orange-500/80";
    return "bg-rose-500/80";
  };

  const statusPill = (score: number) => {
    if (score >= 85) return "Highly Optimized";
    if (score >= 70) return "Moderate Leakage";
    if (score >= 50) return "High Profit Risk";
    return "Severe Profit Drain";
  };

  return (
    <main className="min-h-screen bg-[#060A12] text-white">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 left-1/4 h-[460px] w-[460px] rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060A12]/40 to-[#060A12]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14">
        {/* Minimal brand bar (standalone feel, Orion-matched) */}
        <div className="mb-10 flex items-center justify-between">
          <div className="text-sm tracking-wide text-white/70">
            <span className="font-semibold text-white">Paid Traffic Profit Scanner</span>
            <span className="ml-2 text-white/40">by Orion AI</span>
          </div>
          <a
            className="text-sm text-white/60 hover:text-white/90"
            href="https://orionai.ae"
            target="_blank"
            rel="noreferrer"
          >
            Back to Orion
          </a>
        </div>

        {/* Hero */}
        <section className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Built for Meta, Google & TikTok advertisers
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            Know Exactly Where Your Paid Traffic Funnel Is Losing Money.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Scan your funnel in ~30 seconds and uncover hidden profit leaks before you spend another dollar on ads.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#scan"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-fuchsia-500/10 hover:opacity-95"
            >
              Scan My Funnel Now
            </a>
            <div className="text-sm text-white/60 sm:self-center">
              No sign-up required. Email optional.
            </div>
          </div>
        </section>

        {/* Scanner card */}
        <section id="scan" className="mb-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur">
            <h2 className="text-lg font-semibold">Run Your Profit Scan</h2>
            <p className="mt-1 text-sm text-white/60">
              Paste a landing page URL. We’ll show results on this page (email is optional).
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="text-xs text-white/70">Landing Page URL *</label>
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A1222] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-400/60"
                  placeholder="https://your-landing-page.com"
                />
              </div>

              <div>
                <label className="text-xs text-white/70">Traffic Source *</label>
                <select className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A1222] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/60">
                  <option>Meta</option>
                  <option>Google Search</option>
                  <option>TikTok</option>
                  <option>YouTube</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-white/70">Offer Price *</label>
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A1222] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-400/60"
                  placeholder="99"
                />
                <div className="mt-1 text-xs text-white/40">Enter your primary front-end price.</div>
              </div>

              <div>
                <label className="text-xs text-white/70">Funnel Goal *</label>
                <select className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A1222] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/60">
                  <option>Lead</option>
                  <option>Booking</option>
                  <option>Sale</option>
                  <option>Webinar</option>
                  <option>App Install</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-white/70">Target Audience *</label>
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A1222] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-400/60"
                  placeholder="e.g., UAE gym owners, Shopify skincare buyers, B2B SaaS founders"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs text-white/70">Email (optional)</label>
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#0A1222] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-cyan-400/60"
                  placeholder="name@company.com"
                />
                <div className="mt-1 text-xs text-white/40">Optional — we’ll only use this to send your report.</div>
              </div>
            </div>

            <button
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-fuchsia-500/10 hover:opacity-95"
              type="button"
            >
              Generate My Profit Score
            </button>

            <div className="mt-2 text-center text-xs text-white/40">
              Takes ~30 seconds. Results shown on this page.
            </div>
          </div>
        </section>

        {/* Results (dummy for Step 1) */}
        <section className="mb-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm text-white/60">Profit Risk Score</div>
                <div className="mt-1 text-4xl font-semibold">
                  <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                    {demo.overallScore}
                  </span>{" "}
                  <span className="text-white/50">/ 100</span>
                </div>
                <div className="mt-2 text-sm text-white/60">{demo.benchmark}</div>
              </div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                Status: <span className="ml-2 font-semibold">{statusPill(demo.overallScore)}</span>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {demo.categories.map((c) => (
                <div key={c.name} className="rounded-xl border border-white/10 bg-[#0A1222]/60 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className="text-sm text-white/70">{c.score}/100</div>
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                    <div
                      className={`h-2 rounded-full ${scoreColor(c.score)}`}
                      style={{ width: `${c.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Free details + locked sections */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-[#0A1222]/60 p-5">
                <div className="text-sm font-semibold">Lowest Area #1 (Example)</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                  <li>Above-the-fold promise is not specific enough for paid traffic.</li>
                  <li>CTA lacks a clear micro-commitment for cold audiences.</li>
                  <li>Primary outcome is not quantified.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0A1222]/60 p-5">
                <div className="text-sm font-semibold">Lowest Area #2 (Example)</div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                  <li>Key objections (price, time, trust) aren’t addressed clearly.</li>
                  <li>Proof elements are below the fold and easy to miss.</li>
                  <li>Page flow adds cognitive friction near the CTA.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0A1222]/60 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-base font-semibold">Unlock the Full Profit Breakdown (Beta Access)</div>
                  <div className="mt-1 text-sm text-white/60">
                    Full 5-category analysis, prioritized leaks, and a strategic improvement roadmap.
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/40 line-through">$249</div>
                  <div className="text-2xl font-semibold">$99</div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  "Complete 5-category breakdown",
                  "5 prioritized profit leaks (ranked)",
                  "Strategic improvement roadmap",
                  "Offer + messaging enhancement suggestions",
                  "Monetization efficiency recommendations",
                  "Download-ready report (coming soon)",
                ].map((b) => (
                  <div key={b} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">
                    {b}
                  </div>
                ))}
              </div>

              <button
                className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-fuchsia-500/10 hover:opacity-95"
                type="button"
              >
                Unlock Full Report – $99
              </button>

              <div className="mt-2 text-center text-xs text-white/40">Secure checkout via PayPal.</div>
            </div>
          </div>
        </section>

        {/* Tiny footer */}
        <footer className="pb-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Orion AI • Privacy • Terms
        </footer>
      </div>
    </main>
  );
}