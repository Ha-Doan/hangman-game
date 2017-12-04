import {
  GUESS
} from '../actions/guess'
import myGame from '../fixtures/game'
export default (state = myGame[0], {
  type,
  payload
} = {}) => {

  switch (type) {
    case GUESS:
      const guess = payload
      const {
        word,
        wrongGuessCount,
        rightGuess,
        win
      } = state

      console.log("wrongGuessCount " + wrongGuessCount)
      // If already in end state (win or lose)
      if (payload === undefined || wrongGuessCount === 6 || win === true) {
        var nextWords2 = myGame.filter(game => game.word !== word)
        if (nextWords2.length === 0) {
          nextWords2 = myGame
        }
        return Object.assign({}, state, {
          word: nextWords2[0].word,
          wrongGuessCount: 0,
          rightGuess: [],
          win: false
        })
      // if a word is guessed
      } else if (guess.length > 1) {
        if (guess === word) {
          return Object.assign({}, state, {
            win: true,
            rightGuess: word.split("")
          })
        } else {
          return Object.assign({}, state, {
            wrongGuessCount: wrongGuessCount + 1
          })
        }
      // If a new letter is guessed
    } else if (guess.length === 1 && !rightGuess.includes(guess)) {
        var count3 = rightGuess.length
        var tempArray = rightGuess
        var countUnique = new Set(word).size;

        // guessed letter correct
        if (word.indexOf(guess) >= 0) {
          tempArray.push(guess)
          count3++
          if (count3 === countUnique) {
            return Object.assign({}, state, {
              rightGuess: tempArray,
              win: true
            })
          } else {
            return Object.assign({}, state, {
              rightGuess: tempArray
            })
          }
        // guessed letter incorrect
        } else {
          return Object.assign({}, state, {
            wrongGuessCount: wrongGuessCount + 1
          })
        }
      // If an empty or repeated guess
      } else {
        return state
      }

    default:
      return state
  }
}
// you should always return new state instead of mutating the state passed by Redux.
