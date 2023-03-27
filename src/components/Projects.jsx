import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import calculadora from '../assets/img/calculadora.jpeg';
import portafolio from '../assets/img/portafolio.jpg'
import anefty from '../assets/img/anefty.jpeg';
import reloj from '../assets/img/reloj.jpg'
import wod from '../assets/img/wod.jpg';
import videoclub from '../assets/img/videoclub.jpg';
import todolist from '../assets/img/todolist.png';
import logotipo from '../assets/img/logotipo.png';
import spotify from '../assets/img/spotify.jpg';
import 'animate.css'
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    
    
  ];

  const development = [
      {
        title: "Calculadora ",
        imgUrl: calculadora,
        description: "Design & Development",
        github: "https://hilarious-baklava-d74eae.netlify.app/",
        deploy: "https://github.com/Valentina9911/Calculadora",
      },
      {
        title: "Video Club",
        imgUrl: videoclub,
        description: "Design & Development",
        github: "https://github.com/Crooks2k/Front-end-video-club",
        deploy: "https://video-club-front-end.netlify.app",
      },
      {
        title: "Whell Of Dom ",
        imgUrl: wod,
        description: "Design & Development",
        github: "https://github.com/dcsandoval10/P.A_Wheel_Of_Doom_Ducks",
        deploy: "https://dcsandoval10.github.io/P.A_Wheel_Of_Doom_Ducks/",
      },
   
  ];

  const single = [
    {
      title: "Web Developer Portfolio",
      imgUrl: portafolio,
      description: "Design & Development",
      github: "https://github.com/Valentina9911/NewPortafolio",
      deploy: "",
    },
    {
        title: "Web Developer Portfolio",
        imgUrl: anefty,
        description: "Design & Development",
        github: "https://github.com/Valentina9911/Landing-page",
        deploy: "https://poetic-pavlova-2eb891.netlify.app/",
      },
    
   {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: reloj,
    github: "https://github.com/Valentina9911/reloj",
    deploy: "https://marvelous-toffee-9cfbc2.netlify.app/",
  },
 
];
const design = [
  {
    title: "Todo-list ",
    imgUrl: todolist,
    description: "Design & Development",
     github: "https://www.figma.com/file/pGSxIByY6XSna6R6RNsrbd/Untitled?t=Tu0Mg0oOTC4rT069-1",
     deploy: "https://www.figma.com/file/pGSxIByY6XSna6R6RNsrbd/Untitled?t=Tu0Mg0oOTC4rT069-1",
  },
  {
    title: "Web Developer Portfolio",
    imgUrl: logotipo,
    description: "Design & Development",
     github: "https://www.figma.com/file/pGSxIByY6XSna6R6RNsrbd/Untitled?t=Tu0Mg0oOTC4rT069-1",
 deploy: "https://www.figma.com/file/pGSxIByY6XSna6R6RNsrbd/Untitled?t=Tu0Mg0oOTC4rT069-1",
  },
 {
  title: "Business Startup",
  description: "Design & Development",
  imgUrl: spotify,
   github: "https://www.figma.com/file/pGSxIByY6XSna6R6RNsrbd/Untitled?t=Tu0Mg0oOTC4rT069-1",
   deploy: "https://www.figma.com/file/pGSxIByY6XSna6R6RNsrbd/Untitled?t=Tu0Mg0oOTC4rT069-1",
},

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
                <p>A continuación aporto una variedad de proyectos que demuestran mi experiencia en lenguajes de programación como JavaScript, HTML, CSS y frameworks como React, Node.js y Express.</p>
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
                          development.map((project, index) => {
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
                      
                      {
                          single.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    {
                          design.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }

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
