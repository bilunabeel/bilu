import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import Switcher from '../../../components/Switcher';

const Nav = () => {
  const [open, setOpen] = useState (false);
  
  return (
    <nav className=" bg-bg_primary shadow-md dark:bg-black dark:text-white md:h-20 w-full flex items-center justify-between max-md:flex-col max-md:gap-9 max-md:py-5  fixed padding-x font-jost">
      <img src="bilu_logo.png" className="dark:hidden h-10" alt="" />
      <img
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
        <ul className="cursor-pointer">
          <a href="/#">Home</a>
        </ul>
        <ul className="cursor-pointer">
          <a href="/#services">Services</a>
        </ul>
        <ul className="cursor-pointer">
          <a href="/#portfolios">Portfolios</a>
        </ul>
        <ul className="cursor-pointer">
          <a href="/#testimonials">Testimonials</a>
        </ul>
      </li>
      {/* <div className="flex gap-4 items-center"> */}

      <div
        className={`flex gap-4 items-center max-md:flex-col max-md:gap-9 ${!open && `max-md:hidden`}`}
      >
        <p className="bg-primary dark:text-black px-10 py-2 rounded-full text-xl font-medium">
          Let's Talk
        </p>
        <Switcher />
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Nav;
