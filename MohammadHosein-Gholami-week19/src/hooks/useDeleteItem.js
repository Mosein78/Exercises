import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteItemApi from "../servers/deleteItemApi";

const useDeleteItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export { useDeleteItem };
