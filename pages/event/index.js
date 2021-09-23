import React, { useState } from "react";
import { FaChevronDown, FaPen, FaTrashAlt } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import InformasiUmum from "../components/Event/InformasiUmum";
import TabelGuru from "../components/Event/TabelGuru";
import TabelSekolah from "../components/Event/TabelSekolah";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";
import RekamanWebinarPage from "../components/Event/RekamanWebinarPage";
import PesertaPage from "../components/Event/PesertaPage";

const index = ({ nav }) => {
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

  const dataRekaman = [
    {
      link: "https://www.youtube.com/watch?v=nebzhnhb7fE",
      thumbnail:
        "https://i.ytimg.com/vi/nebzhnhb7fE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI_EGViMKfF4I9vtwJwPLwHInTYQ",
      tanggal: "Kamis, 22 Juli 2021",
      judul: "GPDS Hari Ke - 1 ",
      deskripsi: "Pengenalan Program GPDS dan Smarteschool",
    },
    {
      link: "https://www.youtube.com/watch?v=3JvBeoRK4qw",
      thumbnail:
        "https://i.ytimg.com/vi/nebzhnhb7fE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI_EGViMKfF4I9vtwJwPLwHInTYQ",
      tanggal: "Senin, 26 Juli 2021",
      judul: "GPDS Hari Ke - 2",
      deskripsi: "E - Learning",
    },
    {
      link: "https://www.youtube.com/watch?v=lBIdCRUdJVQ",
      thumbnail:
        "https://i.ytimg.com/vi/nebzhnhb7fE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI_EGViMKfF4I9vtwJwPLwHInTYQ",
      tanggal: "Selasa, 27 Juli 2021",
      judul: "GPDS Hari Ke - 3",
      deskripsi: "E - Manajement",
    },
    {
      link: "https://www.youtube.com/watch?v=dr-kc4yHrT0",
      thumbnail:
        "https://i.ytimg.com/vi/nebzhnhb7fE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI_EGViMKfF4I9vtwJwPLwHInTYQ",
      tanggal: "Rabu, 28 Juli 2021",
      judul: "GPDS Hari Ke - 4",
      deskripsi: "E - Exam",
    },
  ];

  const navItems = [
    {
      url: `event?nav=informasi-umum`,
      text: "Informasi Umum",
      active: nav == "informasi-umum" || !nav,
    },
    {
      url: `event?nav=rekaman-webinar`,
      text: "Rekaman Webinar",
      active: nav == "rekaman-webinar",
    },
    {
      url: `event?nav=peserta`,
      text: "Peserta",
      active: nav == "peserta",
    },
  ];

  return (
    <Layout>
      <AnimatePage>
        <section
          className="pb-5"
          style={{
            background: `url("/img/bg-program.svg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "auto",
          }}
        >
          <div className="container mt-4">
            <div className="row gy-4 d-flex justify-content-center">
              <div className="col-md-6 order-2 order-md-1 pt-4">
                <h2 className="fw-black text-white">
                  Bersama Mendigitalkan Komunitas Pendidikan Indonesia
                </h2>
                <div className="d-flex">
                  <div className="me-4 d-flex align-items-center">
                    <img
                      src="/img/icon-program-sekolah.svg"
                      alt=""
                      className="me-2"
                    />
                    <h4 className="fw-bold text-white mb-0">263 Sekolah</h4>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/icon-program-guru.svg"
                      alt=""
                      className="me-2"
                    />
                    <h4 className="fw-bold text-white mb-0">7823 Guru</h4>
                  </div>
                </div>
                <div>
                  <p className="fs-18-ss text-white fw-regular mt-4">
                    Sudah saatnya bagi anda untuk menjadi bagian dari program
                    Guru Penggerak Digitalisasi Sekolah untuk mendapatkan
                    pelatihan khusus dan menjadi guru penggerak digital bersama
                    Smarteschool.
                  </p>
                </div>
              </div>
              <div className="col-md-1 d-none d-md-flex order-2"></div>
              <div className="col-md-5 justify-content-end order-1 d-flex order-md-3">
                <img src="/img/icon-program.png" className="w-100" />
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div
            className="row m-0 position-relative"
            style={{
              top: "-43px",
            }}
          >
            <Navbar nav={navItems} />
          </div>
        </div>
        {(!nav || nav === "informasi-umum") && <InformasiUmum />}
        {nav === "rekaman-webinar" && <RekamanWebinarPage data={dataRekaman} />}
        {nav === "peserta" && <PesertaPage />}
      </AnimatePage>
    </Layout>
  );
};

export async function getServerSideProps({ query: { nav } }) {
  return {
    props: {
      nav: nav || null,
    },
  };
}
export default index;
