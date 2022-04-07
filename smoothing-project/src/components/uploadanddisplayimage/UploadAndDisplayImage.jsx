import React, { useState } from "react";
import "./uploadanddisplayimage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredImage, setFilteredImage] = useState(null);
  const [value, setValue] = useState("0");
  const options = [
    { label: "Averaging Filter", value: "0" },
    { label: "Gaussian Blurring", value: "1" },
    { label: "Median Blurring", value: "2" },
    { label: "Bilateral Filtering", value: "3" },
  ];

  console.log(value)
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const fetchAPIData = async (value, selectedImage) => {
    const form = new FormData();
    form.append("image", selectedImage);
    form.append("filter", value);
    // console.log(this.selectedImage)
    const res = await axios
      .post("http://localhost:8000/hello/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
      // console.log(res.file)
      setFilteredImage(res.file);
      // console.log(filteredImage)
      return res.file;
    };
  return (
    <div className="smoothing__uploadanddisplayimage">
      {!selectedImage && (
        <div className="smoothing__uploadanddisplayimage-container">
          <div className="smoothing__uploadanddisplayimage-dropdown-container">
            <Dropdown options={options} value={value} onChange={handleChange} />
          </div>

          <label
            for="img"
            className="smoothing__uploadanddisplayimage-upload-button"
          >
            Upload image to convert
          </label>

          <input
            type="file"
            id="img"
            className="smoothing__uploadanddisplayimage-input"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
          <FontAwesomeIcon
            icon={faArrowDownLong}
            className="smoothing__uploadanddisplayimage-arrow-icon"
          />
          <label
            for="nothing"
            className="smoothing__uploadanddisplayimage-upload-button"
          >
            Get Smoothened results
          </label>
        </div>
      )}
      {selectedImage && !filteredImage && (
        <div className="smoothing__uploadanddisplayimage-container">
          <div className="smoothing__uploadanddisplayimage-dropdown-container">
            <Dropdown options={options} value={value} onChange={handleChange} />
          </div>
          <div className="smoothing__uploadanddisplayimage-button-container">
            <button
              onClick={() => fetchAPIData(value,selectedImage)}
              className="smoothing__uploadanddisplayimage-button"
            >
              Convert
            </button>
            <button
              onClick={() => setSelectedImage(null)}
              className="smoothing__uploadanddisplayimage-button"
            >
              Remove
            </button>
          </div>
          <img
            alt="not found"
            width={"500px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <FontAwesomeIcon
            icon={faArrowDownLong}
            className="smoothing__uploadanddisplayimage-arrow-icon"
          />
          <label
            for="nothing"
            className="smoothing__uploadanddisplayimage-upload-button"
          >
            Get Smoothened results
          </label>
        </div>
      )}
      {selectedImage && filteredImage && (
        <div className="smoothing__uploadanddisplayimage-container">
          <div className="smoothing__uploadanddisplayimage-dropdown-container">
            <Dropdown options={options} value={value} onChange={handleChange} />
          </div>
          <div className="smoothing__uploadanddisplayimage-button-container">
            <button
              onClick={() => {
                setFilteredImage(null);
                setSelectedImage(null);
              }}
              className="smoothing__uploadanddisplayimage-button"
            >
              Remove
            </button>
          </div>
          <img
            alt="not found"
            width={"500px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <FontAwesomeIcon
            icon={faArrowDownLong}
            className="smoothing__uploadanddisplayimage-arrow-icon"
          />
          <img
            alt="not found"
            width={"500px"}
            src={"data:image/jpg;base64," + filteredImage }
          />
          {/* <p>{filteredImage}</p> */}
        </div>
      )}
      <br />

      <br />
      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/> */}
    </div>
  );
};
const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label className="smoothing__uploadanddisplayimage-dropdown">
      {label}
      <select
        className="smoothing__uploadanddisplayimage-select"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};
export default UploadAndDisplayImage;
