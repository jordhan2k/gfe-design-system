import { Tooltip } from '@/components/ui/tooltip'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tooltip Component',
}

export default function TooltipPage() {
  return (
    <div className='mx-auto py-[200px] w-fit flex flex-col gap-40 items-center'>
      <Tooltip title='This is a tooltip content' side={'top'} align={'center'} forceVisible></Tooltip>
      <div className='mx-auto pt-[200px] w-fit flex flex-col gap-20'>
        <div className='flex flex-row gap-6 justify-between'>
          <Tooltip title='This is a tooltip content' side={'top'} align={'start'}>Top start</Tooltip>
          <Tooltip title='This is a tooltip content' side={'top'} align={'center'}>Top center</Tooltip>
          <Tooltip title='This is a tooltip content' side={'top'} align={'end'}>Top end</Tooltip>
        </div>
        <div className='flex flex-row gap-6 justify-between'>
          <Tooltip title='This is a tooltip content' side={'right'} >Right</Tooltip>
          <Tooltip title='This is a tooltip content' arrow={false}>None</Tooltip>
          <Tooltip title='This is a tooltip content' side={'left'} >Left</Tooltip>
        </div>
        <div className='flex flex-row gap-6 justify-between'>
          <Tooltip title='This is a tooltip content' side={'bottom'} align={'start'}>Bottom start</Tooltip>
          <Tooltip title='This is a tooltip content' side={'bottom'} align={'center'}>Bottom center</Tooltip>
          <Tooltip title='This is a tooltip content' side={'bottom'} align={'end'}>Bottom end</Tooltip>
        </div>
      </div>
    </div>
  )
}
