import React from 'react'

class TimeInput extends React.Component {
  render() {
    const { updateTimer, inputHours, inputMinutes, inputSeconds } = this.props;
    return (
      <>
        <label>H
          <input
            type='number'
            name="inputHours"
            onChange={ updateTimer }
            value={ inputHours }
          />
        </label>
        <label>M
          <input
            type='number'
            name="inputMinutes"
            onChange={ updateTimer }
            value={ inputMinutes }
          />
        </label>
        <label>S
          <input
            type='number'
            name="inputSeconds"
            onChange={ updateTimer }
            value={ inputSeconds }
          />
        </label>
      </>
    )
  }
}

export default TimeInput;