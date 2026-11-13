import { profile } from '../profile'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" title="프로젝트">
      <ul className="projects">
        {profile.projects.map((project) => (
          <li key={project.name} className="project-card">
            <h3 className="project-name">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="project-description">{project.description}</p>
            <div className="tags">
              {project.tech.map((tech) => (
                <span key={tech} className="tag tag-small">
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
