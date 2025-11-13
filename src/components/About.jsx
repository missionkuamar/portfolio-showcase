import { useEffect, useRef } from 'react'

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      },
      { threshold: 0.2 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="container mx-auto max-w-4xl">
        <div ref={aboutRef} className="opacity-0">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12 text-center tracking-tight">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                With over 6 years of experience in the tech industry, I specialize in creating 
                sophisticated digital products that balance aesthetic appeal with technical excellence. 
                My approach combines meticulous design thinking with scalable engineering practices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                I believe in building solutions that not only meet business objectives but also 
                create meaningful experiences for users. My work spans across startups and 
                enterprise clients, delivering consistent value and innovation.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-800">40+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-800">6+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-gray-800">₹40LPA</div>
                  <div className="text-sm text-gray-500">Current Package</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Profile Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About