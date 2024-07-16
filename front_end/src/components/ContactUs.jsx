import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/Contact.css'

const ContactUs = () => {
  return (<>
    <Navbar></Navbar>
    <div className="contact">
      <div className='contact-form'>
        <h1>Get in touch</h1>
        <h4>We'd love to hear from you. Please fill out this form.</h4>
        <form method="post">
          <input type="text" placeholder='First Name' required />
          <input type="text" placeholder='Last Name' required style={{ marginLeft: '10px' }} />
          <input type="email" placeholder="Email" required style={{ width: '100%', marginTop: '10px' }} />
          <textarea cols="30" rows="5" required style={{ width: '100%', marginTop: '10px', borderRadius: '10px' }}></textarea>
          <div style={{width:'100%',margin:'10px 0',display:'flex',alignItems:'center',justifyContent:'center'}}>
          {/* <button> Button</button> */}
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