import { API_HOST } from "../client/ApiClient";

export const getImageContent = (content) => {
  return content.replace("/uploads", API_HOST + "uploads");
};
