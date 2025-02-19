import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8c850a69744c4e6b8f2614a7a2a7ae48"
    }
});
