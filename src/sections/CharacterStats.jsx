const StatBar = ({ label, level }) => {
  return (
    <div className="space-y-2">
      <div className="text-sm tracking-wide">{label}</div>
      <div className="w-full border-2 border-border h-4">
        <div
          className="h-full bg-primary transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

const CharacterStats = ({ goNext }) => {
  return (
    <div className="max-w-5xl w-full space-y-16 animate-fadeIn">

      <div className="text-xs tracking-widest text-textSecondary text-center">
        LOCATION: CHARACTER OVERVIEW
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Avatar Frame */}
        <div className="flex justify-center">
          <div className="
            w-64 h-64
            border-4 border-border
            flex items-center justify-center
            text-textSecondary
          ">
            Avatar
          </div>
        </div>

        {/* Character Info + Stats */}
        <div className="space-y-8">

          <div className="space-y-3">
            <h1 className="text-4xl">Sparsh Bhaskar</h1>
            <p className="text-textSecondary">
              Full Stack Developer — Software Engineer
            </p>
          </div>

          <div className="space-y-6">
            <StatBar label="Systems Thinking" level={85} />
            <StatBar label="Problem Solving" level={90} />
            <StatBar label="Frontend Craft" level={80} />
            <StatBar label="Backend Architecture" level={85} />
            <StatBar label="Adaptability" level={88} />
          </div>

        </div>
      </div>

      <div className="text-center text-textSecondary max-w-2xl mx-auto leading-relaxed">
        <p>
          I design scalable systems and intentional digital experiences —
          combining structured backend architecture with thoughtful frontend execution.
        </p>
      </div>

      <div className="text-center">
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
          Continue to Skill Tree
        </button>
      </div>

    </div>
  )
}

export default CharacterStats