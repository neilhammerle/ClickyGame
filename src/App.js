import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Card";
import Footer from "./components/Footer";
import images from "./image.js";

const App = () => {
  const [imageref, setImageref] = useState(images);
  const [counter, setCounter] = useState(0);
  const [msg, setMsg] = useState({ message: "Click an image to begin!" });
  const [topscore, setTopscore] = useState(0);

  //If you’re familiar with React class lifecycle methods, you can think of
  // useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  //You can tell React to skip applying an effect if certain values haven’t changed between re-renders.
  // To do so, pass an array as an optional second argument to useEffect:
  // return function is clean up functions runs again before the next render.
  useEffect(() => {
    console.log("ComponentdidMount running", counter);
    return () => {
      console.log("running cleaning up!");
    };
  }, [counter]);

  const gameController = id => {
    for (let i = 0; i < imageref.length; i++) {
      if (imageref[i].id === id) {
        if (imageref[i].clicked === false) {
          imageref[i].clicked = true;
          setCounter(counter + 1);
          if (counter >= topscore) {
            setTopscore(topscore + 1);
          }
          setMsg({ message: "I'm a genius, Morty." });
          setImageref(shuffle(imageref));
          break;
        } else {
          if (counter > topscore) {
            setTopscore(counter);
          }
          setCounter(0);
          setImageref(clickdefault(imageref));
          setMsg({ message: "Ah, geez Rick, I don't think that was a good idea.." });
          console.log(images);
          console.log(counter);
        }
      }
    }
  };

  const clickdefault = arr => {
    return arr.map(element => {
      element.clicked = false;
      return element;
    });
  };

  function shuffle(arr) {
    let ctr = arr.length;
    let temp;
    let index;
    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
    }
    return arr;
  }

  return (
    <div>
      <Header message={msg.message} score={counter} topscore={topscore} />
      <Title />
      <Card cards={imageref} ClickCount={gameController} />
      <Footer />
    </div>
  );
};

export default App;