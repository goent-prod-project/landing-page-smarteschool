import client from "./ApiClient";

export const getBanner = (params) => {
  return client("smart-school-banners" + params);
};
