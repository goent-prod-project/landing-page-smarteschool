import React from "react";
import InformasiUmum from "../../components/Event/InformasiUmum";
import PesertaPage from "../../components/Event/PesertaPage";
import RekamanWebinarPage from "../../components/Event/RekamanWebinarPage";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/Navbar";
import AnimatePage from "../../components/Shared/AnimatePage/AnimatePage";

const index = ({ nav }) => {
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
      url: `guru-penggerak-digitalisasi-sekolah?nav=informasi-umum`,
      text: "Informasi Umum",
      active: nav == "informasi-umum" || !nav,
    },
    {
      url: `guru-penggerak-digitalisasi-sekolah?nav=rekaman-webinar`,
      text: "Rekaman Webinar",
      active: nav == "rekaman-webinar",
    },
    // {
    //   url: `guru-penggerak-digitalisasi-sekolah?nav=peserta`,
    //   text: "Peserta",
    //   active: nav == "peserta",
    // },
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
            <div className="row gy-4 d-flex justify-content-lg-between justify-content-center">
              <div className="col-lg-6 order-2 order-lg-1 pt-4">
                <h2 className="fw-black text-white lg-fs-4 md-fs-5 sm-fs-6">
                  Bersama Mendigitalkan Komunitas Pendidikan Indonesia
                </h2>
                <div className="d-flex">
                  <div className="me-4 d-flex align-items-center">
                    <img
                      src="/img/icon-program-sekolah.svg"
                      alt=""
                      className="me-2"
                    />
                    <h4 className="fw-bold lg-fs-5 md-fs-6 text-white mb-0">
                      263 Sekolah
                    </h4>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/icon-program-guru.svg"
                      alt=""
                      className="me-2"
                    />
                    <h4 className="fw-bold lg-fs-5 md-fs-6 text-white mb-0">
                      7823 Guru
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="fs-18-ss text-white fw-regular mt-4 lg-fs-6 md-fs-14-ss">
                    Sudah saatnya bagi anda untuk menjadi bagian dari program
                    Guru Penggerak Digitalisasi Sekolah untuk mendapatkan
                    pelatihan khusus dan menjadi guru penggerak digital bersama
                    Smarteschool.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 order-1 order-lg-2">
                <img src="/img/icon-program.png" className="img-fluid" />
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
