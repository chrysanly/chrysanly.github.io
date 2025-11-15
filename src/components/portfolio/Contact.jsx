import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
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

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
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

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6 border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                    Email
                  </h3>
                  <a
                    href="mailto:chrys.romao21@gmail.com"
                    className="text-slate-600 hover:text-blue-600 transition-colors break-all"
                  >
                    chrys.romao21@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-green-600 transition-colors">
                    Phone
                  </h3>
                  <a
                    href="tel:+971529258013"
                    className="text-slate-600 hover:text-green-600 transition-colors"
                  >
                    +971 52 925 8013
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-orange-600 transition-colors">
                    Location
                  </h3>
                  <p className="text-slate-600">Dubai, DIP 1, UAE</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 border-2 bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-xl transition-all duration-500">
              <h3 className="font-semibold text-slate-800 mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-white rounded-lg hover:shadow-lg transition-all hover:-translate-y-2 hover:scale-105"
                >
                  <Github className="w-5 h-5 text-slate-700" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-white rounded-lg hover:shadow-lg transition-all hover:-translate-y-2 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>
              </div>
            </Card>

            <Card className="p-6 border-2 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <h3 className="font-semibold text-slate-800 mb-3">Availability</h3>
              <p className="text-slate-600 leading-relaxed">
                I'm currently <strong>available for work</strong> and open to exciting opportunities. 
                Let's discuss how I can help bring your ideas to life!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}