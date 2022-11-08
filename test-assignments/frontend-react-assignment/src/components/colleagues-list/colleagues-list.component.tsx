import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import { ColleagueRow } from '../colleague-row/colleague-row.component'

export function ColleaguesList() {
  const colleagues = useSelector((state: AppState) => state.colleagues)

  return (
    <div className='divide-y divide-slate-300'>
      {colleagues.map((colleague, index) => (
        <ColleagueRow key={index} colleague={colleague} index={index} />
      ))}
    </div>
  )
}
