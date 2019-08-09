import axios from "axios";

/**
 *
 * @param url
 * @param options
 * @constructor
 */
const GET = (url, options = {}) => {
    return axios.get(url, options);
};

const PUT = (url, data, options) => {
    return axios.put(url, data, options);
};

export {
    GET,
    PUT
}