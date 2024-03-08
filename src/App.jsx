import React from "react";
import Button from "./components/button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/header";
import Hero from "./components/sections/hero";
import Benefits from "./components/sections/benefits";

const App = () => {
  return (
    <>
      <div className="pt-[5.45rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
