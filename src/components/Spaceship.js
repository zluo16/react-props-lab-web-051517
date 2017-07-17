import React, {Component} from 'react'

class Spaceship extends Component {
  render() {
    return (
      <div >
        <h2>{this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets ? "Yes" : "No"}</p>
        <p>Colors: <ul>{this.props.colors.map(color => {
          return <li>{color}</li>
        })}</ul></p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
