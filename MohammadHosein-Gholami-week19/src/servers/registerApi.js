import axios from "axios";

const registerApi = ({ username, password }) =>
  axios.post("http://localhost:3000/auth/register", { username, password });

export default registerApi;
