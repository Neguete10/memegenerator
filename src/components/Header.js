import "./Header.css";
import troll from "../images/troll.png";

export default function Headers() {
  return (
    <header className="header">
      <img src={troll} alt="troll" className="troll"></img>
      <h1>Meme Generator</h1>
      <h3>React Course - Project 3</h3>
    </header>
  );
}
