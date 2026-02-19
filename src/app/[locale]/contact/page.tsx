import { T } from "gt-next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200 flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <T>
          <h1 className="text-3xl font-bold text-neutral-100 mb-4">Contact</h1>
          <p className="text-base text-neutral-400 mb-12 max-w-2xl leading-relaxed">
            Interested in working together or have a question? Send me a message
            using the form below.
          </p>
        </T>

        <T>
          <form className="max-w-xl space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-lg hover:bg-white transition-colors"
            >
              Send message
            </button>
          </form>
        </T>
      </main>
      <Footer />
    </div>
  );
}
