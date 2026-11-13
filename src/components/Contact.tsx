import { profile } from '../profile'
import Section from './Section'

export default function Contact() {
  const { github, email } = profile.contact

  return (
    <Section id="contact" title="연락처">
      <ul className="contact-links">
        <li>
          <a className="contact-link" href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a className="contact-link" href={`mailto:${email}`}>
            {email}
          </a>
        </li>
      </ul>
    </Section>
  )
}
