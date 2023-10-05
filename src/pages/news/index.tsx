import type { ReactElement } from 'react'
import Layout from '../../components/layout'
import NestedLayout from '../../components/nested-layout'
import type { NextPageWithLayout } from '../_app'

  
 

// import { api } from "~/utils/api";


 
const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
  
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

