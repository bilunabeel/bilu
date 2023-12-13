import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCertificate} from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div id="" className="pt-20 dark:text-white padding-x dark:bg-black bg-bg_primary font-jost max-md:text-center">
      <div className="max-container flex items-center justify-between gap-10 max-md:flex-col max-md:items-center padding-y">

        <div className=''>
            
          <h1 className="md:text-4xl max-md:text-3xl font-medium mb-5">
            HEY, I'M <span className="bg-primary dark:text-black">BILU</span>
            , A
            <br />
            GRAPHIC DESIGNER
            <br />
            AND WEB DEVELOPER
          </h1>
          <div className='text-xl max-md:text-sm font-medium flex md:justify-start justify-center items-center gap-5 mb-5'>
            <FontAwesomeIcon
              className="text-primary"
              icon={faCertificate}
            />
            <p>Designer</p>
            <FontAwesomeIcon
              className="text-primary"
              icon={faCertificate}
            />
            <p>Web Developer</p>
          </div>
          <div className='text-xl font-medium rounded-full  ' >
            <button className='mr-5 border-solid border-black dark:border-white border-2 rounded-full px-5 py-1 max-lg:mb-5'>Want to discuss?</button>
            <button className='bg-primary border-solid dark:text-black border-primary border-2 rounded-full px-5 py-1'>Let's Talk</button>

          </div>
        </div>
        <div className="md:flex justify-end">
          <img
            src="heroimg.png"
            alt="hero_img"
            className=" md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
