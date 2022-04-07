import React from 'react'
import './workingbanner.css';
import { WorkingCard } from "../../components";
import working01 from "../../assets/working01.svg";
import working02 from "../../assets/working02.svg";
import working03 from "../../assets/working03.svg";
const Workingbanner = () => {
  return (
      <div className='smoothing__workingbanner'>
    <div className="smoothing__workingbanner-grid-container">
    <div className="smoothing__workingbanner-grid-container_grid">
    <div className="smoothing__workingbanner-grid_card">
            <WorkingCard url={working01} text="Upload image to smoothen" description="Upload the image file from your system. Allowed formats (png,jpeg,jpg)"/>
        </div>
        <div className="smoothing__workingbanner-grid_card">
            <WorkingCard url={working02} text="Image gets processed" description=" Our software is at work! Sit back and relax. Your image will be ready in no time!"/>
        </div>
        <div className="smoothing__workingbanner-grid_card">
            <WorkingCard url={working03} text="Returns smoothened results" description="Download your fresh & smooth image, without noise!"/>
        </div>
        
    </div>
    </div>
    </div>
  )
}

export default Workingbanner