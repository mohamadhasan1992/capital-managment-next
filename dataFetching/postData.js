import axios from "axios";

//post function via axios
export const postData = async(url, data) => {
    const response = await axios.post(url,data);
    return response.data;

}
