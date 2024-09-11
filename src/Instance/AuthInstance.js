import axios from 'axios';
import store from '../Store/store'; 
import { signout } from '../Actions/auth.action';


const AuthInstance = axios.create();

// Request Interceptor
AuthInstance.interceptors.request.use(
    (config) => {
        config.baseURL = process.env.REACT_APP_BACKEND_URL;
        config.headers = Object.assign(
            {
                Authorization: 'Bearer ' + `${localStorage.getItem("token")}`,
            },
            config.headers
        );
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

// Response Interceptor
AuthInstance.interceptors.response.use(
    (response) => {
        // If the response is successful, just return the response
        return response;
    },
    (error) => {
        // console.log(error,"In Instance");
        
        const { response } = error;
        if (response && response.status === 400) {
            // If the status code is 401, dispatch the signout action
            store.dispatch(signout());
            // Optionally, you can also redirect the user to the login page
            // window.location.href = '/login'; // Uncomment this line if you want to redirect
        }
        return Promise.reject(error);
    }
);

export default AuthInstance;