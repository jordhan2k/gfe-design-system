import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const tabButtonVariants = cva(
  'border-box border border-transparent px-4 py-2.5 rounded-[0.25rem] text-base font-medium text-neutral-600 disabled:bg-transparent! disabled:text-neutral-400 hover:bg-neutral-50 not-disabled:cursor-pointer focus-visible:bg-neutral-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-800/20',
  {
    variants: {
      active: {
        true: 'text-neutral-900 border-neutral-200 shadow-sm',
        false: null
      }
    },
    defaultVariants: {
      active: false
    }
  }
)

function TabButton({
  active,
  className,

  ...props
}: React.ComponentProps<'button'>
  & VariantProps<typeof tabButtonVariants>) {
  return (
    <button
      className={cn(tabButtonVariants({ active, className }))}
      {...props}
    />
  )
}

export { TabButton }