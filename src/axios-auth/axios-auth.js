import axios from "axios";

const instanse = axios.create({
  baseURL: "https://stoke-strader.firebaseio.com",
});

export default instanse;
