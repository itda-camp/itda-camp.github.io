import { profile } from '../profile'

export default function Hero() {
  return (
    <header className="hero">
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-tagline">{profile.tagline}</p>
    </header>
  )
}
