"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  if (!mounted) {
    return null
  }

  return (
    <button
      className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-zinc-800 rounded-full p-2 shadow-lg transition-colors duration-300"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-500 text-xl" />
      ) : (
        <FaMoon className="text-blue-500 text-xl" />
      )}
    </button>
  )
}

export default ThemeToggle