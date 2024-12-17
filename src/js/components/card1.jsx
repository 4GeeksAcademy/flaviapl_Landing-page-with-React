import React from "react";

const Card1 = () => {
    return (
        <>
            <div className="card mt-4 text-center ms-5">
                <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <hr/>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>  
        </>
    )
}

export default Card1