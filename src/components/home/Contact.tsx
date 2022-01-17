import React from "react";
import { ContactFormInterfaceInputs } from "../../types/ContactForm";
import ContactForm from "./ContactForm";
import "./Contact.css";

const Contact = () => {
  const onSubmitForm = (data: ContactFormInterfaceInputs) => {
    console.log("data", data);
  };
  return (
    <div className="contact-content">
      <p>
        QUESTION? <br /> WE ARE HERE <br /> TO HELP!
      </p>
      <div className="contact-from-wrapper">
        <ContactForm submit={onSubmitForm} />
      </div>
    </div>
  );
};

export default Contact;
