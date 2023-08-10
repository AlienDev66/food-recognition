import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.clarifai.com",
  headers: {
    Authorization: "Key 72eca1315d354cbba17e616db2f58c48",
  },
});
