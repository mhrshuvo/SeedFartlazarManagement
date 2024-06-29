import { Color, ColorFilterQueryOptionsType } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchColors = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.COLOR);

  return { colors: { data: data as Color[] } };
};
export const useColorQuery = (options: ColorFilterQueryOptionsType) => {
  return useQuery<{ colors: { data: Color[] } }, Error>(
    [API_ENDPOINTS.COLOR, options],
    fetchColors
  );
};
