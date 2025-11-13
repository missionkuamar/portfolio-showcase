import { useEffect, useRef } from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projectsRef = useRef(null)

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
    },
     {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
    },
     {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
    },
     {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
    },
     {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
    },
     {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
    },
     {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
    }, {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
    }, {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
    }, {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning platform for business intelligence and predictive analytics.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      tech: ["React Native", "Firebase", "Node.js", "Redis"],
      image: "/api/placeholder/600/400",
      liveLink: "#",
      codeLink: "#"
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 bg-white px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={projectsRef} className="opacity-0">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12 text-center tracking-tight">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects