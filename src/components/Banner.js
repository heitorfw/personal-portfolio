import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg'
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Banner() {
    const {t, i18n: {changeLanguage, language}} = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState(language);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }
    const en = 'en'
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    
    const toRotate = [ ", Web Developer"];
    console.log(currentLanguage.valueOf());
    
    
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    
   
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)};

    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length  - 1 ): fullText.substring(0, text.length  + 1 );
        
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(false);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
    


    <section className="banner" id="home">
        <Container >
            <Row classsName="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">{t('welcome')}</span>
                    <h1>{`${t('me')}`}<span className="wrap">{text}</span></h1>
                    <p>{t('presentation')}
                    </p>
                    <button onClick={() => console.log('connect')}>{t('connect')} <ArrowRightCircle size={25}/>

                    </button>
                    
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Headder img"></img>
                </Col>
            </Row>
        </Container>

    </section>
    );
}

export default Banner;