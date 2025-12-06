import { useMutation, useQueryClient } from "@tanstack/react-query";
import editItemApi from "../servers/editItemApi";

const useEditItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    }
  });
};

export { useEditItem };
