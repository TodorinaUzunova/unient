import axios from 'axios';


const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_BkUDvIoLI';
const appSecret = '4e401745844c43bd88e91aad45b8a5b1';

const config = {
    baseURL: baseUrl,
    headers: {},
};

const instance = axios.create(config);

const authInterceptor = function (config) {
    if (
        (config.url === 'login' || config.url === '') &&
        config.method === 'post'
    ) {
        config.baseURL = `${baseUrl}/user/${appKey}`;
        config.headers = {
            ...config.headers,
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`)
        };
    } else {
        const token = localStorage.getItem('token');

        if (config.url === '_logout' || config.url.includes('username')) {
            config.baseURL = `${baseUrl}/user/${appKey}`;

        } else if (config.url.startsWith('user/')) {
            config.url = config.url.split('/')[1];
            config.baseURL = `${baseUrl}/user/${appKey}`;

        } else {
            config.baseURL = `${baseUrl}/appdata/${appKey}`;

        }

        config.headers = {
            ...config.headers,
            'Content-Type': 'application/json',
            Authorization: 'Kinvey ' + token
        };
    }
    return config;
};

instance.interceptors.request.use(authInterceptor);
export default instance;