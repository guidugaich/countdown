import React from 'react'

class ClockActionButtons extends React.Component {
  render() {
    const { startBtn, stopBtn, resetBtn } = this.props;

    return (
      <div className="app-buttons-container">
        <button onClick={ stopBtn } id="stop">STOP</button>
        <button onClick={ startBtn } id="start">START</button>
        <button onClick={ resetBtn } id="reset">RESET</button>
      </div>
    )
  }
}

export default ClockActionButtons;
