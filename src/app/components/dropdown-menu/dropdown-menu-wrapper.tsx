'use client'

import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { RiGlobeLine, RiLock2Line, RiMistFill } from '@remixicon/react';
import { ReactNode } from 'react';

type OptionType = {
  id: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean
}

const options: OptionType[] = [
  {
    id: 'public',
    label: 'Public',
    icon: <RiGlobeLine />
  },
  {
    id: 'unlisted',
    label: 'Unlisted',
    icon: <RiMistFill />
  },
  {
    id: 'private',
    label: 'Private',
    icon: <RiLock2Line />,
    // disabled: true
  },

]

export default function DropdownMenuWrapper() {
  return (
    <>
      <DropdownMenu<OptionType>
        placeholder='Privacy options'
        options={options}
        closeOnSelect={true}
        defaultVisible={true}

        getItemValue={(item) => item.id}
        getItemLabel={(item) => item.label}
        getItemIcon={(item) => item.icon}
        getItemDisabled={(item) => item.disabled ?? false}
      />
    </>
  )
}
