import { useState, useEffect, useCallback, useRef } from 'react'
import { projects } from '../data/projects.ts'
import { useScrollReveal } from '../hooks/useScrollReveal.ts'

function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: sliderRef, isVisible: sliderVisible } = useScrollReveal(0.1)
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(false)
  const total = projects.length

  const next = useCallback(() => setActive((i) => (i + 1) % total), [total])
  const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [paused, next])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [inView, next, prev])

  function getOffset(index: number) {
    let diff = index - active
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl font-bold mb-16 text-center">
            <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div
          ref={sliderRef}
          className={`reveal ${sliderVisible ? 'visible' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Carousel */}
          <div className="relative h-120 overflow-hidden">
            {projects.map((project, index) => {
              const offset = getOffset(index)
              const isActive = offset === 0
              const isVisible = Math.abs(offset) <= 1

              return (
                <article
                  key={project.id}
                  className="slider-card"
                  style={{
                    transform: `translateX(${offset * 70}%) scale(${isActive ? 1 : 0.8})`,
                    opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                    zIndex: isActive ? 10 : 5 - Math.abs(offset),
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                  onClick={() => { if (!isActive) setActive(index) }}
                >
                  <div className={`card-glow bg-gray-900 rounded-xl overflow-hidden h-full flex flex-col ${!isActive ? 'cursor-pointer' : ''}`}>
                    {/* Screenshot */}
                    <div className="relative w-full h-48 md:h-80 bg-gray-800 flex items-center justify-center overflow-hidden">
                      <img
                        src={`${import.meta.env.BASE_URL}${project.image}`}
                        alt={project.title}
                        draggable={false}
                        className="w-full h-full object-contain select-none"
                      />
                    </div>

                    {/* Links */}
                    <div className="flex justify-center gap-4 py-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-500/50 transition-colors"
                        aria-label="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-500/50 transition-colors"
                        aria-label="GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white text-center px-6">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed text-center px-6 pb-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center gap-2 px-6 py-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}

            {/* Prev / Next */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 text-gray-400 hover:text-white hover:border-accent-500/50 transition-colors flex items-center justify-center"
              aria-label="Previous project"
            >
              &#8249;
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 text-gray-400 hover:text-white hover:border-accent-500/50 transition-colors flex items-center justify-center"
              aria-label="Next project"
            >
              &#8250;
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === active
                    ? 'bg-accent-400'
                    : 'bg-gray-700 hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
