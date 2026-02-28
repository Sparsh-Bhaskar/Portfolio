import { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  // Initialize theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark")
      setIsDark(false)
    } else {
      // System preference fallback
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) {
        document.documentElement.classList.add("dark")
        setIsDark(true)
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        fixed top-4 right-4
        px-4 py-2
        border-2 border-border
        bg-primary text-white
        dark:bg-secondary dark:text-black
        rounded-sm
        transition-transform duration-150
        hover:scale-105
        active:scale-95
      "
    >
      {isDark ? "☀" : "🌙"}
    </button>
  )
}

export default ThemeToggle