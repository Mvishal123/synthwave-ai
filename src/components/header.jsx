import { brainwave } from "../assets/index.js";
import { navigation } from "../constants/index.js";
import { useLocation } from "react-router-dom";
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import { HamburgerMenu } from "./design/Header.jsx";
import Button from "./button.jsx";
import { useState } from "react";
const Header = () => {
  const [openNaviagtion, setOpenNavigation] = useState(false);
  const pathname = useLocation();

  const handleOpen = () => {
    setOpenNavigation((prev) => !prev);
  };
  return (
    <div
      className="fixed w-full top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b
    border-n-6 "
    >
      <div className="flex items-center gap-2 px-5 lg:px-7.5 xl:px-10 max-lg-py-10">
        <a className="block w-[12rem] py-6 lg:py-0 z-10" href="#hero">
          <img src={brainwave} alt="logo" height={120} width={150} />
        </a>

        <nav
          className={`${
            openNaviagtion ? "flex" : "hidden"
          } bg-n-8 lg:static lg:flex w-full lg:mx-auto lg:bg-transparent fixed top-0 left-0 right-0 bottom-0`}
        >
          <div className="relative z-2 flex mt-28 lg:mt-0  flex-col items-center justify-center m-auto lg:flex-row ">
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.id}
                onClick={handleOpen}
                className={`block relative cursor-pointer text-2xl lg:text-xs uppercase transition-colors  hover:text-n-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:font-semibold ${
                  pathname.hash === item.url ? "text-n-1" : "text-n-4"
                } lg:leading-5`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <a
              href="#signin"
              className="hidden lg:block text-n-1/50  text-xs leading-5 lg:font-semibold transition-colors hover:text-n-1 mr-3"
            >
              New account
            </a>
            <Button className="hidden lg:flex">Sign in</Button>
          </div>
          <HamburgerMenu />
        </nav>

        <Button
          className={"ml-auto lg:hidden"}
          px={"px-3"}
          onClick={handleOpen}
        >
          <MenuSvg openNavigation={openNaviagtion} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
