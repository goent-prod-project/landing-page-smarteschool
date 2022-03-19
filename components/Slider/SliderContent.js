import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tooltip } from "antd";
import { FaCheck } from "react-icons/fa";

const SliderContent = ({ data, type }) => {
  const listFitur = {
    guru: [
      "Materi Belajar",
      "Diskusi",
      "Tugas",
      "Analisi",
      "Kuis dan Ujian",
      "Laporan",
    ],
    siswa: [
      "Materi Belajar",
      "Kegiatan",
      "Kuis dan Ujian",
      "Perpustakaan",
      "Konsultasi BK",
      "E - Rapor",
    ],
    orangTua: [
      "Materi Belajar",
      "Pemantauan Kegiatan",
      "Perpustakaan",
      "Pemantauan Kuis dan Ujian",
      "Konsultasi BK",
      "E - Rapor",
    ],
    kepsek: [
      "Surat Masuk & Keluar",
      "Postingan",
      "Materi Belajar",
      "Monitoring KBM",
    ],
    manajemen: [
      "TU & PPDB",
      "Keuangan",
      "Ujian",
      "Kurikulum",
      "Humas",
      "Dapodik",
      "Sarana & Prasarana",
      "Publikasi",
    ],
    alumni: ["Mencari Kerja", "Berwirausaha", "Penelusuran Alumni"],
    perusahaan: [
      "Publikasi Perusahaan",
      "Membuka Lowongan Kerja",
      "Laporan PKL",
    ],
  };

  return (
    <div className="row gx-5 pt-lg-5 pt-md-0 mt-md-4 align-items-center justify-content-center">
      <div className="col-md-6 col-sm-8 col-10 mb-4">
        <img
          src={`/img/illustrasi-role-${
            type == "guru"
              ? "guru"
              : type == "siswa"
              ? "siswa"
              : type == "orangTua"
              ? "orang-tua"
              : type == "kepsek"
              ? "kepsek"
              : type == "manajemen"
              ? "manajemen"
              : type == "alumni"
              ? "alumni"
              : type == "perusahaan"
              ? "perusahaan"
              : ""
          }.png`}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-md-6">
        <div className="text-md-start text-center">
          <span className="rounded-pill bg-light-primary py-1 px-3 color-primary fw-bold mb-4 lg-fs-14-ss ">
            Sebagai {""}
            {type == "guru"
              ? "Guru"
              : type == "siswa"
              ? "Siswa"
              : type == "orangTua"
              ? "Orang Tua"
              : type == "kepsek"
              ? "Kepsek"
              : type == "manajemen"
              ? "Manajemen"
              : type == "alumni"
              ? "Alumni"
              : type == "perusahaan"
              ? "Perusahaan"
              : ""}
          </span>
        </div>
        <h4 className="fs-4 color-dark fw-extrabold my-4 lg-fs-6">
          {type == "guru"
            ? "Guru adalah Pemimpin Masa Depan Indonesia, Kami hadir untuk membantu kegiatan belajar mengajar dengan maksimal"
            : type == "siswa"
            ? "Siswa adalah Calon Pemimpin Masa Depan Indonesia. Kami ingin agar siswa dapat berkolaborasi dan melakukan perubahan"
            : type == "orangTua"
            ? "Kami mendorong orangtua untuk memberi dukungan karena sangat penting dalam mewujudkan keberhasilan pendidikan anak"
            : type == "kepsek"
            ? "Kini Kepala Sekolah dapat melaksanakan program supervisi jauh lebih efisien dan juga dapat didelegasikan secara efektif"
            : type == "manajemen"
            ? "Manajemen efektif dan efisien untuk meningkatkan kinerja sekolah dalam pencapaian tujuan pendidikan"
            : type == "alumni"
            ? "Kami memfasilitasi Alumni untuk berperan dalam membangun sinergi dan program nyata bagi kemajuan sekolah"
            : type == "perusahaan"
            ? "Saatnya Sekolah dan Pengusaha saling bekerja sama untuk mengoptimalkan dalam peningkatkan mutu pendidikan di sekolah"
            : ""}
        </h4>
        <div className="row pb-5">
          <div className={`${type == "manajemen" ? "col-lg-12" : "col-lg-11"}`}>
            <div className="row">
              {listFitur[type]?.map((item) => (
                <div
                  className={`${
                    type == "manajemen" ? "col-sm-4 col-6" : "col-6"
                  } mb-3`}
                >
                  <div className="d-flex">
                    <span
                      className="rounded-circle d-flex align-items-center justify-content-center bg-primary shadow-primary-ss text-white me-2"
                      style={{ width: "14px", height: "14px" }}
                    >
                      <img src="/img/check.svg" alt="" />
                    </span>
                    <h6
                      className="fs-6 lg-fs-14-ss fw-semibold color-primary mb-0"
                      style={{ marginBottom: "2px" }}
                    >
                      {item}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-md-start text-center">
          <a
            href="#"
            className="btn btn-ss btn-warning btn-warning-ss fs-18-ss lg-fs-6 fw-bold rounded-pill shadow-warning-ss bg-gradient-warning"
          >
            Lihat Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
