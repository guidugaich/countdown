import React from 'react';
import TimeInput from './TimeInput';
import TimeDisplay from './TimeDisplay';
import './App.css';
import darkIcon from './icons/todark.png';
import sunIcon from './icons/tolight.png';
import ClockActionButtons from './ClockActionButtons';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      secondsRemaining: 0,
      inputHours: '',
      inputMinutes: '',
      inputSeconds: '',
      timerID: '',
      running: false,
      dark: true,
    }
  }

  updateStateEverySecond = () => {
    if (this.state.secondsRemaining > 0) {
      this.setState((prevState) => ({
        secondsRemaining: prevState.secondsRemaining - 1
      }));
    } else {
      this.resetCountdown();
      new Audio('alarm.mp3').play();
    }
  }

  startCountdown = () => {
    const { running } = this.state;
    if (!running) {
      const timerID = setInterval(this.updateStateEverySecond, 1000);
      this.setState({timerID: timerID, running: true});
    }
  }

  stopCountdown = () => {
    const { running } = this.state;
    if (running) {
      const { timerID } = this.state;
      clearInterval(timerID);
      this.setState({running: false})
    }
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
    this.stopCountdown();
    const { name } = target;
    let { value } = target;

    if (value === '') value = 0;
    if (!parseFloat(value)) {
      this.setState({secondsRemaining: 0}, () => {
        alert('only numbers, please!');
      });
    } else {
      this.setState({[name]: parseFloat(value)}, () => {
        this.setState({
          secondsRemaining: (
            this.state.inputHours * 3600 +
            this.state.inputMinutes * 60 +
            this.state.inputSeconds)
        })
      });
    }

  }

  switchTheme = () => {
    if (this.state.dark) {
      this.setState({dark: false});
    } else {
      this.setState({dark: true});
    }
  }

  render() {
    const {
      secondsRemaining,
      inputHours,
      inputMinutes,
      inputSeconds,
      running,
      dark } = this.state;

    return (
      <div className={`app-container ${dark ? '': 'app-container-light'}`}>
        <div className="header">
          <h1>countdown</h1>
          <button onClick={ this.switchTheme }>
            <img
              src={dark ? sunIcon : darkIcon}
              alt=''
            />
          </button>
        </div>
        <h3>set the time below</h3>
        <TimeInput
          updateTimer={ this.getTimeFromInput }
          inputHours={ inputHours }
          inputMinutes={ inputMinutes }
          inputSeconds={ inputSeconds }
        />
        <ClockActionButtons
          stopBtn={ this.stopCountdown }
          startBtn={ this.startCountdown }
          resetBtn={ this.resetCountdown }
        />
        <TimeDisplay
          secondsRemaining = { secondsRemaining }
          running={ running }
        />
        <p className="credits">
          developed by
          <a
            href='https://github.com/guidugaich'
            target='_blank'
            rel='noreferrer'
          >
            {' @guidugaich'}
          </a>
        </p>
      </div>
    );
  }
}

export default App;
