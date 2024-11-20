import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from '../assets/img/kevinlogo.png';

export const NavBar = () => {
    const [ activeLink, setActiveLink] = useState ('home');
    const [ scrolled, setScrolled ] = useState(false);
    const [hover, setHover] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);
        
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return(
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
            <Navbar.Brand className="navbar-brand" href="#home">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#aboutme"  className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link' }onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
                        <Nav.Link href="#skills"  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' }onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects"  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link 
                            href="/assets/Kevin_Zhu_Resume.pdf" 
                            download="Kevin_Zhu_Resume.pdf" 
                            className="navbar-link"
                        >
                            Resume
                        </Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <button
                            className="vvd"
                            onClick={() => console.log('connect')}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            style={{ color: hover ? 'black' : 'white' }} // Toggle color on hover
                            >
                            <Nav.Link
                                href="#connect"
                                className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('connect')}
                                style={{ color: 'inherit' }} // Inherit color from button
                            >
                                Let's connect
                            </Nav.Link>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}