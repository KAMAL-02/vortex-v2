export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800 px-4 py-6">
      <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-zinc-500 sm:flex-row">
        <span>
          @{new Date().getFullYear()} Kamal.
        </span>
      </div>
    </footer>
  );
}
