import React, { useState } from "react";
import CardType from "../../components/organisms/card-type/card-type.components";
import Main from "../../components/organisms/main/main.components";
import Navbar from "../../components/organisms/navbar/navbar.components";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleShowClose = () => {
    setShow(false);
  };

  return (
    <div>
      {show && <CardType handleClose={handleShowClose} /> } 
        <div>
          <Navbar tobtn2={handleShow} />
          <Main tobtn1={handleShow} />
        </div>
    </div>
  );
};

export default Home;
