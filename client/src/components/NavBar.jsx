import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import logo from "../../public/logo.png"
function NavBar() {
  const { userData } = useSelector((state => state.user))
  const credits = userData.user.credits
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileTap={{ scale: 0.95 }}
      className="relative z-50 mx-6 mt-6 rounded-2xl bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop:backdrop-blur-2xl border border-white/10 shadow-[0_22px_55px_rgba(0,0,0,0.75)] flex items-center justify-between px-8 py-4">


      {/* left */}
      <div className='flex items-center gap-3'>
        <img src={logo} alt="notes logo" className='w-9 h-9' />
        <p className='text-lg hidden md:block text-white font-semibold'>NotesCrafter <span className='text-gray-400'>AI</span></p>
      </div>

      {/* right */}
      <div className='flex items-center gap-6 relative'>
        <div className='relative'>
          <motion.div className='flex items-center gap-2 px-4'>
            {/* make a button for credits here */}
          </motion.div>
        </div>

        {/* make a profile circle div here when clicking it popups logout and dashboard */}
      </div>
    </motion.div>
  )
}

export default NavBar