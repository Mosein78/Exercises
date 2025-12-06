import axios from "axios";

const createItemApi = ({ name, price, quantity }) => {
  const token = localStorage.getItem("token")

  return axios.post(
    "http://localhost:3000/products",
    { name, price, quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }
  );
};


export default createItemApi;
