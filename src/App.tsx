import React, { useState } from "react";
import "./App.css";
import getNextButtonColor from "./useHooks/nextButtonColor";

const App = (): React.ReactNode => {
  const [lastClicked, setLastClicked] = useState<Date | undefined | string>(
    undefined
  );
  const [buttonColor, setButtonColor] = useState<"red" | "blue" | "green">(
    "red"
  );

  const onClick = () => {
    setLastClicked(new Date());
    setButtonColor(getNextButtonColor(buttonColor)); // getNextButtonColor is my custom hook
  };

  const getTimeFormate = (label: string, value: string) => {
    return (
      <div className="TimeItem">
        {label}: {value || "Never"}
      </div>
    );
  };

  console.log(lastClicked);

  let localTime = lastClicked?.toLocaleTimeString();

  let gmtTime = lastClicked
    ? `${lastClicked?.getUTCHours()}:${lastClicked?.getUTCMinutes()}:${lastClicked?.getUTCSeconds()}`
    : "";

  return (
    <>
      <div>
        <button onClick={onClick} style={{ backgroundColor: buttonColor }}>
          Click
        </button>
      </div>
      <div className="TimeContainer">
        {getTimeFormate("Local time", localTime)}
        {/* GMT and UTC share the same current time in practice */}
        {getTimeFormate("GMT Time", gmtTime)}
        {getTimeFormate("UCT Time", gmtTime)}
      </div>
    </>
  );
};
export default App;
