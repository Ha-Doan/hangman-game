import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import postGuess from '../actions/guess'

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../images', false, /hangman\d\.jpg/));

class Guesser extends PureComponent {
  updateGuess(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      console.log('In Gusseur wrongGuessCount ' + this.props.wrongGuessCount)
      this.props.dispatch(postGuess(this.refs.guess.value))
      this.refs.guess.value = ""
    }
  }

  restartGame() {
    this.props.dispatch(postGuess())
    this.refs.guess.value = ""
  }

  render() {
    return (
      <div className = "Guesser">
        <input
          id = "text"
          type = "text"
          ref = "guess"
          className = "guess"
          disabled = {(this.props.wrongGuessCount === 6 || this.props.win === true) ? "disabled" : ""}
          placeholder = "Your guess"
          onKeyUp = {this.updateGuess.bind(this)}/>
        <div className = "actions">
          <button className = "primary" onClick={this.restartGame.bind(this)}> Restart game </button>
        </div>
        <span>
          <img src={images[this.props.wrongGuessCount]} height="200" width="200" alt=""/>
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => Object.assign({}, state)

export default connect(mapStateToProps, null)(Guesser)
