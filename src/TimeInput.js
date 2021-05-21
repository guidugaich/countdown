import React from 'react'

class TimeInput extends React.Component {
  render() {
    return (
      <>
        <label>H
          <input type='number' />
        </label>
        <label>M
          <input type='number' />
        </label>
        <label>S
          <input type='number' />
        </label>
      </>
    )
  }
}

export default TimeInput;