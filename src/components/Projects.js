import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/banner-bg-smooth.png'
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.jpg';
import artImg1 from '../assets/img/1.jpg';
import artImg2 from '../assets/img/2.jpg';
import artImg3 from '../assets/img/3.jpg';
import artImg4 from '../assets/img/4.jpg';
import artImg5 from '../assets/img/5.jpg';
import artImg6 from '../assets/img/6.jpeg';



export const Projects = () => {
    const projects = [
        { title: "Great Lakes Database", description: "Cloud-based database for weather data analysis.", imgUrl: projImg1 },
        { title: "CC3k Simulation", description: "A rogue-like game using C++ and MVC.", imgUrl: projImg2 },
        { title: "Daily Checklist", description: "Built with React.", imgUrl: projImg3 },
    ];
    const artworks = [
        { title: "Artwork 1", description: "Description for Artwork 1", imgUrl: artImg1 },
        { title: "Artwork 2", description: "Description for Artwork 2", imgUrl: artImg2 },
        { title: "Artwork 3", description: "Description for Artwork 3", imgUrl: artImg3 },
        { title: "Artwork 4", description: "Description for Artwork 4", imgUrl: artImg4 },
        { title: "Artwork 5", description: "Description for Artwork 5", imgUrl: artImg5 },
        { title: "Artwork 6", description: "Description for Artwork 6", imgUrl: artImg6 },
    ];

    return (
        <section className="project" id="projects">
            {/* <img className="background-image-left" src={colorSharp2} alt="Background" /> */}
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Discover the fusion of technology and creativity through my projects and artwork.</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Project</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Art Work</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >
                                    Tab 3
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey = "first">
                                    <Row>
                                        {
                                            projects.map((project,index) => {
                                                return (
                                                    <ProjectCard 
                                                        key ={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "second">
                                                                <Row>
                                        {artworks.map((artwork, index) => (
                                            <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                                                <div className="artwork-container">
                                                    <img src={artwork.imgUrl} alt={artwork.title} className="artwork-img" />
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = "third">dfgrgqrg</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}