import { Button } from "~/components/ui/Button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          TRC <span className="text-[hsl(280,100%,70%)]">Paver</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Button>
            Primary Button
          </Button>
          <Button variant="secondary">
            Secondary Button
          </Button>
        </div>
      </div>
    </main>
  );
}
