import React from "react";
import "./Schedule.css";
import wedding from '../../assets/wedding.jpg';
import breakfast from '../../assets/breakfast.jpg';
import dj from '../../assets/dj.jpg';
import decoration from '../../assets/decoration.jpg';
import { MapPin, Clock3, CalendarFold } from "lucide-react";
import { Link } from "react-router-dom";
const Schedule = () => {
  const carditems = [
    {
      images: breakfast,
      time: '7:00 AM to 9:00 AM',
      date: '28 January 2025',
      venue: 'Hyderabad, India',
      event: 'INDOOR EVENT'
    },
    {
      images: dj,
      time: '7:00 PM to 10:00 PM',
      date: '29 January 2025',
      venue: 'Hyderabad, India',
      event: 'CEREMONY'
    },
    {
      images: decoration,
      time: '4:00 PM to 6:00 PM',
      date: '28 January 2025',
      venue: 'Kamareddy, India',
      event: 'MARRIAGE'
    },
    {
      images: wedding,
      time: '9:00 AM to 12:00 PM',
      date: '1 February 2025',
      venue: 'Banjepally, India',
      event: 'OUTDOOR'
    }
  ];

  return (
    <>
      <div className="events">
        <div className="head">
          <h1>Events Schedule</h1>
        </div>
        <div className="head1">
          <span>Upcoming Events</span>
          <hr />
        </div>
      </div>

      {/* Cards */}
      <div className="container">
        <div className="row">
          {carditems.map((item, index) => (
            <div className="col-lg-6 col-md-6 col-12 mb-4" key={index}>
              <div className="card">
                <img src={item.images} alt="event" className="card-img-top" />
                <div className="date">
                  <span>
                    <CalendarFold size={15} color="violet" /> {item.date}
                  </span>
                </div>
                <div className="location">
                 <Link to='/booking' > <span className="out">{item.event}</span></Link>
                  <div className="time">
                    <span>
                      <Clock3 size={15} color="violet" /> {item.time}
                    </span>
                    <span>
                      <MapPin size={15} color="violet" /> {item.venue}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Schedule;
