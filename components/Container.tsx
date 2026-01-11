export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex justify-center py-8">
      <div
        className="
          w-full
          max-w-md
          sm:max-w-lg
          md:max-w-xl
          lg:max-w-2xl
        "
      >
        {children}
      </div>
    </div>
  );
}
