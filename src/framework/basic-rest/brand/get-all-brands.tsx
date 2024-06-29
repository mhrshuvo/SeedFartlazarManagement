import { QueryOptionsType, Brand } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import axios from "axios";

export const fetchBrands = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  // const { data } = await http.get(API_ENDPOINTS.BRANDS);
  const { data } = await axios.get("https://kiporbo.com/api/brands.json");
  return data;
};
export const useBrandsQuery = (options: QueryOptionsType) => {
  return useQuery<{ brands: Brand[]; brandsGrid: Brand[] }, Error>(
    [API_ENDPOINTS.BRANDS, options],
    fetchBrands
  );
};
