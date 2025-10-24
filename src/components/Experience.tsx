import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div
                    className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${
                      index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3 md:justify-end">
                      <Briefcase className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                    </div>

                    <p className="text-emerald-600 font-semibold mb-2">{exp.company}</p>

                    <div className="flex items-center gap-2 text-slate-500 mb-4 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>

                    <ul className="space-y-2 text-slate-600 text-left">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-md transform md:-translate-x-1/2"></div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
