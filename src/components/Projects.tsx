import { Calendar, Building2, Zap, Sun } from 'lucide-react';
import { projects, keyResponsibilities } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Major Projects</h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Led and delivered large-scale renewable energy and water pumping projects for agricultural development across Sri Lanka
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  {project.category === 'solar' ? (
                    <div className="bg-amber-500 text-white p-2 rounded-lg shadow-lg">
                      <Sun className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="bg-blue-500 text-white p-2 rounded-lg shadow-lg">
                      <Zap className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-emerald-600 font-semibold mb-4">{project.subtitle}</p>

                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>

                <div className="flex items-start gap-2 text-slate-500 text-sm mb-4">
                  <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-xs leading-relaxed">{project.client}</span>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm font-semibold text-slate-700">Project Scope:</p>
                  <p className="text-sm text-slate-600 mt-1">{project.scope}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Key Responsibilities Across All Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {keyResponsibilities.map((responsibility, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-slate-100 leading-relaxed">{responsibility}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
