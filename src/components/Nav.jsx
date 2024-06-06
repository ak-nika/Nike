import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="fonts-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="font-bold font-montserrat text-lg text-slate-gray"
              href=""
            >
              Sign Up/Log In
            </a>
          </li>
        </ul>
        <div
          onClick={handleClick}
          on
          className="cursor-pointer hidden z-50 max-lg:block"
        >
          <img
            src={clicked ? hamburger : close}
            alt="hamburger"
            width={25}
            height={25}
          />
        </div>

        <div
          className={`shadow-xl absolute flex flex-1 flex-col pt-20 top-0 w-[50%] h-[100vh] z-40 right-0 bg-white
          ${
            clicked ? "right-[-900px]" : "right-0"
          } transition-all duration-300 max-sm:hidden`}
        >
          <ul className="flex-1 flex flex-col justify-center items-center gap-16">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  onClick={handleClick}
                  href={item.href}
                  className="fonts-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="font-bold font-montserrat text-lg text-slate-gray"
                href=""
              >
                Sign Up/Log In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
