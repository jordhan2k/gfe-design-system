
import { Metadata } from 'next'
import DropdownMenuWrapper from './dropdown-menu-wrapper'


export const metadata: Metadata = {
  title: 'Dropdown menu component',
}



export default function DropdownPage() {
  return (
    <div className='py-[200px] max-w-[280px] mx-auto flex flex-col gap-6'>
      <DropdownMenuWrapper />
    </div>
  )
}
