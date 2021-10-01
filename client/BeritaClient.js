import client from "./ApiClient";

export const getBerita = (params) => {
  return client("smart-school-blogs" + params);
};
