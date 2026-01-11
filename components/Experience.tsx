import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { EXPERIENCE } from "@/constants/Experience";

export default function Experience() {
  return (
    <section className="mt-10 px-4">
      <h2 className="mb-3 text-lg font-semibold text-zinc-50">
        Experience
      </h2>

      <div className="relative">
        <div className="absolute left-1.75 top-2 bottom-0 w-0.5 bg-zinc-800" />

        {EXPERIENCE.map((exp, index) => {
          const isCurrent = index === 0;

          return (
            <div key={exp.id} className="relative pl-8 last:pb-0">
              <div className="absolute left-0.5 top-5">
                <div
                  className={`h-3 w-3 rounded-full border-2 ${
                    isCurrent
                      ? "border-green-700 bg-green-500"
                      : "border-zinc-500 bg-zinc-900"
                  }`}
                />
              </div>

              <Accordion
                type="single"
                collapsible
              >
                <AccordionItem
                  value={exp.id}
                  className="px-4"
                >
                  <AccordionTrigger className="py-4 hover:no-underline">
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-medium text-zinc-100">
                        {exp.company} · <span className="text-zinc-400">{exp.role}</span>
                      </span>
                      <span className="pt-1 text-xs text-zinc-500">
                        {exp.duration}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-4 pt-2 text-sm text-zinc-300">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="list-disc space-y-2 pl-4">
                      {exp.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
    </section>
  );
}
