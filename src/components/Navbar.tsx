import { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#hero" className="text-lg font-bold gradient-text">
          Lucas Xavier
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-gray-400 hover:text-white transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-400 transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-400 transition-opacity ${isOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-400 transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Collapsible mobile nav */}
      <div
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col items-center gap-4 pb-4 pt-2 border-t border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
