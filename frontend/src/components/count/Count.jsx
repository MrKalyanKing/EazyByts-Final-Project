import React from 'react'
import './Count.css'
import CountUp from 'react-countup'
const Count = () => {
    const counters = [
        { value: 25, label: "YEARS OF EXPERIENCE" },
        { value: 80, label: "SUCCESSFULLY COMPLETED" },
        { value: 79, label: "EVENTS ATTENDED" },
      ];
    
      return (
        <div className="counter-section">
          {counters.map((counter, index) => (
            <div key={index} className="counter-box">
            <div className="counter-value">
              <CountUp start={0} end={counter.value} duration={3} delay={0.5} />
              <span className="plus-sign">+</span>
            </div>
            <p className="counter-label">{counter.label}</p>
          </div>
          ))}
        </div>
      );
    };

export default Count
