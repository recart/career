import StarFillIcon from '../../assets/star-fill.svg?react'
import StarIcon from '../../assets/star.svg?react'
import TrashIcon from '../../assets/trash.svg?react'
import { useAppDispatch } from '../../hooks/redux'
import { favoriteColleague, removeColleague } from '../../store/reducers/colleagues.reducer'
import { Colleague } from '../../store/types/colleague.type'

interface ColleagueRowProps {
  index: number
  colleague: Colleague
}

export function ColleagueRow(props: ColleagueRowProps) {
  const { colleague, index } = props
  const dispatch = useAppDispatch()

  function handleDelete() {
    dispatch(removeColleague({ colleagueIndex: index }))
  }

  function handleFavorite() {
    dispatch(favoriteColleague({ colleagueIndex: index, favorite: !colleague.favorite }))
  }

  return (
    <div className='flex justify-between items-center px-2 h-16 bg-white'>
      <p className='font-semibold'>{colleague.name}</p>
      <div className='space-x-2'>
        <button
          type='button'
          className='bg-gray-200 p-2 border border-gray-400 rounded-sm hover:bg-gray-100'
          onClick={handleFavorite}
        >
          {colleague.favorite ? <StarFillIcon /> : <StarIcon />}
        </button>
        <button
          type='button'
          className='bg-gray-200 p-2 border border-gray-400 rounded-sm hover:bg-gray-100'
          onClick={handleDelete}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}
