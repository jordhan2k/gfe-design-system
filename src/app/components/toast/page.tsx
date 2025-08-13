import Toast from '@/components/ui/toast'
import ToastWrapper from './toast-wrapper'

export default function ToastPage() {

  return (
    <div className='py-[220px] mx-auto w-fit flex flex-col gap-6 items-center'>
      <Toast variant={'success'} message='Your content successfully added!' presentation />
      <Toast variant={'error'} message='Your content successfully deleted!' presentation />
      <Toast variant={'warning'} message='Your image is 5Mb, it may load longer!' presentation />
      <Toast variant={'info'} message='Your content is publicly visible.' presentation />
      <ToastWrapper />
    </div>
  )
}
