const BASE_URI = "http://localhost:3000/api/";

const apiKeys = {
    login: `${BASE_URI}users/login`,
    register: `${BASE_URI}users/register`,
    detail: `${BASE_URI}users/userprofile`,
};

export { BASE_URI, apiKeys };
