import './App.css';
import AboutMe from './component/AboutMe';
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
      <div className='bg-gray-800 h-screen'></div>
      <Footer />
      
    </>
  );
}

export default App;
