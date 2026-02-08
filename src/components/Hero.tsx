function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Intro */}
      <div className="relative z-10 text-center px-6">
        <p
          className="text-accent-400 font-mono mb-4 tracking-wide text-sm animate-fade-in-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          Hi, my name is
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          <span className="gradient-text">Lucas Xavier</span>
        </h1>
        <h2
          className="text-2xl md:text-3xl text-gray-400 mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          Front-End Developer
        </h2>
        <p
          className="text-gray-500 max-w-xl mx-auto mb-10 text-lg leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          Your new potential hire.  
        </p>
        <a
          href="#about"
          className="inline-block mt-12 animate-fade-in-up"
          style={{ animationDelay: '0.7s', opacity: 0 }}
          aria-label="Scroll down"
        >
          <svg
            className="w-8 h-8 text-accent-400 animate-bounce-slow"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
