import React from 'react'
import './productpage.css';
import { UploadAndDisplayImage } from '../../components';
const ProductPage = () => {
  return (
    <div className='smoothing__productpage section__padding'>
        <div className='smoothing__productpage-container'>
            <div className='smoothing__productpage-content'>
                <div className='smoothing__productpage-content-heading'>
                 Image Smoothner
                </div>
                <div className='smoothing__productpage-content-subheading'>
                    Upload your image to get results!
                </div>
                
            </div>
            
            <div className='smoothing__productpage-upload'>
                <UploadAndDisplayImage/>
            </div>
        </div>
    </div>
  )
}

export default ProductPage