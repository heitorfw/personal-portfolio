import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/BgBlack.png";
import projImg3 from "../assets/img/coffee-code.png";
import projImg4 from '../assets/img/filmeApp.png'
import colorSharp2 from "../assets/img/color-sharp2.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TrackVisibility from 'react-on-screen';
import { t } from "i18next";

function Projects(){
  const {t, i18n: {changeLanguage, language}} = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState(language);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }
  const projects = [
    {
      title: <a>{t('video')}</a>,
      description: " NextJs, TailwindCss",
      imgUrl: projImg1,
      link: 'https://zoom-app-xi.vercel.app',
    },
    {
      title: "",
      description: <a>{t('soon')}</a>,
      imgUrl: projImg2,
    },
    {
      title: "",
      description: <a>{t('soon')}</a>,
      imgUrl: projImg2,
    }
]
const projectsReact = [
  {
    title: "Coffee Shop App",
    description: "ReactJs, TailwindCss",
    imgUrl: projImg3,
    link: 'https://coffee-code-heitorfsw.netlify.app',
  },
  {
    title: <a>{t('film')}</a>,
    description: 'ReactJs, Sass, APIRest',
    imgUrl: projImg4,
  },
  {
    title: "",
    description: <a>{t('soon')}</a>,
    imgUrl: projImg2,
  }
]
return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{t('projects')}</h2>
                <p>{t('phrase')}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Next js</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">React Js</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">React Native</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <div className="color-overlay">
                        
                      <Row>
                        {
                          projects.map((projects, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...projects}
                                />
                            )
                          })
                        }
                      </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="color-overlay">
                        
                        <Row>
                          {
                            projectsReact.map((projectsReact, index) => {
                              return (
                                <ProjectCards
                                  key={index}
                                  {...projectsReact}
                                  />
                              )
                            })
                          }
                        </Row>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>{t('soon')}</p>
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
export default Projects;
