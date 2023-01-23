import React from 'react'
import { useState } from 'react'
import { data } from '../ApiData/apidata'
import Accordiondata from '../Accrdiondata/Accordiondata'
import './Accordion.css';

const Accordion = () => {
    const [mainData] = useState(data);
  return (
    <>
      <section className="mainSection">
        <div className='notificationData'>
          <h3 className="notificationName">Notifications</h3>
          <div className="horizontalSpace"></div>
        </div>
        
        {mainData.map((curElem) => {
          const { id } = curElem;
          return <Accordiondata key={id} {...curElem} />;
        })}
      </section>
    </>
  );
}

export default Accordion
