import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import Switcher from '../components/Switcher';

const Nav = () => {
  const [open, setOpen] = useState (false);
  console.log (open);
  return (
    <nav className=" bg-none dark:text-white md:h-20 w-full flex items-center justify-between max-md:flex-col max-md:gap-9 max-md:py-5  fixed padding-x font-jost">
      <img
        href="#home"
        src="bilu_logo.png"
        className="dark:hidden h-10"
        alt=""
      />
      <img
        href="#home"
        src="signature_white.png"
        className="dark:block h-10 hidden"
        alt=""
      />
      <div
        onClick={() => setOpen (!open)}
        className=" md:hidden  absolute right-16"
      >
        <FontAwesomeIcon size="2x" icon={open ? faXmark : faBars} />

      </div>
      <li
        className={` flex gap-9 max-md:flex-col max-md:items-center max-md:gap-9 text-xl font-regular ${!open && `max-md:hidden`}`}
      >
        <ul href="#home" className="cursor-pointer">Home</ul>
        <ul href="#services" className="cursor-pointer">Services</ul>
        <ul href="#portfolios" className="cursor-pointer">Portfolios</ul>
        <ul href="#testimonials" className="cursor-pointer">Testimonials</ul>
      </li>
      {/* <div className="flex gap-4 items-center"> */}

        <div
          className={`flex gap-4 items-center max-md:flex-col max-md:gap-9 ${!open && `max-md:hidden`}`}
        >
          <p className='bg-primary dark:text-black px-10 py-2 rounded-full text-xl font-medium'>Let's Talk</p>
        <Switcher />
        </div>
      {/* </div> */}
    </nav>
  );
};

export default Nav;
