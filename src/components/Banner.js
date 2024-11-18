import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from '../assets/img/head-img.png'


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Developer", "Full Stack Devoloper", "Data Analyst"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(3000 - Math.random() * 100);
    const period = 3000; 


    useEffect(() => {
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi, I'm Kevin"} </h1>
                        <h2><span className="wrap">{text}</span></h2>
                        <p>
                        I'm a passionate developer specializing in full-stack development, software engineering, and data analysis. Let's build something amazing together!
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}