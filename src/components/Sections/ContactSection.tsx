import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import contactImage from '../../assets/images/connect.png'; // import your image here

const ContactSection: React.FC = () => {
  const [messageLength, setMessageLength] = useState(0);
  return (
    <div className='contact-section p-5'>
      <Row className='contact-row'>
        <Col
          lg={6}
          md={6}
          sm={12}
          className='contact-info'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1>Contact Us</h1>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' className='form-control' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' className='form-control' />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                className='form-control'
                maxLength='500'
                onChange={(e) => setMessageLength(e.target.value.length)}
              />
              <small>{messageLength}/500</small>
            </div>
            <button type='submit' className='btn btn-primary mt-3'>
              Submit
            </button>
          </form>
          <div className='mt-3 d-flex justify-content-center'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebookF color='#3b5998' size={24} className='mx-2' />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
              <FaTwitter color='#1da1f2' size={24} className='mx-2' />
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram color='#e4405f' size={24} className='mx-2' />
            </a>
            <a
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn color='#0077b5' size={24} className='mx-2' />
            </a>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className='contact-picture'>
          <img src={contactImage} alt='Contact Us' />
        </Col>
      </Row>
    </div>
  );
};

export { ContactSection };
