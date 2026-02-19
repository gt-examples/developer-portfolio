import { T } from "gt-next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200 flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <T>
          <h1 className="text-3xl font-bold text-neutral-100 mb-8">About</h1>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">
              Background
            </h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                I am a full-stack developer with over eight years of experience
                building web applications and distributed systems. I studied
                computer science at the University of Washington and have worked
                at startups and mid-size companies across fintech, developer
                tooling, and cloud infrastructure.
              </p>
              <p>
                My work focuses on building software that is reliable, easy to
                maintain, and pleasant to use. I care about clean code, thorough
                testing, and clear documentation.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-neutral-300 mb-2">
                  Languages
                </h3>
                <p className="text-sm text-neutral-400">
                  TypeScript, Go, Rust, Python, SQL
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-300 mb-2">
                  Frontend
                </h3>
                <p className="text-sm text-neutral-400">
                  React, Next.js, Tailwind CSS, D3.js
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-300 mb-2">
                  Backend
                </h3>
                <p className="text-sm text-neutral-400">
                  Node.js, PostgreSQL, Redis, gRPC
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-300 mb-2">
                  Infrastructure
                </h3>
                <p className="text-sm text-neutral-400">
                  AWS, GCP, Docker, Kubernetes, Terraform
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-base font-medium text-neutral-100">
                  Senior Software Engineer
                </h3>
                <p className="text-sm text-neutral-500 mb-2">
                  Nimbus Cloud, 2021 to present
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Leading development of the internal deployment platform.
                  Designed the task scheduling system that processes over two
                  million jobs daily. Reduced deployment failures by forty
                  percent through automated rollback detection.
                </p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-base font-medium text-neutral-100">
                  Software Engineer
                </h3>
                <p className="text-sm text-neutral-500 mb-2">
                  Ledger Finance, 2018 to 2021
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Built the real-time transaction monitoring system handling
                  fifty thousand events per second. Developed the customer-facing
                  analytics dashboard used by over three hundred enterprise
                  clients.
                </p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6">
                <h3 className="text-base font-medium text-neutral-100">
                  Junior Developer
                </h3>
                <p className="text-sm text-neutral-500 mb-2">
                  Spark Studios, 2016 to 2018
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Contributed to client web applications and internal tools.
                  Introduced automated testing practices that improved code
                  coverage from thirty to eighty-five percent.
                </p>
              </div>
            </div>
          </section>
        </T>
      </main>
      <Footer />
    </div>
  );
}
