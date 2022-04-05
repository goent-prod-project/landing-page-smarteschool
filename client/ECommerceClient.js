import client, { API_HOST } from "./ApiClient";

export const getCommerce = (params) => {
  return client(API_HOST + "smart-school-commerces" + params);
};
