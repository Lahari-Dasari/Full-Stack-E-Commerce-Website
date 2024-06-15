import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-51c48.cloudfunctions.net/api' // The API (cloud function) URL
});
export default instance;
// http://127.0.0.1:5001/clone-51c48/us-central1/api