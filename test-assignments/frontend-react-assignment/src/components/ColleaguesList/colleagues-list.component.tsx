import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import { ColleagueRow } from '../ColleagueRow/colleague-row.component'

export const ColleaguesList: React.FC = (props) => {
  const colleagues = useSelector((state: AppState) => state.colleagues)

  return (
    <div className="container">
      {colleagues.map((colleague, index) => (
        <ColleagueRow
          key={index}
          colleague={colleague}
          index={index}
        />
      ))}
    </div>
  )
}
