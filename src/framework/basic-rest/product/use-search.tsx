import { QueryOptionsType, Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchSearchedProducts = async ({ queryKey }: any) => {
  const [_key, options] = queryKey;
  const { text } = options;

  if (text) {
    const { data } = await http.get(`${API_ENDPOINTS.SEARCH}?q=${text}`);
    const searchData = data?.data;
    return searchData;
  }
  return null;
};

export const useSearchQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>(
    [API_ENDPOINTS.SEARCH, options],
    fetchSearchedProducts
  );
};
