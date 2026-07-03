import {
    Bot, Rocket, Database, Glasses, Sprout, Briefcase,
    Film, Users, Shirt, Megaphone, Gift, GraduationCap,
    Stethoscope, Settings, Shield, ShoppingCart, LucideIcon
} from "lucide-react";

export interface DomainDetail {
    id: string;
    icon: LucideIcon;
    title: string;
    category: string;
    categoryId: string;
    tagline: string;
    overview: string;
    features: string[];
    useCases: { title: string; desc: string }[];
    stats: { label: string; value: string }[];
    services: string[];
    headerBg: string;
    categoryColor: string;
}

export const domains: DomainDetail[] = [
    // ── AI & Technology ──────────────────────────────────────────────────────
    {
        id: "ai-ml", icon: Bot, title: "AI Automation / Machine Learning", category: "AI & Technology", categoryId: "ai-tech",
        categoryColor: "bg-blue-500", headerBg: "bg-blue-100",
        tagline: "Turn your data into decisions, automatically",
        overview: "End-to-end artificial intelligence and machine learning solutions that transform raw data into actionable business intelligence. From predictive models to computer vision systems — we build, deploy, and maintain AI that actually works.",
        features: ["Predictive Analytics & Forecasting", "Natural Language Processing (NLP)", "Computer Vision Systems", "Custom Model Training & Fine-tuning", "AI Strategy Consulting", "MLOps & Model Monitoring"],
        useCases: [
            { title: "E-Commerce", desc: "Recommendation engines, demand forecasting, fraud detection" },
            { title: "Healthcare", desc: "Diagnostic assistance, patient risk scoring, imaging analysis" },
            { title: "Manufacturing", desc: "Predictive maintenance, quality control, defect detection" },
            { title: "Finance", desc: "Credit scoring, anomaly detection, market prediction" },
        ],
        stats: [{ label: "Model accuracy improvement", value: "40%" }, { label: "Processing speed uplift", value: "100×" }, { label: "Cost reduction", value: "55%" }],
        services: ["Agentic AI", "ML Models", "LLMs"],
    },
    {
        id: "data-eng", icon: Database, title: "Data Engineering", category: "AI & Technology", categoryId: "ai-tech",
        categoryColor: "bg-blue-500", headerBg: "bg-blue-100",
        tagline: "Build the data foundation your business deserves",
        overview: "Enterprise-grade data infrastructure built for scale, speed, and reliability. We design and implement data pipelines, warehouses, and analytics platforms that give your teams real-time access to clean, trustworthy data.",
        features: ["Data Warehouse Design & Build", "ETL / ELT Pipeline Development", "Real-time Data Streaming", "Cloud Data Migration (AWS, GCP, Azure)", "Analytics Dashboard & BI", "Data Quality & Governance"],
        useCases: [
            { title: "Enterprises", desc: "Unified data platform across departments and geographies" },
            { title: "SaaS Companies", desc: "Usage analytics, customer health scoring, product telemetry" },
            { title: "Retail Chains", desc: "Inventory intelligence, sales forecasting, customer analytics" },
            { title: "Financial Institutions", desc: "Regulatory reporting, risk data management, audit trails" },
        ],
        stats: [{ label: "Data processing speed", value: "10×" }, { label: "Storage cost reduction", value: "45%" }, { label: "Data accuracy", value: "99.9%" }],
        services: ["Data Warehousing", "ETL Pipelines", "Big Data", "Data Bias"],
    },
    {
        id: "ar-vr", icon: Glasses, title: "XR - MR/VR/AR", category: "AI & Technology", categoryId: "ai-tech",
        categoryColor: "bg-blue-500", headerBg: "bg-indigo-100",
        tagline: "Immersive Mixed Reality experiences powered by AI Assistance",
        overview: "Mixed reality (MR), virtual reality (VR), and augmented reality (AR) systems built for enterprises. Our Meta Quest and spatial computing environments come integrated with an intelligent AI Assistant guide to walk users through tasks, answer queries dynamically, and monitor safety/compliance performance metrics in real-time.",
        features: ["AI-Assisted Spatial Guidance", "Meta Quest & MR Passthrough Viewports", "Custom VR Training Environments", "AR Product Visualizers & Try-ons", "3D Collaborative Spaces", "Spatial Analytics & Tracking"],
        useCases: [
            { title: "Corporate Training", desc: "Immersive simulations with an AI Assistant guiding onboarding" },
            { title: "Retail & E-commerce", desc: "Virtual try-on for fashion, apparel, and furniture" },
            { title: "Healthcare Systems", desc: "Anatomy education, physical therapy, and surgical walkthroughs" },
            { title: "Real Estate", desc: "Interactive 3D mixed-reality property walk-throughs" },
        ],
        stats: [{ label: "Better knowledge retention", value: "40%" }, { label: "Training cost reduction", value: "50%" }, { label: "AI Guidance Accuracy", value: "98.5%" }],
        services: ["Meta Quest", "AI XR", "Spatial Computing", "AI Assistance"],
    },
    {
        id: "cybersecurity", icon: Shield, title: "Cybersecurity", category: "AI & Technology", categoryId: "ai-tech",
        categoryColor: "bg-blue-500", headerBg: "bg-slate-100",
        tagline: "Vulnerability protection and CVSS audits for full threat control",
        overview: "Strategic, end-to-end cybersecurity audits, pen-testing, and compliance programs. We provide comprehensive CVSS Score Reports, full network penetration tests, and vulnerability threat logs to map and neutralize potential security exploits before they strike.",
        features: ["Vulnerability Findings & VAPT Logs", "CVSS Score Card Reports", "Intrusion Prevention & Anti-Hacking", "Threat Intelligence & Audits", "Compliance & Audit Readiness", "Incident Recovery & Recovery"],
        useCases: [
            { title: "SMEs & Startups", desc: "Data compliance audits, vulnerability logs, payment checks" },
            { title: "Healthcare Networks", desc: "HIPAA-compliant medical system audits & records security" },
            { title: "E-commerce Platforms", desc: "Vulnerability analysis, checkouts check, payment defenses" },
            { title: "Enterprises", desc: "CVSS threat mapping, compliance checks, and continuous monitoring" },
        ],
        stats: [{ label: "Security Threats Blocked", value: "99.8%" }, { label: "Breach Cost Prevented", value: "$2.4M" }, { label: "Compliance Rate", value: "100%" }],
        services: ["VAPT", "Vulnerability", "CVSS Reports", "Threat Intelligence"],
    },

    // ── Business Growth ───────────────────────────────────────────────────────
    {
        id: "startup", icon: Rocket, title: "Startup Incubation / Acceleration", category: "Business Growth", categoryId: "business-growth",
        categoryColor: "bg-amber-500", headerBg: "bg-amber-100",
        tagline: "From idea to funded startup — we take you all the way",
        overview: "A structured incubation program that accelerates startups from concept to market. We provide strategic mentorship, investor connections, go-to-market support, and the tools needed to build a sustainable, scalable business.",
        features: ["Business Strategy & Planning", "Investor Pitch Preparation", "Funding Network Access", "Mentorship from Industry Experts", "Market Research & Validation", "Legal & Compliance Guidance"],
        useCases: [
            { title: "Early-Stage Startups", desc: "Idea validation, MVP development, and initial go-to-market" },
            { title: "Tech Founders", desc: "Product-market fit, scaling strategy, and tech stack advisory" },
            { title: "Social Enterprises", desc: "Impact measurement, grant funding, and sustainable growth" },
            { title: "Student Entrepreneurs", desc: "Mentorship, competitions, and first investor introductions" },
        ],
        stats: [{ label: "Startups supported", value: "50+" }, { label: "Success rate", value: "78%" }, { label: "Avg. time to funding", value: "6mo" }],
        services: ["Founder / Idea Valuation", "Client Acquisition", "Funding Support", "IPO Support", "Business Strategy", "Mentorship"],
    },
    {
        id: "consulting", icon: Briefcase, title: "Business Consulting", category: "Business Growth", categoryId: "business-growth",
        categoryColor: "bg-amber-500", headerBg: "bg-amber-100",
        tagline: "Strategic clarity for every stage of your business",
        overview: "Expert business consulting that helps organizations grow faster, operate smarter, and navigate change confidently. From market entry strategy to digital transformation — we bring a practical, results-first approach.",
        features: ["Growth Strategy & Market Expansion", "Process Optimization & Lean Operations", "Digital Transformation Roadmap", "Change Management", "Financial Planning & Forecasting", "Competitive Intelligence"],
        useCases: [
            { title: "SMEs", desc: "Scaling from ₹1Cr to ₹10Cr+ with structured growth strategy" },
            { title: "Enterprises", desc: "Operational efficiency, cost reduction, and transformation" },
            { title: "Non-Profits", desc: "Impact strategy, donor management, and sustainable operations" },
            { title: "Government Bodies", desc: "Policy implementation, digital services, citizen engagement" },
        ],
        stats: [{ label: "Average revenue growth", value: "3×" }, { label: "Efficiency improvement", value: "45%" }, { label: "Projects delivered", value: "100+" }],
        services: ["Strategy Planning", "Process Optimization", "Growth", "Change Mgmt"],
    },
    {
        id: "workforce", icon: Users, title: "Workforce Support", category: "Business Growth", categoryId: "business-growth",
        categoryColor: "bg-amber-500", headerBg: "bg-orange-100",
        tagline: "Scale your team with verified, top-tier engineering talent",
        overview: "Get immediate access to our verified talent pool of seasoned engineers and designers. We source, vet, and allocate AI engineers, full-stack developers, DevOps engineers, software engineers, cybersecurity verified experts, frontend/backend developers, and UI/UX designers to support your expansion.",
        features: ["AI Engineers & Full-Stack Sourcing", "DevOps & Software Engineers Pool", "Cybersecurity Verified Experts", "UI/UX & Designer Talent Allocation", "Onboarding & HR Management", "Payroll & Benefits Support"],
        useCases: [
            { title: "Tech Scaleups", desc: "Quickly onboard verified senior backend/frontend developers" },
            { title: "AI Projects", desc: "Source specialized AI engineers and machine learning experts" },
            { title: "Security Audits", desc: "Deploy certified cybersecurity experts for risk mitigation" },
            { title: "Product Design", desc: "Integrate seasoned UI/UX designers directly into your sprints" },
        ],
        stats: [{ label: "Talent Vetting Success", value: "98.7%" }, { label: "Time-to-deploy", value: "4 days" }, { label: "Project retention rate", value: "95%" }],
        services: ["AI Engineers", "DevOps", "Cybersecurity Experts", "UI/UX Designers", "Full-Stack Devs"],
    },

    // ── Industry Solutions ────────────────────────────────────────────────────
    {
        id: "healthcare", icon: Stethoscope, title: "Healthcare", category: "Industry Solutions", categoryId: "industry",
        categoryColor: "bg-rose-500", headerBg: "bg-rose-100",
        tagline: "AI-powered healthcare operations that save lives and time",
        overview: "A comprehensive hospital and clinic management ecosystem combining CRM, operations, and patient care tools. Built for healthcare providers who want to deliver world-class patient experiences while running efficient, data-driven operations.",
        features: ["Hospital CRM & Patient Management", "Appointment Scheduling & Reminders", "Operations Dashboard", "Staff Management System", "Query Resolution Portal", "Insurance & Billing Integration"],
        useCases: [
            { title: "Hospitals", desc: "End-to-end patient journey management from intake to discharge" },
            { title: "Clinics", desc: "Streamlined scheduling, billing, and patient follow-ups" },
            { title: "Healthcare Networks", desc: "Multi-branch coordination and centralized reporting" },
            { title: "Medical Labs", desc: "Sample tracking, results delivery, and patient notifications" },
        ],
        stats: [{ label: "Reduction in admin time", value: "60%" }, { label: "Patient satisfaction", value: "94%" }, { label: "Query resolution speed", value: "5×" }],
        services: ["Hospital CRM", "Patient Mgmt", "Operations", "Query Resolution"],
    },
    {
        id: "edtech", icon: GraduationCap, title: "EdTech", category: "Industry Solutions", categoryId: "industry",
        categoryColor: "bg-teal-500", headerBg: "bg-indigo-100",
        tagline: "AI-powered education and learning technology solutions for institutions, educators, and students.",
        overview: "Empowering schools, universities, and training academies with intelligent learning platforms, student performance analytics, and administrative workflow automation.",
        features: ["Custom LMS & e-Learning Portals", "AI Student Analytics & Insights", "Automated Grading & Assessment Systems", "Virtual Classroom Integrations", "Interactive Course Builders", "Student Onboarding & Admin Systems"],
        useCases: [
            { title: "Schools & K-12", desc: "Virtual learning management, homework trackers, parent communication" },
            { title: "Universities", desc: "Course enrollment portals, automated grading, performance analytics" },
            { title: "EdTech Startups", desc: "Robust core infrastructure, interactive video hosting, custom APIs" },
            { title: "Corporate L&D", desc: "Internal employee training, compliance tracking, and skills assessment" }
        ],
        stats: [{ label: "Student engagement rate", value: "85%" }, { label: "Grading time saved", value: "60%" }, { label: "LMS deployment time", value: "14 days" }],
        services: ["Learning Platforms", "Student Analytics", "Automation", "LMS"],
    },
    {
        id: "agro", icon: Sprout, title: "Agro-Tech", category: "Industry Solutions", categoryId: "industry",
        categoryColor: "bg-teal-500", headerBg: "bg-green-100",
        tagline: "Precision farming powered by AI and IoT",
        overview: "Smart agriculture solutions that combine IoT sensors, satellite data, and AI to help farmers make better decisions, reduce costs, and improve yields. We make precision farming accessible at every scale.",
        features: ["IoT Sensor Networks (soil, weather, crop)", "Satellite-based Crop Monitoring", "AI-driven Yield Prediction", "Smart Irrigation Management", "Market Price & Demand Feeds", "Supply Chain Traceability"],
        useCases: [
            { title: "Large-scale Farms", desc: "Field-by-field monitoring and automated resource management" },
            { title: "Agricultural Cooperatives", desc: "Collective data intelligence and shared market access" },
            { title: "Government Ag Departments", desc: "District-level monitoring, subsidy management, crop mapping" },
            { title: "Food Supply Chains", desc: "Farm-to-fork traceability and quality assurance" },
        ],
        stats: [{ label: "Yield improvement", value: "35%" }, { label: "Water usage savings", value: "40%" }, { label: "Input cost reduction", value: "28%" }],
        services: ["Smart Farming", "IoT Sensors", "Crop Monitoring", "Analytics"],
    },
    {
        id: "biz-ops", icon: Settings, title: "Business Operations", category: "Industry Solutions", categoryId: "industry",
        categoryColor: "bg-teal-500", headerBg: "bg-teal-100",
        tagline: "Streamline how your business runs, every single day",
        overview: "End-to-end business operations support covering process design, team coordination, vendor management, and operational efficiency for businesses of all sizes. We help you eliminate bottlenecks, standardize workflows, and run a tighter, more productive operation.",
        features: ["Process Design & Documentation", "Operations Dashboard & Reporting", "Vendor & Supplier Management", "Team Coordination Systems", "SOP Development & Training", "Operational Efficiency Audit"],
        useCases: [
            { title: "Growing SMEs", desc: "Building scalable operational systems from the ground up" },
            { title: "Multi-department Companies", desc: "Coordinating teams, workflows, and reporting across functions" },
            { title: "Service Businesses", desc: "Standardizing delivery, quality, and client operations" },
            { title: "Operations-Heavy Industries", desc: "Procurement, logistics, and vendor management optimization" },
        ],
        stats: [{ label: "Efficiency improvement", value: "40%" }, { label: "Time saved per week", value: "12h" }, { label: "Process clarity", value: "100%" }],
        services: ["Process Design", "SOPs", "Vendor Mgmt", "Operations Audit"],
    },

    // ── Creative & Brand ──────────────────────────────────────────────────────
    {
        id: "media", icon: Film, title: "Media & Production", category: "Creative & Brand", categoryId: "creative",
        categoryColor: "bg-purple-500", headerBg: "bg-purple-100",
        tagline: "Storytelling that moves brands and people forward",
        overview: "Full-service creative production studio delivering high-impact video, photography, animation, and brand content. We tell stories that connect brands to their audience with authenticity and visual excellence.",
        features: ["Corporate & Brand Video Production", "Photography (Product, Events, Corporate)", "2D & 3D Animation", "Brand Identity & Visual Design", "Content Strategy & Planning", "Post-Production & Color Grading"],
        useCases: [
            { title: "Brands & Startups", desc: "Brand films, product launches, and investor decks" },
            { title: "Agencies", desc: "Production partner for large-scale campaigns" },
            { title: "E-Commerce", desc: "Product photography, lifestyle shoots, video ads" },
            { title: "Events", desc: "Live coverage, highlight reels, and promotional content" },
        ],
        stats: [{ label: "Content projects delivered", value: "500+" }, { label: "Client satisfaction", value: "97%" }, { label: "Avg. turnaround time", value: "7 days" }],
        services: ["Video Production", "Photography", "Animation", "Branding"],
    },
    {
        id: "advertising", icon: Megaphone, title: "Advertising & Branding", category: "Creative & Brand", categoryId: "creative",
        categoryColor: "bg-purple-500", headerBg: "bg-pink-100",
        tagline: "Build brands that people remember, trust, and love",
        overview: "Strategic branding and performance advertising services that help businesses stand out, connect with their audience, and grow profitably. From brand identity to full-funnel digital campaigns.",
        features: ["Brand Strategy & Identity", "Digital Marketing (SEO, SEM, Social)", "Creative Campaign Development", "Influencer Marketing", "Performance Analytics & Reporting", "Rebranding & Brand Refresh"],
        useCases: [
            { title: "Startups", desc: "Brand identity, launch campaigns, and market positioning" },
            { title: "Established Brands", desc: "Refreshing positioning and expanding digital reach" },
            { title: "E-Commerce", desc: "Performance ads, conversion optimization, retention campaigns" },
            { title: "B2B Companies", desc: "Thought leadership, LinkedIn strategy, and account-based marketing" },
        ],
        stats: [{ label: "Avg. campaign ROI", value: "4×" }, { label: "Brand recall uplift", value: "60%" }, { label: "Campaigns delivered", value: "200+" }],
        services: ["Brand Strategy", "Digital Marketing", "Creative Campaigns", "SEO/SEM"],
    },
    {
        id: "gifts", icon: Gift, title: "Corporate Gifts", category: "Creative & Brand", categoryId: "creative",
        categoryColor: "bg-purple-500", headerBg: "bg-rose-100",
        tagline: "Premium gifting that strengthens business relationships",
        overview: "A curated corporate gifting service offering premium, custom-branded merchandise and gift experiences that leave lasting impressions. Perfect for client appreciation, employee rewards, and event giveaways.",
        features: ["Custom Branded Merchandise", "Premium Gift Hampers", "Luxury Packaging Design", "Bulk Order Management", "Pan-India & International Delivery", "Sustainable Gifting Options"],
        useCases: [
            { title: "Corporate Clients", desc: "Festive gifts, deal closures, and client appreciation" },
            { title: "Event Organizers", desc: "Conference kits, speaker gifts, and attendee hampers" },
            { title: "HR Teams", desc: "Employee milestones, onboarding kits, recognition awards" },
            { title: "Startups", desc: "Branded swag for launches, investors, and team celebrations" },
        ],
        stats: [{ label: "Clients served", value: "500+" }, { label: "Custom products created", value: "1000+" }, { label: "On-time delivery", value: "99%" }],
        services: ["Custom Merchandise", "Gift Hampers", "Packaging", "Bulk Orders"],
    },
    {
        id: "textile", icon: Shirt, title: "Textile", category: "Creative & Brand", categoryId: "creative",
        categoryColor: "bg-purple-500", headerBg: "bg-yellow-100",
        tagline: "High-quality custom T-shirt printing and cap embroidery at scale",
        overview: "Enterprise-grade custom apparel manufacturing and printing. From high-fidelity screen printing on organic cotton T-shirts to 3D embroidery on custom caps — we handle design, quality control, packaging, and shipping for brands worldwide.",
        features: ["Custom T-Shirt Printing", "Branded Cap Embroidery", "Custom Apparel Manufacturing", "Quality Control & Fabric Inspection", "Eco-friendly Dyeing & Materials", "Global Shipping & Logistics"],
        useCases: [
            { title: "Fashion Brands", desc: "Private label manufacturing with design collaboration" },
            { title: "Corporate Uniforms", desc: "Bulk branded uniforms with consistent quality" },
            { title: "Event Merchandise", desc: "High-volume custom printed merchandise for campaigns" },
            { title: "Export Markets", desc: "Compliance-ready manufacturing for international buyers" },
        ],
        stats: [{ label: "Quality pass rate", value: "99.8%" }, { label: "On-time delivery", value: "98.5%" }, { label: "Customer retention rate", value: "97%" }],
        services: ["T-Shirt Printing", "Cap Embroidery", "Manufacturing", "Design"],
    },
    {
        id: "e-commerce", icon: ShoppingCart, title: "E-Commerce", category: "Industry Solutions", categoryId: "industry",
        categoryColor: "bg-teal-500", headerBg: "bg-orange-100",
        tagline: "Build a high-converting, intelligent online store",
        overview: "End-to-end e-commerce solutions that scale. From building custom storefronts using Shopify, Next.js, and WooCommerce to setting up automated checkout, cart recovery email/WhatsApp flows, and multi-channel inventory sync — we help you sell more everywhere.",
        features: ["Custom Storefront Development", "Cart Abandonment Recovery", "Multi-Channel Inventory Sync", "Automated Checkout & Payments", "AI Product Recommendations", "Customer Order Portals"],
        useCases: [
            { title: "D2C Brands", desc: "Automated cart recovery, customer loyalty campaigns, sales flows" },
            { title: "B2B Wholesalers", desc: "Bulk pricing engine, client portals, custom invoicing" },
            { title: "Retail Stores", desc: "Seamless online-offline inventory synchronization" },
            { title: "Global Merchants", desc: "Multi-currency checkout, localized shipping, local tax sync" }
        ],
        stats: [{ label: "Conversion rate increase", value: "35%" }, { label: "Cart recovery rate", value: "22%" }, { label: "Operational efficiency", value: "50%" }],
        services: ["Custom Storefronts", "Cart Recovery", "Inventory Sync", "AI Recommendations"],
    },
];

