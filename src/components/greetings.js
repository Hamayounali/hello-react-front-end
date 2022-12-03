import React from 'react';

function Greetings(props) {
  return (
    <div>
        <h1>These Greetings are from the API</h1>     
            <h2>{props.greetings.text}</h2> 
    </div>
  );
}

export default Greetings