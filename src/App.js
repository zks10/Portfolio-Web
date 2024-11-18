import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AboutMe } from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Link to="projects" smooth={true} duration={500}></Link>
    </div>
  );
}

export default App;
