import React from "react";
import "./PhotoCard.css";

const PhotoCard = ({ photo, handleRedirect = () => {} }) => {
    return (
        <div key={photo.id} className="photo-container">
            <div className="photo-image-container">
                <img
                    src={photo.photo}
                    alt={photo.short_description}
                    width="200"
                    height="250"
                    className="photo-image"
                />
            </div>
            <div className="description-container">
                <button
                    className="btn-redirect"
                    onClick={() => handleRedirect(photo)}
                >
                    {photo.title}
                </button>
                <p>{photo.short_description}</p>
                <button
                    type="button"
                    className="btn-photo"
                    onClick={() => handleRedirect(photo)}
                >
                    Go to {photo.title}
                </button>
            </div>
        </div>
    );
};

export default PhotoCard;
