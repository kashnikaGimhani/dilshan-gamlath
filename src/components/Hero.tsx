import { Mail, Phone, MapPin, Linkedin, ChevronDown } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Dilshan Gamlath
          </h1>
          <div className="h-1 w-32 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-emerald-400 font-light mb-6">
            Electrical Engineer
          </p>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Specializing in Renewable Energy Solutions & Water Pumping Systems
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">{contactInfo.email}</span>
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>{contactInfo.phone}</span>
          </a>
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-5 h-5" />
            <span>{contactInfo.location}</span>
          </div>
          <a
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-transparent border-2 border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-all"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-transparent border-2 border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-all"
          >
            Get in Touch
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hover:text-emerald-400 transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
