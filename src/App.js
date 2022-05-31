import Button from "./Button";
import { useState, useEffect } from "react";
import Box from "./Box";
import "./style.css";
import Display from "./Display";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Counter's Message Panel");
  const [messageStyle, setMessageStyle] = useState();
  const [clickCount, setClickCount] = useState(0);
  const [displayAnimation, setDisplayAnimation] = useState();

  const click = (e) => {
    if (e.target.name === "inc") {
      setDisplayAnimation("down");
      setTimeout(() => {
        setDisplayAnimation("");
      }, 1000);
      setCount(count + 1);
      console.log("Click count: " + clickCount);
      setClickCount(0);
      if (count > 9) {
        setCount(10);
        setDisplayAnimation("");
        setClickCount(clickCount + 1);
        if (clickCount >= 3) {
          setMessage(
            "Please dont click anymore. I don't like to be clicked more."
          );
          setMessageStyle("active");
        } else {
          setMessage("You have reached the MAXIMUM counter limit");
          setMessageStyle("active");
        }
      } else {
        setMessage("Counter's Message Panel");
        setMessageStyle("");
      }
    } else {
      setDisplayAnimation("up");
      setTimeout(() => {
        setDisplayAnimation("");
      }, 1000);
      setCount(count - 1);
      setClickCount(0);
      console.log("Click count: " + clickCount);
      if (count < 1) {
        setCount(0);
        setDisplayAnimation("");
        setClickCount(clickCount + 1);
        if (clickCount >= 3) {
          setMessage(
            "Please dont click anymore. I don't like to be clicked more."
          );
          setMessageStyle("active");
        } else {
          setMessage("You have reached the MINUMUM counter limit");
          setMessageStyle("active");
        }
      } else {
        setMessage("Counter's Message Panel");
        setMessageStyle("");
        setClickCount(0);
      }
    }
  };
  return (
    <div className="app">
      <Header />
      <Box>
        <Button name="inc" click={click} text={"Increase"} />
        <Display displayAnimation={displayAnimation} count={count} />
        <Button name="dec" click={click} text={"Decrease"} />
      </Box>
      <Footer messageStyle={messageStyle} message={message} />
    </div>
  );
}

export default App;
