import { profile } from '../profile'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="소개">
      {profile.about.map((paragraph) => (
        <p key={paragraph} className="about-text">
          {paragraph}
        </p>
      ))}
    </Section>
  )
}
