import "./App.css";
import { FaGithub, FaNodeJs, FaReact, FaCode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
function App() {
  return (
    <div className="App">
      <section className="sec_presentacion">
        <div className="box_name">
          <h1>
            <FaCode fontSize={"70px"} />
          </h1>
          <h2>Facu Ferreyra</h2>
          <h3>Desarrollador FullStack</h3>
          <p>
            Soy un desarrollador entusiasta con experiencia en la creación de
            soluciones web innovadoras. Me especializo en JavaScript, React y
            Node.js, y siempre busco oportunidades para enfrentar nuevos retos y
            seguir aprendiendo.
          </p>
          <div className="box_redes">
            <ul>
              <li>
                <a href="https://github.com/devfacucoder">
                  <FaGithub fontSize={"40px"}/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/facundo-ferreyra-47910523b/">
                  <TiSocialLinkedin fontSize={"40px"} />
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        <a className="a_proyects" href="#caca">Ver Proyectos</a>
      </section>
      <section id="caca" className="sec_proyects">
        <div>
          <h2>Mis Proyectos</h2>
        </div>
        <div className="box_Tecnologias">
          <FaNodeJs fontSize={"40px"} color="#fff" />
          <SiMongodb fontSize={"40px"} color="#fff" />
          <IoLogoJavascript fontSize={"40px"} color="#fff" />
          <FaReact fontSize={"40px"} color="#fff" />
        </div>
        <div className="box_proyects">
          <ul>
            <li>
              <a href="https://devfacucoder.github.io/acortador-url/">
                <img src="Captura-acor.PNG" alt="" />
                <h3>Acortador de Urls</h3>
              </a>
            </li>
            <li>
              <a href="https://devfacucoder.github.io/react-depas/">
                <img src="Captura-alquisanjuan.PNG" alt="" />
                <h3>StartUp de alquiler de departamentos. Nota la respuesta tarda por limitaciones</h3>
              </a>
            </li>
            <li>
              <a href="https://github.com/devfacucoder/gallery-cloudinary">
                <img src="Captura-cloudinary.PNG" alt="" />
                <h3>rest-api para subida de imagenes con users</h3>
              </a>
            </li>
            <li>
              <a href="/https://github.com/devfacucoder/Testeando-JWT-NodeJs">
                <img src="Captura-jwt.PNG" alt="" />
                <h3>api-res de users con JWT</h3>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
