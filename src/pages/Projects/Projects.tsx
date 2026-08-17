import { useMemo, useState } from "react";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "My Portfolio",
    category: "Frontend",
    description:
      "My personal portfolio where I share my projects, skills, and the things I'm currently learning.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/darbz0423/myportfolio",
  },
  {
    title: "Electricity Bill Calculator",
    category: "Frontend",
    description:
      "A small project that calculates electricity usage and gives an estimated bill based on the input.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Gaming Hub System",
    category: "Application",
    description:
      "A school project based on a gaming hub system for keeping track of customers, gaming sessions, and transactions.",
    technologies: [
      "C#",
      "Database",
    ],
  },
  {
    title: "Database Management Project",
    category: "Database",
    description:
      "A database project I worked on to practice organizing information, writing queries, and managing records.",
    technologies: [
      "SQL",
      "MySQL",
    ],
  },
];

const filters = [
  "All",
  "Frontend",
  "Application",
  "Database",
];

function Projects() {
  const [filter, setFilter] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const filteredProjects = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    return projects.filter((project) => {
      const matchesFilter =
        filter === "All" ||
        project.category === filter;

      const searchableText = [
        project.title,
        project.category,
        project.description,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        query === "" ||
        searchableText.includes(query);

      return (
        matchesFilter &&
        matchesSearch
      );
    });
  }, [filter, search]);

  return (
    <section
      id="projects"
      className="px-[5%] py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <div
          className="
            flex flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-[650px]">
            <p
              className="
                text-sm font-bold uppercase
                tracking-[0.2em]
                text-[var(--accent)]
              "
            >
              Projects
            </p>

            <h2
              className="
                mt-4 text-4xl font-black
                tracking-[-1.5px]
                sm:text-5xl md:text-6xl
              "
            >
              Things I've
              <span className="text-[var(--accent)]">
                {" "}
                built.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[400px]
              leading-7
              text-[var(--secondary)]
            "
          >
            Some of the projects I've worked
            on while studying, practicing, and
            learning more about development.
          </p>
        </div>

        <div
          className="
            mt-14 flex flex-col gap-5
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setFilter(item)
                }
                className={`
                  rounded-full
                  border border-[var(--border)]
                  px-4 py-2.5
                  text-sm font-medium
                  transition-colors duration-200

                  ${
                    filter === item
                      ? "bg-[var(--primary)] text-[var(--background)]"
                      : "bg-[var(--card)] text-[var(--secondary)] hover:text-[var(--text)]"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-[300px]">
            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              placeholder="Search projects..."
              className="
                w-full rounded-full
                border border-[var(--border)]
                bg-[var(--card)]
                px-5 py-3
                text-sm text-[var(--text)]
                outline-none
                transition-colors duration-200
                placeholder:text-[var(--secondary)]
                focus:border-[var(--primary)]
              "
              aria-label="Search projects"
            />
          </div>
        </div>

        <div
          className="
            mt-10 grid grid-cols-1
            gap-6
            md:grid-cols-2
          "
        >
          {filteredProjects.map(
            (project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden p-0"
              >
                <div
                  className="
                    flex items-center
                    justify-between
                    border-b border-[var(--border)]
                    px-7 py-5
                  "
                >
                  <span
                    className="
                      text-sm font-bold
                      text-[var(--accent)]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-black/5
                      px-3 py-1
                      text-xs
                      text-[var(--secondary)]
                      dark:bg-white/5
                    "
                  >
                    {project.category}
                  </span>
                </div>

                <div className="p-7">
                  <h3
                    className="
                      text-2xl font-bold
                      transition-colors duration-200
                      group-hover:text-[var(--accent)]
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-4 leading-7
                      text-[var(--secondary)]
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                      mt-6 flex flex-wrap
                      gap-2
                    "
                  >
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border border-[var(--border)]
                            px-3 py-1.5
                            text-xs
                            text-[var(--secondary)]
                          "
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  <div className="mt-7 flex gap-3">
                    {project.github && (
                      <Button
                        href={project.github}
                        variant="secondary"
                      >
                        GitHub ↗
                      </Button>
                    )}

                    {project.demo && (
                      <Button href={project.demo}>
                        Live Demo ↗
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            )
          )}
        </div>

        {filteredProjects.length === 0 && (
          <div
            className="
              mt-10 rounded-[28px]
              border border-[var(--border)]
              bg-[var(--card)]
              p-12 text-center
            "
          >
            <h3 className="text-xl font-bold">
              Nothing found
            </h3>

            <p
              className="
                mt-2 text-sm
                text-[var(--secondary)]
              "
            >
              Try a different search or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setFilter("All");
              }}
              className="
                mt-6 rounded-full
                bg-[var(--primary)]
                px-5 py-2.5
                text-sm font-bold
                text-[var(--background)]
                transition-opacity duration-200
                hover:opacity-80
              "
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;