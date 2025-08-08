import { Checkbox } from '@/components/form/checkbox'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Checkbox component',
}

export default function CheckboxPage() {
  return (
    <div className='py-[200px] w-[240px] mx-auto flex flex-col gap-6'>
      <Checkbox name='unchecked' label='Unchecked' />
      <Checkbox name='checked' defaultChecked label='Checked' />
      <Checkbox name='indeterminate' indeterminate label='Indeterminate' />
      <Checkbox name='disabledUnchecked' disabled label='Disabled unchecked' />
      <Checkbox name='disabled' checked disabled label='Disabled checked' />
      <Checkbox name='disabledIndeterminate' indeterminate disabled label='Disabled indeterminate' />

    </div>
  )
}
