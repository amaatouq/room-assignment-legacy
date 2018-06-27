import React from "react";

import StageTimeWrapper from "../../../core/ui/components/StageTimeWrapper.jsx";
import Timer from "./Timer.jsx";

class timer extends React.Component {
  render() {
    const { remainingSeconds } = this.props;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds - minutes * 60;
  
  
    const classes = ["timer"];
    if (remainingSeconds <= 5) {
      classes.push("lessThan5");
    } else if (remainingSeconds <= 10) {
      classes.push("lessThan10");
    }

    return (
      <div className={classes.join(" ")}>
        <h5>Timer</h5>
        <span className="seconds">{minutes}:{seconds}</span>
      </div>
    );
  }
}

export default (Timer = StageTimeWrapper(timer));
