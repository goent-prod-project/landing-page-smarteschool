import client, { API_CERT, API_HOST } from "./ApiClient";

export const getEventGDS = (params) => {
  return client(API_CERT + "events", params);
};

export const getCertGDS = (params) => {
  return client(API_CERT + "certs", params);
};

export const showCertGDS = (id, params) => {
  return client(API_CERT + "certs/" + id, params);
};
