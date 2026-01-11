"use client";

import { BLOGS } from "@/constants/Blog";

export default function Blogs() {

  return (
    <section className="mt-12 px-4">
      <h2 className="mb-4 text-lg font-semibold text-zinc-50">
        Blogs
      </h2>

      <div className="space-y-3">
        {BLOGS.map((blog) => (
          <div
            key={blog.id}
            className="border-b border-zinc-800 px-4 py-3"
          >
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm font-medium text-zinc-100 hover:text-emerald-400 transition"
            >
              {blog.title}
              <svg
                className="h-3.5 w-3.5 translate-y-px opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 3h7v7m0-7L10 14"
                />
              </svg>
            </a>
            <p className="mt-2 text-sm text-zinc-400 line-clamp-1">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-zinc-400">More soon...</p>
    </section>
  );
}
