import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCurrentPhoto } from '../../context/actions';
import { useAppDispatch, useAppState } from '../../context/store';
import PropTypes from 'prop-types';
import './NotFound.css';
const NotFound = ({ status, error, showButton = true }) => {
  const { isLoading } = useAppState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleReturn = () => {
    deleteCurrentPhoto(dispatch);
    navigate('/');
  };
  return (
    <>
      {!isLoading ? (
        <div className="container">
          <div id="notfound">
            <div className="notfound-404">
              <h1>{status}</h1>
            </div>
            <h2>{error}</h2>
            {showButton ? (
              <button id="exit-button" onClick={handleReturn} data-testid="button">
                <p>Go Home</p>
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

NotFound.propTypes = {
  status: PropTypes.string,
  error: PropTypes.string,
  showButton: PropTypes.bool
};

export default NotFound;
