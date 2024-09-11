import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token) => {
    try {
        const decodedToken = jwtDecode(token);  // Use jwtDecode here
        const currentTime = Date.now() / 1000;  // Current time in seconds
        return decodedToken.exp < currentTime;  // Check if token is expired
    } catch (error) {
        return true;  // If the token is not valid, treat it as expired
    }
};


export default isTokenExpired;