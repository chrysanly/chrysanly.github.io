import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Server, Database, Layers, Wrench, GitBranch, Cloud, Layout, Terminal, Users } from "lucide-react";

export default function TechStack() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleTools, setVisibleTools] = useState([]);
  const sectionRef = useRef(null);
  const toolsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              technologies.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleCards((prev) => [...prev, index]);
                }, index * 100);
              });
            } else if (entry.target === toolsRef.current) {
              developmentTools.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleTools((prev) => [...prev, index]);
                }, index * 80);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (toolsRef.current) {
      observer.observe(toolsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      category: "Backend Frameworks",
      icon: Server,
      color: "from-red-500 to-orange-500",
      techs: [
        { name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
        { name: "CodeIgniter", logo: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg" },
        { name: "Yii2", logo: "https://www.yiiframework.com/image/logo.svg" },
      ],
    },
    {
      category: "Frontend Libraries",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      techs: [
        { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Vue.js", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
      ],
    },
    {
      category: "Runtime & Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      techs: [
        { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: ".NET", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" },
      ],
    },
    {
      category: "Languages",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      techs: [
        { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
        { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
      ],
    },
  ];

  const developmentTools = [
    {
      category: "CSS Frameworks",
      icon: Layout,
      color: "from-cyan-500 to-blue-500",
      tools: [
        { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "Bootstrap", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
      ],
    },
    {
      category: "IDEs & Editors",
      icon: Code2,
      color: "from-blue-600 to-indigo-600",
      tools: [
        { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
        { name: "Visual Studio", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg" },
      ],
    },
    {
      category: "Version Control",
      icon: GitBranch,
      color: "from-slate-600 to-slate-800",
      tools: [
        { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
        { name: "GitLab", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg" },
      ],
    },
    {
      category: "Project Management",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      tools: [
        { name: "Jira", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg" },
        { name: "Trello", logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg" },
      ],
    },
    {
      category: "Cloud & Deployment",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      tools: [
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Hostinger", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hostinger_logo.svg" },
      ],
    },
    {
      category: "Development Tools",
      icon: Wrench,
      color: "from-emerald-500 to-teal-500",
      tools: [
        { name: "Postman", logo: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
        { name: "HeidiSQL", logo: "https://www.heidisql.com/images/logo.png" },
      ],
    },
    {
      category: "Shell & Scripting",
      icon: Terminal,
      color: "from-green-600 to-lime-600",
      tools: [
        { name: "Shell Script", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Tech Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building modern web applications with industry-leading technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((category, idx) => (
            <Card
              key={idx}
              className={`p-6 hover:shadow-2xl transition-all duration-500 group border-2 cursor-pointer ${
                visibleCards.includes(idx)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transition: "all 0.6s ease-out",
              }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
              >
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-slate-800">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.techs.map((tech, techIdx) => (
                  <div
                    key={techIdx}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-all hover:translate-x-2 duration-300"
                  >
                    <div className="w-8 h-8 flex items-center justify-center transition-transform hover:scale-125 duration-300">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                    <span className="text-slate-700 font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Development Tools Section */}
        <div className="mt-20" ref={toolsRef}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Development Tools
            </h3>
            <p className="text-lg text-slate-600">
              Tools and platforms I use daily for efficient development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {developmentTools.map((toolCategory, idx) => (
              <Card
                key={idx}
                className={`p-5 hover:shadow-xl transition-all duration-500 group border-2 cursor-pointer ${
                  visibleTools.includes(idx)
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${toolCategory.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    <toolCategory.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-800">
                    {toolCategory.category}
                  </h4>
                </div>
                <div className="space-y-2">
                  {toolCategory.tools.map((tool, toolIdx) => (
                    <div
                      key={toolIdx}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-50 transition-all hover:translate-x-1 duration-300"
                    >
                      <div className="w-6 h-6 flex items-center justify-center transition-transform hover:scale-125 duration-300">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-slate-50 to-slate-100 border-2 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-3xl font-bold mb-6 text-slate-800">About Me</h3>
            <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
              <p>
                I'm <strong>Chrysanly John Corpuz Roma</strong>, a passionate fullstack developer 
                currently based in <strong>Dubai</strong>, with expertise in building scalable 
                web applications using modern technologies.
              </p>
              <p>
                On the backend, I specialize in <strong>PHP frameworks</strong> like Laravel,
                CodeIgniter, and Yii2, creating robust APIs and server-side applications. I also
                work with <strong>Node.js</strong> and <strong>.NET</strong> for diverse project
                requirements.
              </p>
              <p>
                For frontend development, I craft interactive user interfaces using{" "}
                <strong>React</strong> and <strong>Vue.js</strong>, ensuring seamless user
                experiences across all devices.
              </p>
              <p>
                I'm always eager to learn new technologies and take on challenging projects that
                push the boundaries of what's possible on the web.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}