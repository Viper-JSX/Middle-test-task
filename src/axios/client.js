import axios from "axios";

const client = axios.create(
    { 
        baseURL: "https://prof.world/api/test_json_files" 
    }
);

export default client;