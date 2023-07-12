import bgImage from '../../assets/images/Tema-pana-red-cropped.png';
import coverImage from '../../assets/images/IntroBackground_Resized.png';
const HomeSection: React.FC = () => {
  return (
    <div
      className='index-section p-5 p-xl-5'
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='row mt-3 mb-5'>
        <div className='col-xl-6 col-md-6 col-sm-12 col-12 p-xl-5 order-last order-sm-first order-md-first order-lg-first'>
          <p className='mb-0'>Unleashing the Potential</p>
          <p className='mb-0'>of Technology for</p>
          <p className='for-u mb-4'>Your Business</p>

          <div id='animated-container'>
            <p className='animated-text'>Web Application</p>
            <p className='animated-text'>Desktop Application</p>
            <p className='animated-text'>Mobile Application</p>
            <p className='animated-text'>UI / UX design</p>
            <p className='animated-text'>Database Design</p>
            <p className='animated-text'>Maintenance</p>
          </div>
          <a className='btn btn-started' href="#service">Get Started</a>
        </div>
        <div className='col-xl-6 col-md-6 col-sm-12 col-12 p-xl-5 index-section-image order-sm-first pb-5'>
          <img src={bgImage}></img>
        </div>
      </div>
    </div>
  );
};

export { HomeSection };
