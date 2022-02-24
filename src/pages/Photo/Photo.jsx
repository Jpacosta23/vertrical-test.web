import React from "react";
import "./Photo.css";
import { useNavigate, useLocation } from "react-router-dom";
import goBack from "../../assets/Images/icons8-go-back-48.png";
const Photo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleReturn = () => {
        navigate("/");
    };

    return (
        <>
            <header>
                <button id="exit-button" onClick={handleReturn}>
                    <img src={goBack} height="36px" />
                    <p>Go back</p>
                </button>
            </header>
            <div className="container">
                <div className="card-container">
                    <h1>{location.state.title}</h1>
                    <img src={location.state.photo} height="1000" />
                    <p>{location.state.description}</p>
                </div>
            </div>
        </>
    );
};

export default Photo;
