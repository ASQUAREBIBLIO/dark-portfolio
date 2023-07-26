"use client";

import { useState } from "react";
import { SectionTitle } from "../materials/materials";
import styles from "./contact.module.scss";
import { FaPhone } from "react-icons/fa";

const ContactForm = () => {
  const [onFocusClass, setOnFocusClass] = useState("");

  const handleOnFocus = () => {
    const focusedField = document.activeElement.id;
    setOnFocusClass((prevOnFocusClass) => focusedField);
  };

  const handleOnBlur = () => {
    setOnFocusClass((prevOnFocusClass) => "");
  };

  return (
    <div className={styles.form_container} id="contact">
      <SectionTitle icon={<FaPhone />} title="Contact" />
      <div className={styles.form_controll}>
        <div>
          <div className={styles.field_controll}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              placeholder="Your first name"
              className={
                onFocusClass == "fname"
                  ? `${styles.input_field} ${styles.input_field_focused}`
                  : styles.input_field
              }
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </div>
          <div className={styles.field_controll}>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              placeholder="Your last name"
              className={
                onFocusClass === "lname"
                  ? `${styles.input_field} ${styles.input_field_focused}`
                  : styles.input_field
              }
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </div>
        </div>
        <div>
          <div className={styles.field_controll}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className={
                onFocusClass === "email"
                  ? `${styles.input_field} ${styles.input_field_focused}`
                  : styles.input_field
              }
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </div>
        </div>
        <div>
          <div className={styles.field_controll}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Leave us a message..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
