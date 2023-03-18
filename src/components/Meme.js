import "./Meme.css";
import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    ramdomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages] = useState(memesData.data.memes);

  function handleTopText() {}
  function handleBottomText() {}

  function getMemeImage() {
    let ramdomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages.at(ramdomNumber).url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      ramdomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Shut up"
          onChange={handleTopText}
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="and take my money"
          onChange={handleBottomText}
        ></input>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <br />
      <img src={meme.ramdomImage} className="memePic" alt="meme"></img>
    </main>
  );
}
