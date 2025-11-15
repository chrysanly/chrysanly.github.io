import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, Linkedin, Github, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  /* COMMENTED OUT FOR FUTURE USE - Contact Form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  */

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <Card className="p-6 border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
            <a href="mailto:chrys.romao21@gmail.com" className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                  Email
                </h3>
                <p className="text-slate-600 hover:text-blue-600 transition-colors break-all text-sm">
                  chrys.romao21@gmail.com
                </p>
              </div>
            </a>
          </Card>

          {/* Phone - WhatsApp */}
          <Card className="p-6 border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
            <a href="https://wa.me/971529258013" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-green-600 transition-colors">
                  WhatsApp
                </h3>
                <p className="text-slate-600 hover:text-green-600 transition-colors">
                  +971 52 925 8013
                </p>
              </div>
            </a>
          </Card>

          {/* Phone - Call */}
          <Card className="p-6 border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
            <a href="tel:+971529258013" className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-teal-600 transition-colors">
                  Call Me
                </h3>
                <p className="text-slate-600 hover:text-teal-600 transition-colors">
                  +971 52 925 8013
                </p>
              </div>
            </a>
          </Card>

          {/* Location */}
          <Card className="p-6 border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-orange-600 transition-colors">
                  Location
                </h3>
                <p className="text-slate-600">Dubai, UAE</p>
              </div>
            </div>
          </Card>

          {/* GitHub */}
          <Card className="p-6 border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
            <a href="https://github.com/chrysanly" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-slate-700 transition-colors">
                  GitHub
                </h3>
                <p className="text-slate-600 hover:text-slate-700 transition-colors text-sm">
                  @chrysanly
                </p>
              </div>
            </a>
          </Card>

          {/* LinkedIn */}
          <Card className="p-6 border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
            <a href="https://www.linkedin.com/in/chrysanly-john-roma-7517012a8/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-slate-600 hover:text-blue-600 transition-colors text-sm">
                  Connect with me
                </p>
              </div>
            </a>
          </Card>
        </div>

        {/* Availability Card */}
        <div className="max-w-2xl mx-auto mt-10">
          <Card className="p-8 border-2 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-500 hover:scale-105 text-center">
            <h3 className="font-semibold text-slate-800 mb-3 text-xl">Availability</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              I'm currently <strong>available for work</strong> and open to exciting opportunities. 
              Let's discuss how I can help bring your ideas to life!
            </p>
          </Card>
        </div>
      </div>

      {/* COMMENTED OUT FOR FUTURE USE - Contact Form JSX
      <div className="grid md:grid-cols-5 gap-8">
        <Card className="md:col-span-3 p-8 border-2 hover:shadow-2xl transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-blue-600 transition-colors">
                  Your Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="border-2 focus:scale-105 transition-transform"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-blue-600 transition-colors">
                  Your Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="border-2 focus:scale-105 transition-transform"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-blue-600 transition-colors">
                Subject
              </label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
                className="border-2 focus:scale-105 transition-transform"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-blue-600 transition-colors">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                required
                className="border-2 focus:scale-105 transition-transform"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl transition-all hover:scale-105 disabled:scale-100"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
      */}
    </section>
  );
}