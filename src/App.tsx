import React from "react"; 
import NavBar from "./components/Navbar"
import ModeToggle from "./components/ModeToggle"
import "./globals.css"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"


export default function App() {
  return (
    <div className = "globalContainer">
      <NavBar/>

      <section id = "about">
        <h1> About </h1>
        <About/>
      </section>

      <section id = "projects">
        <h1>Projects </h1>
        <Projects/>
      </section>

      <section id = "contact">
        <h1>Contact </h1>
        <Contact/>

      </section>
      <div className = "scrollIndicator">
          ▼ Scroll Down
        </div>
    </div>
  )
}