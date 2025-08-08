'use client'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'



type TabsContextType = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabMenuContext = React.createContext<TabsContextType | null>(null);

function TabsProvider({ children, defaultActiveTab }: {
  children: React.ReactNode;
  defaultActiveTab: string;
}) {
  const [activeTab, setActiveTab] = React.useState<string>(defaultActiveTab);
  return (
    <TabMenuContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabMenuContext.Provider>
  )
}

function Tabs({
  defaultValue,
  className,
  ...props
}: React.ComponentProps<'div'>
  & {
    defaultValue: string;
  }) {
  return (
    <TabsProvider defaultActiveTab={defaultValue}>
      <div className={cn('flex flex-col gap-6', className)} {...props} />
    </TabsProvider>
  )
}

function TabList({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div role='tablist' aria-label='Tabs' className={cn('flex gap-2', className)} {...props}>
      {children}
    </div>
  )
}

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
  className,
  value,
  ...props
}: React.ComponentProps<'button'>
  & VariantProps<typeof tabButtonVariants>) {
  const context = React.useContext(TabMenuContext);

  if (!context) {
    throw new Error('TabButton must be used within a TabMenu');
  }

  const isActive = context.activeTab === value;
  return (
    <button
      aria-selected={isActive}
      aria-controls={`${value as string}-panel`}
      onClick={(event) => {
        context.setActiveTab(value as string);
        props.onClick?.(event);
      }}
      className={cn(tabButtonVariants({ active: isActive, className }))}
      {...props}
    />
  )
}

function TabPanel({
  value,
  children,
  ...props
}: React.ComponentProps<'div'> & { value: string }) {
  const context = React.useContext(TabMenuContext);

  if (!context) {
    throw new Error('TabPanel must be used within a TabMenu');
  }
  const isActive = context.activeTab === value;
  return (
    <div
      id={`${value}-panel`}
      role="tabpanel"
      hidden={!isActive}
      {...props}
    >
      {children}
    </div>
  )
}

export { Tabs, TabList, TabButton, TabPanel }