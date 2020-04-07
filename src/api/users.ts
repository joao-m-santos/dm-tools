import axios from "axios";
import { apiUrl } from "../config.json";

const usersAPI = {
    signup: (name: string, email: string, password: string): Promise<any> =>
        axios
            .post(apiUrl + "/users/signup", {
                name,
                email,
                password
            })
            .then(response => {
                return response.data;
            }),
    login: (emailOrName: string, password: string): Promise<any> => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isEmail = re.test(String(emailOrName).toLowerCase());
        return axios
            .post(apiUrl + "/users/login", {
                name: !isEmail ? emailOrName : undefined,
                email: isEmail ? emailOrName : undefined,
                password
            })
            .then(response => {
                return response.data;
            });
    },
    get: (): Promise<any> =>
        axios.get(apiUrl + "/users/").then(response => {
            return response.data;
        })
};

export default usersAPI;
