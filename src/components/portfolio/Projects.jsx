import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      technologies: ["Laravel", "React", "MySQL", "Stripe"],
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      title: "Project Management Tool",
      description:
        "Collaborative project management application with real-time updates, task tracking, and team communication.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      technologies: ["Node.js", "Vue.js", "MongoDB", "Socket.io"],
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      title: "Healthcare Management System",
      description:
        "Comprehensive system for managing patient records, appointments, and medical staff scheduling.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      technologies: [".NET", "React", "SQL Server"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      title: "Real Estate Listing Platform",
      description:
        "Property listing website with advanced search, virtual tours, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      technologies: ["CodeIgniter", "Vue.js", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course management, video streaming, quizzes, and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
      technologies: ["Yii2", "React", "MySQL"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for managing multiple social media accounts with scheduling and reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      technologies: ["Laravel", "Vue.js", "Redis"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-700 border-2 cursor-pointer ${
                project.featured ? "md:col-span-2 md:row-span-2" : ""
              } ${
                visibleProjects.includes(idx)
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredProject === idx ? "scale-125 rotate-3" : "scale-100"
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                  hoveredProject === idx ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 transform transition-all duration-500" style={{
                    transform: hoveredProject === idx ? "translateY(0)" : "translateY(20px)",
                  }}>
                    <Button
                      size="sm"
                      className="bg-white text-slate-800 hover:bg-slate-100 flex-1 hover:scale-105 transition-transform"
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30 flex-1 hover:scale-105 transition-transform"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}