import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

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
      title: "Sr. PHP Developer / CRM Project Lead",
      company: "OmniQuest PH (Unilab) - NDA Contract",
      period: "March 2025 – August 2025",
      description: "Led development and maintenance of a complex CRM integrating five connected systems for Unilab.",
      contributions: [
        "Led multi-system project as Lead Developer, coordinating enhancements across five interconnected platforms",
        "Optimized stored procedures for Tableau data analysis, improving report accuracy and performance",
        "Developed new stored procedures supporting web enhancements and business requirements",
        "Enhanced dynamic registration modules supporting multiple branding styles across events",
        "Improved REST API performance and fixed form submission bugs",
        "Created automated code checkup shell script using PHP CodeSniffer",
        "Maintained and upgraded CodeIgniter 2 & 3 legacy systems",
        "Authored comprehensive documentation for local setup and dynamic form workflows"
      ],
      technologies: ["PHP", "CodeIgniter 2/3", "MySQL", "REST API", "Tableau", "Shell Script"],
    },
    {
      title: "Web Developer / Project Lead",
      company: "ThinkBit Solutions Phils. Inc. (NDA Contract)",
      period: "November 2022 – March 2025",
      description: "Developed and maintained full-stack web applications using Laravel and modern JavaScript frameworks in Agile environment.",
      contributions: [
        "Led backend development with dynamic, data-driven page rendering (Barrantes - Laravel 10)",
        "Integrated Google Maps API with real-time location tracking using five-minute interval slider",
        "Built real-time chat, post, and comment system with Pusher broadcasting",
        "Developed scalable Firebase push notification system with reusable job queue",
        "Integrated Monday.com API for workflow synchronization",
        "Implemented comprehensive audit logging system for user activity monitoring",
        "Applied Test-Driven Development (TDD) with PHPUnit for controller testing",
        "Led GNIP project as Lead Developer, mentoring junior developers on best practices",
        "Built role-based authentication with detailed access control using Laravel Livewire v2",
        "Configured Amazon S3 for secure file storage through Laravel Storage system",
        "Designed complex multi-level form workflows with nested subforms and approval hierarchies",
        "Upgraded Laravel v5 to latest version on Barcast project while maintaining backward compatibility",
        "Optimized database performance replacing inefficient loops with efficient query patterns",
        "Implemented eager loading, pagination, and query optimization reducing server load",
        "Integrated Twilio for OTP verification and secure messaging",
        "Applied Service classes, Enums, and Traits for clean, modular backend architecture"
      ],
      technologies: ["Laravel 10", "Livewire v2", "React", "Vue.js", "MySQL", "PostgreSQL", "AWS S3", "Pusher", "Firebase", "Twilio", "PHPUnit", "Monday.com API"],
    },
    {
      title: "Junior Software Engineer",
      company: "TourismoPH (NDA Contract)",
      period: "September 2020 – October 2022",
      description: "Full-Stack Developer focusing on Laravel, ReactJS, Angular, and Node.js for internal and client-based systems.",
      contributions: [
        "Developed user booking system with real-time availability and transaction tracking",
        "Implemented JWT-based user authentication (login, registration, password reset, profile management)",
        "Built RESTful APIs for booking operations with optimized database queries",
        "Created vendor onboarding, service management, and subscription plan features",
        "Integrated Swagger for API testing and documentation",
        "Migrated Laravel 7 CMS to Node.js-based API structure",
        "Enhanced vendor dashboards using Angular and RESTful API integration",
        "Built backend APIs for membership registration and management systems",
        "Implemented CSV bulk upload for members using Node.js streams",
        "Developed region-based and category-based dynamic reporting with ReactJS"
      ],
      technologies: ["Node.js", "ReactJS", "Angular", "Laravel 7", "PostgreSQL", "MySQL", "JWT", "Swagger", "REST API"],
    },
    {
      title: "IT & Operations Coordinator / Office Administrator",
      company: "V. Zuniga Logistics (Pepsi Warehouse)",
      period: "November 2018 – December 2020",
      description: "Managed warehouse operations, staff coordination, and IT systems ensuring accurate tracking, reporting, and inventory management.",
      contributions: [
        "Encoded and monitored daily in-and-out track bookings for warehouse operations",
        "Managed personnel including drivers, checkers, and warehouse staff",
        "Generated custom time reports (12 PM, 3 PM, 6 PM) delivered via email to management",
        "Compiled weekend and month-end summary reports (verbal, written, and email formats)",
        "Conducted daily inventory counting and documentation ensuring accuracy",
        "Utilized ASDOS and ZAP Systems for inventory management and tracking",
        "Provided IT support troubleshooting hardware and software issues",
        "Led migration to ZAP System creating operational workflows and standard procedures"
      ],
      technologies: ["ASDOS System", "ZAP System", "Inventory Management", "MS Office"],
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
                    <p className="text-slate-600 mb-4 leading-relaxed font-medium">{exp.description}</p>
                    
                    {/* Key Contributions */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-700 mb-2">Key Contributions:</h4>
                      <ul className="space-y-2">
                        {exp.contributions.map((contribution, contIdx) => (
                          <li key={contIdx} className="flex items-start gap-2 text-slate-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

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