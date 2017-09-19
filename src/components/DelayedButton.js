// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  handleClick = (event) => {

    event.persist()

    this.props.onDelayedClick(event)
  }

  // When the button is clicked, we want to persist the event
  // so we can pass it to the `this.props.onDelayedClick()` in
  // a `setTimeout()` block. The `setTimeout()` will be set
  // to `this.props.delay`.

  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}

export default DelayedButton
