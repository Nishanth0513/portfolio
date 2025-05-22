import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Photo from './components/Photo'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Photo />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App
