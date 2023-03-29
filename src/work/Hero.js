import React from "react";
import "./Hero.css";
import star1 from "./stickers/star1.svg";
import star2 from "./stickers/star2.svg";
import star3 from "./stickers/star3.svg";
import star4 from "./stickers/star4.svg";
import star5 from "./stickers/star5.svg";
import moon from './stickers/moon.svg'
import ellipse from './stickers/ellipse.svg'
import ellipse1 from './stickers/ellipse1.svg'
import flower from './stickers/flower.svg'

const Hero = () => {
  return (
    <div className="hero-section">
      <img src={star1} className="orange-star-one" />
      <img src={star1} className="orange-star-two" />
      <img src={star2} className="white-star-one" />
      <img src={star3} className="orange-star-three" />
      <img src={moon} className="moon" />
      <img src={ellipse} className="ellipse-one" />
      <img src={ellipse} className="ellipse-two" />
      <img src={ellipse1} className="ellipse-three" />
      <img src={flower} className="flower-one" />
      <img src={star2} className="white-star-two" />
      <img src={star4} className="orange-star-four" />
      <img src={star5} className="purple-star" />
      <img src={star2} className="white-star-three" />
      <h2 className="intro">Hi there, I’m Pari</h2>
      <h2 className="description">
        A design-minded front-end software engineer focused on building
        beautiful interfaces & experiences.
      </h2>
    </div>
  );
};

export default Hero;
