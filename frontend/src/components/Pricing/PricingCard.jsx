import React from "react";
import "./PricingCard.css"; // Import CSS file
import Festival from "../Festival/Festival";
import Footer from "../Footer/Footer";

const PricingCard = ({ icon, title, price, features=[] }) => {
    
  return (
    <>
   
    <div className="pricing-card">
      <div className="pricing-icon">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <h2>&#x20b9;{price}<span>/h</span></h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
        <button className="book-event">BOOK EVENT</button>
      </ul>
    </div>
    
    </>
  );
};

export default PricingCard;
