const defaultState = {
    games: [],
}


const ADD_GAME = "ADD_GAME"
const REMOVE_GAME = "REMOVE_GAME"
const ADD_MANY_GAMES = "ADD_MANY_GAMES"

export const gameReducer = (state = defaultState, action) => {
    switch(action.type) {
      case ADD_MANY_GAMES:
        return {...state, games: [...state.games, ...action.payload]}
      case ADD_GAME:
        return {...state, games: [...state.games, action.payload]}
      case REMOVE_GAME:
        return {...state, games: state.games.filter(games => games.slug !== action.payload)}
      default: 
        return state
    }
  }

export const addGameAction = (payload) => ({type: ADD_GAME, payload})
export const removeGameAction = (payload) => ({type: REMOVE_GAME, payload})
export const addManyGamesAction = (payload) => ({type: ADD_MANY_GAMES, payload})