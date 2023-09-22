import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <header>
        <h1>Food Order App</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="table full of dishes" />
      </div>
    </Fragment>
  );
};

export default Header;
