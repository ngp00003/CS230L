import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">This is a red card with the number 1.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">This is a green card with the number 2.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">This is a blue card with the number 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
