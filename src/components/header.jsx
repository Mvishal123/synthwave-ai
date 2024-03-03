import { brainwave } from "../assets/index.js";
import { navigation } from "../constants/index.js";
import { useLocation } from "react-router-dom";
import Button from "./button.jsx";
const Header = () => {
  const pathname = useLocation();
  console.log({ pathname });
  return (
    <div
      className="fixed w-full top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b
    border-n-6 "
    >
      <div className="flex items-center gap-2 px-5 lg:px-7.5 xl:px-10 max-lg-py-10">
        <a className="py-6 lg:py-0" href="#hero">
          <img src={brainwave} alt="logo" height={120} width={150} />
        </a>

        <nav className="hidden  bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.id}
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
        </nav>

        <a
          href="#signin"
          className="hidden lg:block text-n-1/50  text-xs leading-5 lg:font-semibold transition-colors hover:text-n-1 "
        >
          New account
        </a>
        <Button className="hidden lg:flex">Sign in</Button>
      </div>
    </div>
  );
};

export default Header;
