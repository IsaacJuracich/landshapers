import Image from "next/image";
import AOSExamples from "./components/examples/AOSExamples";
import FramerExamples from "./components/examples/FramerExamples";
import MetaPixelExamples from "./components/examples/MetaPixelExamples";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8" data-aos="fade-up">
          <Image
            className="mx-auto dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <h1
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Animation Template
        </h1>

        <p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          A comprehensive Next.js template showcasing AOS (Animate On Scroll),
          Framer Motion animations, and Meta Pixel tracking with TypeScript,
          Tailwind CSS, and best practices.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="#aos-examples"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View AOS Examples
          </a>
          <a
            href="#framer-examples"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-semibold"
          >
            View Framer Motion Examples
          </a>
          <a
            href="#meta-pixel-examples"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors font-semibold"
          >
            View Meta Pixel Examples
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          What's Included
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">AOS Animations</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Scroll-triggered animations with customizable options
            </p>
          </div>

          <div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Framer Motion</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Advanced animations with physics-based motion
            </p>
          </div>

          <div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">TypeScript</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full type safety and excellent developer experience
            </p>
          </div>

          <div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-cyan-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Utility-first CSS framework for rapid UI development
            </p>
          </div>
        </div>
      </section>

      {/* AOS Examples Section */}
      <section id="aos-examples" className="container mx-auto px-4">
        <AOSExamples />
      </section>

      {/* Framer Motion Examples Section */}
      <section id="framer-examples" className="container mx-auto px-4">
        <FramerExamples />
      </section>

      {/* Meta Pixel Examples Section */}
      <section id="meta-pixel-examples" className="container mx-auto px-4">
        <MetaPixelExamples />
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16 text-center">
        <div
          className="border-t border-gray-200 dark:border-gray-700 pt-8"
          data-aos="fade-up"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Built with Next.js, TypeScript, Tailwind CSS, AOS, Framer Motion,
            and Meta Pixel
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Next.js
            </a>
            <a
              href="https://michalsnik.github.io/aos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              AOS
            </a>
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Framer Motion
            </a>
            <a
              href="https://developers.facebook.com/docs/meta-pixel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Meta Pixel
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
