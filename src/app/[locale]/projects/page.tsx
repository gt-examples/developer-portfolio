import { T } from "gt-next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200 flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <T>
          <h1 className="text-3xl font-bold text-neutral-100 mb-4">
            Projects
          </h1>
          <p className="text-base text-neutral-400 mb-12 max-w-2xl leading-relaxed">
            A selection of projects I have built or contributed to. Each one
            reflects a focus on reliability, performance, and thoughtful design.
          </p>
        </T>

        <div className="grid gap-6">
          <T>
            <article className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-lg font-medium text-neutral-100">Cloud Infrastructure CLI</h2>
                <span className="text-xs text-neutral-500 shrink-0 ml-4">2024</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                A command-line tool for managing multi-cloud deployments. Supports AWS, GCP, and Azure with unified configuration and rollback capabilities. Written in Go with extensive plugin support.
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
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-lg font-medium text-neutral-100">Real-time Analytics Dashboard</h2>
                <span className="text-xs text-neutral-500 shrink-0 ml-4">2023</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                A web dashboard for monitoring application performance metrics in real time. Built with streaming data pipelines and interactive visualizations. Handles thousands of concurrent connections.
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
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-lg font-medium text-neutral-100">Distributed Task Scheduler</h2>
                <span className="text-xs text-neutral-500 shrink-0 ml-4">2023</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                A fault-tolerant job scheduler that distributes work across multiple nodes. Features priority queues, retry logic, and dead letter handling. Processes over two million jobs daily in production.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Rust</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Redis</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">gRPC</span>
              </div>
            </article>
          </T>
          <T>
            <article className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-lg font-medium text-neutral-100">API Gateway Framework</h2>
                <span className="text-xs text-neutral-500 shrink-0 ml-4">2022</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                A lightweight API gateway with built-in rate limiting, authentication, and request transformation. Designed for microservice architectures with minimal configuration overhead.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Go</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Redis</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Docker</span>
              </div>
            </article>
          </T>
          <T>
            <article className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-lg font-medium text-neutral-100">Transaction Monitoring System</h2>
                <span className="text-xs text-neutral-500 shrink-0 ml-4">2021</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                A real-time system for detecting suspicious financial transactions. Processes fifty thousand events per second with sub-second alerting. Used by enterprise clients across multiple industries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Python</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Kafka</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">PostgreSQL</span>
              </div>
            </article>
          </T>
          <T>
            <article className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-lg font-medium text-neutral-100">Developer Documentation Generator</h2>
                <span className="text-xs text-neutral-500 shrink-0 ml-4">2020</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                A tool that generates interactive API documentation from source code annotations. Supports multiple languages and outputs searchable static sites with live code examples.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">TypeScript</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">Node.js</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300">MDX</span>
              </div>
            </article>
          </T>
        </div>
      </main>
      <Footer />
    </div>
  );
}
