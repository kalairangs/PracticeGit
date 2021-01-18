import React, { Fragment } from 'react';

function SampleMessage(probs){
    console.log(probs)
    return(
      <Fragment>
          <div className = "card">
              <div className = "card-body">
                    <h3>Sample Message</h3>
              </div>

          </div>
          
      </Fragment>
    );
};

export default SampleMessage;