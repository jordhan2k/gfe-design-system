import { TextArea } from '@/components/form/text-area'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Text Area Component',
}

export default function TextAreaPage() {
  return (
    <div className='w-[340px] pt-[112px] mx-auto flex flex-col gap-8'>
      <TextArea
        name='description'
        label='Description'
        placeholder='Write your description...'
      />
      <TextArea
        name='content'
        label='Content'
        placeholder='Write your content...'
        error='This field is required.'
      />
      <TextArea
        name='message'
        label='Message'
        placeholder='Write your message...'
        // error='This field is required.'
        disabled
      />
    </div>
  )
}
