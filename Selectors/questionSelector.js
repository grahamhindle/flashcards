import { createSelector } from 'reselect'
import _ from 'lodash'


const getQuestions = state => (state.questions)
const getDecks = (state,id) => (state.decks[id])

export const selectDeck = createSelector(
  [getDecks,(state,id) => id],
  (deck) => {
    return deck
  }
)

export const selectQuestions = createSelector(
  [getQuestions,selectDeck],
  (questions,deck) => {
    //find questions for deck
      return _.filter(questions, x => deck.questions.includes(x.id) )
  }
)