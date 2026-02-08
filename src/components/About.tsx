import { useScrollReveal } from '../hooks/useScrollReveal.ts'

function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-24 px-6 scroll-mt-20">
      <div ref={ref} className={`max-w-5xl mx-auto reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-center">
          <img
            src={`${import.meta.env.BASE_URL}headshot.jpg`}
            alt="Lucas Xavier"
            className="w-64 h-64 mx-auto rounded-2xl object-cover"
          />

          {/* Summary and details */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Self taught front-end web developer with hands-on experience building responsive web applications. Strong foundation in visual design, accessibility and user experience informed by data-driven content creation and analytics. Seeking an entry-level role focused on building performant, accessible and user-centered web applications.
            </p>
            {/* At a glance */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                <span className="text-accent-400 text-sm font-mono block mb-1">Location</span>
                <span className="text-gray-300 text-sm">San Diego, CA</span>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                <span className="text-accent-400 text-sm font-mono block mb-1">Focus</span>
                <span className="text-gray-300 text-sm">Front-end development</span>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                <span className="text-accent-400 text-sm font-mono block mb-1">Education</span>
                <span className="text-gray-300 text-sm">BA in Cinema</span>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                <span className="text-accent-400 text-sm font-mono block mb-1">Status</span>
                <span className="text-gray-300 text-sm">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
