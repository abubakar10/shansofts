import {
  FiCode,
  FiSmartphone,
  FiCloud,
  FiCpu,
  FiShoppingCart,
  FiLayout,
  FiDatabase,
  FiShield,
  FiLayers,
  FiGlobe,
  FiMonitor,
  FiSettings,
  FiLock,
  FiZap,
  FiServer,
  FiTrendingUp,
  FiHeart,
  FiTruck,
  FiBookOpen,
  FiHome,
  FiRadio,
} from 'react-icons/fi'

export const images = {
  hero: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
  case1: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
  case2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  case3: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
  mosaic1: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  mosaic2: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  mosaic3: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  mosaic4: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
  mosaic5: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
  mosaic6: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  mosaic7: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  success: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80',
  team1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  team2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  testimonial1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
  testimonial2: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
  testimonial3: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
  industry: {
    healthcare: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    finance: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    education: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    logistics: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    realestate: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    manufacturing: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    media: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
  },
}

export const trustServices = [
  {
    icon: FiCode,
    title: 'Custom Software',
    description: 'Bespoke platforms engineered around your workflows, from MVPs to enterprise systems.',
  },
  {
    icon: FiSmartphone,
    title: 'Web & Mobile Apps',
    description: 'High-performance apps for web, iOS and Android with clean UX and reliable backends.',
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps',
    description: 'Secure cloud architecture, CI/CD pipelines and infrastructure that scales with demand.',
  },
  {
    icon: FiCpu,
    title: 'AI Solutions',
    description: 'Practical AI integrations, automation and intelligent features that create real ROI.',
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Research-led product design that feels premium, accessible and conversion-focused.',
  },
  {
    icon: FiShield,
    title: 'Security & QA',
    description: 'Testing, audits and hardened architecture so your product stays reliable and safe.',
  },
]

export const capabilities = [
  { icon: FiMonitor, title: 'App Development' },
  { icon: FiGlobe, title: 'Web Platforms' },
  { icon: FiCloud, title: 'Cloud Solutions' },
  { icon: FiLock, title: 'Cybersecurity' },
  { icon: FiCpu, title: 'AI & ML' },
  { icon: FiDatabase, title: 'Data Engineering' },
  { icon: FiShoppingCart, title: 'E-Commerce' },
  { icon: FiSettings, title: 'System Integration' },
  { icon: FiLayers, title: 'SaaS Products' },
  { icon: FiZap, title: 'Automation' },
]

export const mosaicItems = [
  { title: 'cPanel For Less', label: 'SaaS', image: images.mosaic1, featured: true },
  { title: 'HRM System', label: 'Enterprise', image: images.mosaic2 },
  { title: 'Sales Dashboard', label: 'Analytics', image: images.mosaic3 },
  { title: 'Property Dealer', label: 'Real Estate', image: images.mosaic4 },
  { title: 'Moneda Capital', label: 'Finance', image: images.mosaic5 },
  { title: 'ToeFit Store', label: 'E-Commerce', image: images.mosaic6 },
  { title: 'ICT Solutions', label: 'Corporate', image: images.mosaic7 },
]

export const caseStudies = [
  {
    title: 'Licensing SaaS that scales globally',
    blurb: 'Automated cPanel license sales, payments and partner workflows for hosting providers worldwide.',
    image: images.case1,
    href: '/portfolio',
  },
  {
    title: 'Enterprise HR, unified in one platform',
    blurb: 'Attendance, leave, expenses and reporting consolidated for faster operations and clearer oversight.',
    image: images.case2,
    href: '/portfolio',
  },
  {
    title: 'Dashboards that drive decisions',
    blurb: 'Interactive sales and finance analytics that turn raw data into actionable business intelligence.',
    image: images.case3,
    href: '/portfolio',
  },
]

export const industries = [
  { title: 'Healthcare', image: images.industry.healthcare, icon: FiHeart },
  { title: 'Finance', image: images.industry.finance, icon: FiTrendingUp },
  { title: 'Retail', image: images.industry.retail, icon: FiShoppingCart },
  { title: 'Education', image: images.industry.education, icon: FiBookOpen },
  { title: 'Logistics', image: images.industry.logistics, icon: FiTruck },
  { title: 'Real Estate', image: images.industry.realestate, icon: FiHome },
  { title: 'Manufacturing', image: images.industry.manufacturing, icon: FiServer },
  { title: 'Media', image: images.industry.media, icon: FiRadio },
]

export const excellenceSteps = [
  {
    title: 'Discovery & Strategy',
    description: 'We align on goals, constraints and success metrics before a single screen is designed.',
  },
  {
    title: 'Design Systems',
    description: 'Clear UX, prototypes and visual systems so stakeholders approve with confidence.',
  },
  {
    title: 'Agile Delivery',
    description: 'Short sprints, transparent demos and continuous feedback keep momentum high.',
  },
  {
    title: 'Launch & Optimize',
    description: 'Hardened releases, monitoring and iteration so the product keeps improving after go-live.',
  },
]

export const videoTestimonials = [
  { name: 'James Carter', role: 'CEO, Northpeak', image: images.testimonial1 },
  { name: 'Elena Brooks', role: 'Founder, Lumen Soft', image: images.testimonial2 },
  { name: 'Omar Siddiqui', role: 'CTO, Stackline', image: images.testimonial3 },
]

export const leaders = [
  {
    name: 'Malik Abubakar',
    role: 'Founder & Strategy Lead',
    image: images.team1,
  },
  {
    name: 'Product Leadership',
    role: 'Delivery & Engineering',
    image: images.team2,
  },
]

export const packages = [
  {
    title: 'Starter Build',
    price: 'From $2,500',
    description: 'Landing pages, corporate sites and focused MVPs with clean design and fast delivery.',
    features: ['Responsive website', 'Basic SEO setup', 'Contact & lead forms', '2 revision rounds'],
  },
  {
    title: 'Growth Product',
    price: 'From $8,000',
    description: 'Full-stack web or mobile products with dashboards, auth and scalable APIs.',
    features: ['Custom UI/UX', 'MERN / mobile stack', 'Admin panel', 'Cloud deployment'],
  },
  {
    title: 'Enterprise Partner',
    price: 'Custom',
    description: 'Dedicated squad for complex platforms, integrations and ongoing product ownership.',
    features: ['Dedicated team', 'Architecture & security', 'Integrations', 'SLA support'],
  },
]

export const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most MVPs ship in 4–8 weeks. Larger platforms depend on scope, but we share a clear timeline after discovery.',
  },
  {
    q: 'Do you work with startups and enterprises?',
    a: 'Yes. We partner with early-stage founders and established teams that need reliable engineering and design.',
  },
  {
    q: 'What tech stack do you use?',
    a: 'We specialize in the MERN stack, React Native, modern cloud services, and the tools that best fit your product.',
  },
  {
    q: 'Can you take over an existing codebase?',
    a: 'Absolutely. We audit, stabilize and extend existing products — including legacy systems that need modernization.',
  },
  {
    q: 'How do we get started?',
    a: 'Share your goals via the contact form. We’ll schedule a discovery call and propose a clear next step.',
  },
]

export const homeStats = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '60+', label: 'Happy Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
]
