import {AiFillGoogleSquare,AiFillLinkedin} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'



const Footer = () => {

  const socials = [
    {title: 'gmail', icon: AiFillGoogleSquare, link: 'bilunabeelmv@gmail.com'},
    {title: 'instagram', icon: FaInstagramSquare, link: 'bilunabeelmv'},
    {title: 'linkedin', icon: AiFillLinkedin, link: 'bilunabeelmv'},
    // {title: 'facebook', icon: ImGoogle3, link: 'bilunabeelmv'},
  ];
  return (
    <div className="bg-black_sec">
      <div className="max-container font-jost text-white padding-x py-10 flex justify-between items-center max-md:flex-col max-md:gap-10">

        <img src="signature_white.png" alt="bilu logo" className='h-20' />

        <div className="grid grid-cols-2 gap-7 max-sm:grid-cols-1">
          {socials.map (social => (
            <div className='flex items-center gap-1' key={social.title}>
              <social.icon className='mr-1 text-xl' />
              <a href="">{social.link}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

