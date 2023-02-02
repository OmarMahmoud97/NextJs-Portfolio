import React from "react";
import LiquidButton from "../../components/liquidButton/liquidButton";
function Thankyou() {
  return (
    <div className="thanks flex-col h-screen justify-center items-center flex text-white">
      <p className="lg:text-7xl text-5xl mb-6">Thank You</p>
      <p className="lg:text-3xl text-2xl mb-10">Email Succesfully Sent</p>
      <p className="lg:text-2xl text-1xl mb-10">
        I will get back to you as soon as possibe
      </p>
      <LiquidButton />
    </div>
  );
}

export default Thankyou;
