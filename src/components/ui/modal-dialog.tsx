import clsx from 'clsx';
import React from 'react'
import { Button } from './button';
import { RiCloseFill } from '@remixicon/react';


interface ModalDialogProps {
  visible: boolean;
  onOpenChange: (state: boolean) => void;
  title: string;
  description?: string;
  variant?: 'primary' | 'danger';
  cancelText?: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm: () => void;
}

function ModalDialog({
  visible, onOpenChange, title, description, confirmText, cancelText, variant = 'primary', onCancel, onConfirm
}: ModalDialogProps) {

  const handleClose = () => {
    onOpenChange(false)
  }
  return (
    <div className={clsx('fixed w-dvw h-dvh flex justify-center items-center',
      {
        'pointer-events-none opacity-0': !visible,
      }
    )}>
      <div onClick={handleClose} className='absolute w-full h-full bg-black/70 backdrop-blur-sm z-1000' />
      <dialog open={visible} className='max-w-[343px] w-full mx-auto p-6 rounded-lg bg-white z-1001'>
        <header className='flex gap-2 items-start'>
          <h2 className='text-lg font-semibold text-neutral-900'>{title}</h2>
          <Button onClick={handleClose} variant={'link-gray'} size={'2xl'}><RiCloseFill /></Button>
        </header>
        <div className='mt-2 mb-6 text-sm font-normal text-neutral-600'>
          {description}
        </div>
        <footer className='w-full flex gap-3'>
          {cancelText ? <Button onClick={() => onCancel?.()} variant={'secondary'} className='flex-1'>{cancelText}</Button> : null}
          <Button onClick={onConfirm} variant={variant === 'danger' ? 'destructive' : 'primary'} className='flex-1'>{confirmText}</Button>
        </footer>
      </dialog>
    </div>
  )
}

export { ModalDialog }