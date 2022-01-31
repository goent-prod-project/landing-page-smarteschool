import client from "./ApiClient";

export const getEvents = (params = "") => {
  return client("smart-school-events?" + params);
};

export const detailEvents = (id) => {
  return client("smart-school-events?" + id);
};
