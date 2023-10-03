import type { ReactElement } from 'react'
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'
import type { NextPageWithLayout } from './_app'


 

// import { api } from "~/utils/api";


 
const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
    
    <p className="text-xl text-center">To my dear Magda i love you ❤️:  </p>
    <img src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1696361128/thumbnail_Screenshot_20230928_131609_WhatsApp_zsmszl.jpg" className='w-52 h-52' alt="" />
  </div>
    </>
  )
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
 
export default Page

