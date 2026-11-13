import { profile } from '../profile'

const links = [
  { href: '#about', label: '소개' },
  { href: '#skills', label: '기술 스택' },
  { href: '#projects', label: '프로젝트' },
  { href: '#games', label: '게임' },
]

export default function GlobalNav() {
  return (
    <header className="global-nav">
      <div className="global-nav-inner">
        <a className="brand" href="#top" aria-label={`${profile.name} 처음으로`}>
          <span className="brand-mark" aria-hidden="true">
            {profile.name.slice(-1)}
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav className="nav-links" aria-label="주요 메뉴">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="btn btn-dark-outline" href={profile.contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-black" href="#contact">
            연락하기
          </a>
        </div>
      </div>
    </header>
  )
}
