import React from 'react';
import './FramedArea.css';

const FramedArea = () => {
  return (
    <div className="framed-area">
      {/* Left Section */}
      <div className="left-section">
        <h1 className='Topic'>Theme </h1>
        <p className="framed-text">
        Welcome to the left section! Here you can place additional text.
        Welcome to the left section! Here you can place additional text.
        Welcome to the left section! Here you can place additional text.
        Welcome to the left section! Here you can place additional text.
        Welcome to the left section! Here you can place additional text.
        Welcome to the left section! Here you can place additional text.
        Welcome to the left section! Here you can place additional text.
        Welcome to the left section! Here you can place additional text.
        Welcome to the left section! Here you can place additional text.
        Welcome to the left section! Here you can place additional text.
        </p>
      </div>

      {/* Right Section     */}
      <div className="right-section">
        <>left section</>
        <p><b><i>Add a pic in here</i></b></p>
      </div>
    </div>
  );
};

export default FramedArea;
