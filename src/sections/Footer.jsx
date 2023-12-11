import {AiFillGoogleSquare,AiFillLinkedin} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'



const Footer = () => {

  const socials = [
    {title: 'gmail', icon: AiFillGoogleSquare, username: 'bilunabeelmv@gmail.com',link:'https://mail.google.com/mail/u/1/#inbox?compose=CllgCJNtdgnjhFfblSwjNBPbfgDpcFJWtvHKhsdphvCJGHpDgJDdPghBvBzNjDhFmVPHfQffbFg'},
    {title: 'instagram', icon: FaInstagramSquare, username: 'bilunabeelmv',link:'https://instagram.com/bilucreate?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=='},
    {title: 'linkedin', icon: AiFillLinkedin, username: 'bilunabeelmv',link:'https://www.linkedin.com/in/mohamed-nabeel-mv-3046361b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
    // {title: 'facebook', icon: ImGoogle3, link: 'bilunabeelmv'},
  ];
  return (
    <div className="bg-black_sec ">
      <div className="max-container font-jost text-white padding-x py-10 flex justify-between items-center max-md:flex-col max-md:gap-10">

        <img src="signature_orange.png" alt="bilu logo" className='h-20' />

        <div className="grid grid-cols-2 gap-7 max-sm:grid-cols-3">
          {socials.map (social => (
            <div className='flex items-center gap-1' key={social.title}>
              <social.icon className='mr-1 text-xl' />
              <a className='max-sm:hidden' href={social.link}>{social.username}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

