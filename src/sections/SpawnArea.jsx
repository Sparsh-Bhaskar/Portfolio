const SpawnArea = ({ goNext }) => {
  return (
    <div className="max-w-2xl text-center space-y-8 animate-fadeIn">
      
      <h1 className="text-4xl md:text-5xl leading-tight">
        Welcome, traveler.
      </h1>

      <p className="text-textSecondary text-lg">
        You’ve stepped into a world shaped by logic, systems, and curiosity.
        <br />
        I’m Sparsh Bhaskar — a developer building thoughtful digital experiences.
      </p>

      <button
        onClick={goNext}
        className="
          mt-4
          px-6 py-3
          border-2 border-border
          bg-primary text-white
          rounded-sm
          hover:scale-105
          transition-transform duration-150
        "
      >
        ▶ Begin Journey
      </button>

    </div>
  )
}

export default SpawnArea