export interface CategoryMeta {
    id: string;
    label: string;
    description: string;
    accentClass: string;
    bgClass: string;
    borderClass: string;
    textClass: string;
    pillClass: string;
}

export const categoryMeta: Record<string, CategoryMeta> = {
    "ai-tech": {
        id: "ai-tech", label: "AI & Technology",
        description: "Advanced AI, data, automation, and immersive technology solutions for modern businesses.",
        accentClass: "bg-blue-500", bgClass: "bg-blue-50", borderClass: "border-blue-200",
        textClass: "text-blue-700", pillClass: "bg-blue-50 border-blue-200 text-blue-700",
    },
    "business-growth": {
        id: "business-growth", label: "Business Growth",
        description: "Strategic services that help businesses launch, scale, improve operations, and grow faster.",
        accentClass: "bg-amber-500", bgClass: "bg-amber-50", borderClass: "border-amber-200",
        textClass: "text-amber-700", pillClass: "bg-amber-50 border-amber-200 text-amber-700",
    },
    "industry": {
        id: "industry", label: "Industry Solutions",
        description: "Industry-focused solutions built for specific business operations and market needs.",
        accentClass: "bg-teal-500", bgClass: "bg-teal-50", borderClass: "border-teal-200",
        textClass: "text-teal-700", pillClass: "bg-teal-50 border-teal-200 text-teal-700",
    },
    "creative": {
        id: "creative", label: "Creative & Brand",
        description: "Creative, media, branding, and customer engagement services that help businesses stand out.",
        accentClass: "bg-purple-500", bgClass: "bg-purple-50", borderClass: "border-purple-200",
        textClass: "text-purple-700", pillClass: "bg-purple-50 border-purple-200 text-purple-700",
    },
};

export const categoryOrder = ["ai-tech", "business-growth", "industry", "creative"];

export const getDomainsByCategory = (categoryId: string) =>
    domains.filter(d => d.categoryId === categoryId);
