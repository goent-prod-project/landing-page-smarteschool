import client, { API_HOST } from "./ApiClient";

export const getBanner = (params) => {
  return client(API_HOST + "smart-school-banners" + params);
};
