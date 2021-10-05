import client from "./ApiClient";

export const getFaq = (params) => {
  return client("smart-school-faqs" + params);
};
