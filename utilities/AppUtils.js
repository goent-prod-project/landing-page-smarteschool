import { API_HOST } from "../client/ApiClient";

import { DateTime } from "luxon";
// import dateFormat from "dateformat";

export const getImageUrl = (url) => {
  return API_HOST + url;
};

export const getDateTime = (datetime) => {
  return DateTime.fromISO(datetime)
    .setLocale("ID")
    .toFormat("cccc, dd LLLL yyyy");
};
