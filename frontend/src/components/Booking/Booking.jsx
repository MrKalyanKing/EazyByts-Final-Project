import React, { useContext, useEffect, useState } from "react";
import "./Booking.css";
import sys from '../../assets/bookingsys.jpg'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { GeneralContext } from "../ContextProvider/GeneralContext";
const Booking = () => {

    const url=useContext(GeneralContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "dj",
    time: "",
    AMPM:"AM",
    guests: 0
  });

  const handleErr = () => {
    toast.error("Booking An Event is Failed!", {
      position: "bottom-right",
      autoClose: 5000, // Close after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleSucess = () => {
    toast.success("Event Booked succcesfully!", {
      position: "bottom-right",
      autoClose: 5000, // Close after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === "number" ? parseInt(value, 10) || 0 : value, // Convert to number if type is number
    }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Data Submitted:", formData);

    const jsonData = {
        name: formData.name,
        email: formData.email,
        category: formData.category,
        time: formData.time,
        AMPM: formData.AMPM,
        guests: parseInt(formData.guests,10),
      };
      

    // for (let [key, value] of formdata.entries())
    //     console.log(`${key}: ${value instanceof File ? value.name : value}`);

    try {
        const response = await axios.post(`${url}/booking`, jsonData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Response:", response.data);

        if (response.data.success) {
            handleSucess();
        }
    } catch (err) {
        console.error("Error:", err.response ? err.response.data : err);
        handleErr();
    }
  };

  useEffect(()=>{
    console.log(formData)
  },[])
  return (
  <>
  {/* navbar */}
     <Navbar/>

  {/* end navbar */}
    <div className="booking-container">
      <div className="image-section">
        <img src={sys} alt="Event" />
      </div>
      <div className="form-section">
        <h2>Book Your Event</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            {[
              "dj",
              "marriage",
              "dinner",
              "ceremony",
              "conference",
              "festival",
              "brithday"
            ].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          
          <label>Time:[Event Ends After 5 Hours of Booked Event]</label>
          <input 
            type="text" 
            name="time" 
            value={formData.time} 
            onChange={handleChange} 
            placeholder="HH:MM" 
            pattern="(0[1-9]|1[0-2]):[0-5][0-9]" 
            required 
          />
          
          <label>AM/PM:</label>
          <select name="AMPM" value={formData.AMPM} onChange={handleChange}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          
          <label>Guests:</label>
          <input type="number" name="guests" value={formData.guests} onChange={handleChange} required />
          
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
    {/* footer */}
    <Footer/>
    <ToastContainer/>
    </>
  );
};

export default Booking;