export const GUESS = 'GUESS'

export default (newGuess) => {
  return {
    type: GUESS,
    payload: newGuess
  }
}
