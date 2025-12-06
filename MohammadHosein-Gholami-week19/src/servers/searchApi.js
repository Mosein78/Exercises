import axios from "axios";

const searchApi = async (search) => {
  const res = await axios.get("http://localhost:3000/products", {
    params: { search }
  });
  return res.data;
};

export default searchApi;
