import { GUESS } from '../actions/guess'
import myGame from '../fixtures/game'
export default (state = myGame.slice(0,1), {type, payload} = {}) => {

  switch(type) {
    case GUESS :
      const {word, wrongGuessCount, guess, rightGuess, win} = payload
      console.log("wrongGuessCount " + wrongGuessCount)
      if ((wrongGuessCount === 6 && win === false) || (win === true)) {
        var nextWords2 = myGame.filter(game => game.word !== word )
        if (nextWords2.length === 0) { nextWords2 = myGame}
        return state.map(game => Object.assign({}, game, { word: nextWords2[0].word,
          wrongGuessCount: 0,
          rightGuess: [],
          win: false
        }));
      }
      if (guess.length > 1 ){
        if (guess === word){
          if (wrongGuessCount < 6){
            return state.map(game => Object.assign({}, game, {win: !win
            }));
          }
        }
        else {
          var count = wrongGuessCount
          count++
          return state.map(game => Object.assign({}, game, { wrongGuessCount: count
          }));
        }
      }
      else if (guess.length === 1){
        var count3 = rightGuess.length
        var tempArray = rightGuess
        var countUnique = new Set(word).size;
        if (word.indexOf(guess) >= 0){
          tempArray.push(guess)
          count3++
          if (count3 === countUnique){
            if (wrongGuessCount < 6){
              return state.map(game => Object.assign({}, game, { guess: guess,
                rightGuess: tempArray,
                win: !win
              }));
            }
          }
          else
            return state.map(game => Object.assign({}, game, { guess: guess,
              rightGuess: tempArray
            }));
        }
        else {
          var count2 = wrongGuessCount
          count2++
          return state.map(game => Object.assign({}, game, { guess: guess,
          wrongGuessCount: count2
          }));
        }
      }

    default :
      return state
  }
}
// you should always return new state instead of mutating the state passed by Redux.
