import aboutImg from '../../assets/images/undraw_Team_page_re_cffb.png'

const AboutSection: React.FC = () => {
  return (
    <div className='about-section p-5'>
      <h1>About Section</h1>
      <div className="row abt-row">
        <div className="col-lg-6 col-md-6 col-sm-12 aboutImg">
        <img src={aboutImg}></img>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 aboutPara">
            " Welcome to Informal Code! We are a dynamic team of four passionate software 
            engineers and UI/UX designers dedicated to crafting exceptional websites. With 
            a combined industrial experience, we bring a wealth of knowledge and expertise 
            to every project we undertake. Our goal is to create visually stunning and highly 
            functional websites that not only meet our clients' needs but exceed their expectations. 
            We believe in the power of innovation, creativity, and collaboration, and we strive to deliver 
            unique solutions tailored to each client's requirements. Join us on this exciting journey as we 
            transform ideas into engaging online experiences." 
        </div>
      </div>
    </div>
  );
};
export { AboutSection };
