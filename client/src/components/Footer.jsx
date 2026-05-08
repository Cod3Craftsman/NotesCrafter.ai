import React from 'react'
import { motion } from "framer-motion"
import logo from "../assets/logo.png"

const footerLinks = {
  Product: ["Notes", "History", "Pricing", "Contact"],
  Resources: ["Documentation", "Blog", "Changelog", "Support"],
}

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Cod3Craftsman",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-4 md:mx-8 mt-24 mb-6 rounded-3xl overflow-hidden
        border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
      style={{
        background: "linear-gradient(145deg, #0f0f0f 0%, #141414 40%, #111111 100%)",
      }}
    >
      {/* Top accent line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #6366f1 30%, #8b5cf6 60%, transparent 100%)",
        }}
      />

      <div className="px-8 md:px-12 pt-12 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">

          {/* Brand - col span 4 */}
          <motion.div
            className="md:col-span-4 flex flex-col gap-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-xl blur-md opacity-60"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                />
                <img
                  src={logo}
                  alt="NotesCrafter AI logo"
                  className="relative h-10 w-10 object-contain rounded-xl"
                />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">NotesCrafter</span>{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #6366f1, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  AI
                </span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Generate smart AI notes, summaries, diagrams, and printable PDFs instantly. Study smarter, revise faster.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-9 w-9 rounded-xl flex items-center justify-center
                    text-gray-500 hover:text-white
                    border border-white/10 hover:border-white/25
                    transition-colors duration-200"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Links - col span 7 */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([section, links], i) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{
                    background: "linear-gradient(90deg, #6366f1, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {section}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <span
                          className="h-px w-3 opacity-0 group-hover:opacity-100 transition-all duration-200"
                          style={{ background: "linear-gradient(90deg, #6366f1, #a78bfa)" }}
                        />
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-2xl p-5 mb-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 100%)",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          <div>
            <p className="text-sm font-semibold text-white mb-0.5">Stay Updated</p>
            <p className="text-xs text-gray-400">Get the latest AI note generation updates and premium features.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 px-6 py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
            }}
          >
            Get Started →
          </motion.button>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-white/8 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© 2026 NotesCrafter AI. All rights reserved.</p>
          <p>
            Crafted with ♥ by{" "}
            <span
              className="font-semibold"
              style={{
                background: "linear-gradient(90deg, #6366f1, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cod3Craftsman
            </span>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer