import { Experience, Project, Skill, Education, ContactInfo } from '../types/portfolio';

export const contactInfo: ContactInfo = {
  email: 'dsgamlath93@gmail.com',
  phone: '0220 801 079',
  location: 'Wellington, New Zealand',
  linkedin: 'linkedin.com/in/dilshan-gamlath/',
  cv: "/assets/cv/Dilshan-CV.pdf",
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
      'Designed and managed solar and water pumping projects from estimation to commissioning.',
      'Prepared tender documents and handled project costing and technical submissions.',
      'Improved troubleshooting and maintenance response, reducing downtime.',
      'Developed tailored water pumping solutions to meet diverse client requirements.',
      'Provided technical support for sales and client discussions.'
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
      'Assisted in on-site service visits and routine maintenance work.',
      'Supported the engineering team in technical operations and troubleshooting.',
      'Followed safety procedures and adhered to workplace standards.',
      'Gained hands-on experience in practical engineering tasks.'
    ]
  }
];

export const projects: Project[] = [
  {
    id: '2',
    title: 'Solar Water Pumping Project',
    subtitle: 'Northern Province, Sri Lanka',
    duration: 'January 2024 – December 2024',
    client: 'Ministry of Agriculture, Sri Lanka (World Bank Funded – ASM Project)',
    description: 'Supplied, installed and commissioned 200 solar-powered water pumping systems for agricultural use under the Agriculture Sector Modernization Project (ASMP).',
    scope: '200 solar-powered water pumping systems',
    category: 'solarw',
    images: [
        '/assets/images/P2Image1.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P2Image2.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P2Image3.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P2Image4.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
  },
  {
    id: '1',
    title: 'Electric Water Pumping Project',
    subtitle: 'Northern Province, Sri Lanka',
    duration: 'September 2024 – December 2024',
    client: 'Ministry of Agriculture, Sri Lanka (European Union Funded – ASM Project)',
    description: 'Supplied, installed and commissioned 480 electric water pumping systems for agricultural purposes under the Agriculture Sector Modernization Project (ASMP).',
    scope: '480 electric water pumping systems for agricultural irrigation',
    category: 'electric',
    images: [
        '/assets/images/P1Image1.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P1Image2.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P1Image3.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
  },
  {
    id: '3',
    title: 'On-Grid Solar PV System',
    subtitle: 'Kurunegala, Sri Lanka',
    duration: 'February 2025 – April 2025',
    client: 'EFI Technics',
    description: 'Supplied, installed, and commissioned a 150 kW industrial on-grid solar PV system for EFI Technics to support commercial power generation and reduce dependence on the national grid. The system was engineered for high efficiency and seamless integration with existing electrical infrastructure, enhancing long-term sustainability.',
    scope: '150 kW on-grid solar PV system for industrial-scale commercial power generation and sustainability.',
    category: 'solar',
    images: [
        '/assets/images/P3Image1.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P3Image2.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P3Image3.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P3Image4.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
  },
  {
    id: '5',
    title: 'Solar Water Pumping Project',
    subtitle: 'North Central Province, Sri Lanka',
    duration: 'June 2023 – December 2024',
    client: 'Ministry of Agriculture, Sri Lanka (World Bank Funded – ASM Project)',
    description: 'Supplied, installed and commissioned 140 solar-powered water pumping systems for the dry chilli production program under the Agriculture Sector Modernization Project (ASMP).',
    scope: '140 solar-powered water pumping systems for dry chilli production',
    category: 'solarw',
    images: [
        '/assets/images/P5Image1.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P5Image2.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P5Image3.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
  },
  {
    id: '4',
    title: 'Electric Water Pumping Project',
    subtitle: 'Across Sri Lanka (Rural Areas)',
    duration: 'January 2025 – May 2025',
    client: 'Department of National Community Water Supply, Sri Lanka',
    description: 'Supplied, installed, and commissioned over 50 electric water pumping systems across rural regions throughout Sri Lanka to provide reliable water access for drinking and daily use in communities with limited or no water supply.',
    scope: '50+ electric water pumping systems for rural community water supply projects.',
    category: 'electric',
    images: [
        '/assets/images/P4Image1.png?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P4Image2.png?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P4Image3.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
  },
  {
    id: '6',
    title: 'On-Grid Solar PV System',
    subtitle: 'Weliwita, Sri Lanka',
    duration: 'March 2024 – April 2024',
    client: 'Weliwita Sanasa Bank',
    description: 'Supplied, installed, and commissioned a 30 kW on-grid solar PV system for Weliwita Sanasa Bank to reduce grid electricity dependency and promote clean energy usage within the institution. The system was designed to optimize power generation efficiency and ensure seamless integration with the existing electrical infrastructure.',
    scope: '30 kW on-grid solar PV system for commercial power generation and sustainability.',
    category: 'solar',
    images: [
        '/assets/images/P6Image1.png?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P6Image2.png?auto=compress&cs=tinysrgb&w=1200',
        '/assets/images/P6Image3.png?auto=compress&cs=tinysrgb&w=1200'
      ],
  }
];

export const skills: Skill[] = [
  { name: 'Solar and electric water pumping systems (design, installation & maintenance)', category: 'technical' },
  { name: 'Solar on-grid and off-grid systems (design, installation & maintenance)', category: 'technical' },
  { name: 'Electrical control panels and motor control panels', category: 'technical' },
  { name: 'Electrical distribution panels, switchboards, and protection systems', category: 'technical' },
  { name: 'AC and submersible motor selection, wiring, and troubleshooting', category: 'technical' },
  { name: 'Troubleshooting and preventive maintenance', category: 'technical' },

  { name: 'Solar and electric water pumping systems for renewable energy applications', category: 'domain' },
  { name: 'Solar on-grid and off-grid systems for domestic and commercial operations', category: 'domain' },
  { name: 'Hands-on field experience with large-scale renewable and electrical installations', category: 'domain' },
  { name: 'Tender and procurement processes for large-scale projects', category: 'domain' },
  { name: 'Energy efficiency and sustainable engineering solutions', category: 'domain' },

  { name: 'Project supervision and resource coordination', category: 'management' },
  { name: 'Client Communication & Relationship Management', category: 'management' },
  { name: 'Cross-functional team leadership and staff training', category: 'management' },
  { name: 'Contract negotiation and client relationship management', category: 'management' },
  { name: 'Strategic business development and proposal preparation', category: 'management' }
]

export const education: Education = {
  degree: 'National Diploma in Engineering Sciences',
  institution: 'Institute of Engineering Technology (IET)',
  year: '2020',
  field: 'Electrical Power'
};

export const interests = [
  'Renewable Energy Solutions',
  'Smart Agriculture Solutions',
  'Sustainable Engineering & Technology',
  'Electronic Music Production'
];

export const summary = "Electrical Engineer with a strong background in design, estimation, and project management across solar and electric water pumping systems as well as solar on-grid and off-grid power systems. Skilled in preparing tender documentation, pricing, and overseeing major projects. Proven ability to deliver compliant, customer focused solutions while maintaining high standards of safety, quality, and efficiency.";

export const keyResponsibilities = [
  'Managed projects end-to-end from tendering and procurement to installation, commissioning, and delivery',
  'Supervised and coordinated multiple site teams, ensuring safety, quality, and on-time completion',
  'Maintained effective communication with clients, suppliers, and field staff to ensure smooth operations and high customer satisfaction'
];
