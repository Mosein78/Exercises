import { useQuery } from "@tanstack/react-query";
import productsApi from "../servers/productsApi";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productsApi,
  });
};

export { useProducts };
