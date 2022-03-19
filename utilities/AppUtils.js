import { API_HOST } from "client/ApiClient";

import { DateTime } from "luxon";
// import dateFormat from "dateformat";

export const getImageUrl = (url) => {
  return API_HOST + url?.substr(1);
};

export const getDateTime = (datetime) => {
  return DateTime.fromISO(datetime)
    .setLocale("ID")
    .toFormat("cccc, dd LLLL yyyy");
};

export const getCertDate = (dateStart, dateEnd) => {
  return (
    DateTime.fromISO(dateStart).toFormat("dd MMMM") +
    " - " +
    DateTime.fromISO(dateEnd).toFormat("dd MMMM yyyy")
  );
};
