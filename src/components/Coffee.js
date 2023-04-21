import React from "react";
import PropTypes from "prop-types";

function Coffee(props){

  function handleClick() {
    return props.onBuyCoffee(props.id);
  }

  let coffeeDisplay = null;
  if (props.weight <= 0) {
    coffeeDisplay = 
    <>
    <h4>{props.name} is <strong>Out of Stock</strong></h4>
    <hr></hr>
    </ >
  } else if (props.weight < 10 & props.weight > 0) {
    coffeeDisplay =
    <>
    <h3>Name: {props.name}</h3>
    <h3 style={{color: 'red'}}>Almost out of stock</h3>
    <li>Origin: {props.origin}</li><br />
    <li>Roast: {props.roast}</li><br />
    <li>Price per pound: ${props.price}</li><br />
    <li>Quantity Available: {props.weight}lb.</li>
    <br />
    <button className="btn btn-block btn-lg btn-dark" onClick={handleClick}>Buy</button>
    <hr></hr>
    </>
  } else {
    coffeeDisplay =
    <>
    <h3>Name: {props.name}</h3><br />
    <li>Origin: {props.origin}</li><br />
    <li>Roast: {props.roast}</li><br />
    <li>Price per pound: ${props.price}</li><br />
    <li>Quantity Available: {props.weight}lb.</li>
    <br />
    <button className="btn btn-block btn-lg btn-dark" onClick={handleClick}>Buy</button>
    <hr></hr>
    </>

  }

  return (
    <React.Fragment>
      <div onClick={() => props.onCoffeeSelect(props.id)}>
      {coffeeDisplay}
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  weight: PropTypes.number,
  price: PropTypes.number,
  origin: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string,
  onBuyItem: PropTypes.func,
  onCoffeeSelect: PropTypes.func
}

export default Coffee;