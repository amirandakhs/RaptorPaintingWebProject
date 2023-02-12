import CardsFooter from "components/Footers/CardsFooter";
import DemoNavbar from "components/Navbars/DemoNavbar";
import Slider from "components/slider/Slider";
import TwoColGallery from "components/TwoColGallery/TwoColGallery";
import React from "react";

function Gallery() {
  return (
    <>
      <DemoNavbar />
      {/* <TwoColGallery /> */}
      <Slider />
      <CardsFooter />
    </>
  );
}
export default Gallery;
