import axios from "axios";

const instanse = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
});

export default instanse;
