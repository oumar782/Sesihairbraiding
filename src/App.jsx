import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Composants/Navbar';
import Footer, { FloatingButtons, ScrollToTop } from './Composants/Footer';
import Home from './Page/Home';
import About from './Page/About';
import Gallery from './Page/Gallery';
import Service from './Page/Service';
import ServiceDetail from './Page/ServiceDetail';
import Pricing from './Page/Pricing';
import Team from './Page/Team';
import Blog from './Page/Blog';
import Faq from './Page/Faq';
import Contact from './Page/Contact';
import Book from './Page/Book';
import './App.css';

function AppContent() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="min-h-screen bg-cream">
      <Navbar currentPath={path} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;