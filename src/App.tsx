import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import BackToTop from './components/BackToTop.tsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden flex flex-col">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[15%] -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute top-[25%] -right-20 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />
        <div className="absolute top-[45%] -left-32 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-[60%] -right-24 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="absolute top-[80%] -left-16 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-[95%] -right-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
