import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import logo from '../assets/img/vecteezy_planet-space-icon_11128856.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github-mark-white.png'
import navIcon3 from '../assets/img/nav-icon3.svg'
import brasil from '../assets/img/brazil.png'
import { useTranslation } from 'react-i18next';

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] =useState(false);

    const {t, i18n: {changeLanguage, language}} = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState(language);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrolly > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="Logo" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'> </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'}
            onClick={() => onUpdateActiveLink('home')}>{t('home')}</Nav.Link>
            <Nav.Link href="#skills"className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'}
            onClick={() => onUpdateActiveLink('skills')}>{t('skills')}</Nav.Link>
            <Nav.Link href="#projects"className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'}
            onClick={() => onUpdateActiveLink('projects')}>{t('projects')}</Nav.Link>
          </Nav>

          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/heitor-wirmond-920a31181/" target="_blank"><img src={navIcon1}/></a>
                <a href="https://github.com/heitorfw" target="_blank"><img src={navIcon2}/></a>
                <a href="https://www.instagram.com/heitorfw" target="_blank"><img src={navIcon3}/></a>
                
            </div>
            <button className='vvd' onClick={() =>  console.log('connect')}><span>{t('connect')}</span></button>
            <button  onClick={handleChangeLanguage}><span>{t('lg')}</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;