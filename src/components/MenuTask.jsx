import { useEffect, useRef, useState } from "react"
import { Folder, Smartphone, Plus, Clock, Type } from "lucide-react"

export function MenuTask({onOpen}) {
  const [visible, setVisible] = useState(true)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const resetTimer = () => {
      setVisible(true)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        setVisible(false)
      }, 1000)
    }

    window.addEventListener("mousemove", resetTimer)
    window.addEventListener("touchstart", resetTimer)
    window.addEventListener("touchmove", resetTimer)
    window.addEventListener("scroll", resetTimer)

    resetTimer()

    return () => {
      window.removeEventListener("mousemove", resetTimer)
      window.removeEventListener("touchstart", resetTimer)
      window.removeEventListener("touchmove", resetTimer)
      window.removeEventListener("scroll", resetTimer)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#f1f1f1] rounded-full px-3 py-2 flex items-center gap-2 shadow-sm z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm"><Folder size={18} className="text-gray-500" /></button>
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm"><Smartphone size={18} className="text-gray-500" /></button>
      <button onClick={onOpen} className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white shadow-md"><Plus size={20} /></button>
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm"><Clock size={18} className="text-gray-500" /></button>
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm"><Type size={18} className="text-gray-500" /></button>
    </div>
  )
}