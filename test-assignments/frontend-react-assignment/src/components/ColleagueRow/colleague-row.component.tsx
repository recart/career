import React from 'react'
import { useDispatch } from 'react-redux'
import cn from 'classnames'

import { Colleague } from '../../store/types/colleague.type'
import { removeColleague, favoriteColleague } from '../../store/actions'
import styles from './colleague-row.module.css'
import { ReactComponent as StarIcon } from '../../assets/star.svg'
import { ReactComponent as StarFillIcon } from '../../assets/star-fill.svg'
import { ReactComponent as TrashIcon } from '../../assets/trash.svg'

interface ColleagueProps {
  index: number
  colleague: Colleague
}
export const ColleagueRow: React.FC<ColleagueProps> = (props) => {
  const { colleague, index } = props
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(removeColleague(index))
  }

  function handleFavorite() {
    dispatch(favoriteColleague(index, !colleague.favorite))
  }

  return (
    <div className={cn("row justify-content-between", styles.colleagueRow)}>
      <p className={styles.colleague}>{colleague.name}</p>
      <div>
        <button
          type="button"
          className="btn btn-light"
          onClick={handleFavorite}
        >
          {colleague.favorite ? <StarFillIcon /> : <StarIcon />}
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={handleDelete}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}
