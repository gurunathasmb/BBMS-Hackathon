import React, { useState } from 'react';
import './Contact_us.css'; // Import the separate CSS file
import Footer from './Footer'; // Assuming you have a Header component

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    contactno: '',
    email: '',
    message: '',
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Handle form submission (you can replace this with actual backend API call)
    const { fullname, contactno, email, message } = formData;

    const response = await fetch('/submit-query', {
      method: 'POST',
      body: JSON.stringify({ fullname, contactno, email, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      setAlertMessage('Query Sent, We will contact you shortly.');
    } else {
      setAlertMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div id="page-container" style={{ marginTop: '50px', position: 'relative', minHeight: '84vh' }}>
      {/* <Header active="contact" /> */}
      <div className="container">
        <div id="content-wrap" style={{ paddingBottom: '50px' }}>
          <h1 className="mt-4 mb-3">Contact</h1>
          <div className="row">
            <div className="col-lg-8 mb-4">
              <h3>Send us a Message</h3>
              <form name="sentMessage" onSubmit={handleSubmit}>
                {alertMessage && (
                  <div className="alert alert-success alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>{alertMessage}</strong>
                  </div>
                )}
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Full Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                    />
                    <p className="help-block"></p>
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Phone Number:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="contactno"
                      value={formData.contactno}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Email Address:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Message:</label>
                    <textarea
                      rows="10"
                      cols="100"
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength="999"
                      style={{ resize: 'none' }}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
            <div className="col-lg-4 mb-4">
              <h2>Contact Details</h2>
              {/* Replace this static content with dynamic fetch or state */}
              <br />
              <p><h4>Address:</h4> bangaluru</p>
              <p><h4>Contact Number:</h4> 8197736731</p>
              <p><h4>Email:</h4> <a href="mailto:gurunathagoudambiradar@gmail.com">gurunathagoudambiradar@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;