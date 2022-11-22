import { useAppSelector } from '../../hooks/redux'
import { ColleagueRow } from '../colleague-row/colleague-row.component'

export function ColleaguesList() {
  const colleagues = useAppSelector((state) => state.colleagues)

  return (
    <div className='divide-y divide-slate-300'>
      {colleagues.map((colleague, index) => (
        <ColleagueRow key={index} colleague={colleague} index={index} />
      ))}
    </div>
  )
}
