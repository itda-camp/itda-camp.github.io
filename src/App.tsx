import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Games from './components/Games'
import Contact from './components/Contact'
import { profile } from './profile'

const year = new Date().getFullYear()

function App() {
  return (
    <div className="page">
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Games />
        <Contact />
      </main>
      <footer className="footer">© {year} {profile.name}</footer>
    </div>
  )
}

export default App
