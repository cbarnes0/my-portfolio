import './App.css';
import AboutMe from './component/AboutMe';
import Footer from './component/Footer';
import Nav from "./component/Nav"

function App() {
  return (
    <>
      <Nav />
      <AboutMe />
      <Footer />
      <div className='bg-gray-800 h-screen'></div>
    </>
  );
}

export default App;
