import { Toggle } from '@/components/form/toggle';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Toggle component",
};

export default function TextInputPage() {
  return (
    <div className='max-w-[340px] mx-auto pt-[200px] flex gap-6 justify-center'>

      <div className='flex flex-col gap-6 items-center'>
        <Toggle size="sm" name='toggle1' />
        <Toggle size="md" name='toggle2' />
      </div>
      <div className='flex flex-col gap-6 items-center'>
        <Toggle size="sm" name='toggle3' />
        <Toggle size="md" name='toggle4' />
      </div>
    </div>
  )
}
