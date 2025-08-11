'use client'

import { Button } from '@/components/ui/button';
import { ModalDialog } from '@/components/ui/modal-dialog';
import React, { useState } from 'react'

function ModalDialogWrapper() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Button onClick={() => setVisible(prev => !prev)} variant="secondary">Open dialog</Button>
      <ModalDialog
        visible={visible}
        // variant='danger'
        onOpenChange={setVisible}
        title='Are you sure you want to leave the process?'
        description='Your upgrade plan process will be cancelled. You need to start again if you leave the process.'
        confirmText='Yes'
        cancelText='No'
        onCancel={() => setVisible(false)}
        onConfirm={() => { }}
      />
    </>
  )
}

export default ModalDialogWrapper