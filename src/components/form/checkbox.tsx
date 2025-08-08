'use client'

import clsx from 'clsx';
import React, { useEffect, useRef } from 'react'

function Checkbox({
  name,
  label,
  indeterminate = false,
  disabled = false,
  ...props
}: React.ComponentProps<'input'>
  & {
    label?: string;
    indeterminate?: boolean;
  }) {

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);
  return (
    <div>
      <input ref={inputRef} name={name} id={name} type='checkbox' className='sr-only peer' disabled={disabled} {...props} />
      <label htmlFor={name} className={clsx(`flex items-center justify-center gap-3 cursor-pointer w-fit
        peer-focus:[&_>div]:outline-none peer-focus:[&_>div]:ring-3 text-neutral-600
        peer-focus:[&_>div]:ring-indigo-800/12 peer-focus:[&_>div]:border-indigo-600
        peer-checked:[&_>div]:bg-indigo-600 peer-checked:[&_>div]:border-indigo-600
        peer-checked:[&_>div_>_svg]:block

        peer-indeterminate:[&_>div]:bg-indigo-600 peer-indeterminate:[&_>div]:border-indigo-600
        peer-indeterminate:[&_>div_>div]:block peer-checked:[&_>div_>div]:hidden

        peer-disabled:cursor-not-allowed peer-disabled:text-neutral-400!
        peer-disabled:[&_>div]:bg-neutral-200 peer-disabled:peer-checked:[&_>div]:border-neutral-200
        peer-disabled:peer-indeterminate:[&_>div]:border-neutral-200
        `,
      )}>
        <div className='size-4 rounded-[0.25rem] border border-neutral-300 m-1 flex items-center justify-center'>
          <svg
            className='hidden'
            width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.69471 0.292787C8.88218 0.480314 8.9875 0.734622 8.9875 0.999786C8.9875 1.26495 8.88218 1.51926 8.69471 1.70679L3.69471 6.70679C3.50718 6.89426 3.25288 6.99957 2.98771 6.99957C2.72255 6.99957 2.46824 6.89426 2.28071 6.70679L0.280712 4.70679C0.0985537 4.51818 -0.00224062 4.26558 3.78026e-05 4.00339C0.00231622 3.74119 0.107485 3.49038 0.292893 3.30497C0.478301 3.11956 0.729114 3.01439 0.99131 3.01211C1.25351 3.00983 1.50611 3.11063 1.69471 3.29279L2.98771 4.58579L7.28071 0.292787C7.46824 0.105316 7.72255 0 7.98771 0C8.25288 0 8.50718 0.105316 8.69471 0.292787Z" fill="white" />
          </svg>
          <div className='w-2.5 h-0.5 bg-white rounded-full hidden' />
        </div>
        <span className='text-base font-normal'>{label}</span>
      </label>
    </div>
  )
}

export { Checkbox }