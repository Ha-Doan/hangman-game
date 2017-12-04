import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Guesser from './Guesser'
import Result from './Result'


class  HangmanGame extends PureComponent{
  static propTypes = {
    game: PropTypes.shape({
      word: PropTypes.string.isRequired,
      wrongGuessCount: PropTypes.number.isRequired,
      rightGuess: PropTypes.arrayOf(PropTypes.string),
      win: PropTypes.boolean,
    })
  }

  renderGuesser(game, index){
    console.log('in HangmanGame ' + game.wrongGuessCount)
    return (
      <Guesser {...game} />
    )
  }
  renderResult(game,index){
    return(
      <Result {...game} />
    )
  }

  render() {
    return(
      <div style={{ color: 'purple' }} className="HangmanGame">
         <h2> Please enter your guess.
         <br></br> Entering more than one letter at once means that you want to guess the whole word.</h2>
         {this.renderGuesser(this.props.game)}
         {this.renderResult(this.props.game)}
      </div>
    )
  }
}

const mapStateToProps = ({ game }) => ({ game })

export default connect(mapStateToProps)(HangmanGame)
