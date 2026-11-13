import { profile } from '../profile'

const year = new Date().getFullYear()

export default function Footer() {
  const { github, email } = profile.contact

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div>
            <h2 className="footer-heading">바로가기</h2>
            <ul className="footer-links">
              <li><a href="#about">소개</a></li>
              <li><a href="#skills">기술 스택</a></li>
              <li><a href="#projects">프로젝트</a></li>
              <li><a href="#games">게임</a></li>
            </ul>
          </div>
          <div>
            <h2 className="footer-heading">연락처</h2>
            <ul className="footer-links">
              <li><a href={github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href={`mailto:${email}`}>{email}</a></li>
            </ul>
          </div>
        </div>
        <hr className="footer-rule" />
        <p className="footer-copy">© {year} {profile.name}</p>
      </div>
    </footer>
  )
}
