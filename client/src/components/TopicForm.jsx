import { motion } from 'framer-motion'
import { useState } from 'react';

function TopicForm({ setResult, setLoading, loading, setError }) {
  const [topic, setTopic] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [examType, setExamType] = useState("");
  const [revisionMode, setRevisionMode] = useState(false);
  const [includeDiagram, setIncludeDiagram] = useState(false);
  const [includeChart, setIncludeChart] = useState(false);


  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10
      shadow-[0_25px_60px_rgba(0,0,0,0.75)] p-8 space-y-6 text-white">

      <input
        type="text"
        className="
        w-full p-3 rounded-xl
    bg-white/10 backdrop-blur-lg
    border border-white/20
    placeholder:text-gray-400
    placeholder:tracking-wide
    placeholder:font-medium
    placeholder:italic
    text-white
    focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder='Explore any topic... (e.g. Full Stack Web Development)'
        onChange={(e) => setTopic(e.target.value)}
        value={topic}
      />


      <input
        type="text"
        className="
        w-full p-3 rounded-xl
    bg-white/10 backdrop-blur-lg
    border border-white/20
    placeholder:text-gray-400
    placeholder:tracking-wide
    placeholder:font-medium
    placeholder:italic
    text-white
    focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder='Choose your academic level... (e.g. Class 10)'
        onChange={(e) => setClassLevel(e.target.value)}
        value={classLevel}
      />




      <input
        type="text"
        className="
        w-full p-3 rounded-xl
    bg-white/10 backdrop-blur-lg
    border border-white/20
    placeholder:text-gray-400
    placeholder:tracking-wide
    placeholder:font-medium
    placeholder:italic
    text-white
    focus:outline-none focus:ring-2 focus:ring-white/30"
        placeholder='Target exam or preparation goal... (e.g. JEE, NEET, UPSC)'
        onChange={(e) => setExamType(e.target.value)}
        value={examType}
      />


      <div className='flex flex-col md:flex-row gap-6'>
        <Toggle
          label="Smart Revision Mode"
          checked={revisionMode}
          onChange={() => setRevisionMode(!revisionMode)}
        />

        <Toggle
          label="AI Visual Diagrams"
          checked={includeDiagram}
          onChange={() => setIncludeDiagram(!includeDiagram)}
        />

        <Toggle
          label="Interactive Data Charts"
          checked={includeChart}
          onChange={() => setIncludeChart(!includeChart)}
        />
      </div>

      <motion.button
        whileHover={!loading ? { scale: 1.02 } : {}}
        whileTap={!loading ? { scale: 0.97 } : {}}
        disabled={loading}
        className={`
    relative w-full h-12 rounded-xl font-semibold text-sm
    overflow-hidden transition-all duration-300
    ${!loading
            ? "bg-white text-black cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
          }
  `}
      >
        {/* shimmer */}
        {!loading && (
          <span className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        )}

        {/* spinner or text */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading && (
            <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white/70 animate-spin" />
          )}
          {loading ? "Generating..." : "Generate Notes"}
        </span>

        <style>{`
    @keyframes spin { to { transform: rotate(360deg); } }
    .animate-spin { animation: spin 0.75s linear infinite; }
  `}</style>
      </motion.button>

    </motion.div>
  )
}


function Toggle({ label, checked, onChange }) {
  return (
    <div className='flex items-center gap-4 cursor-pointer select-none' onClick={onChange}>
      <motion.div
        animate={{
          backgroundColor: checked
            ? "rgba(34,197,94,0.35)" // green when ON
            : "rgba(255,255,255,0.15)" // gray when OFF
        }}
        transition={{ duration: 0.25 }}

        className='relative w-12 h-6 rounded-full'
      >

        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className='absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-[0_5px_15px_rgba(0,0,0,0.5)]'
          style={{
            left: checked ? "1.6rem" : "0.25rem",
          }}
        >

        </motion.div>
      </motion.div>


      <span
        className={`text-sm transition-colors ${checked ? "text-green-300" : "text-gray-300"
          }`}
      >
        {label}
      </span>
    </div >
  )
}

export default TopicForm