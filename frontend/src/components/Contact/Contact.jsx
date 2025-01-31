import React from 'react'
import './Contact.css'
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Contact = () => {
  return (
    <>
    <div><Navbar/></div>
    <div>
       <section className="contact-info">
                <div className="info-box">
                    <MapPin className="icon" />
                    <h3>Our Address</h3>
                    <p>Hyderabad , Telanagan ,LB Nagar Near Metro Station KalyanEvents.</p>
                </div>
                <div className="info-box">
                    <Phone className='icon'/>
                    <h3>Phone Line</h3>
                    <p>+12 (3) 456 0000</p>
                    <p>+12 (3) 456 0000</p>
                </div>
                <div className="info-box">
                    <Mail className='icon'/>
                    <h3>Email</h3>
                    <p>kalyansravevent@gmail.com</p>
                    <p>kalyanevent@gmail.com</p>
                </div>
                <div className="info-box">
                    <Clock className='icon'/>
                    <h3>Open Hours</h3>
                    <p>Mon - Fri: 7.00 am - 10.00 pm</p>
                    <p>Weekend Opened</p>
                </div>
            </section>
            <section className="contact-form">
                <h2>Will You Attend?</h2>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Number" required />
                    <input type="number" placeholder="Number of Guests" required />
                    <input type="text" placeholder="Subject" required />
                    <button type="submit">Submit</button>
                </form>
            </section>
            <section className="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.662852755533!2d78.54563607514774!3d17.34563828365911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997f27111051%3A0x9b0a2c7151df263f!2sL.%20B.%20Nagar%2C%20Hyderabad%2C%20Telangana%20500070%2C%20India!5e0!3m2!1sen!2sin!4v1706600000000!5m2!1sen!2sin" 
                    allowFullScreen 
                    loading="lazy"
                ></iframe>
            </section>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
