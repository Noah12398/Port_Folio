import './App.css'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Certificates from './sections/Certificates'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Certificates/>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
