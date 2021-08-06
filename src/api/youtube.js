import axios from "axios";

const KEY = "AIzaSyC9CT3CpCaft_K9qzFCdsQcw-pMKiLh1w4"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});