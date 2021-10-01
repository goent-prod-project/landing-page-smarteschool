import { API_HOST } from "../client/ApiClient";

import dateFormat from "dateformat";

export const getImageUrl = (url) => {
  return API_HOST + url;
};

export const getDateTime = (datetime) => {
  return dateFormat(datetime, "dddd, d mmmm yyyy");
};
