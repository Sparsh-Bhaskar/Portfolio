import { useState } from "react"
import ThemeToggle from "../components/ThemeToggle"
import PauseMenu from "../components/PauseMenu"

import SpawnArea from "../sections/SpawnArea"
import CharacterStats from "../sections/CharacterStats"
import SkillTree from "../sections/SkillTree"
import QuestBoard from "../sections/QuestBoard"
import AdventureLog from "../sections/AdventureLog"
import Achievements from "../sections/Achievements"
import MessageGuild from "../sections/MessageGuild"

const sectionsMap = {
  "Spawn Area": <SpawnArea />,
  "Character Stats": <CharacterStats />,
  "Skill Tree": <SkillTree />,
  "Quest Board": <QuestBoard />,
  "Adventure Log": <AdventureLog />,
  "Achievements": <Achievements />,
  "Message Guild": <MessageGuild />,
}

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState("Spawn Area")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleSectionChange = (section) => {
    if (section === currentSection) {
      setMenuOpen(false)
      return
    }

    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentSection(section)
      setIsTransitioning(false)
    }, 300)

    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen relative bg-background text-textPrimary dark:bg-background dark:text-textPrimary">

      {/* Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="
          fixed top-4 left-4
          px-4 py-2
          border-2 border-border
          bg-surface
          rounded-sm
          hover:scale-105
          transition-transform duration-150
        "
      >
        ☰
      </button>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Animated Section Area */}
      <div className="flex items-center justify-center h-screen overflow-hidden px-4">
        <div
          className={`
            transition-all duration-300 ease-in-out
            ${isTransitioning ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}
          `}
        >
          {sectionsMap[currentSection]}
        </div>
      </div>

      {/* Pause Menu */}
      {menuOpen && (
        <PauseMenu
          closeMenu={() => setMenuOpen(false)}
          onSelect={handleSectionChange}
        />
      )}
    </div>
  )
}

export default MainLayout