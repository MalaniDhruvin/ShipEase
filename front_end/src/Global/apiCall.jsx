import axios from "axios";
import { BASE_URI, apiKeys } from "./apiKeys";

axios.create({
    baseURL: BASE_URI,
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
    },

});

// eslint-disable-next-line no-undef
export const loginUser = (data) => axios.post(apiKeys.login, data, { withCredentials: true });
export const RegisterUser = (data) => axios.post(apiKeys.register, data, { withCredentials: true });
export const BookShipment = (data) => axios.post(apiKeys.bookshipment, data, { withCredentials: true });
export const Getshipment = () => axios.get(apiKeys.shipment, { withCredentials: true });
// export const UserProfile = () => axios.get(apiKeys.userprofile, { withCredentials: true });
export const Logout = () => axios.get(apiKeys.logout, { withCredentials: true });
// export const UserProfile = () => axios.get(apiKeys.detail);