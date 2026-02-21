import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <T>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>
              Built with{" "}
              <a href="https://nextjs.org" className="underline hover:text-neutral-300" target="_blank" rel="noopener noreferrer">Next.js</a>
              {" "}and{" "}
              <a href="https://generaltranslation.com" className="underline hover:text-neutral-300" target="_blank" rel="noopener noreferrer">General Translation</a>
            </p>
            <p>
              Styled with{" "}
              <a href="https://tailwindcss.com" className="underline hover:text-neutral-300" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
              {" "}&middot; Deployed on{" "}
              <a href="https://vercel.com" className="underline hover:text-neutral-300" target="_blank" rel="noopener noreferrer">Vercel</a>
            </p>
          </div>
        </T>
      </div>
    </footer>
  );
}
