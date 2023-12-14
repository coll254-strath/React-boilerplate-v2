import React  from 'react';
import ReactDOM from 'react-dom/client';

function Car(props){
    return <li>Car Brand : { props.brand }</li>;
  
}
function Garage (){
    const cars =[ "Ford","Audi","Mercedes"];
    return(
    <> <h3>What's in my garage?</h3>
    <h4>{cars.map((car)=> <Car brand= {car} />)}</h4>
    </>)
}
export default Garage;