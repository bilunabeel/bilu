import {CgInstagram, CgCodeSlash} from 'react-icons/cg';
import {LuPenTool} from 'react-icons/lu';
import {RiLayoutMasonryLine} from 'react-icons/ri';
import {SiMaterialdesignicons} from 'react-icons/si';
import {IoNewspaperOutline} from 'react-icons/io5';

const Services = () => {
  const services = [
    {icon: SiMaterialdesignicons, ser: 'Graphic Designing'},
    {icon: CgCodeSlash, ser: 'Web Development'},
    {icon: CgInstagram, ser: 'Social Media Posts'},
    {icon: LuPenTool, ser: 'Logo/Branding'},
    {icon: IoNewspaperOutline, ser: 'Magazine/Brochure'},
    {icon: RiLayoutMasonryLine, ser: 'UI/UX Designing'},
  ];

  return (
    <section id='services' className="dark:bg-black bg-bg_primary dark:text-white">
      <div className="max-container font-jost padding-y">
        {/* <div> */}
          <div className="absolute bg-primary w-48 h-4 mt-9 left-1/2 transform -translate-x-1/2 -z-10" />
          <h1 className="text-center text-4xl font-semibold ">Services.</h1>
          <p className="text-center text-xl font-medium padding-x">
            Here are the services we providing to you.
          </p>
        {/* </div> */}
        <div className="padding-x padding-y grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {services.map ((service, index) => (
            <div
              key={index}
              className="h-20 rounded-md text-xl  dark:border-2 bg-black_sec dark:bg-transparent text-white font-medium flex justify-center items-center gap-5"
            >

              <service.icon />
              <p>{service.ser}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
