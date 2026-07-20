import logo from './logo.svg';
 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Slider/Slider';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
function App() {


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div className=" ">
       <Navbar></Navbar>
       <Hero></Hero>
       <WelcomeMessage></WelcomeMessage>
       <About></About>
       <MyWork></MyWork>

    </div>
  );
}

export default App;
