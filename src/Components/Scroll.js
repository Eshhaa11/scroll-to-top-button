import React, { useState, useEffect } from "react";
import "./Scroll.css";


const facts = [
  "The Eiffel Tower can grow more than 6 inches during the summer due to heat expansion.",
  "Octopuses have three hearts and their blood is blue.",
  "Bananas are berries, but strawberries aren't.",
  "Honey never spoils. Archaeologists have found pots of it in Egyptian tombs still edible.",
  "There are more stars in the universe than grains of sand on all the Earth's beaches.",
  "Sharks existed before trees. 🦈🌲",
  "Wombat poop is cube-shaped. 💩",
  "Humans glow in the dark — but the light is 1,000 times weaker than our eyes can detect.",
  "A day on Venus is longer than a year on Venus.",
  "Butterflies can taste with their feet.",
  "The heart of a blue whale is the size of a small car.",
  "Pineapples take about 2 years to grow. 🍍",
  "There's a planet made entirely of diamonds — 55 Cancri e.",
];

const Scroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="app-container">
      <div className="fact-list">
        {facts.map((fact, i) => (
          <p key={i} className="fact-item">
            {fact}
          </p>
        ))}
      </div>

      {visible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ⬆️
        </button>
      )}
    </div>
  );
};

export default Scroll;
