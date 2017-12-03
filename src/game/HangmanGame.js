import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Guesser from './Guesser'
import Result from './Result'


class  HangmanGame extends PureComponent{
  static propTypes = {
    game: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired,
    wrongGuessCount: PropTypes.number.isRequired,
    guess: PropTypes.string,
    rightGuess: PropTypes.arrayOf(PropTypes.string),
    win: PropTypes.boolean,
  }))
}
  renderGuesser(game,index){
    console.log('in HangmanGame ' + game.wrongGuessCount)
    return (
      <Guesser key={index} {...game} />
    )
  }
  renderResult(game,index){
    return(
      <Result key={index} {...game} />
    )
  }

  render() {

    return(
      <div style={{ color: 'purple' }} className="HangmanGame">
         <h2> Please enter your guess.
         <br></br> Entering more than one letter at once means that you want to guess the whole word.</h2>
         {this.props.game.map(this.renderGuesser)}
         {this.props.game.map(this.renderResult)}
      </div>

    )
  }
}

const mapStateToProps = ({ game }) => ({ game })

export default connect(mapStateToProps)(HangmanGame)
