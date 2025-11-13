import { useEffect, useRef } from 'react'

const Skills = () => {
  const skillsRef = useRef(null)

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 88 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'AWS/Cloud', level: 80 }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
          // Animate skill bars
          const bars = entry.target.querySelectorAll('.skill-bar-fill')
          bars.forEach(bar => {
            bar.style.width = bar.parentElement.getAttribute('data-level') + '%'
          })
        }
      },
      { threshold: 0.3 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-gray-50 px-6">
      <div className="container mx-auto max-w-4xl">
        <div ref={skillsRef} className="opacity-0">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12 text-center tracking-tight">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-light">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div 
                  className="skill-bar bg-gray-200 rounded-full h-2 overflow-hidden"
                  data-level={skill.level}
                >
                  <div 
                    className="skill-bar-fill bg-gray-800 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills