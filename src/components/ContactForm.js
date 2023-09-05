import React from 'react';
import '../styles/ContactForm.scss';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('mbjvyzrd');

  if (state.succeeded) {
    return (
      <div className="message-form-answer-container">
        <p className="message-form-answer">
          Thanks for your feedback & suggestions! Your input is greatly
          appreciated!
        </p>
      </div>
    );
  }

  return (
    <div id="contact">
      <div className="contact-container">
        <h1 className="contact-title">Contact</h1>
      </div>
      <p className="contact-text">
        Please feel free to contact me if you have any questions or want to
        comment or propose something!
      </p>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input-name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="input-mail"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Typing..."
            className="input-message-message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
