import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-76c41.firebaseio.com/'
});

export default instance;