"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ContributionDay = {
  date: string;
  contributionCount: number;
};

export default function Activity() {
  const username = "KAMAL-02";

  const [data, setData] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch(
          `https://github-contributions-api.deno.dev/${username}.json`
        );
        const json = await res.json();

        const flat = json.contributions.flat();
        setData(flat);
      } catch (err) {
        console.error("Failed to load GitHub activity", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const getColor = (count: number) => {
    if (count === 0) return "bg-zinc-800";
    if (count < 3) return "bg-green-900";
    if (count < 6) return "bg-green-800";
    if (count < 10) return "bg-green-700";
    return "bg-green-600";
  };

  return (
    <section className="mt-12 px-4">
      {/* Header with WakaTime badge */}
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-lg font-semibold text-zinc-50">Activity</h2>
          <Image
            src="https://wakatime.com/badge/user/65a06771-ec54-4090-83a9-8daf9c0b7655.svg"
            alt="WakaTime coding activity"
            width={120}
            height={20}
            className="h-5 w-auto"
          />
      </div>

      {loading ? (
        <p className="text-sm text-zinc-400">Loading activity…</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900 p-4">
          <div className="grid grid-flow-col grid-rows-7 gap-0.5 min-w-130">
            {data.map((day) => (
              <div
                key={day.date}
                title={`${day.contributionCount} contributions on ${day.date}`}
                className={`h-2.5 w-2.5 ${getColor(day.contributionCount)}`}
              />
            ))}
          </div>
        </div>
      )}

      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm text-zinc-400 hover:text-emerald-400 transition"
      >
        View on GitHub →
      </a>
    </section>
  );
}
