import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import calculadora from '../assets/img/calculadora.jpeg';
import pestañas from '../assets/img/pestañas.jpg'
import anefty from '../assets/img/anefty.jpeg';
import reloj from '../assets/img/reloj.jpg'
import 'animate.css'
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
      {
        title: "Calculadora ",
        imgUrl: calculadora,
        description: "Calculadora funcional, diseño con tonos morados suaves, funcionalidades basicas suma resta, multiplicacion, division",
        github: "https://github.com/Valentina9911",
        deploy: "https://github.com/Valentina9911/Calculadora",
      },
      {
        title: "Web Developer Portfolio",
        imgUrl: anefty,
        description: "Design & Development",
        github: "https://github.com/Valentina9911",
        deploy: "https://poetic-pavlova-2eb891.netlify.app/",
      },
     {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: reloj,
      github: "https://github.com/Valentina9911/reloj",
      deploy: "https://marvelous-toffee-9cfbc2.netlify.app/",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];





  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>En esta sección podras observar los proyectos que he creado, respectivos despliegues y repositorios.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>hola.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>1222.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
