import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <T>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>Built with Next.js and General Translation</p>
            <p>All content translated with gt-next</p>
          </div>
        </T>
      </div>
    </footer>
  );
}
