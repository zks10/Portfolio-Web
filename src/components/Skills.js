import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import colorSharp from "../assets/img/banner-bg-smooth.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
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

    // Skill data with percentages
    const skills = [
        { title: "Programming Languages", percentage: 91, description: "Python, R, C++, JavaScript, SQL" },
        { title: "Data Analysis", percentage: 83, description: "Pandas, NumPy, Scikit-learn, Power BI" },
        { title: "Machine Learning", percentage: 87, description: "TensorFlow, PyTorch, NLP" },
        { title: "Web Development", percentage: 90, description: "React, Node.js, HTML, CSS" },
        { title: "Financial Modeling", percentage: 70, description: "Portfolio Optimization, Risk Management" },
        { title: "Collaboration Tools", percentage: 84, description: "Git, Jupyter Notebook, RStudio" }
    ];

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
                                {skills.map((skill, index) => (
                                    <div className="item" key={index}>
                                        <svg style={{ height: 0 }}>
                                            <defs>
                                                <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#AA367C" />
                                                    <stop offset="100%" stopColor="#4A2FBD" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <CircularProgressbar
                                            value={skill.percentage}
                                            text={`${skill.percentage}%`}
                                            styles={buildStyles({
                                                textColor: "#fff",
                                                pathColor: `url(#gradient-${index})`,
                                                trailColor: "#d6d6d6",
                                                textSize: "16px"
                                            })}
                                        />
                                        <h5>{skill.title}</h5>
                                        <p>{skill.description}</p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
};
