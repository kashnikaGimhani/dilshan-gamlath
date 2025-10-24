import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Education</h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl p-8 md:p-12 shadow-lg border border-emerald-100">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-emerald-500 rounded-xl shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">{education.year}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{education.degree}</h3>
                <p className="text-lg text-slate-700 mb-2">{education.field}</p>
                <p className="text-slate-600">{education.institution}</p>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Comprehensive education in electrical power systems, control systems, power
                    electronics, and electrical machine design, providing a strong foundation for
                    renewable energy and water pumping system projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
