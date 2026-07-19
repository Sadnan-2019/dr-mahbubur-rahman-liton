import logo from './logo.svg';
 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Slider/Slider';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';

function App() {
  return (
    <div className=" ">
       <Navbar></Navbar>
       <Hero></Hero>
       <WelcomeMessage></WelcomeMessage>
    </div>
  );
}

export default App;
