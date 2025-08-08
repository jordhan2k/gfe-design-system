// 'use client'

// import { TabButton } from '@/components/ui/tab-button'
import { TabButton, TabList, TabPanel, Tabs } from '@/components/ui/tab-menu'

export default function TabMenuPage() {
  // const [activeTab, setActiveTab] = React.useState('account')
  return (
    <div className='pt-[112px]'>
      <div className='max-w-[340px] mx-auto'>
        <Tabs defaultValue={"account"}>
          <TabList>

            <TabButton value={'account'}>Account</TabButton>
            <TabButton value={'security'}>Security</TabButton>
            <TabButton value={'plan'}>Plan</TabButton>

            {/* <button
          className="tabs__button active"
          aria-selected="true"
          data-value="account"
          aria-controls="account">
          Account
        </button>  */}

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
