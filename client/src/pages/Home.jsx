import NavBar from "../components/NavBar"
import { AnimatePresence, motion } from 'framer-motion'
import img from "../assets/img1.png"
import Footer from "../components/Footer"
import { useNavigate } from "react-router"
function Home() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen overflow-hidden bg-white text-black">
      <NavBar />

      {/* TOP SECTION */}
      <section className="max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ rotateX: 6, rotateY: -6 }}
            className="transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent"
              whileHover={{ y: -4 }}
              style={{ transform: "translateZ(40px)", textShadow: "0 18px 40px rgba(0,0,0,0.25)" }}
            >
              Turn Long Topics Into{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smart Revision Notes
              </span>
            </motion.h1>

            <motion.p
              whileHover={{ y: -2 }}
              style={{ transform: "translateZ(40px)", textShadow: "0 18px 40px rgba(0,0,0,0.25)" }}
              className="mt-6 bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent max-w-xl text-lg">
              Generate clean, exam-focused AI notes instantly from any topic.
              Save hours of manual writing, revise faster, and study smarter
              with beautifully organized content.
            </motion.p>


            <motion.button
              onClick={() => navigate("/notes")}
              whileHover={{ y: -10, rotateX: 8, rotateY: -8, scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="flex items-center mt-10 px-10 py-3 bg-gradient-to-br from-black/90 via-black/80 to-black/90 gap-3 text-white rounded-xl font-semibold border-white/10 text-lg shadow-[0_25px_60px_rgba(0,0,0,0.7)] cursor-pointer">

              Get Started
            </motion.button>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            y: -12,
            rotateX: 8,
            rotateY: -8,
            scale: 1.05,
          }}
          className="transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="overflow-hidden">
            <img src={img} alt="img" style={{ transform: "translateZ(35px" }} />
          </div>
        </motion.div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="max-w-6xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-4 gap-10">

        <Feature
          icon="📚"
          title="Exam Notes"
          des="High-yield exam-oriented notes with important revision points."
        />

        <Feature
          icon="🧠"
          title="Smart Summaries"
          des="Convert lengthy topics into short, easy-to-revise summaries instantly."
        />

        <Feature
          icon="📊"
          title="Charts & Diagrams"
          des="Generate flowcharts, diagrams, and visual explanations using AI."
        />

        <Feature
          icon="📄"
          title="PDF Downloads"
          des="Download beautifully formatted premium PDF notes for offline study."
        />

      </section>

      <Footer />
    </div>
  )
}


function Feature({ icon, title, des }) {
  return (
    <motion.div
      whileHover={{ y: -12, rotateX: 8, rotateY: -8, scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}

      className='relative rounded-2xl p-6 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] text-white'>
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none' />
      <div className='relative z-10' style={{ transform: "translateZ(30px)" }}>
        <div className='text-4xl mb-3'>{icon}</div>
        <h3 className='font-semibold text-lg'>{title}</h3>
        <p className='text-white/50 text-sm leading-relaxed'>{des}</p>
      </div>

    </motion.div>
  )
}
export default Home