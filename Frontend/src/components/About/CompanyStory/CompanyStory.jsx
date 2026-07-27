import "./CompanyStory.css";
import storyImg from "../../../assets/images/about/company-story.png";

import {
  FaRocket,
  FaLaptopCode,
  FaGlobe,
  FaUsers
} from "react-icons/fa";

const CompanyStory = () => {

    const timeline = [
        {
            year: "2019",
            icon: <FaRocket />,
            title: "The Beginning",
            description:
                "Started with a vision to provide innovative web solutions for businesses."
        },
        {
            year: "2021",
            icon: <FaLaptopCode />,
            title: "Service Expansion",
            description:
                "Expanded into MERN Stack Development, UI/UX Design, and Digital Marketing."
        },
        {
            year: "2023",
            icon: <FaGlobe />,
            title: "Business Growth",
            description:
                "Successfully delivered projects across multiple industries and international clients."
        },
        {
            year: "2026",
            icon: <FaUsers />,
            title: "Future Vision",
            description:
                "Continuing to build scalable digital solutions with innovation and long-term partnerships."
        }
    ];

    return (
        <section className="company-story">

            <div className="container">

                <div className="row align-items-center">

                    {/* Left Side */}

                    <div className="col-lg-6">

                        <div className="story-content">

                            <span className="story-badge">
                                Our Journey
                            </span>

                            <h2 className="story-title">
                                Our Story
                            </h2>

                            <p className="story-description">

                                W3TechLabs began with a simple mission—to
                                empower businesses through modern technology,
                                creative design, and reliable digital solutions.
                                Today, we continue to help organizations build,
                                grow, and transform their online presence.

                            </p>

                            <div className="timeline">

                                {
                                    timeline.map((item, index) => (

                                        <div
                                            className="timeline-item"
                                            key={index}
                                        >

                                            <div className="timeline-icon">
                                                {item.icon}
                                            </div>

                                            <div className="timeline-content">

                                                <span className="timeline-year">
                                                    {item.year}
                                                </span>

                                                <h5>
                                                    {item.title}
                                                </h5>

                                                <p>
                                                    {item.description}
                                                </p>

                                            </div>

                                        </div>

                                    ))
                                }

                            </div>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="col-lg-6">

                        <div className="story-image">

                            <img
                                src={storyImg}
                                alt="Company Story"
                            />

                            <div className="story-card clients-card">

                                <h3>100+</h3>

                                <span>Happy Clients</span>

                            </div>

                            <div className="story-card experience-card">

                                <h3>5+</h3>

                                <span>Years Experience</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );

};

export default CompanyStory;