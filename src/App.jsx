import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './sections/About';
import ContactForm from './sections/Contact';
import HomePage from './sections/Homepage';
import Projects from './sections/Projects';
import ServEase from './CaseStudies/ServEase';
import Recipick from './CaseStudies/Recipick';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800">
                <Projects />
                <ContactForm />
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/servease" element={<ServEase />} />
        <Route path="/recipick" element={<Recipick />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
