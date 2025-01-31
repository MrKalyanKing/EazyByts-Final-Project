import React, { useState } from "react";
import "./EventSchedule.css";
import wedding from '../../assets/wedding.jpg'
import breakfast from '../../assets/breakfast.jpg'
import dj from '../../assets/dj.jpg'
import decoration from '../../assets/decoration.jpg'

const events = [
  {
    time: "10:00AM – 12:00PM",
    title: "REGISTRATION",
    location: "Mumbai, India",
    speaker: "John Deo",
    image: decoration,
  },
  {
    time: "01:00PM – 02:00PM",
    title: "BREAKFAST",
    location: "Mumbai, India",
    speaker: "John Deo",
    image: breakfast,
  },
  {
    time: "03:00AM – 04:00AM",
    title: "CONFERENCE",
    location: "Mumbai, India",
    speaker: "John Deo",
    image: dj,
  },
];

const EventSchedule = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  return (
    <div className="event-schedule text-center mt-5">
        <div className="mt-5 mb-5"> <h1> Events Schedule's</h1></div><hr />
      {events.map((event, index) => (
        <div
          key={index}
          className="event-row"
          onMouseEnter={() => setHoveredEvent(index)}
          onMouseLeave={() => setHoveredEvent(null)}
        >
          <div className="event-time ">{event.time}</div>
          <div className="event-info">
            <h3>{event.title}</h3>
            <p>
              📍 {event.location} | 🎤 {event.speaker}
            </p>
            <p>
            If you need any more adjustments or help, feel free to let me know.
            </p>
          </div>
          {hoveredEvent === index && (
            <div className="event-image text-center">
              <img src={event.image} alt={event.title} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EventSchedule;
