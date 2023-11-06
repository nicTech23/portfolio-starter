import Navbar from "./component/navbar/Navbar";
import './App.css'
import Intro from "./component/intro/Intro";
import Services from "./component/services/Services";
import Experience from "./component/experience/Experience";
import Work from "./component/work/Work";
import Portfolio from "./component/portfolio/Portfolio";
import Testimonial from "./component/testimonials/Testimonial";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="App" style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white' : ''
    }}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
