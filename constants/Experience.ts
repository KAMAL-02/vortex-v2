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
      "Developed Change Data Capture (CDC) pipelines to synchronize 15+ collections/tables between MongoDB and PostgreSQL, achieving near real-time data consistency.",
      "Authored cross-database recovery scripts across PostgreSQL and MongoDB, repairing 1000+ corrupted records.",
      "Implemented backend services processing 100K+ daily telemetry events via MQTT and WebSockets, enabling real-time device monitoring and automated notifications through NodeMailer with 99.9% delivery reliability.",
      "Developed backend systems supporting PAN-India installations, streamlining technician workflows and reducing installation turnaround time by 30%.",
      "Contributed to MongoDB to PostgreSQL migration of 20+ critical tables, improving query performance by 50% through indexing and schema optimization.",
      "Optimized backend APIs and SQL queries, reducing average response time from 450ms to under 100ms and improving overall system reliability and scalability.",
      "Integrated agentic AI tools into engineering workflows to automate repetitive tasks including document processing, code generation, and data pipeline scripting, significantly reducing manual effort and accelerating delivery cycles.",
      "Led migration of 15+ tables from MongoDB to Snowflake, performing schema mapping and full data restoration from MongoDB into Snowflake, enabling analytical workloads and structured cloud data access.",
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
    "Implemented data-processing workflows using Apache Airflow, creating DAGs to periodically extract and process data from backend databases.",
    "Explored Temporal as an alternative orchestration solution by building a proof of concept to evaluate workflow reliability, retries, and long-running task handling compared to Airflow.",
    "Improved site SEO by optimizing metadata, page structure, and performance-related factors to enhance search engine visibility.",
  ],
}

];
