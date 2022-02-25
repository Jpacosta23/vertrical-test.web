import "./Home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPhotos, getPhotosFilteredByTitle } from "../../context/actions";
import Search from "../../components/Search/Search";
import { useAppState, useAppDispatch } from "../../context/store";

const Home = () => {
    const dispatch = useAppDispatch();
    const { photos, isLoading } = useAppState();
    const [ref, setCurrentRef] = useState("");
    const navigate = useNavigate();
    const handleRedirect = (photo) => {
        navigate(`/photo/${photo.id}`);
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        getPhotosFilteredByTitle(dispatch, { title: ref });
    };
    useEffect(() => {
        getPhotos(dispatch);
    }, []);
    return (
        <div className="container">
            <Search setCurrentRef={setCurrentRef} handleSubmit={handleSubmit} />
            <div className="main-container">
                {!isLoading && photos.length
                    ? photos.map((photo) => {
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
                      })
                    : null}
            </div>
        </div>
    );
};

export default Home;
