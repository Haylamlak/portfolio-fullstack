import { useState } from "react"
import "../styles/Navbar.css"
function Navbar(){

  const [menuOpen,setMenuOpen] = useState(false)
  const [darkMode,setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle("light-mode")
  }

  return(

    <nav className="navbar">

      <h2 className="logo">Haylamlak</h2>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

      </div>

      <div className="nav-icons">

        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div
          className="menu-btn"
          onClick={()=>setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>

    </nav>
  )
}

export default Navbar