export type Blog = {
  id: string;
  title: string;
  description: string;
  link: string;
  publishedDate: string;
  author?: string;
};

export const BLOGS: Blog[] = [
  {
    id: "sql-internal",
    title: "Internal Working of SQL",
    description:
      "SQL is one of the most widely used database languages, and many use it to query, fetch, or update data. But have you ever wondered what actually happens under the hood when you run a SQL query?",
    link: "https://medium.com/@kamal-02/internal-working-of-sql-7a8fe6342fbd",
    publishedDate: "June 30, 2025",
    author: "Kamal",
  },
];
