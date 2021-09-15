import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-bfb91-default-rtdb.firebaseio.com/",
});
export default instance;
