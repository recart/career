import { AddColleague } from '../add-colleague/add-colleague.component'
import { ColleaguesList } from '../colleagues-list/colleagues-list.component'

export function Layout() {
  return (
    <div className='flex flex-col items-center justify-center mt-40 w-100'>
      <div className='container'>
        <div className='flex flex-wrap md:flex-nowrap gap-5'>
          <div className='w-full md:w-1/2'>
            <div className='border border-slate-300'>
              <h2 className='bg-sky-600 font-semibold text-white py-4 px-2'>Colleagues List</h2>
              <AddColleague />
              <ColleaguesList />
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='border border-slate-300'>
              <h2 className='bg-orange-500 font-semibold text-white py-4 px-2'>Favorites List</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
