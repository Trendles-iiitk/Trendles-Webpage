import React, { useEffect, useState } from 'react';
import './style.css';

let idCounter = 0;

const ImageSlideShow = ({ slides }) => {
  const [counter, setCounter] = useState(1);
  const name = `radio-btn-${idCounter++}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter === 4 ? 1 : prevCounter + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slides">
        <input type="radio" name={name} id={`${name}-1`} checked={counter === 1} onChange={() => setCounter(1)} />
        <input type="radio" name={name} id={`${name}-2`} checked={counter === 2} onChange={() => setCounter(2)} />
        <input type="radio" name={name} id={`${name}-3`} checked={counter === 3} onChange={() => setCounter(3)} />
        <input type="radio" name={name} id={`${name}-4`} checked={counter === 4} onChange={() => setCounter(4)} />
        {slides.map((image, index) => (
          <div key={index} className={`slide ${index === 0 ? 'first' : ''}`}>
            <img src={image} alt="" />
          </div>
        ))}

        <div className="navigation-auto">
          <div onClick={() => setCounter(1)} className={`auto-btn1 ${counter === 1 ? 'active' : ''} cursor-pointer`}></div>
          <div onClick={() => setCounter(2)} className={`auto-btn2 ${counter === 2 ? 'active' : ''} cursor-pointer`}></div>
          <div onClick={() => setCounter(3)} className={`auto-btn3 ${counter === 3 ? 'active' : ''} cursor-pointer`}></div>
          <div onClick={() => setCounter(4)} className={`auto-btn4 ${counter === 4 ? 'active' : ''} cursor-pointer`}></div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideShow;