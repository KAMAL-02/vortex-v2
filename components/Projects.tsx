"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { PROJECTS } from "@/constants/Project";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);
  const hasMore = PROJECTS.length > 3;

  return (
    <section className="mt-12 px-4">
      <h2 className="mb-6 text-lg font-semibold text-zinc-50">Projects</h2>
      {/* To preload video */}
      <div className="hidden">
        {displayedProjects.map(
          (project) =>
            project.demoVideo && (
              <video
                key={project.id}
                src={project.demoVideo}
                preload="auto"
                muted
                playsInline
              />
            )
        )}
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {displayedProjects.map((project) => (
          <AccordionItem
            key={project.id}
            value={project.id}
            className="border-zinc-800 border-b bg-zinc-900"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <div className="flex w-full items-start justify-between gap-4">
                <div className="flex flex-col text-left gap-1">
                  <span className="text-sm font-medium text-zinc-100">
                    {project.name}
                  </span>

                  <span className="text-xs text-zinc-300">
                    {project.tagline}
                  </span>

                  <span className="text-xs text-zinc-400 line-clamp-2">
                    {project.shortDescription}
                  </span>
                </div>

                <div
                  className="flex shrink-0 gap-3 pt-1 text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-emerald-400 transition"
                    >
                      Code
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-emerald-400 transition"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </AccordionTrigger>

            {/* Expanded Content */}
            <AccordionContent className="px-4 pb-5 pt-2 text-sm text-zinc-300">
              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {(project.demoVideo || project.imageSrc) && (
                    <div className="flex-1">
                      <div className="group relative flex cursor-pointer flex-col gap-1 rounded-lg border border-zinc-700/50 bg-zinc-950 p-1 shadow-2xl">
                        <div className="flex items-center justify-start">
                          <div className="flex gap-1 px-1 py-0.5">
                            <div className="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500"></div>
                            <div className="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500"></div>
                            <div className="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500"></div>
                          </div>
                          <div className="flex flex-1 justify-center">
                            <div className="w-36 -translate-x-3 overflow-hidden truncate rounded bg-zinc-800/50 text-center text-[8px] text-zinc-400">
                              {project.name}
                            </div>
                          </div>
                        </div>

                        {/* Media content */}
                        <div className="overflow-hidden rounded">
                          {project.demoVideo ? (
                            <video
                              src={project.demoVideo}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full"
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex-1">
                    <h4 className="mb-3 text-xs font-medium text-zinc-400">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300 border border-zinc-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Section title="Problem">{project.problem}</Section>
                <Section title="Solution">{project.solution}</Section>
                <Section title="Architecture">
                  <ul className="list-disc space-y-1 pl-4">
                    {project.architecture.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Section>
                <Section title="Key Features">
                  <ul className="list-disc space-y-1 pl-4">
                    {project.keyFeatures.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Section>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {hasMore && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer flex items-center gap-2 py-3 text-sm text-zinc-400 hover:text-emerald-400 transition"
          >
            {showAll ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 12H6"
                  />
                </svg>
                View Less
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                View More
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

function Section({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: string;
}) {
  return (
    <div className="pl-4">
      <h4 className="mb-2 text-sm font-medium text-zinc-200 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {title}
      </h4>
      <div className="text-sm text-zinc-400 leading-relaxed">{children}</div>
    </div>
  );
}
