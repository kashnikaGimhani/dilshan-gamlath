import { Wrench, Users, Lightbulb } from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const technicalSkills = skills.filter((s) => s.category === 'technical');
  const domainSkills = skills.filter((s) => s.category === 'domain');
  const managementSkills = skills.filter((s) => s.category === 'management');

  const SkillCategory = ({
    title,
    icon: Icon,
    skills,
    bgColor,
    iconColor,
  }: {
    title: string;
    icon: any;
    skills: typeof technicalSkills;
    bgColor: string;
    iconColor: string;
  }) => (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 ${bgColor} rounded-lg`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-[0.7rem] w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
            <span className="text-slate-700 leading-relaxed">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory
            title="Technical Skills"
            icon={Wrench}
            skills={technicalSkills}
            bgColor="bg-blue-100"
            iconColor="text-blue-600"
          />
          <SkillCategory
            title="Domain Expertise"
            icon={Lightbulb}
            skills={domainSkills}
            bgColor="bg-amber-100"
            iconColor="text-amber-600"
          />
          <SkillCategory
            title="Management Skills"
            icon={Users}
            skills={managementSkills}
            bgColor="bg-emerald-100"
            iconColor="text-emerald-600"
          />
        </div>
      </div>
    </section>
  );
}
