import React from 'react'
import './workingcard.css'
const WorkingCard = ({url,text,description}) => {
  return (
    <div className='smoothing__working-grid_card_workingcard'>
        <div className='smoothing__working-grid_card_workingcard_content'>
            <div className='smoothing__working-grid_card_workingcard-icon'>
                <img src={url} alt=''/>
            </div>
            <div className='smoothing__working-grid_card_workingcard-text'>
                <h1>{text}</h1>
            </div>
            <div className='smoothing__working-grid_card_workingcard-description'>
                <p>{description}</p>
            </div>
            
        </div>
    </div>
  )
}

export default WorkingCard;