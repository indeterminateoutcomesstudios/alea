import React from 'react'
import styles from './style.css'

export default class Compose extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      height: 0
    }
    this.focused = false
    this.messageQueue = []
  }

  handleChange (event) {
    const value = event.target.value

    const setHeightImmediate = (value.length > this.state.value.length)

    this.setState({
      value
    })

    if (setHeightImmediate) {
      this.calculateHeight()
    } else {
      this.setState({ height: 0 })
      requestAnimationFrame(() => this.calculateHeight())
    }
  }

  calculateHeight () {
    const autogrow = this.refs.autogrow
    const scrollHeight = autogrow.scrollHeight 

    let height = 0
    if (scrollHeight !== 48) {
      height = scrollHeight + 2
    }

    this.setState({
      height
    })
  }

  handleKeyUp (event) {
    if (event.key == 'Enter') {
      this.handleSubmit()
    }
  }

  handleSubmit () {
    this.messageQueue.push(this.state.value)
    this.props.onSend(this.state.value)
    this.setState({
      value: '',
      height: 0
    })
  }

  render () {
    let style = {}
    if (this.state.height !== 0) {
      style = {
        height: this.state.height + 'px'
      }
    }

    return (
      <div
        className={ styles.form }
      >
        <textarea
          className={ styles.formInput }
          type='text'
          placeholder='Send a message...'
          value={ this.state.value }
          ref='autogrow'
          style={ style }
          onChange={e => this.handleChange(e)}
          onKeyUp={e => this.handleKeyUp(e)}
        />
      </div>
    )
  }
}
