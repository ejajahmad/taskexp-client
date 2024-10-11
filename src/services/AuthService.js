import axios from "axios";

const AuthService = {
    signin: ({email, password}) => {
        return axios.post(process.env.NEXT_PUBLIC_SERVER_URL +"/api/auth/signin", {
            email,
            password
        });
    },
    signup: ({
        email,
        password,
        name
    }) => {
        return axios.post(process.env.NEXT_PUBLIC_SERVER_URL + "/api/auth/signup", {
            email,
            password,
            name
        });
    }
};

export default AuthService;