import { applyMiddleware, combineReducers, createStore } from 'redux';
// import getGamesData from './getGamesData';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { gameReducer } from './gameReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  games: gameReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));