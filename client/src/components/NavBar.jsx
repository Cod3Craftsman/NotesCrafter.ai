import { AnimatePresence, motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import logo from "../../public/logo.png"
import { useState } from 'react';
function NavBar() {
  const { userData } = useSelector((state => state.user))
  const credits = userData.user.credits
  const [showCredits, setShowCredits] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-50 mx-6 mt-6 rounded-2xl bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop:backdrop-blur-2xl border border-white/10 shadow-[0_22px_55px_rgba(0,0,0,0.75)] flex items-center justify-between px-8 py-4">


      {/* left */}
      <div className='flex items-center gap-3'>
        <img src={logo} alt="notes logo" className='w-9 h-9' />
        <p className='text-lg hidden md:block text-white font-semibold'>NotesCrafter <span className='text-gray-400'>AI</span></p>
      </div>

      {/* right */}
      <div className='flex items-center gap-6 relative'>
        <div className='relative'>
          <motion.div
            onClick={() => setShowCredits(!showCredits)}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center justify-center gap-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm shadow-md cursor-pointer'>
            <span className='text-xl'>💎</span>
            <span>{credits}</span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className='ml-2 h-5 w-5 bg-white rounded-full text-xs font-bold flex items-center justify-center'
            >➕</motion.span>
          </motion.div>



          <AnimatePresence>
            {showCredits &&
              <motion.div
                className='absolute right-0 mt-7 w-64 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-4 text-white'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h4 className='font-semibold mb-2 text-white/90 text-xl'>Buy Credits</h4>
                <p className='text-sm mt-3 text-gray-300 '>Use Credits to generate AI notes, diagrams & PDF's.</p>
                <button onClick={() => setShowCredits(false)} className='bg-white text-black py-2 h-10 w-full rounded-xl mt-4 font-semibold hover:opacity-90 cursor-pointer'>Buy More Credits</button>
              </motion.div>
            }
          </AnimatePresence>
        </div>

        {/* Profile section */}
        <div className='relative'>
          <motion.div
            onClick={() => setShowProfile(!showProfile)}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className='bg-amber-800 gap-1 rounded-full  flex items-center justify-center px-4 py-2 '
          >
            <span className='text-md font-semibold text-white'>{userData?.user?.name?.slice(0, 1).toUpperCase()}</span>


            <AnimatePresence>
              {showProfile &&
                <motion.div
                  className='absolute right-0 mt-7 w-64 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-4 text-white'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <h4 className='font-semibold mb-2 text-white/90 text-xl'>Buy Credits</h4>
                  <p className='text-sm mt-3 text-gray-300 '>Use Credits to generate AI notes, diagrams & PDF's.</p>
                  <button onClick={() => setShowCredits(false)} className='bg-white text-black py-2 h-10 w-full rounded-xl mt-4 font-semibold hover:opacity-90 cursor-pointer'>Buy More Credits</button>
                </motion.div>
              }
            </AnimatePresence>





          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default NavBar