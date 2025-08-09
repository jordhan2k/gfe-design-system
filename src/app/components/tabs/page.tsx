import { TabButton, TabList, TabPanel, Tabs } from '@/components/ui/tab-menu'
import { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Tabs Component',
}
export default function TabsPage() {
  return (
    <div className='pt-[112px]'>
      <div className='max-w-[340px] mx-auto'>
        <Tabs defaultValue={"account"}>
          <TabList className='border-b border-neutral-300 gap-6'>
            <TabButton variant={"tab"} value={'account'}>Account</TabButton>
            <TabButton variant={"tab"} value={'security'}>Security</TabButton>
            <TabButton variant={"tab"} value={'plan'}>Plan</TabButton>
          </TabList>
          <div className="tabs__panels">
            <TabPanel value='account'>
              The Account Management section provides a comprehensive view of
              your personal information and settings. Here, you can update your
              profile details, manage contact information, and customize your
              preferences to enhance your user experience.
            </TabPanel>
            <TabPanel value='security'>
              The Security Settings section is dedicated to protecting your
              account and personal data. Here, you can manage various security
              features to ensure your information remains safe and secure.
            </TabPanel>
            <TabPanel value='plan'>
              The Subscription Plan section provides details about your current
              plan and available upgrades. Here, you can review your plan’s
              benefits, manage billing information, and explore other
              subscription options to find the best fit for your needs.
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div >
  )
}
