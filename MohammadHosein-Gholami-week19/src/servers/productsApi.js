import axios from "axios";

const productsApi = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get("http://localhost:3000/products", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data;
};

export default productsApi;
