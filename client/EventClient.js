import client, { API_HOST } from "./ApiClient";

export const getEvents = (params = "") => {
  return client(API_HOST + "smart-school-events?" + params);
};

export const detailEvents = (id) => {
  return client(API_HOST + "smart-school-events?" + id);
};
