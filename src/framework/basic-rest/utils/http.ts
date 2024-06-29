"use client";
import axios from "axios";
import { getToken } from "./get-token";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    Authorization: `Bearer null`,
  },
});

// Change request data/error here
http.interceptors.request.use(
  (config: any) => {
    const token = getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : null}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
