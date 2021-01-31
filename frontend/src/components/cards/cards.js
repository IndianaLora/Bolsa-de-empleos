import React from 'react';
import "./cards.css";


function Cards() {
    return ( 
        <div>
        <div className="mt">
        <hr></hr>
        <div className="card-body">
            <img src="https://img.icons8.com/officel/40/000000/work.png" />
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <hr></hr>
        <div className="card-body">
            <img src="https://img.icons8.com/officel/40/000000/work.png" />
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick exmple text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </div>
    );
}
export default Cards;