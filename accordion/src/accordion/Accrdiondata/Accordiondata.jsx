import React from 'react'
import { useState } from 'react';
import "./Accordiondata.css";

const Accordiondata = ({
  title,
  avatar,
  name,
  mainPara,
  time,
  date,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="mainDiv" onClick={() => setShow(!show)}>
        <div className="fullInfo">
          <div className='avatarDiv'>
            <img src={avatar} alt="Avatar" />
          </div>

          <div className="contentChecking">
            <p className="alignment">
              <span className="subscriberName ">{name}</span> has {title}
            </p>
            {show && (
              <div className="accordDiv">
                <p>{mainPara}</p>
              </div>
            )}
          </div>
        </div>

        <div className="timeDate">
          <p className='paraMargin'>{date}</p>
          <p>{time}</p>
        </div>
      </div>
    </>
  );
};

export default Accordiondata