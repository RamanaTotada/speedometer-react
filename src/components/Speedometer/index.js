import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="sppedometer-image"
          alt="speedometer"
        />
        <h2 className="heading-speed">Speed is {speed}mph</h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button type="button" className="button-tr" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
