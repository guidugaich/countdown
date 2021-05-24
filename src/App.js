import React from 'react';
import TimeInput from './TimeInput';
import TimeDisplay from './TimeDisplay';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      secondsRemaining: 0,
      inputHours: '',
      inputMinutes: '',
      inputSeconds: '',
      timerID: '',
      running: false
    }
  }

  updateStateEverySecond = () => {
    if (this.state.secondsRemaining > 0) {
      this.setState((prevState) => ({
        secondsRemaining: prevState.secondsRemaining - 1
      }));
    } else {
      clearInterval(this.updateStateEverySecond);
    }
  }

  startCountdown = () => {
    const timerID = setInterval(this.updateStateEverySecond, 1000);
    this.setState({timerID: timerID, running: true});
  }

  stopCountdown = () => {
    const { timerID } = this.state;
    clearInterval(timerID);
  }

  resetCountdown = () => {
    this.stopCountdown();
    this.setState({
      secondsRemaining: 0,
      inputHours: '',
      inputMinutes: '',
      inputSeconds: '',
      timerID: ''
    })
  }

  getTimeFromInput = ({ target }) => {
    const { name } = target;
    let { value } = target;

    if (value === '') value = 0;

    this.setState({[name]: parseFloat(value)}, () => {
      this.setState({
        secondsRemaining: (
          this.state.inputHours * 3600 +
          this.state.inputMinutes * 60 +
          this.state.inputSeconds)
      })
    }); 
  }


  render() {
    const { secondsRemaining, inputHours, inputMinutes, inputSeconds } = this.state;

    return (
      <>
        <h1>Countdown</h1>
        <h3>Quanto tempo você quer marcar?</h3>
        <TimeInput
          updateTimer={ this.getTimeFromInput }
          inputHours={ inputHours }
          inputMinutes={ inputMinutes }
          inputSeconds={ inputSeconds }
        />
        <button onClick={ this.startCountdown } disabled>Start!</button>
        <button onClick={ this.stopCountdown }>Stop!</button>
        <button onClick={ this.resetCountdown }>Reset</button>
        <TimeDisplay secondsRemaining = { secondsRemaining } />
      </>
    );
  }
}

export default App;
