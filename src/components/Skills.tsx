import { skills } from '../data/skills.ts'
import { useScrollReveal } from '../hooks/useScrollReveal.ts'

function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  const { ref: iconsRef, isVisible: iconsVisible } = useScrollReveal(0.1)

  return (
    <section id="skills" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gradient-text">Skills</span>
          </h2>
        </div>
        <div
          ref={iconsRef}
          className={`flex flex-wrap gap-5 justify-center reveal ${iconsVisible ? 'visible' : ''}`}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              title={skill.name}
              className="w-16 h-16 rounded-full bg-gray-800 border border-gray-700 hover:border-accent-500/50 transition-colors flex items-center justify-center overflow-hidden cursor-default"
            >
              <img
                src={skill.icon.startsWith('http') ? skill.icon : `${import.meta.env.BASE_URL}${skill.icon}`}
                alt={skill.name}
                draggable={false}
                className="w-10 h-10 object-contain select-none"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.classList.add('text-gray-500', 'text-sm')
                  e.currentTarget.parentElement!.textContent = skill.name.charAt(0)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
