import * as types from '../constants/ActionTypes';

const initialState = {
  colleaguesById: [
    {
      name: 'Mattie Porter',
      starred: true,
      title: 'Customer Success Hero'
    },
    {
      name: 'Aiden Stevens',
      starred: false,
      title: 'Manager'
    },
    {
      name: 'Eric Washington',
      starred: false,
      title: 'Backend Developer'
    },
    {
      name: 'Gilbert Payne',
      starred: true,
      title: 'Frontend Developer'
    },
    {
      name: 'Vera Douglas',
      starred: false,
      title: 'Infrastucture Engineer'
    }
  ]
};

const ACTION_HANDLERS = {
  [types.ADD_COLLEAGUE]: (state, action) => {
    return {
      ...state,
      colleaguesById: [
        ...state.colleaguesById,
        {
          name: action.name
        }
      ],
    };
  },
  [types.DELETE_COLLEAGUE]: (state, action) => {
    return {
      ...state,
      colleaguesById: state.colleaguesById.filter((item, index) => index !== action.id)
    };
  },
  [types.STAR_COLLEAGUE]: (state, action) => {
    let colleagues = [...state.colleaguesById];
    let colleague = colleagues.find((item, index) => index === action.id);
    colleague.starred = !colleague.starred;
    return {
      ...state,
      colleaguesById: colleagues
    };
  }
};

export default function Colleagues(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
