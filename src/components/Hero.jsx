import { useEffect, useRef } from 'react'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6">
      <div ref={heroRef} className="text-center opacity-0 transform translate-y-10">
        <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6 tracking-tight">
          Alex Chen
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light tracking-wide">
          Senior Full-Stack Developer & UI/UX Designer
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting digital experiences that merge elegant design with robust engineering. 
          Currently building solutions that drive business growth and user satisfaction.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="#projects"
            className="bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-light tracking-wide hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-800 text-gray-800 px-8 py-3 rounded-full text-sm font-light tracking-wide hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero