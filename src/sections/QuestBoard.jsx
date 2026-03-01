import { useState } from "react"

const quests = [
  {
    id: 1,
    title: "Hostel Management System",
    subtitle: "Full MERN Stack Application",
    description:
      "A complete hostel management platform built using MERN stack with authentication, structured backend APIs, and scalable backend architecture.",
  },
  {
    id: 2,
    title: "AI Grid Game – Quest to Save Princess",
    subtitle: "Game AI & Pathfinding",
    description:
      "A Pygame-based intelligent grid game implementing A* pathfinding, AI-driven enemies, and dynamic tile-based systems.",
  },
  {
    id: 3,
    title: "E-Commerce Data Analytics",
    subtitle: "NumPy, Pandas, Visualization",
    description:
      "Structured sales analysis and statistical modeling using NumPy, Pandas, and data visualization techniques.",
  },
]

const QuestBoard = ({ goNext }) => {
  const [selectedQuest, setSelectedQuest] = useState(quests[0])

  return (
    <div className="max-w-6xl w-full space-y-12 animate-fadeIn">

      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl">
          Quest Board
        </h1>
        <p className="text-textSecondary text-sm">
          Select a quest to inspect its details.
        </p>
      </div>

      <div className="grid md:grid-cols-[40%_60%] gap-16 items-start">

  {/* Quest List */}
  <div className="space-y-4">
    {quests.map((quest) => (
      <div
        key={quest.id}
        onClick={() => setSelectedQuest(quest)}
        className={`
          relative p-4 border-2 border-border cursor-pointer
          transition-all duration-200
          hover:-translate-y-1
          ${selectedQuest.id === quest.id
            ? "bg-primary text-white"
            : "bg-surface hover:bg-primary/10"}
        `}
      >
        {/* Active Indicator */}
        {selectedQuest.id === quest.id && (
          <div className="absolute left-0 top-0 h-full w-1 bg-secondary" />
        )}

        <h2 className="text-base">{quest.title}</h2>
        <p className="text-xs opacity-80">
          {quest.subtitle}
        </p>
      </div>
    ))}
  </div>

  {/* Quest Detail Panel */}
  <div className="space-y-8 border-2 border-border p-8 bg-surface shadow-lg">

    <h2 className="text-3xl">
      {selectedQuest.title}
    </h2>

    <p className="text-textSecondary leading-relaxed">
      {selectedQuest.description}
    </p>

    <div className="pt-4 space-y-3">
      <div className="text-xs tracking-widest text-textSecondary">
        MISSION ACTIONS
      </div>

      <div className="flex gap-4">
        <button
          className="
            px-6 py-2
            border-2 border-border
            bg-primary text-white
            rounded-sm
            hover:scale-105
            transition-transform duration-150
          "
        >
          View Live Project
        </button>

        <button
          className="
            px-6 py-2
            border-2 border-border
            bg-surface
            rounded-sm
            hover:scale-105
            transition-transform duration-150
          "
        >
          View Code
        </button>
      </div>
    </div>

  </div>

</div>

      {/* Section Progression (outside detail panel) */}
      <div className="text-center pt-8">
        <button
          onClick={goNext}
          className="
            px-6 py-3
            border-2 border-border
            bg-secondary text-black
            rounded-sm
            hover:scale-105
            transition-transform duration-150
          "
        >
          Continue Journey
        </button>
      </div>

    </div>
  )
}

export default QuestBoard