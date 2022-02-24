import { SET_LOADING, GET_PHOTOS, GET_PHOTO } from "./constants";
import {
    getAllPhotos,
    getPhotoById,
    getPhotosByTitle,
} from "../services/photo.service";

export async function getPhotos(dispatch) {
    dispatch({ type: SET_LOADING, payload: true });
    try {
        const photos = await getAllPhotos();
        dispatch({ type: GET_PHOTOS, payload: photos });
    } catch (error) {
        throw Error(error);
    } finally {
        dispatch({ type: SET_LOADING, payload: false });
    }
}

export async function getPhotosById(dispatch, id) {
    dispatch({ type: SET_LOADING, payload: true });
    try {
        const photo = await getPhotoById(id);
        dispatch({ type: GET_PHOTO, payload: photo });
    } catch (error) {
        throw Error(error);
    } finally {
        dispatch({ type: SET_LOADING, payload: false });
    }
}

export async function getPhotosFilteredByTitle(dispatch, title) {
    dispatch({ type: SET_LOADING, payload: true });
    try {
        const photos = await getPhotosByTitle(title);
        dispatch({ type: GET_PHOTOS, payload: photos });
    } catch (error) {
        throw Error(error);
    } finally {
        dispatch({ type: SET_LOADING, payload: false });
    }
}
