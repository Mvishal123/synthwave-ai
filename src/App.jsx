import React from "react";
import Button from "./components/button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/header";
import Hero from "./components/sections/hero";
import Benefits from "./components/sections/benefits";
import Collaboration from "./components/sections/collaboration";
import Services from "./components/sections/services";
import Pricing from "./components/sections/pricing";
import Roadmap from "./components/sections/roadmap";

const App = () => {
  return (
    <>
      <div className="pt-[5.45rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
