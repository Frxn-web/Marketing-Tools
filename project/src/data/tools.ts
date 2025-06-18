export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  rating: number;
  pricing: string;
  features: string[];
  website: string;
  logo: string;
}

export const tools: Tool[] = [
  // Email Marketing Tools
  {
    id: 1,
    name: "Mailchimp",
    description: "Plataforma de email marketing todo-en-uno con herramientas de automatización, segmentación avanzada y análisis detallados.",
    category: "Email Marketing",
    rating: 4.5,
    pricing: "Desde gratis hasta $299/mes",
    features: ["Automatización de emails", "Segmentación avanzada", "A/B Testing", "Análisis detallados"],
    website: "https://mailchimp.com",
    logo: "MC"
  },
  {
    id: 2,
    name: "ConvertKit",
    description: "Herramienta de email marketing diseñada especialmente para creadores de contenido y bloggers.",
    category: "Email Marketing",
    rating: 4.7,
    pricing: "Desde $29/mes",
    features: ["Secuencias automáticas", "Landing pages", "Formularios personalizables", "Tagging avanzado"],
    website: "https://convertkit.com",
    logo: "CK"
  },
  {
    id: 3,
    name: "ActiveCampaign",
    description: "Plataforma de automatización de marketing que combina email marketing, CRM y mensajería.",
    category: "Email Marketing",
    rating: 4.6,
    pricing: "Desde $15/mes",
    features: ["Automatización visual", "CRM integrado", "Segmentación dinámica", "SMS marketing"],
    website: "https://activecampaign.com",
    logo: "AC"
  },
  {
    id: 4,
    name: "GetResponse",
    description: "Solución completa de marketing online con email marketing, webinars y páginas de aterrizaje.",
    category: "Email Marketing",
    rating: 4.4,
    pricing: "Desde $19/mes",
    features: ["Email marketing", "Webinars", "Landing pages", "Marketing automation"],
    website: "https://getresponse.com",
    logo: "GR"
  },
  {
    id: 5,
    name: "Constant Contact",
    description: "Plataforma de email marketing fácil de usar con plantillas profesionales y soporte excepcional.",
    category: "Email Marketing",
    rating: 4.3,
    pricing: "Desde $12/mes",
    features: ["Plantillas profesionales", "Gestión de contactos", "Automatización", "Reporting"],
    website: "https://constantcontact.com",
    logo: "CC"
  },

  // SEO Tools
  {
    id: 6,
    name: "SEMrush",
    description: "Suite completa de SEO y marketing digital con análisis de competencia, investigación de palabras clave y auditorías.",
    category: "SEO",
    rating: 4.8,
    pricing: "Desde $119/mes",
    features: ["Análisis de competencia", "Keyword research", "Auditoría SEO", "Seguimiento de rankings"],
    website: "https://semrush.com",
    logo: "SR"
  },
  {
    id: 7,
    name: "Ahrefs",
    description: "Herramientas profesionales de SEO para análisis de backlinks, investigación de palabras clave y monitoreo.",
    category: "SEO",
    rating: 4.7,
    pricing: "Desde $99/mes",
    features: ["Análisis de backlinks", "Site explorer", "Keywords explorer", "Rank tracker"],
    website: "https://ahrefs.com",
    logo: "AH"
  },
  {
    id: 8,
    name: "Moz Pro",
    description: "Software de SEO con herramientas para mejorar tu ranking en buscadores y obtener más tráfico.",
    category: "SEO",
    rating: 4.5,
    pricing: "Desde $99/mes",
    features: ["Site crawl", "Keyword research", "Rank tracking", "Link research"],
    website: "https://moz.com",
    logo: "MZ"
  },
  {
    id: 9,
    name: "Screaming Frog",
    description: "Spider SEO que rastrea sitios web para encontrar errores técnicos y problemas de SEO.",
    category: "SEO",
    rating: 4.6,
    pricing: "Gratis / £149 año",
    features: ["Crawling técnico", "Análisis de metadatos", "Detección de errores", "Análisis de redirects"],
    website: "https://screamingfrog.co.uk",
    logo: "SF"
  },
  {
    id: 10,
    name: "Google Search Console",
    description: "Herramienta gratuita de Google para monitorear y optimizar el rendimiento de tu sitio en búsquedas.",
    category: "SEO",
    rating: 4.4,
    pricing: "Gratis",
    features: ["Monitoreo de performance", "Análisis de queries", "Indexación", "Core Web Vitals"],
    website: "https://search.google.com/search-console",
    logo: "GSC"
  },

  // Social Media Tools
  {
    id: 11,
    name: "Hootsuite",
    description: "Plataforma de gestión de redes sociales para programar, publicar y analizar contenido en múltiples canales.",
    category: "Redes Sociales",
    rating: 4.3,
    pricing: "Desde $49/mes",
    features: ["Programación de posts", "Gestión multicanal", "Analytics", "Colaboración en equipo"],
    website: "https://hootsuite.com",
    logo: "HS"
  },
  {
    id: 12,
    name: "Buffer",
    description: "Herramienta simple y poderosa para programar y analizar tus publicaciones en redes sociales.",
    category: "Redes Sociales",
    rating: 4.5,
    pricing: "Desde $6/mes",
    features: ["Programación intuitiva", "Analytics", "Gestión de equipos", "Browser extension"],
    website: "https://buffer.com",
    logo: "BF"
  },
  {
    id: 13,
    name: "Sprout Social",
    description: "Plataforma completa de gestión de redes sociales con CRM social y análisis avanzados.",
    category: "Redes Sociales",
    rating: 4.6,
    pricing: "Desde $99/mes",
    features: ["CRM social", "Engagement tools", "Analytics avanzados", "Collaboration"],
    website: "https://sproutsocial.com",
    logo: "SS"
  },
  {
    id: 14,
    name: "Later",
    description: "Planificador visual de redes sociales especializado en Instagram, Facebook, Twitter y Pinterest.",
    category: "Redes Sociales",
    rating: 4.4,
    pricing: "Desde gratis hasta $80/mes",
    features: ["Planificador visual", "Auto-posting", "User-generated content", "Link in bio"],
    website: "https://later.com",
    logo: "LT"
  },
  {
    id: 15,
    name: "Canva",
    description: "Plataforma de diseño gráfico con plantillas para crear contenido visual profesional para redes sociales.",
    category: "Redes Sociales",
    rating: 4.7,
    pricing: "Gratis / $15/mes Pro",
    features: ["Plantillas profesionales", "Editor drag-and-drop", "Brand kit", "Colaboración"],
    website: "https://canva.com",
    logo: "CV"
  },

  // Analytics Tools
  {
    id: 16,
    name: "Google Analytics",
    description: "Plataforma gratuita de análisis web que proporciona estadísticas detalladas sobre el tráfico del sitio web.",
    category: "Analytics",
    rating: 4.5,
    pricing: "Gratis / GA360 desde $150k/año",
    features: ["Análisis de tráfico", "Conversiones", "Audiencias", "Informes personalizados"],
    website: "https://analytics.google.com",
    logo: "GA"
  },
  {
    id: 17,
    name: "Hotjar",
    description: "Herramienta de análisis de comportamiento de usuarios con heatmaps, grabaciones de sesión y encuestas.",
    category: "Analytics",
    rating: 4.6,
    pricing: "Desde gratis hasta $589/mes",
    features: ["Heatmaps", "Session recordings", "Surveys", "Funnels"],
    website: "https://hotjar.com",
    logo: "HJ"
  },
  {
    id: 18,
    name: "Mixpanel",
    description: "Plataforma de análisis de eventos para rastrear acciones de usuarios y optimizar el embudo de conversión.",
    category: "Analytics",
    rating: 4.4,
    pricing: "Gratis hasta 25M eventos/mes",
    features: ["Event tracking", "Cohort analysis", "A/B testing", "Retention analysis"],
    website: "https://mixpanel.com",
    logo: "MP"
  },
  {
    id: 19,
    name: "Adobe Analytics",
    description: "Solución empresarial de análisis web con capacidades avanzadas de segmentación y atribución.",
    category: "Analytics",
    rating: 4.3,
    pricing: "Contactar para precio",
    features: ["Advanced segmentation", "Attribution modeling", "Predictive analytics", "Real-time data"],
    website: "https://business.adobe.com/products/analytics/adobe-analytics.html",
    logo: "AA"
  },
  {
    id: 20,
    name: "Crazy Egg",
    description: "Herramienta de optimización web que muestra dónde hacen clic los visitantes con heatmaps y A/B testing.",
    category: "Analytics",
    rating: 4.2,
    pricing: "Desde $24/mes",
    features: ["Click heatmaps", "Scroll maps", "A/B testing", "User recordings"],
    website: "https://crazyegg.com",
    logo: "CE"
  },

  // Content Marketing Tools
  {
    id: 21,
    name: "BuzzSumo",
    description: "Herramienta de investigación de contenido para encontrar el contenido más compartido y analizar tendencias.",
    category: "Contenido",
    rating: 4.5,
    pricing: "Desde $99/mes",
    features: ["Content discovery", "Influencer research", "Brand monitoring", "Content analysis"],
    website: "https://buzzsumo.com",
    logo: "BS"
  },
  {
    id: 22,
    name: "CoSchedule",
    description: "Calendario de marketing todo-en-uno para planificar, organizar y ejecutar tu estrategia de contenido.",
    category: "Contenido",
    rating: 4.4,
    pricing: "Desde $29/mes",
    features: ["Marketing calendar", "Social media automation", "Team collaboration", "Analytics"],
    website: "https://coschedule.com",
    logo: "CS"
  },
  {
    id: 23,
    name: "Grammarly",
    description: "Asistente de escritura con IA que mejora la gramática, claridad y tono de tu contenido.",
    category: "Contenido",
    rating: 4.6,
    pricing: "Gratis / $12/mes Premium",
    features: ["Grammar checking", "Tone detection", "Plagiarism checker", "Writing suggestions"],
    website: "https://grammarly.com",
    logo: "GR"
  },
  {
    id: 24,
    name: "Loom",
    description: "Herramienta de grabación de pantalla para crear videos explicativos y contenido visual fácilmente.",
    category: "Contenido",
    rating: 4.7,
    pricing: "Gratis / $8/mes Pro",
    features: ["Screen recording", "Video messaging", "Team library", "Analytics"],
    website: "https://loom.com",
    logo: "LM"
  },
  {
    id: 25,
    name: "Unsplash",
    description: "Biblioteca de fotos de alta calidad gratuitas para usar en tus proyectos de marketing y contenido.",
    category: "Contenido",
    rating: 4.8,
    pricing: "Gratis / $10/mes Plus",
    features: ["High-quality photos", "Commercial use", "API access", "Collections"],
    website: "https://unsplash.com",
    logo: "US"
  },

  // Marketing Automation
  {
    id: 26,
    name: "HubSpot",
    description: "Plataforma completa de inbound marketing con CRM, automatización de marketing y herramientas de ventas.",
    category: "Automatización",
    rating: 4.6,
    pricing: "Gratis / Desde $45/mes",
    features: ["CRM gratuito", "Marketing automation", "Lead scoring", "Email marketing"],
    website: "https://hubspot.com",
    logo: "HB"
  },
  {
    id: 27,
    name: "Marketo",
    description: "Plataforma de automatización de marketing empresarial para lead nurturing y gestión de campañas.",
    category: "Automatización",
    rating: 4.3,
    pricing: "Desde $1,195/mes",
    features: ["Lead management", "Email marketing", "Campaign management", "Analytics"],
    website: "https://marketo.com",
    logo: "MK"
  },
  {
    id: 28,
    name: "Pardot",
    description: "Solución de automatización de marketing B2B de Salesforce para generar y nutrir leads.",
    category: "Automatización",
    rating: 4.2,
    pricing: "Desde $1,250/mes",
    features: ["Lead generation", "Email marketing", "ROI reporting", "Salesforce integration"],
    website: "https://pardot.com",
    logo: "PD"
  },
  {
    id: 29,
    name: "Drip",
    description: "Plataforma de automatización de marketing por email diseñada para ecommerce y emprendedores.",
    category: "Automatización",
    rating: 4.4,
    pricing: "Desde $19/mes",
    features: ["E-commerce automation", "Behavioral triggers", "Segmentation", "Multi-channel campaigns"],
    website: "https://drip.com",
    logo: "DR"
  },
  {
    id: 30,
    name: "Zapier",
    description: "Plataforma de automatización que conecta más de 3,000 aplicaciones web para automatizar flujos de trabajo.",
    category: "Automatización",
    rating: 4.5,
    pricing: "Gratis / Desde $19.99/mes",
    features: ["App integrations", "Workflow automation", "Multi-step zaps", "Filters and formatting"],
    website: "https://zapier.com",
    logo: "ZP"
  },

  // CRM Tools
  {
    id: 31,
    name: "Salesforce",
    description: "La plataforma CRM líder mundial con capacidades completas de gestión de clientes y ventas.",
    category: "CRM",
    rating: 4.4,
    pricing: "Desde $25/usuario/mes",
    features: ["Contact management", "Opportunity tracking", "Sales automation", "Custom dashboards"],
    website: "https://salesforce.com",
    logo: "SF"
  },
  {
    id: 32,
    name: "Pipedrive",
    description: "CRM visual y fácil de usar diseñado por vendedores para optimizar el proceso de ventas.",
    category: "CRM",
    rating: 4.5,
    pricing: "Desde $15/usuario/mes",
    features: ["Visual pipeline", "Activity reminders", "Email integration", "Sales reporting"],
    website: "https://pipedrive.com",
    logo: "PD"
  },
  {
    id: 33,
    name: "Zoho CRM",
    description: "CRM completo con automatización de ventas, análisis y gestión de clientes para empresas de todos los tamaños.",
    category: "CRM",
    rating: 4.3,
    pricing: "Desde $14/usuario/mes",
    features: ["Sales automation", "Analytics", "Workflow management", "Mobile app"],
    website: "https://zoho.com/crm",
    logo: "ZC"
  },
  {
    id: 34,
    name: "Freshworks CRM",
    description: "CRM intuitivo con funciones de teléfono, email y chat integradas para equipos de ventas modernos.",
    category: "CRM",
    rating: 4.2,
    pricing: "Gratis / Desde $15/usuario/mes",
    features: ["Built-in phone", "Email integration", "Deal management", "Reports"],
    website: "https://freshworks.com/crm",
    logo: "FW"
  },
  {
    id: 35,
    name: "Monday CRM",
    description: "Plataforma de gestión de trabajo que incluye funciones CRM para organizar y rastrear relaciones con clientes.",
    category: "CRM",
    rating: 4.6,
    pricing: "Desde $8/usuario/mes",
    features: ["Visual project management", "Custom workflows", "Team collaboration", "Integrations"],
    website: "https://monday.com",
    logo: "MN"
  },

  // Advertising Tools
  {
    id: 36,
    name: "Google Ads",
    description: "Plataforma de publicidad online de Google para mostrar anuncios en búsquedas y sitios web.",
    category: "Publicidad",
    rating: 4.2,
    pricing: "Pago por clic variable",
    features: ["Search ads", "Display ads", "Shopping ads", "YouTube ads"],
    website: "https://ads.google.com",
    logo: "GA"
  },
  {
    id: 37,
    name: "Facebook Ads Manager",
    description: "Herramienta de Facebook para crear, gestionar y analizar campañas publicitarias en Facebook e Instagram.",
    category: "Publicidad",
    rating: 4.1,
    pricing: "Pago por clic/impresión variable",
    features: ["Audience targeting", "Creative tools", "Campaign optimization", "Detailed analytics"],
    website: "https://business.facebook.com",
    logo: "FB"
  },
  {
    id: 38,
    name: "Microsoft Advertising",
    description: "Plataforma publicitaria de Microsoft para mostrar anuncios en Bing y Yahoo.",
    category: "Publicidad",
    rating: 4.0,
    pricing: "Pago por clic variable",
    features: ["Search ads", "Audience ads", "Shopping campaigns", "LinkedIn profile targeting"],
    website: "https://ads.microsoft.com",
    logo: "MA"
  },
  {
    id: 39,
    name: "LinkedIn Ads",
    description: "Plataforma publicitaria de LinkedIn para llegar a profesionales y decisores empresariales.",
    category: "Publicidad",
    rating: 4.3,
    pricing: "Desde $2 por clic",
    features: ["Professional targeting", "Sponsored content", "Message ads", "Lead gen forms"],
    website: "https://business.linkedin.com/marketing-solutions",
    logo: "LI"
  },
  {
    id: 40,
    name: "Twitter Ads",
    description: "Plataforma publicitaria de Twitter para promocionar tweets y llegar a audiencias específicas.",
    category: "Publicidad",
    rating: 3.9,
    pricing: "Pago por engagement variable",
    features: ["Promoted tweets", "Audience targeting", "Conversation ads", "Analytics"],
    website: "https://ads.twitter.com",
    logo: "TW"
  },

  // Additional Email Marketing Tools
  {
    id: 41,
    name: "Klaviyo",
    description: "Plataforma de email marketing y SMS especializada en ecommerce con segmentación avanzada.",
    category: "Email Marketing",
    rating: 4.6,
    pricing: "Gratis hasta 250 contactos",
    features: ["E-commerce integration", "Advanced segmentation", "SMS marketing", "Predictive analytics"],
    website: "https://klaviyo.com",
    logo: "KL"
  },
  {
    id: 42,
    name: "Campaign Monitor",
    description: "Herramienta de email marketing con diseño intuitivo y potentes funciones de automatización.",
    category: "Email Marketing",
    rating: 4.3,
    pricing: "Desde $9/mes",
    features: ["Drag-and-drop builder", "Automation", "A/B testing", "Advanced analytics"],
    website: "https://campaignmonitor.com",
    logo: "CM"
  },
  {
    id: 43,
    name: "AWeber",
    description: "Plataforma de email marketing confiable con más de 20 años de experiencia ayudando a pequeñas empresas.",
    category: "Email Marketing",
    rating: 4.2,
    pricing: "Desde $16.15/mes",
    features: ["Email automation", "Landing pages", "Web push notifications", "Integrations"],
    website: "https://aweber.com",
    logo: "AW"
  },

  // Additional SEO Tools
  {
    id: 44,
    name: "Ubersuggest",
    description: "Herramienta SEO de Neil Patel para investigación de palabras clave y análisis de competencia.",
    category: "SEO",
    rating: 4.1,
    pricing: "Desde $12/mes",
    features: ["Keyword research", "Site audit", "Backlink data", "Content ideas"],
    website: "https://neilpatel.com/ubersuggest",
    logo: "UB"
  },
  {
    id: 45,
    name: "KWFinder",
    description: "Herramienta de investigación de palabras clave que encuentra keywords de long-tail con baja competencia.",
    category: "SEO",
    rating: 4.4,
    pricing: "Desde $29.90/mes",
    features: ["Long-tail keywords", "SERP analysis", "Rank tracking", "Backlink analysis"],
    website: "https://kwfinder.com",
    logo: "KW"
  },
  {
    id: 46,
    name: "Yoast SEO",
    description: "Plugin de WordPress para optimizar el SEO de tu sitio web con análisis en tiempo real.",
    category: "SEO",
    rating: 4.5,
    pricing: "Gratis / $99/año Premium",
    features: ["On-page SEO", "XML sitemaps", "Readability analysis", "Social media integration"],
    website: "https://yoast.com",
    logo: "YS"
  },

  // Additional Social Media Tools
  {
    id: 47,
    name: "SocialBee",
    description: "Herramienta de gestión de redes sociales con funciones de categorización y reciclaje de contenido.",
    category: "Redes Sociales",
    rating: 4.4,
    pricing: "Desde $19/mes",
    features: ["Content categorization", "Post recycling", "Team collaboration", "Analytics"],
    website: "https://socialbee.io",
    logo: "SB"
  },
  {
    id: 48,
    name: "MeetEdgar",
    description: "Herramienta de automatización de redes sociales que recicla tu contenido automáticamente.",
    category: "Redes Sociales",
    rating: 4.2,
    pricing: "Desde $25/mes",
    features: ["Content library", "Auto-variation", "Unlimited scheduling", "Content categories"],
    website: "https://meetedgar.com",
    logo: "ME"
  },
  {
    id: 49,
    name: "Sendible",
    description: "Plataforma de gestión de redes sociales diseñada para agencias y equipos de marketing.",
    category: "Redes Sociales",
    rating: 4.3,
    pricing: "Desde $29/mes",
    features: ["Client management", "White-label reports", "Social listening", "Team collaboration"],
    website: "https://sendible.com",
    logo: "SE"
  },

  // Additional Analytics Tools
  {
    id: 50,
    name: "Kissmetrics",
    description: "Plataforma de análisis de comportamiento de clientes para optimizar el customer journey.",
    category: "Analytics",
    rating: 4.1,
    pricing: "Desde $299/mes",
    features: ["Customer journey analysis", "Cohort reports", "A/B testing", "Revenue attribution"],
    website: "https://kissmetrics.io",
    logo: "KM"
  },
  {
    id: 51,
    name: "Google Tag Manager",
    description: "Sistema de gestión de etiquetas gratuito de Google para implementar códigos de seguimiento.",
    category: "Analytics",
    rating: 4.3,
    pricing: "Gratis",
    features: ["Tag management", "Trigger setup", "Variable configuration", "Version control"],
    website: "https://tagmanager.google.com",
    logo: "GTM"
  },

  // Additional Content Tools
  {
    id: 52,
    name: "Jasper AI",
    description: "Asistente de escritura con IA para crear contenido de marketing de alta calidad rápidamente.",
    category: "Contenido",
    rating: 4.5,
    pricing: "Desde $49/mes",
    features: ["AI content generation", "Templates", "Brand voice", "Team collaboration"],
    website: "https://jasper.ai",
    logo: "JA"
  },
  {
    id: 53,
    name: "Copy.ai",
    description: "Herramienta de copywriting con IA para generar textos de marketing y ventas efectivos.",
    category: "Contenido",
    rating: 4.3,
    pricing: "Gratis / Desde $36/mes",
    features: ["AI copywriting", "Multiple templates", "Blog posts", "Social media copy"],
    website: "https://copy.ai",
    logo: "CA"
  },
  {
    id: 54,
    name: "Figma",
    description: "Herramienta de diseño colaborativo para crear prototipos, interfaces y gráficos para marketing.",
    category: "Contenido",
    rating: 4.7,
    pricing: "Gratis / Desde $12/editor/mes",
    features: ["Collaborative design", "Prototyping", "Design systems", "Real-time collaboration"],
    website: "https://figma.com",
    logo: "FG"
  },

  // Additional Automation Tools
  {
    id: 55,
    name: "Integromat (Make)",
    description: "Plataforma de automatización visual para conectar aplicaciones y automatizar flujos de trabajo complejos.",
    category: "Automatización",
    rating: 4.6,
    pricing: "Gratis / Desde $9/mes",
    features: ["Visual automation", "Advanced logic", "Error handling", "Data transformation"],
    website: "https://make.com",
    logo: "MK"
  },
  {
    id: 56,
    name: "IFTTT",
    description: "Servicio de automatización simple que conecta diferentes aplicaciones y dispositivos.",
    category: "Automatización",
    rating: 4.2,
    pricing: "Gratis / $3.99/mes Pro",
    features: ["Simple automations", "Mobile triggers", "Location-based triggers", "Time-based triggers"],
    website: "https://ifttt.com",
    logo: "IF"
  },

  // Landing Page Builders
  {
    id: 57,
    name: "Unbounce",
    description: "Constructor de landing pages con A/B testing integrado para optimizar conversiones.",
    category: "Contenido",
    rating: 4.4,
    pricing: "Desde $90/mes",
    features: ["Drag-and-drop builder", "A/B testing", "Dynamic text replacement", "Conversion optimization"],
    website: "https://unbounce.com",
    logo: "UN"
  },
  {
    id: 58,
    name: "Leadpages",
    description: "Plataforma para crear landing pages, pop-ups y alert bars que convierten visitantes en leads.",
    category: "Contenido",
    rating: 4.3,
    pricing: "Desde $37/mes",
    features: ["Landing page builder", "Lead magnets", "Pop-ups", "A/B testing"],
    website: "https://leadpages.com",
    logo: "LP"
  },
  {
    id: 59,
    name: "Instapage",
    description: "Constructor de landing pages empresarial con personalización avanzada y análisis detallados.",
    category: "Contenido",
    rating: 4.2,
    pricing: "Desde $199/mes",
    features: ["Advanced personalization", "Collaboration tools", "AMP pages", "Heatmaps"],
    website: "https://instapage.com",
    logo: "IP"
  },

  // Video Marketing Tools
  {
    id: 60,
    name: "Wistia",
    description: "Plataforma de hosting de video para empresas con herramientas de marketing y análisis avanzados.",
    category: "Contenido",
    rating: 4.5,
    pricing: "Gratis hasta 3 videos / Desde $99/mes",
    features: ["Video hosting", "Player customization", "Lead generation", "Video analytics"],
    website: "https://wistia.com",
    logo: "WS"
  },
  {
    id: 61,
    name: "Vidyard",
    description: "Plataforma de video marketing para ventas y marketing con personalización de videos.",
    category: "Contenido",
    rating: 4.4,
    pricing: "Gratis / Desde $15/mes",
    features: ["Video messaging", "Screen recording", "Video analytics", "CRM integration"],
    website: "https://vidyard.com",
    logo: "VY"
  },

  // Webinar Tools
  {
    id: 62,
    name: "Zoom Webinar",
    description: "Solución de webinars de Zoom para eventos online, presentaciones y marketing en vivo.",
    category: "Contenido",
    rating: 4.4,
    pricing: "Desde $399/mes",
    features: ["HD video/audio", "Registration management", "Interactive polls", "Recording"],
    website: "https://zoom.us/webinar",
    logo: "ZW"
  },
  {
    id: 63,
    name: "GoToWebinar",
    description: "Plataforma líder de webinars con herramientas de engagement y análisis de audiencia.",
    category: "Contenido",
    rating: 4.2,
    pricing: "Desde $49/mes",
    features: ["Webinar hosting", "Registration pages", "Polls and surveys", "Analytics"],
    website: "https://gotowebinar.com",
    logo: "GTW"
  },

  // Influencer Marketing
  {
    id: 64,
    name: "AspireIQ",
    description: "Plataforma de marketing de influencers para descubrir, gestionar y medir campañas.",
    category: "Redes Sociales",
    rating: 4.3,
    pricing: "Contactar para precio",
    features: ["Influencer discovery", "Campaign management", "Content approval", "Performance tracking"],
    website: "https://aspireiq.com",
    logo: "AQ"
  },
  {
    id: 65,
    name: "Upfluence",
    description: "Suite completa de marketing de influencers con base de datos de más de 3 millones de creators.",
    category: "Redes Sociales",
    rating: 4.1,
    pricing: "Desde $2,000/mes",
    features: ["Influencer search", "Campaign management", "E-commerce integration", "ROI tracking"],
    website: "https://upfluence.com",
    logo: "UF"
  },

  // A/B Testing Tools
  {
    id: 66,
    name: "Optimizely",
    description: "Plataforma líder de experimentación para A/B testing y personalización de experiencias digitales.",
    category: "Analytics",
    rating: 4.3,
    pricing: "Contactar para precio",
    features: ["A/B testing", "Multivariate testing", "Personalization", "Feature flags"],
    website: "https://optimizely.com",
    logo: "OP"
  },
  {
    id: 67,
    name: "VWO",
    description: "Plataforma de optimización de conversión con A/B testing, heatmaps y análisis de comportamiento.",
    category: "Analytics",
    rating: 4.2,
    pricing: "Desde $199/mes",
    features: ["A/B testing", "Multivariate testing", "Heatmaps", "Session recordings"],
    website: "https://vwo.com",
    logo: "VW"
  },

  // Customer Support Tools
  {
    id: 68,
    name: "Intercom",
    description: "Plataforma de comunicación con clientes que combina chat en vivo, bots y email marketing.",
    category: "CRM",
    rating: 4.4,
    pricing: "Desde $39/mes",
    features: ["Live chat", "Chatbots", "Help desk", "Customer messaging"],
    website: "https://intercom.com",
    logo: "IC"
  },
  {
    id: 69,
    name: "Drift",
    description: "Plataforma de marketing conversacional con chatbots y chat en vivo para generar leads.",
    category: "CRM",
    rating: 4.2,
    pricing: "Gratis / Desde $50/mes",
    features: ["Conversational marketing", "Live chat", "Chatbots", "Meeting booking"],
    website: "https://drift.com",
    logo: "DR"
  },
  {
    id: 70,
    name: "Zendesk",
    description: "Suite completa de atención al cliente con ticketing, chat en vivo y base de conocimientos.",
    category: "CRM",
    rating: 4.3,
    pricing: "Desde $19/agente/mes",
    features: ["Ticket management", "Live chat", "Knowledge base", "Customer analytics"],
    website: "https://zendesk.com",
    logo: "ZD"
  },

  // Project Management
  {
    id: 71,
    name: "Asana",
    description: "Herramienta de gestión de proyectos para organizar, rastrear y gestionar el trabajo de marketing.",
    category: "Automatización",
    rating: 4.5,
    pricing: "Gratis / Desde $10.99/usuario/mes",
    features: ["Task management", "Project tracking", "Team collaboration", "Timeline view"],
    website: "https://asana.com",
    logo: "AS"
  },
  {
    id: 72,
    name: "Trello",
    description: "Herramienta de organización visual basada en tableros Kanban para gestionar proyectos de marketing.",
    category: "Automatización",
    rating: 4.4,
    pricing: "Gratis / Desde $5/usuario/mes",
    features: ["Kanban boards", "Card system", "Team collaboration", "Power-ups"],
    website: "https://trello.com",
    logo: "TR"
  },

  // Survey Tools
  {
    id: 73,
    name: "SurveyMonkey",
    description: "Plataforma líder de encuestas online para recopilar feedback de clientes y investigación de mercado.",
    category: "Analytics",
    rating: 4.3,
    pricing: "Gratis / Desde $37/mes",
    features: ["Survey creation", "Response collection", "Data analysis", "Custom branding"],
    website: "https://surveymonkey.com",
    logo: "SM"
  },
  {
    id: 74,
    name: "Typeform",
    description: "Constructor de formularios conversacionales para crear encuestas y cuestionarios atractivos.",
    category: "Analytics",
    rating: 4.5,
    pricing: "Gratis / Desde $25/mes",
    features: ["Conversational forms", "Logic jumps", "Custom design", "Integrations"],
    website: "https://typeform.com",
    logo: "TF"
  },

  // Affiliate Marketing
  {
    id: 75,
    name: "ShareASale",
    description: "Red de marketing de afiliados que conecta comerciantes con afiliados para promover productos.",
    category: "Publicidad",
    rating: 4.2,
    pricing: "Comisión del 20% sobre pagos",
    features: ["Affiliate network", "Commission tracking", "Performance reports", "Payment processing"],
    website: "https://shareasale.com",
    logo: "SA"
  },
  {
    id: 76,
    name: "Impact",
    description: "Plataforma de partnership automation para gestionar programas de afiliados y partnerships.",
    category: "Publicidad",
    rating: 4.4,
    pricing: "Contactar para precio",
    features: ["Partnership management", "Fraud prevention", "Attribution tracking", "Automated payments"],
    website: "https://impact.com",
    logo: "IM"
  },

  // SMS Marketing
  {
    id: 77,
    name: "Twilio",
    description: "Plataforma de comunicaciones en la nube para SMS, voz y video APIs para marketing y soporte.",
    category: "Email Marketing",
    rating: 4.5,
    pricing: "Pago por uso desde $0.0075/SMS",
    features: ["SMS API", "Voice API", "WhatsApp API", "Email API"],
    website: "https://twilio.com",
    logo: "TW"
  },
  {
    id: 78,
    name: "Attentive",
    description: "Plataforma de SMS marketing para ecommerce con segmentación avanzada y automatización.",
    category: "Email Marketing",
    rating: 4.3,
    pricing: "Contactar para precio",
    features: ["SMS campaigns", "Two-way messaging", "Subscriber growth", "E-commerce integration"],
    website: "https://attentivemobile.com",
    logo: "AT"
  },

  // Push Notification Tools
  {
    id: 79,
    name: "OneSignal",
    description: "Servicio gratuito de notificaciones push para web, móvil y email con segmentación avanzada.",
    category: "Email Marketing",
    rating: 4.4,
    pricing: "Gratis / Desde $9/mes",
    features: ["Push notifications", "In-app messaging", "Email", "SMS"],
    website: "https://onesignal.com",
    logo: "OS"
  },
  {
    id: 80,
    name: "Pushwoosh",
    description: "Plataforma completa de customer engagement con push notifications y mensajería omnicanal.",
    category: "Email Marketing",
    rating: 4.2,
    pricing: "Gratis hasta 1M mensajes/mes",
    features: ["Push notifications", "In-app messages", "Email campaigns", "Customer journey"],
    website: "https://pushwoosh.com",
    logo: "PW"
  },

  // Heat Mapping Tools
  {
    id: 81,
    name: "FullStory",
    description: "Plataforma de experiencia digital que captura todas las interacciones de usuarios para análisis profundo.",
    category: "Analytics",
    rating: 4.5,
    pricing: "Contactar para precio",
    features: ["Session replay", "Heatmaps", "Conversion funnels", "Error tracking"],
    website: "https://fullstory.com",
    logo: "FS"
  },
  {
    id: 82,
    name: "LogRocket",
    description: "Plataforma de monitoreo de experiencia de usuario que combina session replay con análisis de performance.",
    category: "Analytics",
    rating: 4.3,
    pricing: "Gratis / Desde $99/mes",
    features: ["Session replay", "Performance monitoring", "Error tracking", "User insights"],
    website: "https://logrocket.com",
    logo: "LR"
  },

  // Conversion Rate Optimization
  {
    id: 83,
    name: "Convert",
    description: "Plataforma de A/B testing y personalización enfocada en privacidad y compliance.",
    category: "Analytics",
    rating: 4.1,
    pricing: "Desde $699/mes",
    features: ["A/B testing", "Personalization", "Privacy compliance", "Advanced targeting"],
    website: "https://convert.com",
    logo: "CV"
  },
  {
    id: 84,
    name: "Dynamic Yield",
    description: "Plataforma de personalización empresarial para optimizar experiencias digitales en tiempo real.",
    category: "Analytics",
    rating: 4.2,
    pricing: "Contactar para precio",
    features: ["AI personalization", "A/B testing", "Behavioral targeting", "Product recommendations"],
    website: "https://dynamicyield.com",
    logo: "DY"
  },

  // Review Management
  {
    id: 85,
    name: "BirdEye",
    description: "Plataforma de gestión de reputación online para monitorear, solicitar y gestionar reseñas de clientes.",
    category: "CRM",
    rating: 4.3,
    pricing: "Desde $299/mes",
    features: ["Review management", "Review generation", "Social listening", "Customer surveys"],
    website: "https://birdeye.com",
    logo: "BE"
  },
  {
    id: 86,
    name: "Podium",
    description: "Plataforma de mensajería para empresas locales que ayuda a gestionar leads y reseñas via SMS.",
    category: "CRM",
    rating: 4.2,
    pricing: "Desde $89/mes",
    features: ["Text messaging", "Review management", "Web chat", "Payment collection"],
    website: "https://podium.com",
    logo: "PD"
  },

  // Competitive Intelligence
  {
    id: 87,
    name: "SimilarWeb",
    description: "Plataforma de inteligencia digital para analizar el tráfico web y estrategias de la competencia.",
    category: "Analytics",
    rating: 4.3,
    pricing: "Gratis / Desde $199/mes",
    features: ["Website analytics", "Competitive analysis", "Market research", "Industry benchmarks"],
    website: "https://similarweb.com",
    logo: "SW"
  },
  {
    id: 88,
    name: "SpyFu",
    description: "Herramienta de inteligencia competitiva para espiar las estrategias SEO y PPC de competidores.",
    category: "SEO",
    rating: 4.0,
    pricing: "Desde $39/mes",
    features: ["Competitor keywords", "Ad history", "Backlink analysis", "Ranking tracking"],
    website: "https://spyfu.com",
    logo: "SP"
  },

  // Email Deliverability
  {
    id: 89,
    name: "SendGrid",
    description: "Plataforma de entrega de email confiable con APIs potentes para email transaccional y marketing.",
    category: "Email Marketing",
    rating: 4.2,
    pricing: "Gratis hasta 100 emails/día",
    features: ["Email delivery", "Email API", "Analytics", "Template engine"],
    website: "https://sendgrid.com",
    logo: "SG"
  },
  {
    id: 90,
    name: "Mailgun",
    description: "Servicio de email API para desarrolladores con herramientas de entrega, validación y análisis.",
    category: "Email Marketing",
    rating: 4.1,
    pricing: "Gratis hasta 5,000 emails/mes",
    features: ["Email API", "Email validation", "Deliverability tools", "Analytics"],
    website: "https://mailgun.com",
    logo: "MG"
  },

  // Personalization Tools
  {
    id: 91,
    name: "Segment",
    description: "Plataforma de datos de clientes que recopila, unifica y conecta datos de primera parte.",
    category: "Analytics",
    rating: 4.4,
    pricing: "Gratis hasta 1,000 MTU/mes",
    features: ["Customer data platform", "Data collection", "Identity resolution", "Audience building"],
    website: "https://segment.com",
    logo: "SG"
  },
  {
    id: 92,
    name: "Amplitude",
    description: "Plataforma de análisis de productos que ayuda a entender el comportamiento de usuarios.",
    category: "Analytics",
    rating: 4.5,
    pricing: "Gratis hasta 10M eventos/mes",
    features: ["Product analytics", "Behavioral cohorts", "Retention analysis", "Funnel analysis"],
    website: "https://amplitude.com",
    logo: "AM"
  },

  // Local SEO
  {
    id: 93,
    name: "BrightLocal",
    description: "Suite de herramientas SEO local para mejorar la visibilidad en búsquedas locales y Google My Business.",
    category: "SEO",
    rating: 4.4,
    pricing: "Desde $29/mes",
    features: ["Local rank tracking", "Citation building", "Review management", "Local audits"],
    website: "https://brightlocal.com",
    logo: "BL"
  },
  {
    id: 94,
    name: "Whitespark",
    description: "Herramientas especializadas en SEO local para citation building y rank tracking local.",
    category: "SEO",
    rating: 4.2,
    pricing: "Desde $35/mes",
    features: ["Citation finder", "Local rank tracker", "Review tracking", "Google My Business tools"],
    website: "https://whitespark.ca",
    logo: "WS"
  },

  // Marketing Attribution
  {
    id: 95,
    name: "Attribution",
    description: "Plataforma de atribución de marketing para rastrear y medir el impacto de todos los canales de marketing.",
    category: "Analytics",
    rating: 4.1,
    pricing: "Contactar para precio",
    features: ["Multi-touch attribution", "Cross-device tracking", "Marketing mix modeling", "ROI analysis"],
    website: "https://attribution.com",
    logo: "AT"
  },
  {
    id: 96,
    name: "Ruler Analytics",
    description: "Software de atribución de ingresos que conecta el marketing con las ventas y ingresos reales.",
    category: "Analytics",
    rating: 4.3,
    pricing: "Desde $199/mes",
    features: ["Revenue attribution", "Call tracking", "Form tracking", "Marketing ROI"],
    website: "https://ruleranalytics.com",
    logo: "RA"
  },

  // Final Tools
  {
    id: 97,
    name: "Mention",
    description: "Herramienta de monitoreo de medios y redes sociales para rastrear menciones de marca en tiempo real.",
    category: "Redes Sociales",
    rating: 4.2,
    pricing: "Desde $29/mes",
    features: ["Brand monitoring", "Social listening", "Influencer identification", "Competitive analysis"],
    website: "https://mention.com",
    logo: "MN"
  },
  {
    id: 98,
    name: "Brand24",
    description: "Herramienta de escucha social para monitorear menciones de marca y analizar sentimiento online.",
    category: "Redes Sociales",
    rating: 4.3,
    pricing: "Desde $79/mes",
    features: ["Social media monitoring", "Sentiment analysis", "Influencer tracking", "Crisis management"],
    website: "https://brand24.com",
    logo: "B24"
  },
  {
    id: 99,
    name: "Sprinklr",
    description: "Plataforma empresarial de gestión de experiencia del cliente y marketing en redes sociales.",
    category: "Redes Sociales",
    rating: 4.1,
    pricing: "Contactar para precio",
    features: ["Social media management", "Customer care", "Social advertising", "Social listening"],
    website: "https://sprinklr.com",
    logo: "SK"
  },
  {
    id: 100,
    name: "Oktopost",
    description: "Plataforma de gestión de redes sociales B2B con capacidades de lead tracking y atribución.",
    category: "Redes Sociales",
    rating: 4.0,
    pricing: "Contactar para precio",
    features: ["B2B social media", "Lead tracking", "Employee advocacy", "Social attribution"],
    website: "https://oktopost.com",
    logo: "OK"
  }
];