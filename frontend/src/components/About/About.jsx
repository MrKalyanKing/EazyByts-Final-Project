import React from "react";
import "./About.css";
import about from "../../assets/about.png";
import CountUp from "../count/Count";

    
    const About = () => {
      return (
        <div className="about container">
          <div className="row text-center">
            <div className="col-12">
              <h1>About Firm</h1>
              <hr />
            </div>
          </div>
          <div className="row rows align-items-center">
            
            {/* Image Column */}
            <div className="col-lg-4 col-md-6 col-12 mb-4 text-center">
              <img src={about} alt="About Firm" className="img-fluid rounded shadow" />
            </div>
    
            {/* Text Column */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="about-text">
                <p>
                  "Truly, they accuse and justly hate those who are dignified and lead
                  blameless lives, who are pleased by the presence of pleasure, corrupt
                  those who suffer and the discomforts are rejected, but the pleasure is
                  avoided.
                </p>
                <p>
                  Pleasure corrupts those who suffer and the discomforts are rejected.
                  Pleasure corrupts. The discomforts are rejected.
                </p>
                <p>
                  Those who suffer and the discomforts are rejected. Truly, they accuse
                  and justly hate.
                </p>
                <p>
                  If you need any more adjustments or help, feel free to let me know.
                </p>
              </div>
            </div>
    
            {/* Counter Column */}
            <div className="col-lg-4 col-md-12 col-12 text-center count">
              <CountUp />
            </div>
          </div>
        </div>
      );
    };
    
    export default About;
    