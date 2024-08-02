const BASE_URI = "http://localhost:3000/api/";

const apiKeys = {
    login: `${BASE_URI}users/login`,
    register: `${BASE_URI}users/register`,
    shipment: `${BASE_URI}users/getshipments`,
    bookshipment:`${BASE_URI}users/bookshipment`,
    logout:`${BASE_URI}users/logout`,
};

export { BASE_URI, apiKeys };
