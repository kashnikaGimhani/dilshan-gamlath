import { Experience, Project, Skill, Education, ContactInfo } from '../types/portfolio';

export const contactInfo: ContactInfo = {
  email: 'dsgamlath93@gmail.com',
  phone: '0220 801 079',
  location: 'Wellington',
  linkedin: 'linkedin.com/in/dilshan-gamlath/'
};

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Head of Engineering Operations',
    company: 'Deep Tec Engineering (Pvt) Ltd',
    location: 'Sri Lanka',
    startDate: 'October 2024',
    endDate: 'August 2025',
    responsibilities: [
      'Managed engineering operations, including project planning, compliance, and resource coordination',
      'Supervised staff and ensured timely and safe delivery of projects',
      'Secured major contracts and contributed to expanding renewable energy and water pumping portfolios'
    ]
  },
  {
    id: '2',
    title: 'Business Development Manager',
    company: 'Deep Tec Engineering (Pvt) Ltd',
    location: 'Sri Lanka',
    startDate: 'October 2023',
    endDate: 'October 2024',
    responsibilities: [
      'Prepared proposals, pricing, and contract documentation',
      'Built and maintained strong customer relationships and identified new business opportunities',
      'Led large-scale projects from planning through completion, meeting all safety and compliance'
    ]
  },
  {
    id: '3',
    title: 'Electrical Engineer',
    company: 'Deep Tec Engineering (Pvt) Ltd',
    location: 'Sri Lanka',
    startDate: 'June 2020',
    endDate: 'October 2023',
    responsibilities: [
      'Designed and estimated solar and water pumping projects, including installation and commissioning',
      'Handled tendering processes and provided technical support to sales',
      'Reduced downtime by improving troubleshooting and maintenance response times'
    ]
  },
  {
    id: '4',
    title: 'Trainee Engineer',
    company: 'Analytical Instruments (Pvt) Ltd',
    location: 'Sri Lanka',
    startDate: 'January 2020',
    endDate: 'June 2020',
    responsibilities: [
      'Participated in on-site service visits and supported routine maintenance tasks',
      'Followed safety procedures and collaborated on technical tasks with the engineering team'
    ]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Electric Water Pumping Project',
    subtitle: 'Northern Province',
    duration: 'September 2024 – December 2024',
    client: 'Ministry of Agriculture, Sri Lanka (European Union Funded – ASMP Project)',
    description: 'Supplied, installed and commissioned 480 electric water pumping systems for papaya cultivation clusters under the Agriculture Sector Modernization Project (ASMP).',
    scope: '480 electric water pumping systems for agricultural irrigation',
    imageUrl: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'electric'
  },
  {
    id: '2',
    title: 'Solar Water Pumping Project',
    subtitle: 'Northern Province',
    duration: 'January 2024 – December 2024',
    client: 'Ministry of Agriculture, Sri Lanka (World Bank Funded – ASM Project)',
    description: 'Supplied, installed and commissioned 200 solar-powered water pumping systems for agricultural use under the Agriculture Sector Modernization Project (ASMP).',
    scope: '200 solar-powered water pumping systems',
    imageUrl: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'solar'
  },
  {
    id: '3',
    title: 'Solar Water Pumping Project',
    subtitle: 'North Central Province',
    duration: 'June 2023 – December 2024',
    client: 'Ministry of Agriculture, Sri Lanka (World Bank Funded – ASM Project)',
    description: 'Supplied, installed and commissioned 140 solar-powered water pumping systems for the dry chilli production program under the Agriculture Sector Modernization Project (ASMP).',
    scope: '140 solar-powered water pumping systems for dry chilli production',
    imageUrl: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'solar'
  }
];

export const skills: Skill[] = [
  { name: 'Electrical Power Systems & Engineering', category: 'technical' },
  { name: 'Design & Estimation', category: 'technical' },
  { name: 'Water Pumping Systems (Design, Installation & Maintenance)', category: 'domain' },
  { name: 'Project Planning & Tender Documentation', category: 'management' },
  { name: 'Client Communication & Relationship Management', category: 'management' },
  { name: 'Critical Thinking & Problem Solving', category: 'management' },
  { name: 'Leadership & Team Supervision', category: 'management' }
];

export const education: Education = {
  degree: 'National Diploma in Engineering Sciences',
  institution: 'Institute of Engineering Technology (IET)',
  year: '2020',
  field: 'Electrical Power'
};

export const interests = [
  'Renewable Energy Innovation',
  'Smart Agriculture Solutions',
  'Electronic Music Production'
];

export const summary = "Electrical Engineer with a strong background in design, estimation, and project management within the solar and water pumping sectors. Skilled in preparing tender documentation, pricing, and overseeing major projects. Proven ability to deliver compliant, customer focused solutions while maintaining high standards of safety, quality, and efficiency.";

export const keyResponsibilities = [
  'Managed projects end-to-end from tendering and procurement to installation, commissioning, and delivery',
  'Supervised and coordinated multiple site teams, ensuring safety, quality, and on-time completion',
  'Maintained effective communication with clients, suppliers, and field staff to ensure smooth operations and high customer satisfaction'
];
