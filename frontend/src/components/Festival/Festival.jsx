import React, { useState } from "react";
import "../Navbar/Navbar.css";
import '../EventSchedule/Schedule.css'
import img from "../../assets/cover.webp";
import { AlignJustify,X,ChevronDown, ChevronUp  } from 'lucide-react';
import Footer from "../Footer/Footer";
import EventSchedule from "../Schedule/EventSchedule";
import Schedule from "../EventSchedule/Schedule";
import { Link } from "react-router-dom";
const Festival = () => {
  const[menu,setMenutoggle]=useState(false)
  const [dropdown,setDropDown]=useState({services:false,events:false})
  const togglemenu=()=>{
    setMenutoggle(!menu)
  }
  const toggeldropdown=(key)=>{
    setDropDown((prev)=>({...prev,[key]:!prev[key]}))
  }
  return (
    <>
    <div className="nav">
      <div className="img">
        <img src={img} alt="" />
      </div>
      
      <div className={`nav-items ${menu ? 'active':''}`}>
      <div className="menu-icon " onClick={togglemenu}> 
        {menu ? <X size={32}/>: <AlignJustify size={32}/>}
      </div>
        <div className="list">
          <ul>
            <li>Logo</li>
          <Link to='/' >  <li>HOME</li></Link>
            <li onClick={() => toggeldropdown("services")}
              className={dropdown.services ? "active dropdown-toggle" : "dropdown-toggle"} >SERIVCES
              <div>
                
              </div>
              {dropdown.services ?   <ChevronDown/>:<ChevronUp/>}
              {dropdown.services &&(
                <ul className='dropdown-menu '>
                <Link to='/festival' >  <li>Festival</li></Link>
                <Link to='/conference' >  <li>Conferen</li></Link>
                <Link to='/catering' >  <li>Catering</li></Link>
                <Link to='/brithday' >  <li>Brithday</li></Link>
                <Link to='/marriage' >  <li>Marriage</li></Link>
                <Link to='/ceremony' >  <li>Ceremony</li></Link>
                  <li>Event</li>
                </ul>
              )}
            </li>
            <li onClick={()=>toggeldropdown("events")} 
            className={dropdown.services ? "active dropdown-toggle" : "dropdown-toggle"} >PAGES
              {dropdown.events ? <ChevronDown/> : <ChevronUp/>}
              {dropdown.events && (
                <ul className='dropdown-menu ' >
                  <li>About Us</li>
                  <li>Team</li>
                  <li>Pricing</li>
                  <li>Project</li>
                  <li>Testimonial</li>
                  <li>Projects</li>
                </ul>
              )}
            </li>
            <li className="eventss">EVENTS</li>
            <li>CONTACT US</li>
            <li>
              <button className="nav-btn">LET'S TALK</button>
            </li>
          </ul>
        </div>
        <div className="info">
          <div className="info-text">
            <h1>Biggest</h1>
            <h2>Party Ever</h2>
          </div>
          <div className="info-text1">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              incidunt aliquam architecto enim laboriosam consequatur soluta.
              Quia, 
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <div>
        <Schedule/>
    </div>
    <Footer/>
    </>
  );
};

export default Festival;
