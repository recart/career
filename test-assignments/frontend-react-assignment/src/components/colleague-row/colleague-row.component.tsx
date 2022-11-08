import React from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as StarFillIcon } from '../../assets/star-fill.svg'
import { ReactComponent as StarIcon } from '../../assets/star.svg'
import { ReactComponent as TrashIcon } from '../../assets/trash.svg'
import { favoriteColleague, removeColleague } from '../../store/actions'
import { Colleague } from '../../store/types/colleague.type'

interface ColleagueProps {
  index: number
  colleague: Colleague
}

export function ColleagueRow(props: ColleagueProps) {
  const { colleague, index } = props
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(removeColleague(index))
  }

  function handleFavorite() {
    dispatch(favoriteColleague(index, !colleague.favorite))
  }

  return (
    <div className='flex justify-between items-center px-2 h-16 bg-white'>
      <p className='font-semibold'>{colleague.name}</p>
      <div className='space-x-2'>
        <button
          type='button'
          className='bg-gray-200 p-2 border border-gray-400 rounded hover:bg-gray-100'
          onClick={handleFavorite}
        >
          {colleague.favorite ? <StarFillIcon /> : <StarIcon />}
        </button>
        <button
          type='button'
          className='bg-gray-200 p-2 border border-gray-400 rounded hover:bg-gray-100'
          onClick={handleDelete}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}
