import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// EMPLOYMENT STATUS - Change this easily: "Available for Work" | "Currently Employed" | "Not Available"
const EMPLOYMENT_STATUS = "Available for Work";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  
  const titles = ["Fullstack Developer", "PHP Expert", "React Developer", "Backend Specialist"];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getStatusColor = () => {
    if (EMPLOYMENT_STATUS === "Available for Work") return "bg-green-500";
    if (EMPLOYMENT_STATUS === "Currently Employed") return "bg-blue-500";
    return "bg-slate-500";
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Status Badge */}
          <div className="flex justify-center mb-6 animate-bounce-slow">
            <Badge className={`${getStatusColor()} text-white px-4 py-2 text-sm font-medium shadow-lg`}>
              <span className="relative flex h-2 w-2 mr-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${getStatusColor()} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 bg-white`}></span>
              </span>
              {EMPLOYMENT_STATUS}
            </Badge>
          </div>

          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800 animate-fade-in">
            Chrysanly John Corpuz Roma
          </h1>

          {/* Animated Title */}
          <div className="h-20 md:h-24 mb-6 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              {titles[titleIndex]}
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-slate-700 mb-4 max-w-3xl mx-auto animate-fade-in-up">
            Crafting robust web applications with modern technologies
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-slate-600 mb-6 animate-fade-in-up">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Dubai, DIP 1</span>
          </div>

          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Specializing in PHP frameworks (Laravel, CodeIgniter, Yii2), JavaScript libraries (React, Vue.js), 
            and building scalable solutions that make a difference
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-8 hover:shadow-2xl transition-all hover:scale-105 animate-pulse-slow"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-2 hover:bg-slate-50 hover:scale-105 transition-all"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-fade-in-up">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 hover:rotate-6"
            >
              <Github className="w-6 h-6 text-slate-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 hover:rotate-6"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:chrys.romao21@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 hover:rotate-6"
            >
              <Mail className="w-6 h-6 text-purple-600" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("tech-stack")}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-slate-400" />
        </button>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-in;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}