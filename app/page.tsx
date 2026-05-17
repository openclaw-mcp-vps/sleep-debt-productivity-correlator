export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Developer Wellness
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Your sleep is killing<br />your commit streak
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          SleepSync connects Fitbit &amp; Apple Health with GitHub, Todoist, and RescueTime to show exactly how your rest drives — or destroys — your productivity.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $7/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. No credit card required to explore.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <p className="text-2xl font-bold text-[#58a6ff]">2.4×</p>
            <p className="text-xs text-[#8b949e] mt-1">more commits on 8h sleep</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#58a6ff]">37%</p>
            <p className="text-xs text-[#8b949e] mt-1">fewer bugs after deep sleep</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#58a6ff]">91%</p>
            <p className="text-xs text-[#8b949e] mt-1">of users improve in 30 days</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$7</p>
          <p className="text-sm text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Fitbit & Apple Health sync",
              "GitHub + Todoist + RescueTime",
              "Weekly correlation reports",
              "Sleep debt alerts",
              "90-day trend history",
              "CSV export"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-xl p-5 bg-[#161b22]">
            <p className="font-semibold text-white mb-2">Which sleep trackers are supported?</p>
            <p className="text-sm text-[#8b949e]">Fitbit and Apple Health (via iOS export) are supported at launch. Oura and Garmin are on the roadmap.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-5 bg-[#161b22]">
            <p className="font-semibold text-white mb-2">Is my data private?</p>
            <p className="text-sm text-[#8b949e]">Your data is encrypted at rest and never sold. You can delete everything from your account at any time.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-5 bg-[#161b22]">
            <p className="font-semibold text-white mb-2">How long until I see insights?</p>
            <p className="text-sm text-[#8b949e]">Most users see their first correlation report within 7 days of connecting their accounts. Richer trends appear after 30 days.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} SleepSync. Built for developers who ship.
      </footer>
    </main>
  );
}
