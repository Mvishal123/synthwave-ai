import React from "react";
import Button from "./components/button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/header";
import Hero from "./components/hero";

const App = () => {
  return (
    <>
      <div className="pt-[5.45rem]">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
