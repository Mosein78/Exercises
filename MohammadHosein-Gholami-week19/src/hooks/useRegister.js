import { useMutation } from "@tanstack/react-query";
import registerApi from "../servers/registerApi";

const useRegisterForm = () =>
  useMutation({
    mutationKey: ["register"],
    mutationFn: registerApi,
  });
export { useRegisterForm };
