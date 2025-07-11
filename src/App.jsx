import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import  Cursor  from "./Components/Cursor.jsx";
import Experience from "./Components/Experience.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import PortFolio from "./Components/PortFolio.jsx";
import Skills from "./Components/Skills.jsx";
import Time from "./Components/Time.jsx"
import Certificates from "./Components/Certificates.jsx"

export default function App() {
  return (
    <div className=" text-slate-700">
        <Cursor/>
   <section id="home"
   className="h-[100vh] ">
     <div className=" relative p-4"><Navbar/>
      <Home/>
      </div>
    </section>
     
   <section id="about" className="h-[100vh]"><About/></section>
   <section id="portfolio" ><PortFolio/> </section>
   <section id="skills" ><Skills/> </section>
   <section id="experience"><Time/></section>
   <section id="certificates"><Certificates/> </section>
   
   
   
   <section id="contact" ><Contact/> </section>
   <Footer/>
   
   </div>
  )
}