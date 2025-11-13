import { useEffect, useRef } from 'react'

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 0.1}s`
          entry.target.classList.add('animate-fade-in-up')
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 opacity-0 border border-gray-100"
    >
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-gray-400">Project Image</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-light text-gray-800 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(tech => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-light"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href={project.liveLink}
            className="text-gray-800 hover:text-gray-600 text-sm font-light transition-colors duration-300"
          >
            Live Demo →
          </a>
          <a 
            href={project.codeLink}
            className="text-gray-500 hover:text-gray-700 text-sm font-light transition-colors duration-300"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard