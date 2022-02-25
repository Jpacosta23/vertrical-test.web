import React, { useEffect, useState } from "react";
import "./Photo.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import goBack from "../../assets/Images/icons8-go-back-48.png";
import { getPhotosById } from "../../context/actions";
import { useAppState, useAppDispatch } from "../../context/store";
import NotFound from "../../components/NotFound/NotFound";

const Photo = () => {
    const dispatch = useAppDispatch();
    const { currentPhoto, isLoading } = useAppState();
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
            {!isLoading && !currentPhoto.status ? (
                <>
                    <header>
                        <button id="exit-button" onClick={handleReturn}>
                            <img src={goBack} height="36px" />
                            <p>Go back</p>
                        </button>
                    </header>
                    <div className="container">
                        <div className="card-container">
                            <h1>{!isLoading ? currentPhoto.title : null}</h1>
                            <img
                                src={!isLoading ? currentPhoto.photo : null}
                                height="1000"
                            />
                            <p>
                                {!isLoading ? currentPhoto.description : null}
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <NotFound
                    status={currentPhoto.status}
                    error={currentPhoto.error}
                />
            )}
        </>
    );
};

export default Photo;
