import { profile } from '../profile'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-badge">{profile.name.slice(-1)}</div>
      </div>
      <div className="hero-content">
        <p className="eyebrow">안녕하세요</p>
        <h1 id="hero-title" className="hero-name">
          {profile.name}
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="btn-row">
          <a className="btn btn-primary" href="#projects">
            프로젝트 보기
          </a>
          <a className="btn btn-outline" href="#contact">
            연락하기
          </a>
        </div>
      </div>
    </section>
  )
}
