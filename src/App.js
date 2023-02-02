import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Clients from './Components/Clients';
import About from './Components/About';
import WhyUS from './Components/WhyUS';
import Skill from './Components/Skill';
import Service from './Components/Service';
import Team from './Components/Team';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Clients />
      <About />
      <WhyUS />
      <Skill />
      <Service />
      <Team />
      <Pricing />
      <Footer />

    </div>
  );
}

export default App;
