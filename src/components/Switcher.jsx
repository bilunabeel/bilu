import React, {useState} from 'react';
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import useDarkSide from '../Hooks/useDarkSide';

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide ();
  const [darkSide, setDarkSide] = useState (
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = checked => {
    setTheme (colorTheme);
    setDarkSide (checked);
  };
  return (
    <div>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} />
    </div>
  );
};

export default Switcher;
