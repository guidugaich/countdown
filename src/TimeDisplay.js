import React from 'react';
import './TimeDisplay.css';

class TimeDisplay extends React.Component {
  
  
  render() {
    const { secondsRemaining, running } = this.props;
    const num = new Date(secondsRemaining*1000).toISOString().substr(11, 8);
    let timeDisplayStyle;
    let timeDisplayContainerStyle;
    if (running) {
      timeDisplayStyle = 'time-display-running'
      timeDisplayContainerStyle = 'time-display-container-running'
    } else {
      timeDisplayStyle = 'time-display-stopped';
      timeDisplayContainerStyle = 'time-display-container-stopped'
    }

    return (
      <div className={`time-display ${timeDisplayContainerStyle}`}>
        <div className={ timeDisplayStyle }>{ num }</div>
      </div>
    )
  }
}

export default TimeDisplay;