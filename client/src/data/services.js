import {
  FiCode,
  FiSmartphone,
  FiCloud,
  FiCpu,
  FiShoppingCart,
  FiLayout,
  FiDatabase,
  FiShield,
} from 'react-icons/fi'

export const services = [
  {
    slug: 'web-development',
    icon: FiCode,
    title: 'Web Development',
    short: 'Fast, scalable web apps built with the MERN stack and modern tooling.',
    description:
      'From marketing sites to complex SaaS platforms, we craft high-performance web applications using React, Node.js, Express and MongoDB with clean, maintainable code.',
    features: ['MERN stack apps', 'Progressive Web Apps', 'API development', 'Performance & SEO'],
  },
  {
    slug: 'mobile-app-development',
    icon: FiSmartphone,
    title: 'Mobile App Development',
    short: 'Native-quality iOS & Android apps from a single codebase.',
    description:
      'We design and build cross-platform mobile apps with React Native and Flutter, plus native development when you need it — beautiful, fast, and store-ready.',
    features: ['React Native & Flutter', 'iOS & Android', 'Offline-first', 'App Store deployment'],
  },
  {
    slug: 'cloud-devops',
    icon: FiCloud,
    title: 'Cloud & DevOps',
    short: 'Reliable cloud infrastructure, CI/CD and effortless scaling.',
    description:
      'Ship faster with automated pipelines, containerized deployments and cloud-native architecture on AWS, Azure and Google Cloud.',
    features: ['AWS / Azure / GCP', 'Docker & Kubernetes', 'CI/CD pipelines', 'Monitoring & scaling'],
  },
  {
    slug: 'ai-solutions',
    icon: FiCpu,
    title: 'AI & Automation',
    short: 'Practical AI, chatbots and automation that save real time.',
    description:
      'Integrate LLMs, recommendation engines, computer vision and workflow automation to unlock efficiency and new product capabilities.',
    features: ['LLM integrations', 'Chatbots & assistants', 'Data pipelines', 'Process automation'],
  },
  {
    slug: 'ecommerce',
    icon: FiShoppingCart,
    title: 'E-Commerce Solutions',
    short: 'Conversion-focused online stores that scale with you.',
    description:
      'Custom storefronts, headless commerce and integrations with Shopify, Stripe and payment gateways — optimized for speed and sales.',
    features: ['Headless commerce', 'Payment integrations', 'Inventory systems', 'Checkout optimization'],
  },
  {
    slug: 'ui-ux-design',
    icon: FiLayout,
    title: 'UI/UX Design',
    short: 'Delightful, accessible interfaces users love.',
    description:
      'Research-driven product design, wireframes, prototypes and pixel-perfect design systems that translate directly into engineering.',
    features: ['User research', 'Wireframing & prototyping', 'Design systems', 'Accessibility'],
  },
  {
    slug: 'custom-software',
    icon: FiDatabase,
    title: 'Custom Software',
    short: 'Bespoke enterprise software tailored to your workflows.',
    description:
      'ERP, CRM, dashboards and internal tools engineered around your exact business processes and integrated with your existing systems.',
    features: ['ERP & CRM', 'Dashboards & BI', 'System integrations', 'Legacy modernization'],
  },
  {
    slug: 'cybersecurity',
    icon: FiShield,
    title: 'Security & QA',
    short: 'Robust testing and security to protect your business.',
    description:
      'Automated testing, code audits, penetration testing and secure architecture to keep your applications reliable and safe.',
    features: ['Automated testing', 'Security audits', 'Penetration testing', 'Compliance'],
  },
]
