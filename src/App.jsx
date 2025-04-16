import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
// import Services from './pages/Services';
import Skills from './pages/Skills';
// import Resume from './pages/Resume';
// import Blog from './pages/Blog';
import ContactForm from './components/ContactForm';
import BubbleSkills from './pages/BubbleSkills';

function App() {
  return (
    <div>
      <NavigationBar />
      <Home />
      <About />
      <Portfolio />
      {/* <Skills /> */}
      <BubbleSkills />
      {/* <Blog /> */}
      <ContactForm />
      <Footer />
      {/* <Services /> */}
      {/* <Resume /> */}
    </div>
  );
}

export default App;
