import React from "react";
import "./contact.scss";
import ContactPic from "../../Images/contactUs.jpg"

function Contact() {
  return (
    <div className="contact-us">
      <div className="info">
        <h3>Contact us...</h3>
        <h4>Gmail: fitboss-company@gmail.com</h4>
        <h4>Phone number: +381/539-4664</h4>
        <h4>Adress: Bulevar Kralja Aleksandra 80a, Belgrade</h4>
      </div>




         <img src={ContactPic} alt="slika" /> 
    </div>
  );
}

export default Contact;
