import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ({ language }) => {

  const projects = [
    {
      title: "Primor Group Website",
      description: "Pages Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Prímor Contábil",
      description: "Pages Design & Wordpress Development",
      imgUrl: projImg2,
    },
    {
      title: "Acelera MEI",
      description: "Pages Design & Wordpress Development",
      imgUrl: projImg3,
    },
    {
      title: "Primor Group Website",
      description: "Pages Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Prímor Contábil",
      description: "Pages Design & Wordpress Development",
      imgUrl: projImg2,
    },
    {
      title: "Acelera MEI",
      description: "Pages Design & Wordpress Development",
      imgUrl: projImg3,
    },
  ];

  const projectsTitleEnglish = "Projects"
  const tituloProjetosPortugues = "Projetos"

  const contentEnglish = "Those are some of the projects that I have worked on or am currently working on. This list includes projects from my professional career as well as some personal projects."
  const conteudoPortugues = "Estes são alguns dos projetos em que eu trabalhei ou estou trabalhando atualmente. Essa lista inclui projetos da minha carreira profissional e também alguns projetos pessoais."

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{language === "us" ? projectsTitleEnglish : tituloProjetosPortugues}</h2>
                <p>{language === "us" ? contentEnglish : conteudoPortugues}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
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