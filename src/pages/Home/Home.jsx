import './Home.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPhotos, getPhotosFilteredByTitle } from '../../context/actions';
import Search from '../../components/Search/Search';
import { useAppState, useAppDispatch } from '../../context/store';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import NotFound from '../../components/NotFound/NotFound';

const Home = () => {
  const dispatch = useAppDispatch();
  const { photos, isLoading } = useAppState();
  const [ref, setCurrentRef] = useState('');
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
        {!isLoading && photos.length ? (
          photos.map((photo) => {
            return <PhotoCard photo={photo} handleRedirect={handleRedirect} />;
          })
        ) : (
          <NotFound status={photos.status} error={photos.error} showButton={false} />
        )}
      </div>
    </div>
  );
};

export default Home;
