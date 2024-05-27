import React, { useState } from "react";
import "./Tokenomics.css";

const Tokenomics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeToBlack, setFadeToBlack] = useState(false);
  const slides = [
    {
      src: "./Pump pill graphic 2.jpg",
      alt: "Slide 1",
      caption: "Launch on pump.fun",
      animation: "rumble1",
    },
    {
      src: "./Raydium graphic 2.jpg",
      alt: "Slide 2",
      caption: "Hit Raydium!",
      animation: "rumble2",
    },
    {
      src: "./King.jpg",
      alt: "Slide 3",
      caption: "$1,000,000 Market Cap",
      animation: "rumble3",
    },
    { src: "/Pfp_hires 2.jpg", alt: "Slide 4", caption: "MOON", animation: "rumble4" },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFadeToBlack(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setFadeToBlack(false);
    }, 500);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFadeToBlack(true);
    setTimeout(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
      );
      setFadeToBlack(false);
    }, 500);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="tokenomics-container">
      <h2 className="h2Large">ROADMAP</h2>
      <div className="slider">
        <button className="prev" onClick={prevSlide} disabled={isAnimating}>
          ❮
        </button>
        <div className="slide">
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className={`slide-image ${fadeToBlack ? "fade" : ""} ${slides[currentSlide].animation}`}
          />
        </div>
        <button className="next" onClick={nextSlide} disabled={isAnimating}>
          ❯
        </button>
      </div>
      <div className="caption">{slides[currentSlide].caption}</div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
