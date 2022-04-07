import React from "react";
import ExploreCard from "../../components/explorecard/ExploreCard";
import "./explore.css";
import exploreUrl from "../../assets/explore01.svg";
const Explore = () => {
  return (
    <div className="smoothing__explore section__padding">
      <div className="smoothing__explore-container">
        <div className="smoothing__explore-content">
          <h1>Explore the solutions</h1>
          <p>
          Convert your noisy images with the help of this tool for free! Bring out the beauty of your pictures with Smooth.ai.
          </p>
        </div>
        <div className="smoothing__explore-grid">
          <div className="smoothing__explore-grid-grid">
            <h1>Powerful suite of tools</h1>
            <p>
            Our simple and intuitive platform uses state-of-the-art technology to bring out the best in your pictures! We are constantly aiming towards providing a fast, efficient and hassle-free experience.
            </p>
            <div className="smoothing__explore-grid-grid_card">
            <div className="smoothing__explore-grid-grid_card_explorecard">
                <div className="smoothing__explore-grid-grid_card_explorecard-content">
                  <h1>Averaging Filter</h1>
                  <p>This is done by convolving an image with a normalized box filter. It simply takes the average of all the pixels under the kernel area and replaces the central element. </p>
                </div>
              </div>
            </div>
            <div className="smoothing__explore-grid-grid_card">
            <div className="smoothing__explore-grid-grid_card_explorecard">
                <div className="smoothing__explore-grid-grid_card_explorecard-content">
                  <h1>Gaussian Blurring</h1>
                  <p>Gaussian smoothing is the result of blurring an image by a Gaussian function. Gaussian blurring is highly effective in removing Gaussian noise from an image.</p>
                </div>
              </div>
            </div>
            <div className="smoothing__explore-grid-grid_card">
            <div className="smoothing__explore-grid-grid_card_explorecard">
                <div className="smoothing__explore-grid-grid_card_explorecard-content">
                  <h1>Median Blurring</h1>
                  <p>Median of all the pixels under the kernel area and the central element is replaced with this median value. This is highly effective against salt-and-pepper noise in an image.</p>
                </div>
              </div>
            </div>
            <div className="smoothing__explore-grid-grid_card">
            <div className="smoothing__explore-grid-grid_card_explorecard">
                <div className="smoothing__explore-grid-grid_card_explorecard-content">
                  <h1>Bilateral Filtering</h1>
                  <p>Highly effective in noise removal while keeping edges sharp. But the operation is slower compared to other filters.</p>
                </div>
              </div>
            </div>
           
          </div>
          <div className="smoothing__explore-grid-grid">
            <div className="smoothing__explore-grid-grid_image">
              <img src={exploreUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
