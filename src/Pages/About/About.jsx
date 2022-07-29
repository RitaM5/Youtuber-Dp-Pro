import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className="my-5 container w-50 text-center">
            <div className="row mine-about shadow-lg">
                <div className="col-lg-6 col-md-6 col-12">
                    <img className="img-fluid p-3" style={{ height: "500px" }} src="/images/mine.jpg"></img>
                </div>
                <div className="col-lg-6 col-md-6 col-12 my-2">
                    <h2 style={{color:"rgb(194, 71, 102)"}}>Rita</h2>
                    <h4 style={{ textAlign: "left" }}>My Ambition</h4>
                    <p style={{ textAlign: "justify" }}>
                        My goal is to join in a web development company as a full time web developer.
                        To get the job there is no alternative of hard working. In_sha_Allah I will provide my full effort to get the dream job. I will continue to build new projects with unique ideas. The react world is a huge one and there is a huge number of libraries which creates new functionality projects. So I will keep trying to explore the world as much as I can and will try to implement new libraries in my projects. Through this process In_sha_Allah I will become better day by day and will be ready to become a web developer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;