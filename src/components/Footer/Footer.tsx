function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[var(--border)]
        px-[5%]
        py-10
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[var(--accent)]/5
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1280px]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <a
              href="#home"
              aria-label="Back to home"
              className="
                inline-flex
                items-center
                text-xl
                font-black
                tracking-[-0.08em]
                text-[var(--text)]
                transition-colors
                duration-200
                hover:text-[var(--accent)]
              "
            >
              KD
            </a>

            <p
              className="
                mt-4
                max-w-[380px]
                text-sm
                leading-6
                text-[var(--secondary)]
              "
            >
              I build clean and simple digital
              experiences with code, design, and a
              little bit of creativity.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/darbz0423"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-10
                items-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                px-4
                text-sm
                font-medium
                text-[var(--secondary)]
                transition-colors
                duration-200
                hover:border-[var(--primary)]
                hover:bg-[var(--primary)]
                hover:text-[var(--background)]
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
                  clipRule="evenodd"
                />
              </svg>

              GitHub

              <span>↗</span>
            </a>

            <a
              href="https://www.facebook.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                flex
                h-10
                items-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                px-4
                text-sm
                font-medium
                text-[var(--secondary)]
                transition-colors
                duration-200
                hover:border-[var(--primary)]
                hover:bg-[var(--primary)]
                hover:text-[var(--background)]
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z" />
              </svg>

              Facebook

              <span>↗</span>
            </a>
          </div>
        </div>

        <div
          className="
            mt-10
            flex
            flex-col
            gap-3
            border-t
            border-[var(--border)]
            pt-6
            text-xs
            text-[var(--secondary)]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {currentYear} Khen Darby Baruc.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="
              group
              inline-flex
              items-center
              gap-2
              transition-colors
              duration-200
              hover:text-[var(--text)]
            "
          >
            Back to top

            <span
              className="
                transition-transform
                duration-200
                group-hover:-translate-y-1
              "
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;