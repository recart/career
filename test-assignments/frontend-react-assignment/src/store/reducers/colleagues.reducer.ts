import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Colleague } from '../types/colleague.type'

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

export const colleaguesSlice = createSlice({
  name: 'colleagues',
  initialState,
  reducers: {
    addColleague: (state, action: PayloadAction<Colleague>) => {
      state.push(action.payload)
    },
    removeColleague: (state, action: PayloadAction<{ colleagueIndex: number }>) => {
      state.splice(action.payload.colleagueIndex, 1)
    },
    favoriteColleague: (
      state,
      action: PayloadAction<{ colleagueIndex: number; favorite: boolean }>
    ) => {
      state[action.payload.colleagueIndex].favorite = action.payload.favorite
    }
  }
})

export const { addColleague, removeColleague, favoriteColleague } = colleaguesSlice.actions

export const { reducer: colleaguesReducer } = colleaguesSlice
