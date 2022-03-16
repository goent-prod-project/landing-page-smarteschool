import React from "react";
import InformasiUmum from "../components/Event/InformasiUmum";
import PesertaPage from "../components/Event/PesertaPage";
import RekamanWebinarPage from "../components/Event/RekamanWebinarPage";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import DaftarSertifikatPeserta from "../components/Sertifikat/DaftarSertifikatPeserta";
import VerifikasiSertifikat from "../components/Sertifikat/VerifikasiSertifikat";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";

const index = ({ page, nav, event }) => {
  const navItems = [
    {
      url: `sertifikat?nav=daftar-sertifikat`,
      text: "Daftar Sertifikat",
      active: nav == "daftar-sertifikat" || !nav,
    },
    {
      url: `sertifikat?nav=verifikasi-sertifikat`,
      text: "Verifikasi Sertifikat",
      active: nav == "verifikasi-sertifikat",
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
                      2.897 Sekolah
                    </h4>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/icon-program-guru.svg"
                      alt=""
                      className="me-2"
                    />
                    <h4 className="fw-bold lg-fs-5 md-fs-6 text-white mb-0">
                      20.934 Guru
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
        {(!nav || nav === "daftar-sertifikat") && (
          <DaftarSertifikatPeserta page={page} event={event} />
        )}
        {nav === "verifikasi-sertifikat" && <VerifikasiSertifikat />}
      </AnimatePage>
    </Layout>
  );
};

export async function getServerSideProps({ query: { page, nav, event } }) {
  return {
    props: {
      page: page || 1,
      nav: nav || null,
      event: event || null,
    },
  };
}

export default index;
