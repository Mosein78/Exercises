import axios from "axios";

const editItemApi = async ({ id, name, price, quantity }) => {
  const token = localStorage.getItem("token");
  const res = await axios.put(
    `http://localhost:3000/products/${id}`,
    { name, quantity, price },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data.data;
};

export default editItemApi;
