import React, { useState } from "react";
import "./HoverCarousel.css";
import wedding from '../../assets/wedding.jpg'
import breakfast from '../../assets/breakfast.jpg'
import dj from '../../assets/dj.jpg'
import decoration from '../../assets/decoration.jpg'
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
const HoverCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "WEEKEND PARTY",
      subtitle: "PARTY",
      image: dj, // Replace with your image URLs
    },
    {
      title: "SUCCESS PARTY",
      subtitle: "EVENT",
      image: decoration,
    },
    {
      title: "MUSIC FESTIVAL",
      subtitle: "FESTIVAL",
      image: breakfast,
    },
    {
      title: "WEDDING",
      subtitle: "EVENT",
      image: wedding,
    },
  ];

  return (
    <div className="hover-carousel">
      <div className="hover-menu">
        {items.map((item, index) => (
          <div
            key={index}
            className={`hover-item text-center ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <h2>{item.title}</h2> 
            <p>{item.subtitle}</p>
           <Link to='/booking' > <div className="arrow" > <MoveUpRight/></div></Link>
          </div>
        ))}
      </div>
      <div className="hover-image ">
        <img src={items[activeIndex].image} alt={items[activeIndex].title} />
        
      </div><hr />
    </div>
  );
};

export default HoverCarousel;
