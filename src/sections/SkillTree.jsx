const SkillNode = ({ label }) => {
  return (
    <div
      className="
        px-4 py-2
        border-2 border-border
        bg-surface
        text-sm
        hover:scale-105
        transition-transform duration-150
      "
    >
      {label}
    </div>
  )
}

const SkillTree = ({ goNext }) => {
  return (
    <div className="max-w-6xl w-full space-y-16 animate-fadeIn">

      <div className="text-center space-y-4">
  <h1 className="text-4xl md:text-5xl">
    Skill Tree
  </h1>
  <p className="text-textSecondary text-sm">
    A structured map of capabilities and systems.
  </p>
</div>

      <div className="flex flex-col items-center space-y-12">

        {/* Root Node */}
        <SkillNode label="Full Stack Core" />

        {/* Branches */}
        <div className="grid md:grid-cols-2 gap-16 w-full justify-items-center">

          {/* Frontend Branch */}
          <div className="flex flex-col items-center space-y-8">
            <SkillNode label="Frontend Systems" />
            <SkillNode label="React / UI Engineering" />
            <SkillNode label="Performance & UX" />
          </div>

          {/* Backend Branch */}
          <div className="flex flex-col items-center space-y-8">
            <SkillNode label="Backend Architecture" />
            <SkillNode label="Node.js / APIs" />
            <SkillNode label="Database Design" />
          </div>

        </div>

      </div>

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
          Continue to Quest Board
        </button>
      </div>

    </div>
  )
}

export default SkillTree