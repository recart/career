import * as types from '../constants/ActionTypes';

export function addColleague(name) {
  return {
    type: types.ADD_COLLEAGUE,
    name
  };
}

export function deleteColleague(id) {
  return {
    type: types.DELETE_COLLEAGUE,
    id
  };
}

export function starColleague(id) {
  return {
    type: types.STAR_COLLEAGUE,
    id
  };
}
