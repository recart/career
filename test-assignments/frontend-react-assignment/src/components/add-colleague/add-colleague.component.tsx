import { ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { addColleague } from '../../store/reducers/colleagues.reducer'

export function AddColleague() {
  const [name, setName] = useState('')
  const dispatch = useAppDispatch()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleAddColleague() {
    dispatch(addColleague({ name, favorite: false }))
  }

  return (
    <div className='flex h-10 drop-shadow-sm'>
      <input
        type='text'
        className='w-full px-2 focus:outline-none border-b border-gray-400'
        onChange={handleChange}
        placeholder='Name'
      />
      <button
        type='button'
        className='px-4 py-1 bg-gray-200 border hover:bg-gray-100 border-gray-400'
        onClick={handleAddColleague}
      >
        Add
      </button>
    </div>
  )
}
