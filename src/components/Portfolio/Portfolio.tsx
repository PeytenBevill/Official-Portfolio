import { useState } from "react";
import { projectArray } from "./projectArray";
import "./portfolio.css";

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [filteredArray, setFilteredArray] = useState<DataItem[]>([]);
  const [noContent, setNoContent] = useState(false);

  let portfolioArray = [...projectArray].reverse();

  type DataItem = {
    name: string;
    link?: string;
    src: string;
    tags: string[];
  };

  const handleFilter = () => {
    if (filter === "All") {
      setFilteredArray(portfolioArray);
      setFilter("");
      setNoContent(false);
      return;
    }
    let newArr = portfolioArray.filter((project) =>
      project.tags.includes(filter)
    );

    if (newArr.length === 0) {
      setNoContent(true);
      setFilteredArray([]);
      setFilter("");
    } else {
      setFilteredArray(newArr);
      setNoContent(false);
      setFilter("");
    }
  };

  return (
    <div className="portfolio-body">
      <h1 style={{ color: "white" }}>Projects:</h1>
      <div className="search">
        <select
          name="filter"
          id="filter"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Tailwind">Tailwind</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="React">React</option>
          <option value="React Native">React Native</option>
          <option value="Redux">Redux</option>
          <option value="Next">Next.js</option>
          <option value="Express">Express</option>
          <option value="Node">Node</option>
          <option value="MySQL">MySQL</option>
          <option value="MongoDB">MongoDB</option>
          <option value="OpenAI">OpenAI API</option>
        </select>
        <button onClick={handleFilter} className="search-button">
          Search
        </button>
      </div>
      <section className="project-grid">
        {filteredArray.length > 0 ? (
          <>
            {filteredArray.map((project, index) => (
              <div className="card" key={index}>
                <img
                  src={project.src}
                  alt="Project Snapshot"
                  className="project-image"
                />
                <p className="title">{project.name}</p>
                {!project.link ? (
                  <span className="hidden">View</span>
                ) : (
                  <a href={project.link} target="_blank" className="a-tag">
                    View
                  </a>
                )}
              </div>
            ))}
          </>
        ) : noContent ? (
          <p className="noneYet">
            More projects will be uploaded soon, stay tuned!
          </p>
        ) : (
          <>
            {portfolioArray.map((project, index) => (
              <div className="card" key={index}>
                <img
                  src={project.src}
                  alt="Project Snapshot"
                  className="project-image"
                />
                <p className="title">{project.name}</p>
                {!project.link ? (
                  <span className="hidden"></span>
                ) : (
                  <a href={project.link} target="_blank" className="a-tag">
                    View
                  </a>
                )}
              </div>
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default Portfolio;
