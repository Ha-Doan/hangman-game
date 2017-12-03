import React, { PureComponent } from 'react'


class Result extends PureComponent{
  showHelp(){
    var show = []
    if (this.props.guess.length === 1){
      for (var i = 0; i < this.props.word.length; i++)
      {
        if (this.props.rightGuess.indexOf(this.props.word[i]) >= 0)
          show[i] = this.props.word[i]
        else
          show[i] = "_"

      }
      return show.join(" ")
    }
  }
  render(){
    return(
    <div style={{ color: 'blue' }} className='Result'>
    <h3>The word '{this.props.word}' is given.
    <br></br>Helper when guessing by letters: {this.showHelp()}
    <br></br>Wrongly guess count: {this.props.wrongGuessCount}</h3>
    {!this.props.win || <h3 style={{ color: 'green' }}>Congratulations, you won!</h3>}
    {this.props.win || (this.props.wrongGuessCount !== 6  || <h3 style={{ color: 'red' }}>You lost! No pain, no gain! You can guess another word.</h3>)}
    </div>
  )
}
}
export default Result;
