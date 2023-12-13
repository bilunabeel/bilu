import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import Switcher from '../../../components/Switcher';
import {HashLink} from 'react-router-hash-link';

const Nav = () => {
  const [open, setOpen] = useState (false);

  return (
    <nav className=" bg-bg_primary shadow-md dark:bg-black dark:text-white md:h-20 w-full flex items-center justify-between max-md:flex-col max-md:gap-9 max-md:py-5  fixed padding-x font-jost">
      <a className="dark:hidden" href="/">
        <img src="bilu_logo.png" className=" h-10" alt="" />
      </a>
      <a className="dark:block hidden" href="/">
        <img src="signature_white.png" className="h-10 " alt="" />
      </a>
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
            <HashLink to="/bilu/#services">Services</HashLink>
          </ul>
          <ul className="cursor-pointer">
            <HashLink to="/bilu/#portfolios">Portfolios</HashLink>
          </ul>
          <ul className="cursor-pointer">
            <HashLink to="/bilu/#testimonials">Testimonials</HashLink>
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
