import { T } from "gt-next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200 flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <section className="mb-16">
          <T>
            <h1 className="text-3xl font-bold text-neutral-100 mb-4">
              Full-stack developer building reliable software
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
              I design and build web applications, developer tools, and
              distributed systems. Focused on clean architecture, performance,
              and developer experience.
            </p>
          </T>
        </section>

        <section className="mb-12">
          <T>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold text-neutral-100">
                Featured Projects
              </h2>
              <Link
                href="/projects"
                className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                View all projects
              </Link>
            </div>
          </T>
          <div className="grid gap-6">
            <T>
              <article className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-lg font-medium text-neutral-100 mb-2">
                  Cloud Infrastructure CLI
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  A command-line tool for managing multi-cloud deployments.
                  Supports AWS, GCP, and Azure with unified configuration and
                  rollback capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Go</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">AWS</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">GCP</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Azure</span>
                </div>
              </article>
            </T>
            <T>
              <article className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-lg font-medium text-neutral-100 mb-2">
                  Real-time Analytics Dashboard
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  A web dashboard for monitoring application performance metrics
                  in real time. Built with streaming data pipelines and
                  interactive visualizations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">TypeScript</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">React</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">WebSocket</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">D3</span>
                </div>
              </article>
            </T>
            <T>
              <article className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
                <h3 className="text-lg font-medium text-neutral-100 mb-2">
                  Distributed Task Scheduler
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  A fault-tolerant job scheduler that distributes work across
                  multiple nodes. Features priority queues, retry logic, and dead
                  letter handling.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Rust</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Redis</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">gRPC</span>
                </div>
              </article>
            </T>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
