import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllPhotos } from "../../services/photo.service";

const Home = () => {
    const [photos, setPhotos] = useState([]);
    const navigate = useNavigate();
    const getPhotos = async () => {
        try {
            const data = await getAllPhotos();
            setPhotos(data);
        } catch (error) {
            throw Error("something went wrong");
        }
    };
    const handleRedirect = (photo) => {
        navigate(`/photo/${photo.id}`, photo);
    };
    useEffect(() => {
        getPhotos();
    }, []);
    return (
        <div className="container">
            <div className="main-container">
                {photos.length
                    ? photos.map((photo) => {
                          return (
                              <div key={photo.id} className="photo-container">
                                  <div className="photo-image-container">
                                      <img
                                          src={photo.photo}
                                          alt={photo.short_description}
                                          width="100    "
                                      />
                                  </div>
                                  <button
                                      className="btn-redirect"
                                      onClick={() => handleRedirect(photo)}
                                  >
                                      {photo.title}
                                  </button>
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    );
};

export default Home;
