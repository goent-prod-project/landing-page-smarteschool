import Link from "next/link";
import { FaBook, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";
import CardBerita from "../components/Berita/CardBerita";

const index = ({}) => {
  const dataBerita = [
    {
      id: 1,
      img: "http://api.goent26.com/uploads/medium_Whats_App_Image_2021_08_19_at_23_25_00_52f0386368.jpeg",
      judul: `Workshop Guru Penggerak Digitalisasi Sekolah (GPDS) SD dan SMP se DKI Jakarta Hari Pertama`,
      tanggal: "20 August 2021",
    },
    {
      id: 2,
      img: "http://api.goent26.com/uploads/medium_Whats_App_Image_2021_08_19_at_23_25_01_8599dac6a1.jpeg",
      judul: `
      Workshop Guru Penggerak Digitalisasi Sekolah (GPDS) SD dan SMP se DKI Jakarta Hari Kedua`,
      tanggal: "20 August 2021",
    },
    {
      id: 3,
      img: "http://api.goent26.com/uploads/medium_Whats_App_Image_2021_08_19_at_23_25_03_6361a564b8.jpeg",
      judul: `Workshop Guru Penggerak Digitalisasi Sekolah (GPDS) SD dan SMP se DKI Jakarta Hari Ketiga`,
      tanggal: "20 August 2021",
    },
  ];

  const dataArtikel = [
    {
      id: 1,
      img: "http://api.goent26.com/uploads/medium_Whats_App_Image_2021_02_24_at_21_24_37_1_1366f5ebb4.jpeg",
      judul: `Pembelajaran Daring Di Masa Pandemi, Solusi Atau Masalah?`,
      tanggal: "24 February 2021",
    },
    {
      id: 2,
      img: "http://api.goent26.com/uploads/medium_distance_learning_1600x960_1600x960_898e69ba99.jpg",
      judul: `
      5 Fitur Utama Aplikasi Learning Management System`,
      tanggal: "18 February 2021",
    },
    {
      id: 3,
      img: "http://api.goent26.com/uploads/medium_e_learning_295454ff86.jpg",
      judul: `
      5 Tantangan dan Solusi Belajar Daring untuk Pelajar di Masa Pandemi Covid 19`,
      tanggal: "11 February 2021",
    },
  ];

  return (
    <Layout isIndex>
      <AnimatePage>
        <>
          <div className="container">
            <div className="py-4">
              <div className="row">
                <div className="d-flex justify-content-between mb-md-0 mb-3">
                  <h3 className="md-fs-5 color-dark fw-extrabold title-page position-relative mb-4 mb-md-5 ps-0 order-1">
                    Berita Terbaru
                  </h3>
                  <Link href={`/berita-terbaru`}>
                    <a className="text-decoration-none fw-bolder position-relative color-primary pointer mb-4 d-block order-2 d-flex justify-content-end align-items-center md-fs-14-ss">
                      <span className="me-2">Lihat Semua</span>
                      <FaChevronRight />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="row gy-4">
                <CardBerita data={dataBerita} />
              </div>
            </div>
            <div className="py-4">
              <div className="row">
                <div className="d-flex justify-content-between mb-md-0 mb-3">
                  <h3 className="md-fs-5 color-dark fw-extrabold title-page position-relative mb-4 mb-md-5 ps-0 order-1">
                    Artikel Terbaru
                  </h3>
                  <Link href={`/artikel-terbaru`}>
                    <a className="text-decoration-none fw-bolder position-relative color-primary pointer mb-4 d-block order-2 d-flex justify-content-end align-items-center md-fs-14-ss">
                      <span className="me-2">Lihat Semua</span>
                      <FaChevronRight />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="row gy-4">
                <CardBerita data={dataArtikel} />
              </div>
            </div>
          </div>
        </>
      </AnimatePage>
    </Layout>
  );
};

export default index;
