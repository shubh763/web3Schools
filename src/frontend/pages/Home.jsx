import React from "react";
import HomeSlider from "../component/HomeSlider";
import HeroSection from "../component/HeroSection";
import Aboutlink from "../component/Aboutlink";
import Organization from "../component/Organization";
import Courses from "../component/Courses";
import Blog from "../component/Blog";
import Footer from "../shared/footer/Footer";
import Programs from "../component/Programs";
import ScrollAnimation from "react-animate-on-scroll";


const Home = () => {
  return (
    <>
      <HomeSlider />
      <HeroSection />
      <Aboutlink />
      <Programs />
      <ScrollAnimation
        animateIn="bounce"
        initiallyVisible={true}
        animateOnce={true}
      >
      <Organization />
      </ScrollAnimation>
      <Courses />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
