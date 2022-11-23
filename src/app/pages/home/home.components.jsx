import React, { useState } from "react";
import CardType from "../../components/organisms/card-type/card-type.components";
import Main from "../../components/organisms/main/main.components";
import Navbar from "../../components/organisms/navbar/navbar.components";
import UserContext from "../../hooks/userContext/usercontext"; 

const Home = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleShowClose = () => {
    setShow(false);
  };

  return (
    <UserContext.Provider value={handleShow}>
      {show && <CardType handleClose={handleShowClose} /> } 
        <div>
          <Navbar handleShow={handleShow} />
          <Main tobtn1={handleShow} />
        </div>
    </UserContext.Provider>
  );
};

export default Home;
