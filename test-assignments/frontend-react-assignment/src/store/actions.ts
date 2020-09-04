import { Colleague } from './types/colleague.type'

export const CREATE_COLLEAGUE = 'CREATE_COLLEAGUE'
export const REMOVE_COLLEAGUE = 'REMOVE_COLLEAGUE'
export const FAVORITE_COLLEAGUE = 'FAVORITE_COLLEAGUE'

interface CreateColleagueAction {
  type: typeof CREATE_COLLEAGUE
  colleague: Colleague
}

interface RemoveColleagueAction {
  type: typeof REMOVE_COLLEAGUE
  colleagueIndex: number
}

interface FavoriteColleagueAction {
  type: typeof FAVORITE_COLLEAGUE
  colleagueIndex: number
  favorite: boolean
}

export type ColleagueActionTypes = CreateColleagueAction | RemoveColleagueAction | FavoriteColleagueAction

export function createColleague(colleague: Colleague): ColleagueActionTypes {
  return {
    type: CREATE_COLLEAGUE,
    colleague
  }
}

export function removeColleague(colleagueIndex: number): ColleagueActionTypes {
  return {
    type: REMOVE_COLLEAGUE,
    colleagueIndex
  }
}

export function favoriteColleague(colleagueIndex: number, favorite: boolean): ColleagueActionTypes {
  return {
    type: FAVORITE_COLLEAGUE,
    colleagueIndex,
    favorite
  }
}
