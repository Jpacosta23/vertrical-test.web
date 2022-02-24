const API_URL_BASE = process.env.REACT_APP_API_URL;

const getAllPhotos = async () => {
    try {
        console.log(API_URL_BASE);
        const RES = await fetch(`${API_URL_BASE}/photo`);
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

        const response = await fetch(`${API_URL_BASE}/api/photo`, payload);
        const newUser = await response.json();

        return newUser;
    } catch (err) {
        throw Error("Photo not found");
    }
};

export { getAllPhotos, getPhotosByTitle };