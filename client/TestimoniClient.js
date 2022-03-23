import client, { API_HOST } from "./ApiClient";

export const getTestimoni = (params) => {
  return client(API_HOST + "smart-school-testimonies" + params);
};
