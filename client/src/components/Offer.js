import React from "react";
import { Zoom, Bounce } from "react-reveal";

import "./Offer.css";

const Offer = () => {
  return (
    <div className='offer'>
      <h1>What Do I Offer ?</h1>
      <Bounce>
        <div className='offer__description'>
          Full Stack Web Development using MongoDB, Express, React, Node.js
          (MERN) with an emphasis on Backend web development. Experienced in
          building CRUD applications, RESTful APIs using Node.js and express,
          User Auth and oAuth with PassportJS and JWT. Also have experience with
          Firebase, Firestore, React Context Api . Common libraries of use:
          Axios, Redux, Mongoose, Lodash, Express, body-parser, react-router.
          Common use of UI libraries: Bootstrap 4, React-Bootstrap,
          MaterializeCSS, Material-UI.
          <br />
          <a href='/uploads/pdf/resume.pdf'>
            <button>View Resume</button>
          </a>
        </div>
      </Bounce>
    </div>
  );
};

export default Offer;
