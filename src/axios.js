import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5002/clone-89ffe/us-central1/api'  // api (cloud function) URL
});

export default instance;