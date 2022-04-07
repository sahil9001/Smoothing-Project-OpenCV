import React from 'react'
import {
    Header,
    Working,
    WorkingBanner,
    Footer,
    Explore
} from '../containers';
import FadeIn from "react-fade-in";
const Home = () => {
  return (
    <div>
      <FadeIn>
        <Header/>
        <Working/>
        <WorkingBanner/>
        <Explore/>
        </FadeIn>
    </div>
  )
}

export default Home