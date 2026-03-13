import "../styles/Hero.css"
import myphoto from "../assets/myphoto.jpg"
import { TypeAnimation } from "react-type-animation"

function Hero(){

return(

<section id="home" className="hero">

<div className="hero-container">

<div className="hero-text">

<h1>Hello I'm Haylamlak</h1>

<TypeAnimation
sequence={[
"Full Stack Developer",
2000,
"React Developer",
2000,
"Node.js Developer",
2000
]}
wrapper="h2"
speed={50}
repeat={Infinity}
/>

<p>
I build modern responsive websites using
React, Node.js and MySQL.
</p>

<a href="#projects" className="hero-btn">
View My Work
</a>

</div>

<div className="hero-img">
<img src={myphoto} alt="profile"/>
</div>

</div>

</section>

)

}

export default Hero