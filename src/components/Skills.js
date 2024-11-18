import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from '../assets/img/meter1.svg' 
import meter2 from '../assets/img/meter2.svg' 
import meter3 from '../assets/img/meter3.svg' 
import colorSharp from "../assets/img/banner-bg-smooth.png"

export const Skills = () => {
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
    
    return (
        <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>
                            My technical and professional skills span a range of areas, 
                            reflecting my academic and practical experience in mathematics, 
                            data analysis, and software development.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Programming Languages</h5>
                                <p>Python, R, C++, JavaScript, SQL</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Data Analysis</h5>
                                <p>Pandas, NumPy, Scikit-learn, Power BI</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Machine Learning</h5>
                                <p>TensorFlow, PyTorch, NLP</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                                <p>React, Node.js, HTML, CSS</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Financial Modeling</h5>
                                <p>Portfolio Optimization, Risk Management</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Collaboration Tools</h5>
                                <p>Git, Jupyter Notebook, RStudio</p>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
    
    )
}