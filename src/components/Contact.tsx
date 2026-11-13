import { profile } from '../profile'
import Section from './Section'

export default function Contact() {
  const { github, email } = profile.contact

  return (
    <Section id="contact" title="함께 이야기해요" tone="cream">
      <p className="contact-lead">궁금한 점이나 같이 만들고 싶은 것이 있다면 편하게 연락 주세요.</p>
      <ul className="btn-row contact-links">
        <li>
          <a className="btn btn-primary btn-large" href={`mailto:${email}`}>
            메일 보내기
          </a>
        </li>
        <li>
          <a className="btn btn-outline btn-large" href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </Section>
  )
}
