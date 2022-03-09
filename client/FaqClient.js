import client, { API_HOST } from "./ApiClient";

export const getFaq = (params) => {
  return client(API_HOST + "smart-school-faqs" + params);
};
