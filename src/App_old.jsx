import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
      <div className="p-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl animate-fade-up">
        <h1 className="text-4xl font-bold mb-6 text-center animate-fade">
          🚀 Welcome to My Portfolio
        </h1>

        <div className="flex gap-4 justify-center">
          <Button className="flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </Button>

          <Button className="flex items-center gap-2" variant="secondary">
            <Mail className="w-4 h-4" /> Contact
          </Button>
        </div>
      </div>
    </div>
  );
}
