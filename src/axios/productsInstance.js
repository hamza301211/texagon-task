import axios from "axios";
import { getToken } from "../../localStorage";
const productInstance = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: `${import.meta.env.VITE_SOME_KEY}`,
});

productInstance.interceptors.request.use(
    async (config) => {
        config.headers = {
            Authorization: `Bearer ${getToken()}`,
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

export default productInstance;