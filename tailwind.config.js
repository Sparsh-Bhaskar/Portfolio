/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // important for manual dark mode toggle
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    background: "var(--color-background)",
    surface: "var(--color-surface)",
    textPrimary: "var(--color-text-primary)",
    textSecondary: "var(--color-text-secondary)",
    border: "var(--color-border)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    error: "var(--color-error)",
  },
  borderRadius: {
    sm: "2px",
    md: "4px",
    lg: "6px",
  },
  fontFamily: {
    pixel: ["Silkscreen", "cursive"],
  }
}
  },
  plugins: [],
}