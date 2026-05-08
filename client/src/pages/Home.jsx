import NavBar from "../components/NavBar"
import { motion } from 'framer-motion'
import img from "../assets/img1.png"
import Footer from "../components/Footer"

/* ─── Stagger helper ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const features = [
  {
    icon: "📚",
    title: "Exam Notes",
    des: "High-yield, exam-oriented notes packed with important revision points.",
    accent: "#6366f1",
  },
  {
    icon: "🧠",
    title: "Smart Summaries",
    des: "Convert lengthy topics into short, easy-to-revise summaries instantly.",
    accent: "#8b5cf6",
  },
  {
    icon: "📊",
    title: "Charts & Diagrams",
    des: "Generate flowcharts, diagrams, and visual explanations using AI.",
    accent: "#a78bfa",
  },
  {
    icon: "📄",
    title: "PDF Downloads",
    des: "Download beautifully formatted premium PDF notes for offline study.",
    accent: "#818cf8",
  },
]

function Home() {
  return (
    <div
      className="min-h-screen overflow-hidden text-black relative"
      style={{ background: "#f8f8fb" }}
    >

      {/* ── Global ambient blobs ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* Top-left indigo blob */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Top-right violet blob */}
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Mid-page glow */}
        <div
          className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.04]"
          style={{
            background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10">
        <NavBar />

        {/* ═══════════════ HERO ═══════════════ */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left copy */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-6">
              <div
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border"
                style={{
                  background: "rgba(99,102,241,0.08)",
                  borderColor: "rgba(99,102,241,0.25)",
                  color: "#6366f1",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse"
                  style={{ background: "#6366f1" }}
                />
                AI-Powered Study Tool
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl lg:text-[3.75rem] font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-gray-900">Turn Long Topics</span>
              <br />
              <span className="text-gray-900">Into </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Smart Revision
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Notes
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...fadeUp(0.32)}
              className="mt-6 text-gray-500 text-lg leading-relaxed max-w-lg"
            >
              Generate clean, exam-focused AI notes instantly from any topic.
              Save hours of manual writing, revise faster, and study smarter
              with beautifully organized content.
            </motion.p>

            {/* CTA row */}
            <motion.div {...fadeUp(0.42)} className="flex items-center gap-4 mt-10 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-base cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                  boxShadow: "0 8px 30px rgba(99,102,241,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                Get Started Free
                <span className="text-white/70">→</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base cursor-pointer border border-gray-200 text-gray-700 hover:border-indigo-200 hover:text-indigo-600 transition-colors"
                style={{ background: "rgba(255,255,255,0.8)" }}
              >
                See how it works
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div {...fadeUp(0.52)} className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {["#6366f1", "#8b5cf6", "#a78bfa", "#818cf8"].map((c, i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: c }}
                  >
                    {["S","A","R","K"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-gray-700 font-semibold">2,400+</span> students already studying smarter
              </p>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Card glow */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            />

            {/* Image card */}
            <div
              className="relative rounded-3xl overflow-hidden border border-white/60"
              style={{
                background: "rgba(255,255,255,0.8)",
                boxShadow: "0 30px 80px rgba(99,102,241,0.15), 0 8px 30px rgba(0,0,0,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Top bar chrome */}
              <div
                className="flex items-center gap-1.5 px-4 py-3 border-b"
                style={{
                  background: "rgba(248,248,251,0.9)",
                  borderColor: "rgba(99,102,241,0.1)",
                }}
              >
                {["#f87171","#fbbf24","#34d399"].map((c, i) => (
                  <div key={i} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
                ))}
                <div
                  className="ml-3 flex-1 h-5 rounded-full"
                  style={{ background: "rgba(99,102,241,0.08)", maxWidth: 180 }}
                />
              </div>

              <img src={img} alt="NotesCrafter preview" className="w-full object-cover" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl border flex items-center gap-2"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "rgba(99,102,241,0.2)",
                boxShadow: "0 8px 24px rgba(99,102,241,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="text-lg">⚡</span>
              <div>
                <p className="text-[11px] font-bold text-gray-800">Generated in 3s</p>
                <p className="text-[10px] text-gray-400">AI-powered notes</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════════ DIVIDER ═══════════════ */}
        <div className="max-w-6xl mx-auto px-10 py-4">
          <div
            className="h-px w-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }}
          />
        </div>

        {/* ═══════════════ FEATURES ═══════════════ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-24">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#6366f1" }}
            >
              Everything you need
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Study smarter, not harder
            </h2>
            <p className="text-gray-400 mt-3 max-w-md mx-auto text-base">
              Four powerful tools that turn any topic into exam-ready material.
            </p>
          </motion.div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <Feature key={f.title} {...f} delay={i * 0.1} />
            ))}
          </div>
        </section>

        {/* ═══════════════ CTA STRIP ═══════════════ */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden px-10 py-14 text-center"
            style={{
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #6d28d9 100%)",
              boxShadow: "0 30px 80px rgba(99,102,241,0.4)",
            }}
          >
            {/* Noise overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: "200px 200px",
              }}
            />
            {/* Blobs inside */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #818cf8, transparent)" }} />

            <div className="relative z-10">
              <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">
                Start today
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Ready to study smarter?
              </h2>
              <p className="text-white/70 text-base max-w-md mx-auto mb-8">
                Join thousands of students generating AI-powered notes in seconds.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-9 py-3.5 rounded-xl font-bold text-base cursor-pointer"
                style={{
                  background: "rgba(255,255,255,1)",
                  color: "#4f46e5",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                }}
              >
                Get Started Free →
              </motion.button>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </div>
  )
}


function Feature({ icon, title, des, accent, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative rounded-2xl p-6 border cursor-default group overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.9)",
        borderColor: "rgba(99,102,241,0.12)",
        boxShadow: "0 4px 24px rgba(99,102,241,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${accent}10 0%, transparent 70%)`,
        }}
      />

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      <div className="relative z-10">
        {/* Icon bubble */}
        <div
          className="h-11 w-11 rounded-xl flex items-center justify-center text-xl mb-4"
          style={{
            background: `${accent}14`,
            border: `1px solid ${accent}30`,
          }}
        >
          {icon}
        </div>

        <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{des}</p>
      </div>
    </motion.div>
  )
}

export default Home