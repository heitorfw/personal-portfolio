import { Container, Row, Col } from "react-bootstrap"
import logo from '../assets/img/vecteezy_planet-space-icon_11128856.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github-mark-white.png'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { useState } from "react"
import { useTranslation } from "react-i18next"
function Footer(){
    const {t, i18n: {changeLanguage, language}} = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState(language);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }
    
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/heitor-wirmond-920a31181/" target="_blank"><img src={navIcon1}/></a>
                            <a href="https://github.com/heitorfw" target="_blank"><img src={navIcon2}/></a>
                            <a href="https://www.instagram.com/heitorfw" target="_blank"><img src={navIcon3}/></a>

                        </div>
                        <p>CopyRight 2024. {t('rights')}</p>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
        
        
        

}
export default Footer