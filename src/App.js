import './App.css';
import AboutMe from './component/AboutMe';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Nav from "./component/Nav";
import Projects from './component/Projects';
import Skills from "./component/Skills";

function App() {
  return (
    <>
      <Nav />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <div className='bg-gray-800 h-screen'></div> */}
    
      
    </>
  );
}

export default App;
