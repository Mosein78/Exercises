import { useMutation } from "@tanstack/react-query";
import createItemApi from "../servers/createItemApi";

const useCreateItem = () =>
  useMutation({
    mutationKey: ["createItem"],
    mutationFn: createItemApi,
  });
export { useCreateItem };
