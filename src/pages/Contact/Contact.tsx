import { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

type FormStatus = "idle" | "sending" | "success" | "error";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!formRef.current) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        "service_kd042306",
        "template_rillsif",
        formRef.current,
        {
          publicKey: "4YSxkI9-tyJ4yLUZS",
        }
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
      setErrorMessage(
        "Unable to send your message. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        px-[5%]
        py-24
        sm:py-32
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[300px]
          w-[300px]
          rounded-full
          bg-[var(--accent)]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[var(--primary)]/5
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1180px]
        "
      >
        <div className="mb-14 max-w-[700px]">
          <p
            className="
              mb-4
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-[var(--accent)]
            "
          >
            Get in touch
          </p>

          <h2
            className="
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-2px]
              text-[var(--text)]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Let's build
            <br />
            something great.
          </h2>

          <p
            className="
              mt-6
              max-w-[570px]
              text-base
              leading-7
              text-[var(--secondary)]
              sm:text-lg
            "
          >
            Have a project, idea, or just want to
            say hello? Send me a message and I'll
            get back to you when I can.
          </p>
        </div>

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-16
          "
        >
          <div
            className="
              flex
              flex-col
              justify-between
              gap-10
            "
          >
            <div>
              <p
                className="
                  mb-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--accent)]
                "
              >
                Email
              </p>

              <a
                href="mailto:darbybaruc06@gmail.com"
                className="
                  group
                  inline-flex
                  max-w-full
                  items-center
                  gap-2
                  break-all
                  text-lg
                  font-semibold
                  text-[var(--text)]
                  transition-colors
                  duration-200
                  hover:text-[var(--accent)]
                  sm:text-xl
                "
              >
                <span>
                  darbybaruc06@gmail.com
                </span>

                <span
                  className="
                    shrink-0
                    transition-transform
                    duration-200
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </a>
            </div>

            <div
              className="
                rounded-[22px]
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-6
              "
            >
              <div
                className="
                  mb-4
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-3
                    w-3
                    rounded-full
                    bg-[var(--accent)]
                  "
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    text-[var(--text)]
                  "
                >
                  Available for opportunities
                </span>
              </div>

              <p
                className="
                  text-sm
                  leading-6
                  text-[var(--secondary)]
                "
              >
                I'm open to collaborations,
                freelance work, and opportunities
                where I can learn and contribute.
              </p>
            </div>

            <div>
              <p
                className="
                  mb-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--accent)]
                "
              >
                Find me
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/darbz0423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-[14px]
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-[var(--text)]
                    transition-colors
                    duration-200
                    hover:border-[var(--primary)]
                    hover:bg-[var(--primary)]
                    hover:text-[var(--background)]
                    active:scale-[0.98]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span>GitHub</span>

                  <span
                    className="
                      text-xs
                      opacity-50
                      transition-opacity
                      duration-200
                      group-hover:opacity-100
                    "
                  >
                    ↗
                  </span>
                </a>

                <a
                  href="https://www.facebook.com/kdarbz.baruc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-[14px]
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-[var(--text)]
                    transition-colors
                    duration-200
                    hover:border-[var(--primary)]
                    hover:bg-[var(--primary)]
                    hover:text-[var(--background)]
                    active:scale-[0.98]
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z" />
                  </svg>

                  <span>Facebook</span>

                  <span
                    className="
                      text-xs
                      opacity-50
                      transition-opacity
                      duration-200
                      group-hover:opacity-100
                    "
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="
              rounded-[28px]
              border
              border-[var(--border)]
              bg-[var(--card)]
              p-6
              shadow-[0_20px_60px_var(--shadow)]
              sm:p-8
              lg:p-10
            "
          >
            <div className="mb-6">
              <label
                htmlFor="user_name"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-[var(--text)]
                "
              >
                Name
              </label>

              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
                disabled={status === "sending"}
                className="
                  w-full
                  rounded-[14px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  px-4
                  py-3.5
                  text-sm
                  text-[var(--text)]
                  outline-none
                  placeholder:text-[var(--secondary)]/60
                  transition-[border-color,box-shadow]
                  duration-200
                  focus:border-[var(--primary)]
                  focus:ring-2
                  focus:ring-[var(--primary)]/10
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="user_email"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-[var(--text)]
                "
              >
                Email
              </label>

              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                disabled={status === "sending"}
                className="
                  w-full
                  rounded-[14px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  px-4
                  py-3.5
                  text-sm
                  text-[var(--text)]
                  outline-none
                  placeholder:text-[var(--secondary)]/60
                  transition-[border-color,box-shadow]
                  duration-200
                  focus:border-[var(--primary)]
                  focus:ring-2
                  focus:ring-[var(--primary)]/10
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-[var(--text)]
                "
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                required
                disabled={status === "sending"}
                className="
                  w-full
                  rounded-[14px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  px-4
                  py-3.5
                  text-sm
                  text-[var(--text)]
                  outline-none
                  placeholder:text-[var(--secondary)]/60
                  transition-[border-color,box-shadow]
                  duration-200
                  focus:border-[var(--primary)]
                  focus:ring-2
                  focus:ring-[var(--primary)]/10
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-[var(--text)]
                "
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                required
                disabled={status === "sending"}
                className="
                  w-full
                  resize-none
                  rounded-[14px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  px-4
                  py-3.5
                  text-sm
                  leading-6
                  text-[var(--text)]
                  outline-none
                  placeholder:text-[var(--secondary)]/60
                  transition-[border-color,box-shadow]
                  duration-200
                  focus:border-[var(--primary)]
                  focus:ring-2
                  focus:ring-[var(--primary)]/10
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />
            </div>

            {status === "success" && (
              <div
                role="status"
                className="
                  mb-5
                  flex
                  items-start
                  gap-3
                  rounded-[14px]
                  border
                  border-[var(--border)]
                  bg-[var(--background)]
                  px-4
                  py-3
                  text-sm
                  leading-6
                  text-[var(--text)]
                "
              >
                <span className="font-bold">
                  ✓
                </span>

                <span>
                  Message sent successfully!
                  I'll get back to you soon.
                </span>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="
                  mb-5
                  rounded-[14px]
                  border
                  border-red-500/20
                  bg-red-500/5
                  px-4
                  py-3
                  text-sm
                  leading-6
                  text-red-500
                "
              >
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-[14px]
                bg-[var(--primary)]
                px-6
                py-4
                text-sm
                font-semibold
                text-[var(--background)]
                transition-[transform,box-shadow]
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_12px_30px_var(--shadow)]
                active:translate-y-0
                disabled:cursor-not-allowed
                disabled:opacity-60
                disabled:hover:translate-y-0
              "
            >
              {status === "sending" ? (
                <>
                  <span
                    className="
                      h-4
                      w-4
                      animate-spin
                      rounded-full
                      border-2
                      border-current
                      border-t-transparent
                    "
                  />

                  Sending...
                </>
              ) : (
                <>
                  Send Message

                  <span
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </>
              )}
            </button>

            <p
              className="
                mt-4
                text-center
                text-xs
                leading-5
                text-[var(--secondary)]
              "
            >
              Your message will be sent directly
              to my email.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;