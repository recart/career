import { Colleague } from '../types/colleague.type'
import {
  CREATE_COLLEAGUE,
  REMOVE_COLLEAGUE,
  FAVORITE_COLLEAGUE,
  ColleagueActionTypes
} from '../actions'

export type ColleaguesState = Colleague[]

const initialState: ColleaguesState = [
  {
    name: 'Tori Broughton',
    favorite: false
  },
  {
    name: 'Marcie Tyson',
    favorite: false
  },
  {
    name: 'Zaydan Navarro',
    favorite: false
  },
  {
    name: 'Carmen Ahmed',
    favorite: false
  },
  {
    name: 'Leanna Bowman',
    favorite: false
  }
]

export function colleaguesReducer(state = initialState, action: ColleagueActionTypes) {
  switch (action.type) {
    case CREATE_COLLEAGUE:
      return state.concat(action.colleague)
    case REMOVE_COLLEAGUE:
      return state.filter((_, index) => index !== action.colleagueIndex)
    case FAVORITE_COLLEAGUE:
      return state.map((colleague, index) => {
        if (index === action.colleagueIndex) {
          return {
            ...colleague,
            favorite: action.favorite
          }
        }

        return colleague
      })
    default:
      return state
  }
}
