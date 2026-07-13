import { WorkExperience, Education, Project, BlogPost, Testimonial } from "./types";

export const PERSONAL_INFO = {
  name: "Kajana Pakirathan",
  title: "Computer Science Student & IT Specialist",
  location: "London, United Kingdom",
  email: "kajanakannan12@gmail.com",
  phone: "07541984703",
  linkedin: "https://linkedin.com/in/kajana-pakirathan",
  github: "https://github.com/kajana-pakirathan", // standard fallback profile
  bio: "Computer Science student at the University of East London with hands-on experience in IT support, network systems, insurance processes, and customer service. Confident using Microsoft Office, Cisco networking tools, and modern web technologies. Reliable, highly organized, and driven by a strong desire to solve challenging real-world problems. Looking for opportunities in tech, digital marketing, and business-focused roles.",
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "exp1",
    role: "Trading Assistant",
    company: "Sainsbury's",
    location: "London",
    period: "Feb 2026 – Present",
    bullets: [
      "Support daily shop operations and monitor stock levels across major departments to ensure optimal availability.",
      "Maintain product availability, set up accurate and appealing shelf displays, and analyze sales reports to flag discrepancies.",
      "Work closely with a cross-functional team of colleagues to keep shop operations organized, secure, and running efficiently."
    ],
    skillsGained: ["Teamwork", "Customer Service", "Organization", "Inventory Management", "Problem Solving"]
  },
  {
    id: "exp2",
    role: "Intern",
    company: "Howden Insurance Brokers Ltd",
    location: "London",
    period: "Jun 2025 – Jul 2025",
    bullets: [
      "Audited invoices, payments, and receipt records to ensure financial compliance and accurate bookkeeping.",
      "Assisted with financial settlements and insurer payments, maintaining clean transaction records using specialized IBA systems.",
      "Responded to accounting queries with high speed and accuracy while strictly following standard company compliance protocols."
    ],
    skillsGained: ["Attention to Detail", "IBA Systems", "Financial Auditing", "Professional Communication", "Compliance"]
  },
  {
    id: "exp3",
    role: "Trainee IT Support Technician",
    company: "21CS",
    location: "London",
    period: "Jan 2025 – Apr 2025",
    bullets: [
      "Diagnosed and resolved hardware and software bottlenecks on Windows enterprise computers.",
      "Installed, configured, and optimized Operating Systems (Windows 10/11) and vital business application suites.",
      "Provided user-friendly technical support and assisted teammates with day-to-day IT troubleshooting tasks."
    ],
    skillsGained: ["Windows IT Support", "Hardware Diagnostics", "OS Deployment", "Problem Solving", "Technical Support"]
  },
  {
    id: "exp4",
    role: "Waitress & Social Media Assistant",
    company: "Kachori Restaurant",
    location: "London",
    period: "Feb 2023 – Mar 2025",
    bullets: [
      "Delivered world-class customer service in a busy, high-energy environment while managing digital delivery orders and inquiries.",
      "Promoted the brand online, generating creative content for social media and orchestrating local community events.",
      "Coordinated with the kitchen and front-of-house staff to sustain peak workflow and client satisfaction."
    ],
    skillsGained: ["Social Media Marketing", "Customer Engagement", "Event Coordination", "Time Management", "Multi-tasking"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "edu1",
    degree: "BSc (Hons) Computer Science",
    institution: "University of East London",
    period: "Sep 2025 – Present",
    details: "Focusing on advanced algorithms, software engineering, databases, and network architectures."
  },
  {
    id: "edu2",
    degree: "Certificate of Higher Education: Computing",
    institution: "University of Wales Trinity Saint David",
    period: "Jun 2024 – Jun 2025",
    details: "Groundwork in computer hardware, fundamental programming, and introductory network systems."
  },
  {
    id: "edu3",
    degree: "Level 3 Extended Diploma in Information Technology",
    institution: "Newham College",
    period: "Sep 2023 – Apr 2024",
    details: "Specialized in user support, systems analysis, and hands-on IT operations."
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "proj1",
    title: "Cisco Packet Tracer Network Design",
    description: "Designed, simulated, and stress-tested a multi-subnet corporate network environment for university coursework.",
    bullets: [
      "Configured secure routers, switches, DHCP servers, and firewalls.",
      "Implemented dynamic VLAN routing and verified network stability through end-to-end ICMP ping routing paths.",
      "Documented IP addressing schemas, DNS configurations, and system subnet topologies."
    ],
    tags: ["Cisco Packet Tracer", "Subnetting", "VLAN Routing", "DNS & TCP/IP", "Network Security"],
    iconName: "Network"
  },
  {
    id: "proj2",
    title: "Full-Stack Web Portfolio Application",
    description: "Created a modular, fully interactive web application to showcase professional certifications and dynamic project state.",
    bullets: [
      "Crafted an elegant front-end layout utilizing robust HTML, CSS, and interactive JavaScript components.",
      "Integrated secure web state management features to optimize component hydration.",
      "Designed fully responsive view layouts customized across modern mobile and desktop viewports."
    ],
    tags: ["HTML & CSS", "JavaScript", "Full-Stack", "Responsive UI", "Web Standards"],
    iconName: "Globe"
  },
  {
    id: "proj3",
    title: "SimNet Office Specialist Certifications",
    description: "Achieved specialist-level training badges indicating high-level mastery over standard office administration tool suites.",
    bullets: [
      "Completed 70+ cumulative hours of simulated practical examinations.",
      "Certified with Microsoft Office Specialist badges in Word, Excel, and PowerPoint.",
      "Optimized document layouts, created relational formulas in Excel, and built professional pitch decks."
    ],
    tags: ["Microsoft Office", "Excel Formulas", "Data Presentation", "Office Automation"],
    iconName: "FileSpreadsheet"
  },
  {
    id: "proj4",
    title: "Food Safety & Regulatory Compliance",
    description: "Certified training validation verifying expertise in regulatory requirements, service quality, and process compliance.",
    bullets: [
      "Mastered safety regulations and operational cleanliness requirements.",
      "Applied strict service-quality controls during high-volume customer engagements.",
      "Leveraged organized workflow habits to guarantee total compliance."
    ],
    tags: ["Regulatory Compliance", "Quality Control", "Service Standards"],
    iconName: "ShieldCheck"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog1",
    title: "My Journey into Computer Science: Embracing Curiosity",
    summary: "Reflecting on my transition from hands-on IT support and customer service to full-time Computer Science studies at the University of East London.",
    content: `Starting a degree in Computer Science is one of the most exciting choices I've ever made. For years, I enjoyed working with computers—whether troubleshooting a hardware crash, helping a coworker configure an operating system, or managing dynamic orders. But I always wanted to understand what was happening under the hood.

At the University of East London, I am finally diving deep into the code, algorithms, and logic that power modern apps. In this blog, I want to share my reflections on how customer-facing roles at Sainsbury's and Kachori have shaped my outlook on building software.

### The Human Side of Technology
One thing many people forget about Computer Science is that software is built for *people*. My experience as a Trading Assistant and Waitress taught me how people interact with interfaces. When a stock management system is slow or counter-intuitive, it slows down real work.

By keeping the user's experience in mind, I want to write programs that are not just technically sound, but genuinely useful, simple, and intuitive.

### What lies ahead
Over the next few semesters, I will be writing about network security, web protocols, and modern development stacks. I hope you'll join me on this journey as I continue to share insights!`,
    date: "July 12, 2026",
    readTime: "3 min read",
    category: "Career",
    tags: ["Computer Science", "UEL", "Student Life"]
  },
  {
    id: "blog2",
    title: "A Deep Dive into Subnetting and Cisco Network Topologies",
    summary: "Breaking down my experience designing secure corporate subnets and troubleshooting packet loss using Cisco Packet Tracer.",
    content: `For my university coursework, I had the opportunity to design a complete network system using **Cisco Packet Tracer**. This project was a major highlight, allowing me to bridge the gap between abstract networking concepts (like TCP/IP headers, routing tables) and real-world configurations.

Here is a breakdown of how I approached designing the corporate subnet:

1. **Defining the Requirements**: The network needed to support three separate departments: Finance, Support, and guest Wi-Fi.
2. **Subnetting (VLSM)**: To avoid wasting valuable IP addresses, I used Variable Length Subnet Masking (VLSM). Starting with a private Class C IP block, I calculated the exact mask sizes required for each department.
3. **VLAN Configuration**: I isolated the subnets using VLANs on Cisco Catalyst switches, ensuring that guest traffic couldn't interface with internal database records.
4. **Testing and Verification**: I used dynamic static routing and checked path stability using end-to-end ICMP ping sweeps.

### What I Learned
Through this project, I realized that solid network architecture is the foundation of any cloud service. Understanding DNS, TCP/IP, and firewall configurations makes me a far more effective full-stack developer.

In future articles, I plan to explore how we can deploy these concepts inside virtual cloud environments like Google Cloud Platform!`,
    date: "June 25, 2026",
    readTime: "5 min read",
    category: "Networking",
    tags: ["Cisco", "Subnetting", "DNS", "TCP/IP"]
  },
  {
    id: "blog3",
    title: "The Power of Social Media Marketing in Modern Business",
    summary: "How blending customer engagement with data analytics helped promote Kachori Restaurant during my time as a Social Media Assistant.",
    content: `Technology isn't just about writing code in a dark room; it is about connecting people. During my time as a Waitress & Social Media Assistant at Kachori Restaurant, I learned how powerful digital marketing can be when backed by structured teamwork.

### Creativity Meets Data
Social media assistant tasks are often seen as purely creative, but they are highly analytical:
- **Tracking Engagement**: We looked at metrics (clicks, views, reservations) to see which posts brought customers into the restaurant.
- **Timing & Delivery**: Much like network latency, post timing matters! We mapped customer traffic trends to target our promotions right when people were looking for dinner plans.
- **Managing Digital Portals**: Coordinating digital orders and incoming queries taught me how to handle multi-channel inputs efficiently.

This blending of customer-facing communication and analytics is incredibly valuable. It has made me a better collaborator and gives me a unique perspective on user engagement that I carry into my computer science projects.`,
    date: "May 10, 2026",
    readTime: "4 min read",
    category: "Marketing",
    tags: ["Digital Marketing", "Social Media", "Customer Service"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "IT Infrastructure Lead",
    role: "Senior Trainer",
    company: "21CS London",
    text: "Kajana showed immense focus during her IT Support training. She was persistent with hardware diagnostics, solved complex Windows problems independently, and maintained an outstanding attitude toward support cases.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test2",
    name: "Operations Manager",
    role: "General Manager",
    company: "Kachori Restaurant London",
    text: "Kajana is highly organized, reliable, and possessed an incredible knack for managing both busy customer rushes and our social media channels. Her communication and attention to detail helped us grow our digital presence significantly.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test3",
    name: "Finance Supervisor",
    role: "Team Lead",
    company: "Howden Insurance Brokers",
    text: "During her internship, Kajana demonstrated incredible precision while auditing financial transactions and comparing invoices in our IBA systems. She followed our rigid compliance procedures to the letter.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const TECHNICAL_SKILLS = [
  { name: "HTML & CSS", level: 90 },
  { name: "Cisco Packet Tracer", level: 85 },
  { name: "DNS & TCP/IP", level: 80 },
  { name: "Microsoft Office", level: 95 },
  { name: "Windows IT Support", level: 85 },
  { name: "Social Media", level: 90 },
  { name: "TypeScript / JavaScript", level: 75 },
];

export const PROFESSIONAL_SKILLS = [
  "Communication",
  "Customer Service",
  "Teamwork",
  "Problem Solving",
  "Organisation",
  "Attention to Detail"
];
