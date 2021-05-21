import React from 'react';
import TimeInput from './TimeInput';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      secondsRemaining: 0,
    }
  }

  startCountdown = () => {
    setInterval(() => this.setState((prevState) => ({
      secondsRemaining: prevState.secondsRemaining - 1
    })), 1000);
    if (this.state.secondsRemaining === 0) {
      clearInterval();
    }
  }

  render() {
    return (
      <>
        <h1>Countdown</h1>
        <h3>Quanto tempo você quer marcar?</h3>
        <TimeInput />
        <button onClick={ this.startCountdown }>Start!</button>
        <p>{ this.state.secondsRemaining }</p>
      </>
    );
  }
}

export default App;
