import { useLocation } from "react-router-dom";

export const useQueryParam = (key, initialValue) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const queryParam = params.get(key);
  return queryParam ? queryParam : initialValue;
};
