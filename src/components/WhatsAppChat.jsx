import { useState } from 'react'

// Set your WhatsApp number in international format, no + or spaces, e.g. "14155552671"
const WHATSAPP_NUMBER = '+94703642741'
const DEFAULT_MESSAGE = "Hi! I'd like to talk about a project."

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false)

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-64 rounded-xl border border-navy-700 bg-navy-800 p-4 shadow-xl">
          <p className="text-sm font-semibold text-white">Chat with us</p>
          <p className="mt-1 text-xs text-slate-400">
            Questions about a project? Message us directly on WhatsApp.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3 w-full justify-center !py-2 !text-xs"
          >
            Open WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Open WhatsApp chat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11a16.6 16.6 0 0 1-1.63-.6c-2.87-1.24-4.75-4.13-4.9-4.32-.14-.2-1.17-1.56-1.17-2.97 0-1.4.74-2.09 1-2.38.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.28.75 1.24 1.61 2 1.11.99 2.04 1.3 2.32 1.44.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
        </svg>
      </button>
    </div>
  )
}
