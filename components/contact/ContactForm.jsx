import React, { useRef } from "react";
import classes from "./Contact-form.module.css";

const ContactForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const nameValue = nameRef.current.value;
    const messageValue = messageRef.current.value;

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        name: nameValue,
        message: messageValue,
      }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you?</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea type="text" id="message" ref={messageRef} />
        </div>
        <div className={classes.actions}>
          <button type="submit">Send message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
