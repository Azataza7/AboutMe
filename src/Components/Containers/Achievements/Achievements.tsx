import React from 'react';

const Achievements = () => {
  return (
    <div className="achieves text-center fs-5 mt-3 p-3">
      <div className="row justify-content-center">
        <div className="col-sm-8 mb-2 mb-sm-1">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <p className="card-text">Recognized for maintaining a high GPA throughout the academic year).</p>
              <p className="card-text">Awarded a full scholarship for academic excellence))</p>
            </div>
          </div>
        </div>
        <div className="col-sm-8 mb-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sport</h5>
              <p className="card-text">Bench Press 120 kg</p>
              <p className="card-text">Dead Lift 210 kg</p>
            </div>
          </div>
        </div>
        <div className="col-sm-8 mb-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Business</h5>
              <p className="card-text">Online shop: Computer components and headphones</p>
              <p className="card-text">Currently sell candies and bakery</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Achievements;