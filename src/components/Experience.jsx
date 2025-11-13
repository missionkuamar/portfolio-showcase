import { useEffect, useRef } from 'react'

const Experience = () => {
  const experienceRef = useRef(null)

  const experiences = [
    {
      company: "TechInnovate Inc.",
      position: "Senior Full-Stack Developer",
      period: "2022 - Present",
      description: "Leading development of enterprise-scale applications, mentoring junior developers, and driving technical architecture decisions.",
      achievements: ["Scaled platform to handle 1M+ users", "Reduced load times by 60%", "Led team of 8 developers"]
    },
    {
      company: "DigitalCraft Studios",
      position: "Full-Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects with focus on performance and user experience.",
      achievements: ["Delivered 15+ successful projects", "Improved client satisfaction by 40%", "Introduced modern development practices"]
    },
    {
      company: "StartUpGrid",
      position: "Frontend Developer",
      period: "2018 - 2020",
      description: "Built responsive web applications and collaborated with design teams to implement pixel-perfect interfaces.",
      achievements: ["Built core product features", "Worked with cross-functional teams", "Contributed to design system"]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      },
      { threshold: 0.2 }
    )

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 bg-gray-50 px-6">
      <div className="container mx-auto max-w-4xl">
        <div ref={experienceRef} className="opacity-0">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12 text-center tracking-tight">
            Professional Journey
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-800 rounded-full"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-light text-gray-800">{exp.position}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <p className="text-gray-600 font-light">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.period}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience