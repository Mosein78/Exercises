import axios from "axios";

const deleteItemApi = async (id) => {
  const token = localStorage.getItem("token");
  console.log("TOKEN:", token);
  const res = await axios.delete(`http://localhost:3000/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export default deleteItemApi;
