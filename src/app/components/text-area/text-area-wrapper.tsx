'use client'

import { TextArea } from '@/components/form/text-area'
import React, { useState } from 'react'

function TextAreaWrapper() {
  const [value, setValue] = useState('')
  return (
    <TextArea
      name='content'
      label='Content'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='Write your content...'
      maxLength={10}
    // error='This field is required.'
    />
  )
}

export default TextAreaWrapper