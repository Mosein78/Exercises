import { useQuery } from "@tanstack/react-query";
import searchApi from "../servers/searchApi";

const useSearch = (search) => {
  return useQuery({
    queryKey: ["search", search],
    queryFn: () => searchApi(search),
    enabled: search.length > 0,
    initialData: [] 
  });
};

export { useSearch };
