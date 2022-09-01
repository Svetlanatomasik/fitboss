import React from "react";
import "./contact.scss";
import ContactPic from "../../Images/contactUs.jpg";
import Footer from "../../Components/Footer";

function Contact() {
  return (
    <>
    <div className="contact-us">
      <div className="info">
        <div className="details">
          <h3>Contact us...</h3>
          <h4>Gmail:</h4>
          <h4>fitboss-company@gmail.com</h4>
          <h4>Phone number: </h4>
          <h4>+381/539-4664</h4>
          <h4>Adress: </h4>
          <h4>Bulevar Kralja Aleksandra 80a, Belgrade</h4>
        </div>
      </div>

      <img src={ContactPic} alt="slika" />
    </div>
    <Footer />
    </>
  );
}

export default Contact;
