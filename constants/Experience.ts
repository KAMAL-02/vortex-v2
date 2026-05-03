export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  duration: string;
  details: string[];
  techStack: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    company: "Living Things",
    role: "Full Stack Engineer",
    duration: "Nov 2024 – Present",
    techStack: [
      "React",
      "Angular",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "MQTT",
      "WebSockets",
      "Grafana",
      "Docker",
      "ArgoCD",
      "CI/CD"
    ],
    details: [
      "Architected and deployed a centralized Single Sign-On (SSO) system integrating 5+ internal applications, reducing authentication overhead by 60% and improving user access consistency.",
      "Established a scalable Role-Based Access Control (RBAC) framework covering 100+ APIs and UI components, strengthening security compliance and reducing unauthorized access incidents by 40%.",
      "Engineered a centralized audit logging platform aggregating 100K+ monthly API events into Grafana Loki, including development of a reusable internal npm package used across 4+ services.",
      "Built CDC pipelines to synchronize 20+ collections between MongoDB and PostgreSQL and authoredcross-database recovery scripts to repair 1,000+ corrupted records, ensuring near real-time dataconsistency and improving data reliability across systems.",
      "Implemented backend services processing 100K+ daily telemetry events via MQTT and WebSockets, enabling real-time device monitoring and automated notifications through NodeMailer with 99.9% delivery reliability.",
      "Developed backend systems supporting PAN-India installations, streamlining technician workflows and reducing installation turnaround time by 30%.",
      "Led migration of 30+ critical tables across MongoDB → PostgreSQL → Snowflake, performing schemamapping, full data restoration, indexing, and schema optimization, improving query performance by 60% andenabling scalable analytical workloads",
      "Optimized backend APIs and SQL queries using indexing, query tuning, and Memcache-based caching,reducing average response time from 600 ms to 50 ms and improving system reliability and scalability.",
      "Implemented agentic AI workflows to automate IoT device provisioning and analyze 100k+ MQTT telemetrystreams, extracting actionable insights and reducing manual intervention in deployment and monitoring pipelinesby 50%",
      "Engineered Snowflake stored procedures to process real-time streaming data ingested via Kafka connector, applying transformation logic and routing events into appropriate target tables for reliable, structured data storage.",
    ],
  },
  {
  id: "2",
  company: "Autonmis",
  role: "Full Stack Intern",
  duration: "Aug 2024 – Sept 2024",
  techStack: [
    "Next.js",
    "Supabase",
    "PostgreSQL",
    "Apache Airflow",
    "Temporal",
    "Python",
    "SEO",
  ],
  details: [
    "Configured 3+ Apache Airflow DAGs to automate periodic data extraction and processing from backenddatabases, improving pipeline reliability and execution consistency.",
    "Optimized on-page SEO and site performance, improving search visibility and reducing average page load time by 40% through metadata and structural enhancements.",
  ],
}

];
