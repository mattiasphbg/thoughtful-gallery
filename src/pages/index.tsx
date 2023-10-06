import type { ReactElement } from 'react'
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'
import type { NextPageWithLayout } from './_app'
import { useSpring, animated } from '@react-spring/web'
import {ModeToggle} from '../components/ui/darkmodeToggle'
 

// import { api } from "~/utils/api";


 
const Page: NextPageWithLayout = () => {
  
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))
 
  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    })
  }

  return (
    <>

       <ModeToggle/>
      

       <animated.div
       onClick={handleClick}
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
    />

  



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

