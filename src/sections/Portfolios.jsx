import {CgInstagram,CgCodeSlash} from 'react-icons/cg' 
import {LuPenTool} from 'react-icons/lu' 
import {RiLayoutMasonryLine} from 'react-icons/ri' 
import {RxTransform} from 'react-icons/rx' 
import {IoNewspaperOutline} from 'react-icons/io5'  

const Portfolios = () => {
  const portfolios = [
    {
      icon: RxTransform,
      title: 'Graphic Designing',
      text: `We provide amazing and professional Graphic Assets for your projects such as social media post designs, logo designs, business card designs, poster designs, youtube and blogs, thumbnail designs, product label designs, and many more categories as per your requirements.`,
    },
    {
      icon: CgCodeSlash,
      title: 'Web Development',
      text: `After designing the web apps or sites we also offer the services of web development for any kind of the website such as business landng pages, product related website development. We can handle all the projects.`,
    },
    {
      icon: CgInstagram,
      title: 'Social Media Posts',
      text: `Social media post designs are very important if you have a business and want to promote your business on social media, we are also providing the service of designing your social meida posts for your business.`,
    },
    {
      icon: LuPenTool,
      title: 'Logo/Branding',
      text: `Lorem ipsum is a commonly used placeholder text in the printing and typesetting industry. It is used when the actual text is not yet available, and the focus is on the design and layout of a document.`,
    },
    {
      icon: IoNewspaperOutline,
      title: 'Magazine/Brochure',
      text: `Lorem ipsum is a commonly used placeholder text in the printing and typesetting industry. It is used when the actual text is not yet available, and the focus is on the design and layout of a document.`,
    },
    {
      icon: RiLayoutMasonryLine,
      title: 'UI/UX Designing',
      text: `Lorem ipsum is a commonly used placeholder text in the printing and typesetting industry. It is used when the actual text is not yet available, and the focus is on the design and layout of a document.`,
    },
  ];
  return (
    <div className='bg-bg_primary'>
    <div className="max-container bg-bg_primary font-jost padding-y">
      {/* <div> */}
        <div className="absolute bg-primary w-52 h-4 mt-9 left-1/2 transform -translate-x-1/2 -z-10" />
        <h1 className="text-center text-4xl font-semibold">Portfolios.</h1>
        <p className="text-center text-xl font-medium padding-x">
          Click on the cards to see my portfolios of related category.
        </p>
      {/* </div> */}
      <div className="padding-x padding-y grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {portfolios.map ((portfolio, index) => (
          <div
            key={index}
            className=" border-solid border-black_sec text-black_sec border-2 py-6 px-6  rounded-md "
          >

            
            <portfolio.icon  className='text-3xl mb-6' />
            <p className='font-medium text-2xl mb-6' >{portfolio.title}</p>
            
            <p className='leading-5'>{portfolio.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Portfolios;
