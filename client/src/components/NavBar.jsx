import { AnimatePresence, motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux';
import logo from "../assets/logo.png"
import { useState, useRef, useEffect } from 'react';
import axios from "axios"
import { serverUrl } from "../App"
import { setUserData } from '../redux/userSlice.js';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const { userData } = useSelector((state) => state.user)
  const credits = userData?.credits
  const [showCredits, setShowCredits] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const creditsRef = useRef(null)
  const profileRef = useRef(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (creditsRef.current && !creditsRef.current.contains(e.target)) setShowCredits(false)
      if (profileRef.current && !profileRef.current.contains(e.target)) setShowProfile(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSignOut = async () => {
    try {
      await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true })
      dispatch(setUserData(null))
      navigate("/auth")
    } catch (error) {
      console.log(error)
    }
  }

  const userName = userData?.name?.slice(0, 1).toUpperCase()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-50 mx-4 md:mx-8 mt-5"
    >
      {/* Glow behind navbar */}
      <div
        className="absolute inset-0 rounded-2xl blur-2xl opacity-30 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(139,92,246,0.2) 100%)",
        }}
      />

      <div
        className="relative flex items-center justify-between px-5 md:px-7 py-3.5 rounded-2xl border border-white/10"
        style={{
          background: "linear-gradient(135deg, rgba(10,10,15,0.97) 0%, rgba(15,12,20,0.97) 100%)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
          backdropFilter: "blur(24px)",
        }}
      >

        {/* ── LEFT: Brand ── */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer select-none"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/")}
        >
          {/* Logo glow */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-xl blur-md opacity-70"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            />
            <img
              src={logo}
              alt="NotesCrafter AI"
              className="relative w-9 h-9 rounded-xl object-contain"
            />
          </div>

          <div className="hidden md:flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-tight text-white">
              NotesCrafter{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #818cf8, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI
              </span>
            </span>
            <span className="text-[10px] text-gray-600 tracking-widest uppercase mt-0.5">
              Smart Revision
            </span>
          </div>
        </motion.div>

        {/* ── RIGHT: Actions ── */}
        <div className="flex items-center gap-3">

          {/* ── Credits Pill ── */}
          <div className="relative" ref={creditsRef}>
            <motion.button
              onClick={() => { setShowCredits(!showCredits); setShowProfile(false) }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 cursor-pointer transition-colors"
              style={{
                background: showCredits
                  ? "rgba(99,102,241,0.15)"
                  : "rgba(255,255,255,0.06)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Diamond icon */}
              <span
                className="text-base leading-none"
                style={{ filter: "drop-shadow(0 0 6px rgba(99,102,241,0.8))" }}
              >
                💎
              </span>
              <span className="text-sm font-semibold text-white tabular-nums">{credits}</span>

              {/* Plus button */}
              <motion.span
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="ml-1 h-5 w-5 rounded-full flex items-center justify-center text-[11px] font-bold"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 2px 8px rgba(99,102,241,0.5)",
                  color: "white",
                }}
              >
                +
              </motion.span>
            </motion.button>

            {/* Credits Dropdown */}
            <AnimatePresence>
              {showCredits && (
                <motion.div
                  className="absolute right-0 mt-3 w-72 rounded-2xl border border-white/10 p-5 z-50"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    background: "linear-gradient(145deg, #0d0d12 0%, #111118 100%)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Top accent */}
                  <div
                    className="h-px w-full mb-4 rounded-full"
                    style={{ background: "linear-gradient(90deg, transparent, #6366f1, transparent)" }}
                  />

                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center text-lg"
                      style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}
                    >
                      💎
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Your Credits</p>
                      <p className="text-gray-500 text-xs">{credits} credits remaining</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    Credits are used to generate AI notes, diagrams & printable PDFs.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {setShowCredits(false); navigate("/pricing")}}
                    className="w-full py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
                    }}
                  >
                    Buy More Credits →
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Profile Avatar ── */}
          <div className="relative" ref={profileRef}>
            <motion.button
              onClick={() => { setShowProfile(!showProfile); setShowCredits(false) }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-9 w-9 rounded-xl flex items-center justify-center cursor-pointer font-bold text-sm text-white overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #6366f1)",
                boxShadow: showProfile
                  ? "0 0 0 2px #6366f1, 0 4px 20px rgba(99,102,241,0.5)"
                  : "0 2px 12px rgba(99,102,241,0.4)",
              }}
            >
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 60%)" }}
              />
              <span className="relative z-10">{userName}</span>
            </motion.button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {showProfile && (
                <motion.div
                  className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 overflow-hidden z-50"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    background: "linear-gradient(145deg, #0d0d12 0%, #111118 100%)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  {/* User info header */}
                  <div className="px-4 pt-4 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-9 w-9 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                        style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)" }}
                      >
                        {userName}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-white text-sm font-semibold truncate">
                          {userData?.name}
                        </p>
                        <p className="text-gray-500 text-xs truncate">
                          {userData?.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu items */}
                  <div className="p-2">
                    <MenuItem
                      text="History"
                      icon="🕐"
                      onClick={() => { navigate("/history"); setShowProfile(false) }}
                    />
                    <div className="h-px bg-white/8 mx-2 my-1" />
                    <MenuItem
                      text="Sign Out"
                      icon="→"
                      red
                      onClick={handleSignOut}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function MenuItem({ onClick, text, icon, red }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors cursor-pointer ${
        red
          ? "text-red-400 hover:bg-red-500/10"
          : "text-gray-300 hover:bg-white/8 hover:text-white"
      }`}
    >
      <span className="text-base leading-none opacity-70">{icon}</span>
      {text}
    </motion.button>
  )
}

export default NavBar