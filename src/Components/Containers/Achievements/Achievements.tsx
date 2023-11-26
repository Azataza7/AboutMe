import React from 'react';

const Achievements = () => {
  return (
    <div className="achieves text-center fs-5 mt-3 p-3">
      <div className="text-success">
        Education
        <p>Recognized for maintaining a high GPA throughout the academic year).</p>
        <p>Awarded a full scholarship for academic excellence))</p>
      </div>
      <div className="text-danger">
        Sport
        <p> Bench Press 120 kg</p>
        <p> Dead Lift 210 kg</p>
      </div>
      <div className="text-black">
        Business
        <p>Online shop: Computer components and headphones</p>
        <p>Currently sell candies and bakery</p>
      </div>
    </div>
  );
};

export default Achievements;