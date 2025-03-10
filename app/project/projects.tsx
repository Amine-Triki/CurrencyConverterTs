import { useState } from "react";
import projects from "./AllProjects";
import "./Projects.css";

// Definition of possible categories
type Category = "all" | "JavaScript" | "Wordpress" | "React";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const switchCategories = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <main>
      <section className="text-center py-5">
        <div className="container">
          <div className="main-title my-5 relative">
            <h2>My Projects</h2>
            <p>What I build</p>
          </div>
          <ul className=" bg-amber-500 text-white flex flex-col py-3 justify-around px-0 flex-wrap md:flex-row">
            {(["all", "JavaScript", "Wordpress", "React"] as Category[]).map((category) => (
              <li
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => switchCategories(category)}
              >
                {category === "all" ? "All works" : category}
              </li>
            ))}
          </ul>
          <div className="gallery text-start">
            <div className="gap-5 flex justify-center flex-wrap">
              {projects
                .filter((project) => activeCategory === "all" || project.category === activeCategory)
                .map((project, index) => (
                  <div className={`post ${project.category} mb-3`} key={index}>
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={project.imageSrc} className="card-img-top" alt={project.title} />
                      <div className="card-body">
                        <h5 className="card-title text-info">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <div className="flex justify-around">
                          {project.category !== "Wordpress" && (
                            <a
                              href={project.github}
                              className="btn"
                              rel="noreferrer"
                              target="_blank"
                              style={{ backgroundColor: "#ffc0cb" }}
                            >
                              Github
                            </a>
                          )}
                          <a
                            href={project.link}
                            className="btn"
                            rel="noreferrer"
                            target="_blank"
                            style={{ backgroundColor: "#BFECFF" }}
                          >
                            Preview
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
