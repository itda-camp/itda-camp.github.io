import GlobalNav from './components/GlobalNav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Games from './components/Games'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Frap from './components/Frap'

// 스타벅스 홈의 색 띠 흐름:
// 크림 히어로 → 흰 본문 → 크림 → 흰 본문 → 진초록 띠 → 크림 → 진초록 푸터
function App() {
  return (
    <>
      <GlobalNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Games />
        <Contact />
      </main>
      <Footer />
      <Frap />
    </>
  )
}

export default App
