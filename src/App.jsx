import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Product from './pages/Product'
import ImpactPage from './pages/ImpactPage'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import Careers from './pages/Careers'
import SimpleMode from './pages/SimpleMode'
import SimpleModeToggle from './components/SimpleModeToggle'

function App() {
  const { pathname } = useLocation()
  const isSimple = pathname === '/simple'

  return (
    <>
      <ScrollToTop />
      {!isSimple && <Nav />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/simple" element={<SimpleMode />} />
        </Routes>
      </main>
      {!isSimple && <Footer />}
      {!isSimple && <SimpleModeToggle />}
    </>
  )
}

export default App
