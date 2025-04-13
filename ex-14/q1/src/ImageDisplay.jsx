import React from "react";
import imageFromSrc from "./Images/download.png"; 
class ImageDisplay extends React.Component {
  render() {
    return (
      <div>
        <h2>Displaying Images in React</h2>
        {/* Image from public/Images folder */}
        <div>
          <h3>Image from public/Images folder</h3>
          <img
            src={`sample.png`}
            alt="Image from public folder"
            width="300"
          />
        </div>
        {/* Image from src/Images folder */}
        <div>
          <h3>Image from src/Images folder</h3>
          <img
            src={imageFromSrc} 
            alt="Image from src folder"
            width="300"
          />
        </div>
      </div>
    );
  }
}

export default ImageDisplay;
