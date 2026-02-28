const sections = [
  "Spawn Area",
  "Character Stats",
  "Skill Tree",
  "Quest Board",
  "Adventure Log",
  "Achievements",
  "Message Guild",
]

const PauseMenu = ({ closeMenu, onSelect }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="
        bg-surface
        border-4 border-border
        px-8 py-8
        rounded-sm
        w-[320px]
        text-center
      ">
        <h2 className="text-2xl mb-6">
          GAME MENU
        </h2>

        <ul className="space-y-4">
          {sections.map((section) => (
            <li
              key={section}
              className="cursor-pointer hover:scale-105 transition-transform duration-150"
              onClick={() => onSelect(section)}
            >
              ▶ {section}
            </li>
          ))}
        </ul>

        <button
          onClick={closeMenu}
          className="
            mt-8
            px-4 py-2
            border-2 border-border
            bg-primary text-white
            rounded-sm
            hover:scale-105
            transition-transform duration-150
          "
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default PauseMenu