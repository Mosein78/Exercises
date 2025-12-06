import axios from "axios";

const loginApi = ({ username, password }) =>
  axios.post("http://localhost:3000/auth/login", { username, password });

export default loginApi;
