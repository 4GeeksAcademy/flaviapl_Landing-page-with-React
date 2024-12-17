import React from "react";
import Card1 from "./card1";

const CardHolder = () => {
    return (
        <>
            <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card1 />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card1 />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card1 />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card1 />
                    </div>
                </div>
        </>
    )
}

export default CardHolder