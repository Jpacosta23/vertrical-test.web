import React, { useEffect, useState } from "react";
import "./Photo.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import goBack from "../../assets/Images/icons8-go-back-48.png";
import { getPhotosById } from "../../context/actions";
import { useAppState, useAppDispatch } from "../../context/store";

const Photo = () => {
    const dispatch = useAppDispatch();
    const { currentPhoto } = useAppState();
    const navigate = useNavigate();
    const { id } = useParams();
    const handleReturn = () => {
        navigate("/");
    };

    useEffect(() => {
        getPhotosById(dispatch, id);
    }, [id]);

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
                    <h1>{currentPhoto ? currentPhoto.title : null}</h1>
                    <img
                        src={currentPhoto ? currentPhoto.photo : null}
                        height="1000"
                    />
                    <p>{currentPhoto ? currentPhoto.description : null}</p>
                </div>
            </div>
        </>
    );
};

export default Photo;
