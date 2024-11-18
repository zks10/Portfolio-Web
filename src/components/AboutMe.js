import highSchoolImage from "../assets/img/high school.jpeg";
import waterlooImage from "../assets/img/waterloo.png";
import qingdaoImage from "../assets/img/qingdao.png";
import drawingImage from "../assets/img/drawing.jpeg";
import foodImage from "../assets/img/food.jpeg";

export const AboutMe = () => {
    return (
        <section className="about-me" id="aboutme">
            <div className="container">
                <h2 className="section__title section__title--aboutme">Who I Am</h2>
                {/* <p className="section__subtitle section__subtitle--aboutme">
                    A student in the University of Waterloo's Honours Math program.
                </p> */}

                <div className="about-me-content">
                    {/* Academic Section */}
                    <div className="service">
                    <h3>Academic Background</h3>
                        <p>
                            I graduated from Pierre Elliott Trudeau High School, where I cultivated a strong foundation in mathematics and problem-solving. 
                            Currently, I am pursuing a Bachelor of Mathematics at the University of Waterloo, majoring in Combinatorics and Optimization, 
                            with a minor in Computer Science.
                        </p>
                        <div className="image-row">
                            <img
                                src={highSchoolImage}
                                alt="High School"
                                className="top"
                            />
                            <img
                                src={waterlooImage}
                                alt="University of Waterloo"
                                className="top"
                            />
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="service">
                        <h3>Experience</h3>
                        <p>
                            Born and raised in Qingdao, Shandong, China, I immigrated to Canada with my family in 2016. 
                            This life-changing experience shaped my adaptability, resilience, and ability to thrive in new environments.
                        </p>
                        <img
                            src={qingdaoImage}
                            alt="Qingdao"
                            className="qingdao"
                        />                        
                    </div>

                    {/* Hobbies Section */}
                    <div className="service">
                    <h3>Hobbies</h3>
                        <p>
                            Outside of academics and work, I am passionate about drawing, playing the piano, and cooking. 
                            These hobbies not only provide me with a creative outlet but also enhance my focus, discipline, and attention to detail.
                        </p>
                        <div className="image-row">
                            <img
                                src={drawingImage}
                                alt="Drawing"
                                className="top"
                            />
                            <img
                                src={foodImage}
                                alt="Cooking"
                                className="top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
