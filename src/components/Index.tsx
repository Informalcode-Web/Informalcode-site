import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faDesktop,
  faDatabase,
  faMobileAlt,
  faPaintbrush,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

const HomeSection: React.FC = () => {
  return (
    <div id="home" className="index-section p-5 p-xl-5">
      <div className="row mt-5">
        <div className="col-xl-6 col-md-6 col-sm-12 col-12 p-xl-5">
          <p className="mb-0">Unleashing the Potential</p>
          <p className="mb-0">of Technology for</p>
          <p className="for-u mb-4">Your Business</p>

          <div id="animated-container">
            <p className="animated-text">Web Application</p>
            <p className="animated-text">Desktop Application</p>
            <p className="animated-text">Mobile Application</p>
            <p className="animated-text">UI / UX design</p>
            <p className="animated-text">Database Design</p>
            <p className="animated-text">Maintenance</p>
          </div>
          <button className="btn btn-started">Get Started</button>
        </div>
        <div className="col-xl-6 col-md-6 col-sm-12 col-12 p-xl-5 index-section-image"></div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <div id="service" className="services-section p-xl-5 p-sm-4 p-4">
      <div className="row">
        <div className="col-xl-12 col-md-12 col-sm-12 col-12 service-heading">
          <h2 className="mb-3">Our Services</h2>
          <p className="m-auto">
            Contact our experts to find out where to start, how we can transform
            your business ideas into a working solution.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-md-4 col-sm-6 col-12 p-xl-5 p-sm-2 p-2">
          <div className="card py-3 px-4 align-items-center">
            <div className="service-icon mb-3 align-items-center d-flex justify-content-center">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <h4 className="mb-3">Web Application</h4>
            <p>
              We develop custom web applications tailored to meet your specific
              business needs, leveraging the latest technologies to create
              robust, secure, and scalable solutions that enhance your online
              presence and streamline your operations.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-6 col-12 p-xl-5 p-sm-2 p-2">
          <div className="card py-3 px-4 align-items-center">
            <div className="service-icon mb-3 align-items-center d-flex justify-content-center">
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <h4 className="mb-3">Desktop Application</h4>
            <p>
              Our expert team designs and builds desktop applications that run
              seamlessly on Windows, Mac, or Linux systems. With a focus on user
              experience and functionality, we deliver intuitive and efficient
              software solutions for your business requirements.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-6 col-12 p-xl-5 p-sm-2 p-2">
          <div className="card py-3 px-4 align-items-center">
            <div className="service-icon mb-3 align-items-center d-flex justify-content-center">
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <h4 className="mb-3">Mobile Application</h4>
            <p>
              We create innovative mobile applications for iOS and Android
              platforms, combining cutting-edge technology with user-friendly
              interfaces. Our mobile apps are designed to enhance engagement,
              improve productivity, and provide seamless experiences across
              devices.
            </p>
          </div>
        </div>

        <div className="col-xl-4 col-md-4 col-sm-6 col-12 p-xl-5 p-sm-2 p-2">
          <div className="card py-3 px-4 align-items-center">
            <div className="service-icon mb-3 align-items-center d-flex justify-content-center">
              <FontAwesomeIcon icon={faDatabase} />
            </div>
            <h4 className="mb-3">Database Design</h4>
            <p>
              We specialize in creating efficient and scalable database
              solutions that store and manage your valuable data securely. Our
              expert database designers ensure optimal performance, data
              integrity, and seamless integration with your applications,
              empowering you to make informed business decisions.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-6 col-12 p-xl-5 p-sm-2 p-2">
          <div className="card py-3 px-4 align-items-center">
            <div className="service-icon mb-3 align-items-center d-flex justify-content-center">
              <FontAwesomeIcon icon={faPaintbrush} />
            </div>
            <h4 className="mb-3">UI/UX Design</h4>
            <p>
              Our talented designers craft visually stunning and intuitive user
              interfaces UI that enhance user experiences UX. We prioritize
              user-centric design principles to create engaging interfaces that
              captivate your audience and drive positive interactions with your
              applications.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-6 col-12 p-xl-5 p-sm-2 p-2">
          <div className="card py-3 px-4 align-items-center">
            <div className="service-icon mb-3 align-items-center d-flex justify-content-center">
              <FontAwesomeIcon icon={faGears} />
            </div>
            <h4 className="mb-3">Maintenance</h4>
            <p>
              We offer comprehensive maintenance and support services to ensure
              the smooth functioning and performance of your applications. Our
              team provides regular updates, bug fixes, and technical
              assistance, allowing you to focus on your core business while we
              handle the maintenance tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <div className="about-section p-5">
      <div className="row">{/* ... Content of the About section ... */}</div>
    </div>
  );
};

const CareerSection: React.FC = () => {
  return (
    <div className="career-section p-5">
      <div className="row">{/* ... Content of the Career section ... */}</div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <div className="contact-section p-5">
      <div className="row">{/* ... Content of the Contact section ... */}</div>
    </div>
  );
};

export {
  HomeSection,
  ServicesSection,
  AboutSection,
  CareerSection,
  ContactSection,
};
