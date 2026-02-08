import { socialLinks } from '../data/socialLinks.ts'
import { useScrollReveal } from '../hooks/useScrollReveal.ts'

function Contact() {
  const { ref, isVisible } = useScrollReveal()
  const emailLink = socialLinks.find((link) => link.platform === 'Email')

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-20">
      <div ref={ref} className={`max-w-2xl mx-auto text-center reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-3xl font-bold mb-6">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          I'm currently open to new opportunities. Whether you
          have a question or just want to say hello, please feel free to reach out!
        </p>

        {emailLink && (
          <a
            href={emailLink.url}
            className="inline-block bg-linear-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white font-medium rounded-full px-8 py-3 mb-12 transition-all"
          >
            Contact Me
          </a>
        )}

      </div>
    </section>
  )
}

export default Contact
