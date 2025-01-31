import breakfast from "../../assets/breakfast.jpg";
import decoration from "../../assets/decoration.jpg";
import dj from "../../assets/dj.jpg";
import lunch from "../../assets/lunch.jpg";
import party from "../../assets/Party.jpg";
import sampen from "../../assets/sampen.jpg";
import wedding from "../../assets/wedding.jpg";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import "./Event.css";
import { Link } from "react-router-dom";
// don't forget to add your images to the array
const Event = ({ autoplay = false, pauseOnHover = false, images = [breakfast,decoration,dj,lunch,party,sampen,wedding] }) => {
const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

const cylinderWidth = isScreenSizeSm ? 1500 : 2500;  // Increased for better spacing
  const faceCount = images.length;
  const faceWidth = cylinderWidth / faceCount;  // Adjusted for no overlapping
  const radius = cylinderWidth / (2 * Math.PI); // Proper radius calculation
  const dragFactor = 0.05;


const rotation = useMotionValue(0);
const controls = useAnimation();
const autoplayRef = useRef();

const handleDrag = (_, info) => {
  rotation.set(rotation.get() + info.offset.x * dragFactor);
};

const handleDragEnd = (_, info) => {
  controls.start({
    rotateY: rotation.get() + info.velocity.x * dragFactor,
    transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1, ease: "easeOut" },
  });
};

const transform = useTransform(rotation, (value) => {
  return `rotate3d(0, 1, 0, ${value}deg)`;
});

useEffect(() => {
  if (autoplay) {
    autoplayRef.current = setInterval(() => {
      controls.start({
        rotateY: rotation.get() - (360 / faceCount),
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - (360 / faceCount));
    }, 2000);

    return () => clearInterval(autoplayRef.current);
  }
}, [autoplay, rotation, controls, faceCount]);

useEffect(() => {
  const handleResize = () => {
    setIsScreenSizeSm(window.innerWidth <= 640);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const handleMouseEnter = () => {
  if (autoplay && pauseOnHover) {
    clearInterval(autoplayRef.current);
    controls.stop();
  }
};

const handleMouseLeave = () => {
  if (autoplay && pauseOnHover) {
    controls.start({
      rotateY: rotation.get() - (360 / faceCount),
      transition: { duration: 2, ease: "linear" },
    });
    rotation.set(rotation.get() - (360 / faceCount));

    autoplayRef.current = setInterval(() => {
      controls.start({
        rotateY: rotation.get() - (360 / faceCount),
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - (360 / faceCount));
    }, 2000);
  }
};

return (
    <>
    <div><h1 className="events"> Our Events</h1></div><hr />
  <div className="gallery-container">
    <div className="gallery-gradient gallery-gradient-left"></div>
    <div className="gallery-gradient gallery-gradient-right"></div>
    <div className="gallery-content">
      <motion.div
        drag="x"
        className="gallery-track"
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        style={{
          transform: transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
        }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={controls}
      >
       {images.map((url, i) => (
  <div
    key={i}
    className="gallery-item"
    style={{
      width: `${faceWidth}px`,
      transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
    }}
  >
    <div className="gallery-card">
      <img src={url} alt="gallery" className="gallery-img" />
      <div className="gallery-overlay">
        <button className="gallery-btn"> <Link to='/pricing' > Price   </Link></button>
        <button className="gallery-btn"> <Link to='/pricing' > Details </Link></button>
        <button className="gallery-btn"> <Link to='/booking' > Book Now</Link></button>
      </div>
    </div>
  </div>
))}

      </motion.div>
    </div> 
  </div>
  <hr />
  </>
);
};

export default Event;