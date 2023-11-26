import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-info d-flex align-items-center mt-4 p-3">
      <div className="image">
        <img src="https://briefly.ru/static/cache/authors/480/gogol.jpeg" className="w-75 mb-3" alt="portrait"/>
      </div>
      <div className="biography d-flex flex-column gap-4">
        <span className="name d-block text-success fs-3">
          Kulbaev Azat Aslanovich
        </span>
        <span className="date-birth d-block">
          Date of birth: 07.09.2000
        </span>
        <span className="height d-block">
          Height: 180 сm
        </span>
        <span className="weight d-block">
          Weight: 81 KG
        </span>
        <span className="slogan d-block">
          Slogan: "Life: It's Like a Box of Pickles, Crunchy and Unexpected!"
        </span>
      </div>
    </div>
  );
};

export default Main;