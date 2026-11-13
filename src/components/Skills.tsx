import { profile } from '../profile'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" title="기술 스택">
      <dl className="skills">
        {profile.skills.map((group) => (
          <div key={group.category} className="skill-group">
            <dt className="skill-category">{group.category}</dt>
            <dd className="tags">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
