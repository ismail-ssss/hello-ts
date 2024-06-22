import { useState } from "react";
import { sculptureList } from "./data";

import "./style.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    const listlenght = sculptureList.length;
    console.log(listlenght);
    if (index === listlenght - 1) return setIndex(0);
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];
  return (
    <section>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      {showMore && <p>{sculpture.description}</p>}
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      <button onClick={handleNextClick}>Next</button>
    </section>
  );
}
