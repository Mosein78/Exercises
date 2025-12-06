import { useMutation } from "@tanstack/react-query";
import loginApi from "../servers/loginApi";

const useLoginForm = () =>
  useMutation({
    mutationKey: ["login"],
    mutationFn: loginApi,
  });
export { useLoginForm };
