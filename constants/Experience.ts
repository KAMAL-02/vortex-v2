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
    role: "Full Stack Developer",
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
      "Designed and implemented a centralized Single Sign-On authentication service, integrating multiple existing applications into a unified identity system and establishing a single source of authentication.",
      "Implemented a comprehensive Role-Based Access Control system with role-level, page-level, and element-level authorization to enforce fine-grained access control across backend APIs and frontend components.",
      "Built a centralized audit logging system to capture API-level events from multiple services and stream them to Grafana Loki, including development of a private internal npm package for standardized audit log ingestion.",
      "Developed Change Data Capture pipelines to synchronize data between MongoDB and PostgreSQL using custom Python scripts.",
      "Designed and implemented a time-based scheduling and buffering system for IoT devices using MQTT.",
      "Built backend services ingesting real-time telemetry and propagating live updates via WebSockets.",
      "Collaborated on MongoDB to PostgreSQL migration, including schema design and indexing strategies.",
      "Optimized backend APIs by improving SQL queries, security checks, and system reliability.",
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
    "Improved website SEO by optimizing metadata, page structure, and performance-related factors to enhance search engine visibility.",
  ],
}

];
