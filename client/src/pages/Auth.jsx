import { signInWithPopup } from 'firebase/auth';
import { motion } from 'framer-motion'
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from '../utils/firebase.js';
import axios from 'axios';
import { serverUrl } from '../App.jsx';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice.js';


function Auth() {
  
  const dispatch = useDispatch()
  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider)
      const User = response.user
      const name = User.displayName
      const email = User.email
      const result = await axios.post(`${serverUrl}/api/auth/google`, { name, email }, { withCredentials: true })
      dispatch(setUserData(result.data))
    } catch (error) {
      console.log("Error in handleGoogleAuth", error)
    }
  }


  return (
    <div className='min-h-screen overflow-hidden bg-white text-black px-8'>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto mt-8 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-6 shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
        <h1 className='text-2xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>NotesCrafter.AI</h1>
        <p className='text-sm mt-1 text-gray-300'>AI-powered exam-oriented notes & revision</p>
      </motion.header>

      <main className='max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black via-black/60 to-black/90 bg-clip-text text-transparent'>Unlock Smart  AI Notes</h1>
          <p className="mt-6 text-gray-600 max-w-md">
            Generate exam-ready notes instantly using AI.
            Save time, revise faster, and boost your scores.
          </p>

          <motion.button
            onClick={handleGoogleAuth}
            whileHover={{ y: -10, rotateX: 8, rotateY: -8, scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="flex items-center mt-10 px-10 py-3 bg-gradient-to-br from-black/90 via-black/80 to-black/90 gap-3 text-white rounded-xl font-semibold border-white/10 text-lg shadow-[0_25px_60px_rgba(0,0,0,0.7)] cursor-pointer">
            <FcGoogle size={22} />
            Continue with Google
          </motion.button>

          <p className='mt-6 max-w-xl text-lg bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent'>You get <span className='font-semibold text-black/60'>50 FREE credits</span> to create exam notes, project notes, charts, graphs and download clean PDF's - instantly using AI.</p>

          <p className='mt-4 text-sm text-gray-500'>start with 100 free credits Upgrade anytime for more credits Instant access</p>
        </motion.div>



        {/* RIGHT CONTENT */}
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <Feature
            icon="🎁"
            title="50 FREE credits"
            des="Start with 50 credits to generate notes without paying"
          />

          <Feature
            icon="📝"
            title="Exam Notes"
            des="Generate notes and flash cards instantly using AI-powered tools"
          />

          <Feature
            icon="🧠"
            title="Smart Summaries"
            des="Get concise and meaningful summaries from long content"
          />

          <Feature
            icon="📊"
            title="Charts & Graphs"
            des="Auto-generated diagrams, charts and flow graphs"
          />


          <Feature
            icon="🔒"
            title="Secure Storage"
            des="Your data is encrypted and safely stored"
          />
        </div>
      </main>
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


export default Auth