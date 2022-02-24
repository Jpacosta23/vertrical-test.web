import React from "react";
import { useNavigate } from "react-router-dom";
import goBack from "../../assets/Images/icons8-go-back-48.png";
const Photo = ({ photo }) => {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate("/");
    };
    return (
        <>
            <header>
                <button id="exit-button" onClick={handleReturn}>
                    <img src={goBack} />
                </button>
            </header>
        </>
    );
};

export default Photo;
