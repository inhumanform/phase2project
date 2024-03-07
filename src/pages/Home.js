import '../App.css'
import React, { useState, useEffect } from 'react';


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const phrases = [
    <>Musicians don't retire; they stop when there's no more music in them.<br /> - Louis Armstrong</>,
  <>Of all the things I've lost I miss my mind the most.<br />- Ozzy Osbourne</>,
  <>If you understood everything I say, you'd be me!<br /> - Miles Davis</>,
  <>Music, at its essence, is what gives us memories. And the longer a song has existed in our lives, the more memories we have of it.<br /> - Stevie Wonder</>,
  <>If you cannot find peace within yourself, you will never find it anywhere else.<br /> - Marvin Gaye</>,
  <>Music happens to be an art form that transcends language.<br /> -  Herbie Hancock</>,
  <>You've got to learn your instrument. Then, you practice, practice, practice. And then, when you finally get up there on the bandstand, forget all that and just wail.<br /> - Charlie Parker</>,
  <>One chord is fine. Two chords are pushing it. Three chords and you're into jazz.<br /> -  Lou Reed</>,
  <>If you want to release your aggression, get up and dance. That's what rock and roll is all about.<br /> -  Chuck Berry</>,
  <>Tomorrow belongs to those who can hear it coming.<br />  - David Bowie</>,
  <>Every bad situation is a blues song waiting to happen.<br />  - Amy Winehouse</>,
  <>You can play a shoestring if you're sincere.<br /> - John Coltrane</>,
  <>Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.<br /> - Wolfgang Amadeus Mozart</>,
  <>The way I feel is that if you don't like folk music, stay away from my shows.<br /> - Hank Williams</>,
  <>Townes Van Zandt is the best songwriter in the whole world, and I'll stand on Bob Dylan's coffee table in my cowboy boots and say that.<br /> - Steve Earle</>,
];
 

useEffect(() => {
  const changeQuote = () => {
    setOpacity(0); 
    setTimeout(() => {
      
      setCurrentIndex(prevIndex => (prevIndex + 1) % phrases.length);
      setOpacity(1); 
    }, 1000); 
  };

  const intervalId = setInterval(changeQuote, 4800); 

  return () => clearInterval(intervalId);
}, [phrases.length]);


  return (
      <div className="background-image">
    <div className="home">
      <div className="home-txt">
        <h2 className="animated-text">{phrases[currentIndex]}</h2>
      </div>
    </div>
    </div>
  );
}

export default Home;