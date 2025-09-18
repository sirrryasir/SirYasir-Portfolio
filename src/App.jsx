import { useState } from "react";
import Logo from "./assets/yazy.jpg";
import Pdf from "./assets/Sir_Yasir_CV.pdf";
import "./App.css";
import { Moon } from "lucide-react";
import { Linkedin } from "lucide-react";
import { X } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";
import { Mail } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { PhoneCall } from "lucide-react";

function App() {
  const [isDark, setIsDark] = useState(true);

  function theme() {
    setIsDark(!isDark);
  }
  return (
    <>
      <body className={`theme ${isDark ? "dark" : ""}`}>
        <header>
          <nav id="nav">
            <ul>
              <li class="navItem">
                <a href="#home">Home</a>
              </li>
              <li class="navItem">
                <a href="#about">About</a>
              </li>
              <li class="navItem">
                <a href="#skills">Skills</a>
              </li>
              <li class="navItem">
                <a href="#projects">Projects</a>
              </li>
            </ul>
            <button onClick={theme}>
              <Moon />
            </button>
          </nav>
        </header>

        <main>
          <img src={Logo} alt="Hero Image" />
          <div class="text">
            <h1 id="heading">Yasir Hassan</h1>
            <p id="bio">
              I'm a Creative Designer and Frontend Developer passionate about
              crafting elegant digital experiences. I combine design thinking
              and modern web technologies to turn ideas into meaningful visuals
              and interactive solutions.
            </p>
            <p id="bio">
              Driven by curiosity and a growth mindset, I’m always learning new
              skills and building projects that solve real-world problems.
              Whether it’s branding, UI design, or frontend development, I love
              bringing creativity and code together to shape the digital world.{" "}
              <span class="cta">Let’s create something impactful.</span>
            </p>
            <div class="socials">
              <a href="https://linkedin.com/in/sirrryasir" target="_blank">
                <Linkedin width="20px" />
              </a>
              <a href="https://x.com/sirrryasir" target="_blank">
                <X width="20px"/>
              </a>
              <a href="https://instagram.com/sirrryasir" target="_blank">
                <Instagram width="20px"/>
              </a>
              <a href="https://github.com/sirrryasir" target="_blank">
                <Github width="20px"/>
              </a>
              <a href="mailto:hyaasir012@gmail.com" target="_blank">
                <Mail width="20px"/>
              </a>
              <a href="https://wa.me/+252636919012" target="_blank">
                <MessageCircle width="20px"/>
              </a>
              <a href="tel:+252636919012" target="_blank">
                <PhoneCall width="20px"/>
              </a>
            </div>
            <a href={Pdf} class="cv" download="">
              My Resume
            </a>
          </div>
        </main>

        <footer>
          <p>@2025 Yasir Hassan. All rights reserved.</p>
        </footer>
      </body>
    </>
  );
}

export default App;
