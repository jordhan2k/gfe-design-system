import { RadioCard } from '@/components/form/radio-card';
import { RiArrowDownSLine, RiCalendarLine, RiCalendarTodoLine, RiCalendarView } from '@remixicon/react';
import { Metadata } from 'next';



const options = ["leading", "label", "trailing", "both", "icon"];
const sizes = ["sm", "md", "lg", "xl", "2xl"] as const;
const labels = ["Weekly", "Monthly", "Annually"];
const icons = [<RiCalendarView key='icon-weekly' />, <RiCalendarTodoLine key='icon-monthly' />, <RiCalendarLine key='icon-annually' />];


export const metadata: Metadata = {
  title: 'Radio Card Component',
}

function RadioCardPage() {
  return (
    <div className='w-fit pt-[112px] mx-auto flex flex-col gap-8 items-center'>

      {
        labels.map((label, index) => (
          <div key={`${label}-${index}`} className='flex items-center gap-6'>
            {
              options.map((option, idx) => {
                const leadingIcon = option === "leading" || option === 'both' ? icons[index] : undefined;
                const trailingIcon = option === "trailing" || option === 'both' ? <RiArrowDownSLine /> : undefined;

                return (
                  <RadioCard
                    checked={label === 'Monthly'}
                    key={`${label}-${option}-${idx}`}
                    name={`option-${idx}`}
                    id={`${label}-${option}`}
                    value={label.toLowerCase()}
                    label={label}
                    size={sizes[idx]}
                    disabled={label === "Annually"}
                    leadingIcon={leadingIcon}
                    trailingIcon={trailingIcon}
                  />
                )
              })
            }
          </div>
        ))
      }



    </div>
  )
}

export default RadioCardPage