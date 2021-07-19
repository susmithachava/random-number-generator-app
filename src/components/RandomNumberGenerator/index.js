// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickBtn = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({
      randomNumber: newRandomNumber,
    })
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="number-generator-btn"
            onClick={this.onClickBtn}
          >
            Generate
          </button>
          <p className="generated-number-display">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
