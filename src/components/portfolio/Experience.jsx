import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            experiences.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 200);
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

  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading development of enterprise web applications using Laravel and React. Architecting scalable solutions and mentoring junior developers.",
      technologies: ["Laravel", "React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Fullstack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using CodeIgniter and Vue.js. Implemented RESTful APIs and optimized database performance.",
      technologies: ["CodeIgniter", "Vue.js", "MySQL", ".NET"],
    },
    {
      title: "Web Developer",
      company: "Creative Web Studio",
      period: "2018 - 2020",
      description:
        "Built responsive websites and web applications using Yii2 framework. Collaborated with design teams to create pixel-perfect implementations.",
      technologies: ["Yii2", "JavaScript", "Bootstrap", "jQuery"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Tech",
      period: "2016 - 2018",
      description:
        "Started my career building small to medium-sized web applications. Gained experience in full development lifecycle and agile methodologies.",
      technologies: ["PHP", "HTML/CSS", "JavaScript", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My professional journey in web development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 transition-all duration-700 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                } ${
                  visibleItems.includes(idx)
                    ? "opacity-100 translate-x-0"
                    : idx % 2 === 0
                    ? "opacity-0 translate-x-20"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 hidden md:block shadow-lg animate-pulse"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <Card className="p-6 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 hover:scale-105 border-2 cursor-pointer">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-purple-600 font-semibold mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}