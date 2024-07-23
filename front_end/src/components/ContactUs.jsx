import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/Contact.css'

const ContactUs = () => {
  return (<>
    <Navbar></Navbar>
    <div className="contact">
      <div className='contact-form'>
        <form action='https://formspree.io/f/xnnanyvq' method="post">
          <h1>Get in touch</h1>
          <h5>We'd love to hear from you. Please fill out this form.</h5>
          <div style={{ display: 'flex', gap: '5px' }}>
            <div className='frt'>
              <p>First name</p>
              <input type="text" placeholder='First Name' name='first name' style={{ marginTop: '-12px' }} required />
            </div>
            <div className='frt'>
              <p>Last name</p>
              <input type="text" placeholder='Last Name' name='last name' style={{ marginTop: '-12px' }} required />
            </div>
          </div>
          <p style={{ marginTop: '15px' }}>Email</p>
          <input type="email" placeholder="Email" name='email' required style={{ width: '100%', marginTop: '-10px' }} />
          <p style={{ marginTop: '15px' }}>Message</p>
          <textarea cols="30" rows="5" name='message' required style={{ width: '100%', marginTop: '-10px', borderRadius: '10px' }}></textarea>
          <div className='form-btn' style={{ width: '100%', margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type='sbmit'>Send message</button>
          </div>
        </form>
      </div>
      <div className="contact-img">
        <img src="contact1.png" alt="" />
      </div>
    </div>
    <Footer></Footer>
  </>
  )
}

export default ContactUs;