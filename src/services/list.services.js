import axios from "axios";


export const getAllList = async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        return { data: response?.data };
    } catch (error) {
        return error;
    }
};
export const getauthurImag = async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
        return { data: response?.data };
    } catch (error) {
        return error;
    }
};

export const getListDetail = async (id) => {

    try {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
        return { data: response?.data };
    } catch (error) {
        return error;
    }
};

export const deleteCutomerCard = async (id) => {

    try {

        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return { data: response?.data };
    } catch (error) {
        return error;
    }
};

