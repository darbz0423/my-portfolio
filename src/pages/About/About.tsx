import Card from "@/components/Card/Card";

const details = [
  ["Name", "Khen Darby Baruc"],
  ["Course", "BS Information Technology"],
  ["Focus", "Frontend Development"],
  ["Based In", "Cebu, Philippines"],
];

const values = [
  ["01", "Creativity", "I like taking an idea and figuring out how to turn it into something that looks good and works well."],
  ["02", "Learning", "I'm still learning, so I spend a lot of time trying new tools, building projects, and figuring things out along the way."],
  ["03", "Quality", "I try to keep my code organized, my layouts responsive, and the small details from being overlooked."],
  ["04", "Problem Solving", "When something doesn't work, I break the problem down and work through it until I find a solution."],
];

function About() {
  return (
    <section id="about" className="px-[5%] py-28">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-[700px]">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-1.5px] sm:text-5xl md:text-6xl">
            A developer who
            <span className="text-[var(--accent)]"> enjoys building.</span>
          </h2>

          <p className="mt-6 max-w-[650px] leading-8 text-[var(--secondary)]">
            I'm an IT student interested in frontend development, web design, and technology. Most of what I learn comes from actually building things, making mistakes, and trying again.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="flex min-h-[360px] flex-col justify-between rounded-[32px] bg-[var(--primary)] p-8 text-[var(--background)] sm:p-10">
            <span className="text-sm opacity-60">01 / ABOUT</span>

            <div>
              <p className="text-5xl font-black tracking-[-2px] sm:text-6xl">DARBZ</p>
              <p className="mt-5 max-w-[400px] leading-7 opacity-70">
                I'm building my skills through projects, experimenting with different ideas, and learning something new with every project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {details.map(([label, value]) => (
              <Card key={label} className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                  {label}
                </p>
                <p className="mt-4 font-semibold">{value}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Journey
            </p>
            <h3 className="mt-3 text-3xl font-black sm:text-4xl">Where I'm heading</h3>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Card className="p-7 sm:p-8">
              <span className="text-sm font-bold text-[var(--accent)]">EDUCATION</span>
              <h4 className="mt-4 text-2xl font-bold">BS Information Technology</h4>
              <p className="mt-4 leading-7 text-[var(--secondary)]">
                I'm studying IT while building up my skills in programming, web development, databases, and interface design.
              </p>
            </Card>

            <Card className="p-7 sm:p-8">
              <span className="text-sm font-bold text-[var(--accent)]">DEVELOPMENT</span>
              <h4 className="mt-4 text-2xl font-bold">Frontend Development</h4>
              <p className="mt-4 leading-7 text-[var(--secondary)]">
                I'm focused on building responsive websites and getting better at writing clean code while improving my eye for design.
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-28">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Values
            </p>
            <h3 className="mt-3 text-3xl font-black sm:text-4xl">What matters to me</h3>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([number, title, description]) => (
              <Card key={number} className="p-7">
                <span className="text-sm font-bold text-[var(--accent)]">{number}</span>
                <h4 className="mt-6 text-xl font-bold">{title}</h4>
                <p className="mt-3 text-sm leading-7 text-[var(--secondary)]">
                  {description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;