import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import Careers from './pages/Careers'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
