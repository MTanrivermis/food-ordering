import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/About";
import Reservation from "../../components/Reservation";
import Customers from "@/components/customers/customers";
import React from "react";

const Index = () => {
  return (
    <div className="">
      <React.Fragment>
        <Carousel />
        <Campaigns />
        <MenuWrapper />
        <About />
        <Reservation />
        <Customers />
      </React.Fragment>
    </div>
  );
};

export default Index;
