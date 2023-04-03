// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h3 className="heading">Speed is {count}mph</h3>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>

        <div>
          <button className="button" onClick={this.onIncrement} type="button">
            Accelerate
          </button>
          <button className="button1" onClick={this.onDecrement} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
