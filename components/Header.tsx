import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import headerImg from '@/public/header.jpg'
import avatarImg from '@/public/avatar.jpg'

export default function Header() {
  return (
    <header className="relative">
      {/* Banner */}
      <div className="relative h-36 w-full overflow-hidden rounded-t-2xl bg-zinc-900">
        <Image
          src={headerImg}
          alt="Profile banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Profile Section */}
      <div className="relative px-4 pb-4">
        <div className="absolute -top-14 left-4">
          <div className="h-28 w-28 rounded-full border-4 border-zinc-950 bg-zinc-900 overflow-hidden">
            <Image
              src={avatarImg}
              alt="Profile avatar"
              width={112}
              height={112}
              className="object-cover"
              priority
              quality={90}
            />
          </div>
        </div>
        <div className="pt-16">
          <h1 className="text-xl font-semibold text-zinc-100">Kamal</h1>
          <p className="text-sm text-zinc-400">@Kamal___Dev</p>

          <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
            Full-stack engineer focused on building scalable web systems.
            Experienced with React, Next.js, Node.js, and distributed backends.
          </p>

          <div className="mt-3 flex items-center flex-wrap gap-3 text-sm text-zinc-400">
            <a
              href="https://github.com/KAMAL-02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              Github
            </a>

            <Separator orientation="vertical" className="h-4! bg-zinc-400!" />

            <a
              href="https://www.linkedin.com/in/kamal12/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              LinkedIn
            </a>

            <Separator orientation="vertical" className="h-4! bg-zinc-400!" />

            <a
              href="https://x.com/Kamal__Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
            Twitter
            </a>
            <Separator orientation="vertical" className="h-4! bg-zinc-400!" />

            <a
              href="https://drive.google.com/file/d/1tANU4VQ5Et6gJQCG0PAK2oO3TzaVBqo3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
            Resume
            </a>

            <Separator orientation="vertical" className="h-4! bg-zinc-400!" />

            <a
              href="mailto:kamalnayan403@gmail.com"
              className="hover:text-emerald-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
