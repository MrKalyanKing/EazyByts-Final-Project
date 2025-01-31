import React, { useState } from "react";
import "./Testimonial.css";
import test from "../../assets/lunch.jpg";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Stack from "../Stackimg/Stack";
import wedding from '../../assets/wedding.jpg'
import breakfast from '../../assets/breakfast.jpg'
import dj from '../../assets/dj.jpg'
import decoration from '../../assets/decoration.jpg'
const images = [
  { id: 1, img: dj },
  { id: 2, img: wedding },
  { id: 3, img: breakfast },
  { id: 4, img: decoration },
];
const testimonials = [
  {
    name: "Kalyan",
    position: "CEO & Founder",
    text: "If you need any more adjustments or help, feel free to let me know. We are always here to assist you!.Great service! The team was very helpful and responsive throughout the process.If you need any more adjustments or help, feel free to let me know. We are always here to assist you!.",
    image: test,
  },
  {
    name: "Amit",
    position: "Manager",
    text: "Great service! The team was very helpful and responsive throughout the process.If you need any more adjustments or help, feel free to let me know. We are always here to assist you!.If you need any more adjustments or help, feel free to let me know. We are always here to assist you!.",
    image: test,
  },
  {
    name: "Priya",
    position: "Designer",
    text: "Amazing experience! The team went above and beyond to meet our needs.If you need any more adjustments or help, feel free to let me know. We are always here to assist you!.If you need any more adjustments or help, feel free to let me know. We are always here to assist you!.",
    image: test,
  },
  {
    name: "Ravi",
    position: "Developer",
    text: "Highly recommend! They were able to deliver exactly what we were looking for.If you need any more adjustments or help, feel free to let me know. We are always here to assist you!.If you need any more adjustments or help, feel free to let me know. We are always here to assist you!.",
    image: test,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial">
      <div className="row">
        <h1>Testimonial</h1>
      </div>
      <div className="row">
        <div className=" col-img mb-3 col-lg-6 col-md-4 col-12" >
          <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: '100%', height: '500px' }}
          cardsData={images}
          />
        </div>
        <div className="col-6 col-2">
          <h1>Testimonial</h1>
          <div className="star">&#127775; &#127775; &#127775; &#127775;</div>
          <div className="text">{testimonials[currentIndex].text}</div>
          <div className="foot-test">
            <div className="profile">
              <img
                className="profile"
                src={testimonials[currentIndex].image}
                alt="Profile"
              />
              <h3 className="name">{testimonials[currentIndex].name}</h3>&nbsp;
              <span className="name1 ">
                {testimonials[currentIndex].position}
              </span>
              <div className="arrow">
                <ArrowLeft color="white" onClick={goToPrev} />
                <ArrowRight color="white" onClick={goToNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
