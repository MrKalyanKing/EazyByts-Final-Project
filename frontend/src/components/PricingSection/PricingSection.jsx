import React, { useEffect } from "react";
import PricingCard from "../Pricing/PricingCard";
import "./PricingSection.css";

// Import icons
import birthdayIcon from "../../assets/decoration.jpg";
import weddingIcon from "../../assets/wedding.jpg";
import conferenceIcon from "../../assets/sampen.jpg";
import Festival from "../Festival/Festival";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PricingSection = () => {
  const pricingPlans = [
    {
      icon: birthdayIcon,
      title: "BIRTHDAY PARTY",
      price: 2500,
      features: ["100 guests", "Bithday cake", "Decoration", "Best Restaurant"],
    },
    {
      icon: weddingIcon,
      title: "WEDDING PLAN",
      price: 4000,
      features: [
        "100 guests",
        "Wedding design",
        "Decoration",
        "Best Restaurant",
        "DJ Night",
      ],
    },
    {
      icon: conferenceIcon,
      title: "CONFERENCE",
      price: 1500,
      features: [
        "100 guests",
        "Food Arrangement",
        "Decoration",
        "COnference Hall",
      ],
    },
    {
      icon: conferenceIcon,
      title: "FESTIVAL",
      price: 1200,
      features: ["100 guests", "Food Arrangement", "Decoration", "DJ"],
    },
    {
      icon: conferenceIcon,
      title: "CATERING",
      price: 1700,
      features: [
        "100 guests",
        "Food Arrangement",
        "Decoration",
        "DJ",
        "Bar Resturant",
      ],
    },
    {
      icon: conferenceIcon,
      title: "CEREMONY",
      price: 1400,
      features: ["100 guests", "Food Arrangement", "Decoration", "DJ","Extra Features"],
    },
  ];
  
  return (
    <>
    <Navbar/>
    <div className="pricing-section">
      {pricingPlans.length > 0 ? (
        pricingPlans.map((plan, index) => <PricingCard key={index} {...plan} />)
      ) : (
        <p>No pricing plans available</p>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default PricingSection;
