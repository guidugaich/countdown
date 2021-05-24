import React from 'react';

class TimeDisplay extends React.Component {
  
  
  render() {
    const { secondsRemaining } = this.props;
    const num = new Date(secondsRemaining*1000).toISOString().substr(11, 8);

    return (
      <>
        <span>{ num }</span>
      </>
    )
  }
}

export default TimeDisplay;