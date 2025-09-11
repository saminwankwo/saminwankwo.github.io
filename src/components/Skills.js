import React from "react";
import { FaNodeJs, FaReact, FaPhp, FaDocker, FaAws, FaDatabase, FaLaravel } from "react-icons/fa";
import { SiNestjs, SiMongodb, SiMysql, SiPostgresql, SiGraphql, SiTypescript } from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
        { name: "NestJS", icon: <SiNestjs color="#e0234e" /> },
        { name: "Express.js", icon: <FaNodeJs color="#444" /> },
        { name: "PHP", icon: <FaPhp color="#8892be" /> },
        { name: "Laravel", icon: <FaLaravel color="#ff2d20" /> },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
        { name: "MySQL", icon: <SiMysql color="#00758f" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <FaReact color="#61dafb" /> },
        { name: "HTML/CSS/JS", icon: "🌐" },
        { name: "Bootstrap", icon: "🌐" },
      ],
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: <FaDocker color="#0db7ed" /> },
        { name: "AWS", icon: <FaAws color="#ff9900" /> },
      ],
    },
    {
      name: "Other",
      skills: [
        { name: "GraphQL", icon: <SiGraphql color="#e535ab" /> },
        { name: "TypeScript", icon: <SiTypescript color="#007acc" /> },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <h2>Skills & Tools</h2>
      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.name} className="skill-category">
            <h3>{cat.name}</h3>
            <ul>
              {cat.skills.map((s) => (
                <li key={s.name}>
                  <span className="icon">{s.icon}</span> {s.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
