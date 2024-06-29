import { QueryOptionsType, Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchRelatedProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.PRODUCTS);
  const allProducts = data?.data || [];

  // Shuffle the array to randomize the order	
  const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);

  // Take the first 5 products from the shuffled array
  const randomProducts = shuffledProducts.slice(0, 5);

  return randomProducts;
};
export const useRelatedProductsQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>(
    [API_ENDPOINTS.PRODUCTS, options],
    fetchRelatedProducts
  );
};
