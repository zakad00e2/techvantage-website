/**
 * Services Content
 * Edit this file to add/modify/remove services.
 */

export interface Service {
  slug: string;
  icon: string;
  title: { en: string; ar: string };
  shortDescription: { en: string; ar: string };
  longDescription: { en: string; ar: string };
  features: { en: string[]; ar: string[] };
  image: string;
  category: 'digital' | 'consulting' | 'legal';
}

const services: Service[] = [
  {
    slug: 'custom-software-development',
    icon: '💻',
    title: {
      en: 'Custom Software Development',
      ar: 'تطوير البرمجيات المخصصة',
    },
    shortDescription: {
      en: 'Bespoke software solutions engineered for your unique business requirements, from enterprise platforms to mobile applications.',
      ar: 'حلول برمجية مخصصة مصممة لمتطلبات عملك الفريدة، من منصات المؤسسات إلى تطبيقات الجوال.',
    },
    longDescription: {
      en: 'Our custom software development services deliver tailored solutions that perfectly align with your business processes. We utilize agile methodologies, modern tech stacks, and rigorous quality assurance to build scalable, secure, and high-performance applications. From initial concept to deployment and ongoing support, our team ensures every solution drives measurable business value.',
      ar: 'تقدم خدمات تطوير البرمجيات المخصصة لدينا حلولاً مصممة خصيصاً تتوافق تماماً مع عمليات عملك. نستخدم منهجيات رشيقة وتقنيات حديثة وضمان جودة صارم لبناء تطبيقات قابلة للتوسع وآمنة وعالية الأداء.',
    },
    features: {
      en: [
        'Full-stack web application development',
        'Native & cross-platform mobile apps',
        'API design & microservices architecture',
        'Legacy system modernization',
        'Quality assurance & automated testing',
        'DevOps & CI/CD pipeline setup',
      ],
      ar: [
        'تطوير تطبيقات الويب الشاملة',
        'تطبيقات الجوال الأصلية ومتعددة المنصات',
        'تصميم واجهات API وبنية الخدمات المصغرة',
        'تحديث الأنظمة القديمة',
        'ضمان الجودة والاختبار الآلي',
        'إعداد DevOps وخطوط CI/CD',
      ],
    },
    image: '/images/services/software-dev.jpg',
    category: 'digital',
  },
  {
    slug: 'cloud-infrastructure',
    icon: '☁️',
    title: {
      en: 'Cloud Infrastructure & DevOps',
      ar: 'البنية التحتية السحابية و DevOps',
    },
    shortDescription: {
      en: 'Scalable cloud solutions with automated infrastructure management, ensuring reliability, security, and cost efficiency.',
      ar: 'حلول سحابية قابلة للتوسع مع إدارة بنية تحتية آلية، تضمن الموثوقية والأمان وكفاءة التكلفة.',
    },
    longDescription: {
      en: 'Transform your infrastructure with our cloud-first approach. We design, migrate, and manage cloud environments on AWS, Azure, and GCP, implementing best practices for security, scalability, and cost optimization. Our DevOps practices ensure rapid, reliable deployments with comprehensive monitoring.',
      ar: 'حوّل بنيتك التحتية مع نهجنا السحابي أولاً. نصمم وننقل وندير البيئات السحابية على AWS و Azure و GCP، مع تطبيق أفضل الممارسات للأمان والتوسع وتحسين التكلفة.',
    },
    features: {
      en: [
        'Cloud migration & strategy consulting',
        'Infrastructure as Code (Terraform, Pulumi)',
        'Kubernetes & container orchestration',
        'CI/CD pipeline automation',
        '24/7 monitoring & incident response',
        'Cost optimization & governance',
      ],
      ar: [
        'استشارات الهجرة السحابية والاستراتيجية',
        'البنية التحتية كرمز (Terraform, Pulumi)',
        'Kubernetes وتنسيق الحاويات',
        'أتمتة خطوط CI/CD',
        'مراقبة واستجابة للحوادث على مدار الساعة',
        'تحسين التكلفة والحوكمة',
      ],
    },
    image: '/images/services/cloud.jpg',
    category: 'digital',
  },
  {
    slug: 'cybersecurity',
    icon: '🔒',
    title: {
      en: 'Cybersecurity Solutions',
      ar: 'حلول الأمن السيبراني',
    },
    shortDescription: {
      en: 'Comprehensive security services protecting your digital assets with advanced threat detection, compliance, and incident response.',
      ar: 'خدمات أمنية شاملة تحمي أصولك الرقمية مع كشف التهديدات المتقدم والامتثال والاستجابة للحوادث.',
    },
    longDescription: {
      en: 'Protect your organization with our multi-layered cybersecurity approach. We provide vulnerability assessments, penetration testing, security architecture design, and 24/7 security operations center (SOC) services. Our team ensures compliance with regional and international standards.',
      ar: 'احمِ مؤسستك مع نهجنا الأمني متعدد الطبقات. نقدم تقييمات الثغرات واختبارات الاختراق وتصميم بنية الأمان وخدمات مركز عمليات الأمان على مدار الساعة.',
    },
    features: {
      en: [
        'Vulnerability assessment & penetration testing',
        'Security architecture & design',
        'Security Operations Center (SOC)',
        'Compliance & regulatory consulting',
        'Employee security awareness training',
        'Incident response & forensics',
      ],
      ar: [
        'تقييم الثغرات واختبار الاختراق',
        'هندسة وتصميم الأمان',
        'مركز عمليات الأمان (SOC)',
        'استشارات الامتثال والتنظيم',
        'تدريب الموظفين على الوعي الأمني',
        'الاستجابة للحوادث والتحقيق الجنائي',
      ],
    },
    image: '/images/services/cybersecurity.jpg',
    category: 'digital',
  },
  {
    slug: 'data-analytics',
    icon: '📊',
    title: {
      en: 'Data Analytics & AI',
      ar: 'تحليلات البيانات والذكاء الاصطناعي',
    },
    shortDescription: {
      en: 'Turn your data into actionable insights with advanced analytics, machine learning, and AI-powered decision-making tools.',
      ar: 'حوّل بياناتك إلى رؤى قابلة للتنفيذ مع التحليلات المتقدمة والتعلم الآلي وأدوات اتخاذ القرار المدعومة بالذكاء الاصطناعي.',
    },
    longDescription: {
      en: 'Unlock the power of your data with our comprehensive analytics and AI services. From data warehousing and ETL pipelines to predictive modeling and natural language processing, we help organizations make smarter, faster decisions backed by data-driven insights.',
      ar: 'أطلق قوة بياناتك مع خدمات التحليلات والذكاء الاصطناعي الشاملة. من مستودعات البيانات وخطوط ETL إلى النمذجة التنبؤية ومعالجة اللغة الطبيعية.',
    },
    features: {
      en: [
        'Data warehouse & lake architecture',
        'Business intelligence dashboards',
        'Predictive analytics & ML models',
        'Natural language processing',
        'Computer vision solutions',
        'AI strategy & implementation',
      ],
      ar: [
        'بنية مستودع وبحيرة البيانات',
        'لوحات ذكاء الأعمال',
        'التحليلات التنبؤية ونماذج التعلم الآلي',
        'معالجة اللغة الطبيعية',
        'حلول الرؤية الحاسوبية',
        'استراتيجية وتنفيذ الذكاء الاصطناعي',
      ],
    },
    image: '/images/services/analytics.jpg',
    category: 'digital',
  },
  {
    slug: 'digital-transformation',
    icon: '🚀',
    title: {
      en: 'Digital Transformation Consulting',
      ar: 'استشارات التحول الرقمي',
    },
    shortDescription: {
      en: 'Strategic consulting to guide your organization through digital transformation with clear roadmaps and measurable outcomes.',
      ar: 'استشارات استراتيجية لتوجيه مؤسستك عبر التحول الرقمي مع خرائط طريق واضحة ونتائج قابلة للقياس.',
    },
    longDescription: {
      en: 'Our digital transformation consulting helps organizations navigate the complexities of modernization. We assess your current state, define a clear vision, and create actionable roadmaps that align technology investments with business outcomes.',
      ar: 'تساعد استشارات التحول الرقمي لدينا المؤسسات على التنقل في تعقيدات التحديث. نقيم حالتك الحالية ونحدد رؤية واضحة وننشئ خرائط طريق قابلة للتنفيذ.',
    },
    features: {
      en: [
        'Digital maturity assessment',
        'Technology strategy & roadmapping',
        'Process automation & optimization',
        'Change management & adoption',
        'Innovation workshops & design thinking',
        'ROI measurement & KPI tracking',
      ],
      ar: [
        'تقييم النضج الرقمي',
        'استراتيجية التقنية وخارطة الطريق',
        'أتمتة وتحسين العمليات',
        'إدارة التغيير والتبني',
        'ورش الابتكار والتفكير التصميمي',
        'قياس العائد على الاستثمار وتتبع مؤشرات الأداء',
      ],
    },
    image: '/images/services/transformation.jpg',
    category: 'consulting',
  },
  {
    slug: 'ux-ui-design',
    icon: '🎨',
    title: {
      en: 'UX/UI Design',
      ar: 'تصميم تجربة وواجهة المستخدم',
    },
    shortDescription: {
      en: 'User-centered design services that create intuitive, engaging, and accessible digital experiences across all platforms.',
      ar: 'خدمات تصميم تركز على المستخدم تنشئ تجارب رقمية بديهية وجذابة وسهلة الوصول عبر جميع المنصات.',
    },
    longDescription: {
      en: 'Our design team creates exceptional user experiences through research-driven design processes. We combine aesthetics with functionality to deliver interfaces that delight users and drive engagement, from wireframes to polished prototypes and design systems.',
      ar: 'يصنع فريق التصميم لدينا تجارب مستخدم استثنائية من خلال عمليات تصميم قائمة على البحث. نجمع بين الجماليات والوظائف لتقديم واجهات تسعد المستخدمين وتدفع التفاعل.',
    },
    features: {
      en: [
        'User research & persona development',
        'Information architecture',
        'Wireframing & interactive prototyping',
        'Visual design & brand systems',
        'Usability testing & optimization',
        'Design system development',
      ],
      ar: [
        'بحث المستخدم وتطوير الشخصيات',
        'هندسة المعلومات',
        'الإطارات السلكية والنماذج التفاعلية',
        'التصميم البصري وأنظمة العلامة التجارية',
        'اختبار قابلية الاستخدام والتحسين',
        'تطوير نظام التصميم',
      ],
    },
    image: '/images/services/design.jpg',
    category: 'digital',
  },
];

/**
 * Get all services, optionally filtered by category.
 */
export function getServices(category?: Service['category']): Service[] {
  if (category) return services.filter((s) => s.category === category);
  return services;
}

/**
 * Get a single service by slug.
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
