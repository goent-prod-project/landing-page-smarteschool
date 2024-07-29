import client, { API_HOST2 } from "./ApiClient";

export const getSmkGrade = (params) => {
  return client(API_HOST2 + "sekolah-grade", { params });
};

export const getProvinsi = () => {
  return client(API_HOST2 + "master/sekolah/propinsi");
};

export const getKabupaten = (id) => {
  return client(API_HOST2 + "master/sekolah/propinsi/" + id);
};
