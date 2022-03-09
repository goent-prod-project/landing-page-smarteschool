import client, { API_HOST } from "./ApiClient";

export const getBerita = (params) => {
  return client(API_HOST + "smart-school-blogs" + params);
};
