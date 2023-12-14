import React  from 'react';


function Click(){
const mouse = () => {
        alert("Nice click you've got there")
    }
    return(
        <button onClick={() => mouse ("This error is annoying")}>I hate it here!</button>
    ) };
  
    export default Click;