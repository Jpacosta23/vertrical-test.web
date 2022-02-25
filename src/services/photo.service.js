const API_URL_BASE = process.env.REACT_APP_API_URL;

const getAllPhotos = async () => {
    try {
        const RES = await fetch(`${API_URL_BASE}/photo`);
        const data = await RES.json();

        return data;
    } catch (err) {
        throw Error("something went wrong");
    }
};

const getPhotoById = async (id) => {
    try {
        const RES = await fetch(`${API_URL_BASE}/photo/${id}`);
        const data = await RES.json();

        return data;
    } catch (err) {
        throw Error("something went wrong");
    }
};

const getPhotosByTitle = async (title) => {
    try {
        const payload = {
            method: "POST",
            body: JSON.stringify(title),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };
        console.log(payload);
        const response = await fetch(`${API_URL_BASE}/photo`, payload);
        const photos = await response.json();

        return photos;
    } catch (err) {
        throw Error("Photo not found");
    }
};

export { getAllPhotos, getPhotosByTitle, getPhotoById };
