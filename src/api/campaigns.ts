import axios from "axios";
import { apiUrl } from "../config.json";

const campaignsAPI = {
    get: (_id?: string): Promise<any> =>
        axios.get(apiUrl + "/campaigns/" + (_id || "")).then(response => {
            return response.data;
        }),
    new: (data: any): Promise<any> =>
        axios.post(apiUrl + "/campaigns/", data).then(response => {
            return response.data;
        })
};

export default campaignsAPI;
