import React from 'react'
import {
    Header,
    Working,
    WorkingBanner,
    Footer,
    Explore
} from '../containers';
const Home = () => {
  return (
    <div>
        <Header/>
        <Working/>
        <WorkingBanner/>
        <Explore/>
    </div>
  )
}

export default Home