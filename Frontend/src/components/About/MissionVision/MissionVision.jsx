import "./MissionVision.css";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
    return (
        <section className="mission-vision-section">

            <div className="container">

                {/* Section Heading */}

                <div className="row">

                    <div className="col-lg-8 mx-auto text-center">

                        <span className="mv-badge">
                            Our Purpose
                        </span>

                        <h2 className="mv-title">
                            Driving Innovation Through Technology
                        </h2>

                        <p className="mv-description">
                            At W3TechLabs, our mission and vision guide every
                            decision we make. We are committed to delivering
                            innovative digital solutions while building
                            long-term partnerships with businesses worldwide.
                        </p>

                    </div>

                </div>

                {/* Cards */}

                <div className="row mt-5 g-4">

                    {/* Mission */}

                    <div className="col-lg-6">

                        <div className="mv-card">

                            <div className="mv-icon mission-icon">

                                <FaBullseye />

                            </div>

                            <h3>
                                Our Mission
                            </h3>

                            <p>
                                Our mission is to empower startups, SMEs, and
                                enterprises by delivering secure, scalable,
                                and high-performing digital solutions that
                                accelerate business growth through innovation,
                                creativity, and modern technologies.
                            </p>

                        </div>

                    </div>

                    {/* Vision */}

                    <div className="col-lg-6">

                        <div className="mv-card">

                            <div className="mv-icon vision-icon">

                                <FaEye />

                            </div>

                            <h3>
                                Our Vision
                            </h3>

                            <p>
                                Our vision is to become a globally trusted
                                technology partner recognized for building
                                exceptional digital experiences, embracing
                                innovation, and helping businesses succeed in
                                the digital era.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default MissionVision;