import Button from "@/components/Button/Button";
import profileImage from "@/assets/images/Profile.jpg";

function Home() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-[5%] pb-20 pt-32">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/70 px-4 py-2 text-xs font-semibold text-[var(--secondary)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Available for opportunities
          </div>

          <p className="mb-3 text-lg font-medium text-[var(--secondary)]">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-[1.02] tracking-[-3px] sm:text-6xl md:text-7xl lg:text-[78px]">
            Khen Darby
            <span className="block text-[var(--accent)]">Baruc.</span>
          </h1>

          <h2 className="mt-7 text-xl font-semibold text-[var(--text)] sm:text-2xl">
            Frontend Developer & IT Student
          </h2>

          <p className="mx-auto mt-5 max-w-[580px] text-base leading-8 text-[var(--secondary)] lg:mx-0">
            I build clean, responsive, and user-focused digital experiences with modern web technologies, thoughtful design, and a focus on simplicity.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="#projects">View My Work</Button>
            <Button href="#contact" variant="secondary">Let's Talk</Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 lg:justify-start">
            <a
              href="https://github.com/darbz0423"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--secondary)] transition-colors hover:text-[var(--text)]"
            >
              GitHub ↗
            </a>

            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />

            <a
              href="mailto:darbybaruc06@gmail.com"
              className="text-sm font-medium text-[var(--secondary)] transition-colors hover:text-[var(--text)]"
            >
              Email ↗
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-5 rotate-6 rounded-[48px] border border-[var(--border)] transition-transform duration-500 hover:rotate-3" />

            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-[42px] border border-[var(--border)] bg-[var(--card)] shadow-[0_30px_70px_var(--shadow)] sm:h-[350px] sm:w-[350px] lg:h-[390px] lg:w-[390px]">
              <img
                src={profileImage}
                alt="Portrait of Khen Darby Baruc"
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <p className="text-xs text-[var(--secondary)]">Focus</p>
              <p className="mt-1 font-bold">UI / Frontend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;