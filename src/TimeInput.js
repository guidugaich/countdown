import React from 'react'
import './TimeInput.css';

class TimeInput extends React.Component {
  render() {
    const { updateTimer, inputHours, inputMinutes, inputSeconds } = this.props;
    return (
      <div className="time-input-container">
        <label>
          <input
            type='text'
            name="inputHours"
            onChange={ updateTimer }
            value={ inputHours }
            placeholder="HH"
            pattern="/d*"
            maxLength="2"
          />
        </label>
        <label>
          <input
            type='text'
            name="inputMinutes"
            onChange={ updateTimer }
            value={ inputMinutes }
            placeholder="MM"
            pattern="/d*"
            maxLength="2"
          />
        </label>
        <label>
          <input
            type='text'
            name="inputSeconds"
            onChange={ updateTimer }
            value={ inputSeconds }
            placeholder="SS"
            pattern="/d*"
            maxLength="2"
          />
        </label>
      </div>
    )
  }
}

export default TimeInput;