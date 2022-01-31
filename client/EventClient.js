import client from "./ApiClient";

export const getEvents = (params = "") => {
  return client("smart-school-events?" + params);
};
