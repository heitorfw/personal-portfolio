import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import  "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { useTranslation } from 'react-i18next';
import { useState } from "react";

function Skills(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const {t, i18n: {changeLanguage, language}} = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState(language);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }
return(
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div>
                        <h2 className="pb-5">
                        {t('mainSkills')}
                        </h2>
                        
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item" >
                                <img src={meter1} alt='Image'/>
                                <h5>{t('webdeveloment')}</h5>
                            </div>
                            <div className="item" >
                                <img src={meter3} alt='Image'/>
                                <h5>React JS</h5>
                            </div>
                            <div className="item" >
                                <img src={meter3} alt='Image'/>
                                <h5>Next JS</h5>
                            </div>
                            <div className="item" >
                                <img src={meter1} alt='Image'/>
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item" >
                                <img src={meter2} alt='Image'/>
                                <h5>{t('agile')}</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp}/>
    </section>
)    
    
}

export default Skills;