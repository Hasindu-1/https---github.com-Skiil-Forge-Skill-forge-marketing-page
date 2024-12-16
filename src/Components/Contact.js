import React from 'react';
import './Contact.css'; // Import a new CSS file for the form-specific styles

const Contact = () => {
  return (
    <form action="https://formspree.io/f/meoqqloe" method="POST" id="form-box">
      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your full name..." required />

      {/* Email field */}
      <label htmlFor="email">Email Address:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email address..." required />

      {/* Message field */}
      <label htmlFor="message">Send us a message:</label>
      <textarea id="message" name="message" rows="5" placeholder="Write your message here..."></textarea>

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
