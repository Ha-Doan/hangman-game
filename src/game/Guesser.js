import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import postGuess from '../actions/guess'

class Guesser extends PureComponent{
  constructor(props) {// only called once
    super(props)

    const { word, wrongGuessCount, guess, rightGuess, win} = props
        this.state = {
        word,
        wrongGuessCount,
        guess,
        rightGuess,
        win,
      }
  }

  updateGuess(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      console.log('In Gusseur wrongGuessCount ' + this.state.wrongGuessCount)
      this.setState({
        guess: this.refs.guess.value
      },
        this.sendGuess // pass this func as second parameter (so no ())of setState so that it'll be called after setStatae finishes the first arg
      )
    }
  }
  sendGuess(){
    const game = {
      ...this.state,
    }
    this.props.save(game)
  }

  render() {
    const { word, wrongGuessCount, guess, rightGuess, win} = this.props
    var element = document.getElementById('text')
    if (element && wrongGuessCount < 6)
      element.disabled = false
    if ((wrongGuessCount === 6 && win === false) || (win === true))
      element.disabled = true

    this.setState({
    word: word,
    wrongGuessCount: wrongGuessCount,
    guess: guess,
    rightGuess: rightGuess,
    win: win,
  })

    return (
      <div className="Guesser">
        <input
          id="text"
          type="text"
          ref="guess"
          className="guess"
          disabled=""
          placeholder="Your guess"
          defaultValue={this.state.guess}
          onKeyUp={this.updateGuess.bind(this)} />
          <div className="actions">
            <button className="primary" onClick={this.sendGuess.bind(this)}>Restart game</button>
          </div>
          <span><img src ='https://tinyurl.com/y8buta2d' height="200" width="200" alt = ""/></span>

      </div>
    )
}
}
const mapDispatchToProps = { save: postGuess }

export default connect(null, mapDispatchToProps)(Guesser)
