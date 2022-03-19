import React from "react";
import InformasiUmumGpdsMandiri from "components/Event/GpdsMandiri/InformasiUmumGpdsMandiri";
import MateriPelatihan from "components/Event/GpdsMandiri/MateriPelatihan";
import PesertaPageGpdsMandiri from "components/Event/GpdsMandiri/PesertaPageGpdsMandiri";
import PesertaPage from "components/Event/PesertaPage";
import RekamanWebinarPage from "components/Event/RekamanWebinarPage";
import Layout from "components/Layout/Layout";

import Navbar from "components/Navbar/Navbar";
import AnimatePage from "components/Shared/AnimatePage/AnimatePage";

const index = ({ nav }) => {
  const gpdsSMASMKDKI = [
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

  const gpdsSDSMPDKI = [
    {
      link: "https://www.youtube.com/watch?v=p3kISGvEQ74",
      thumbnail:
        "https://i.ytimg.com/vi/p3kISGvEQ74/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBH_QE2HKlrShk7wbOWznYhCxYTOQ",
      tanggal: "Selasa, 10 Agustus 2021",
      judul: "GPDS Hari Ke - 1 ",
      deskripsi: "Pengenalan Program GPDS dan Smarteschool",
    },
    {
      link: "https://www.youtube.com/watch?v=cZt2wVOCgxk",
      thumbnail:
        "https://i.ytimg.com/vi/cZt2wVOCgxk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZkp4OuZmbDOcjgRZ-0HAanv_jRw",
      tanggal: "Rabu, 11 Agustus 2021",
      judul: "GPDS Hari Ke - 2",
      deskripsi: "E - Learning",
    },
    {
      link: "https://www.youtube.com/watch?v=bB4V5a_esRI",
      thumbnail:
        "https://i.ytimg.com/vi/bB4V5a_esRI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNbmN6yUI2tfWAjf7177vnCU8ebQ",
      tanggal: "Kamis, 12 Agustus 2021",
      judul: "GPDS Hari Ke - 3",
      deskripsi: "E - Manajement",
    },
    {
      link: "https://www.youtube.com/watch?v=WMXe00zqpVA",
      thumbnail:
        "https://i.ytimg.com/vi/WMXe00zqpVA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvvNW_skBTnFpYawRcwC2j0mL-rQ",
      tanggal: "Senin, 16 Agustus 2021",
      judul: "GPDS Hari Ke - 4",
      deskripsi: "E - Exam",
    },
  ];

  const gpdsNasional = [
    {
      link: "https://www.youtube.com/watch?v=gz-dbncwO_Q",
      thumbnail:
        "https://i.ytimg.com/vi/gz-dbncwO_Q/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9LoLmd3EW2P4eH8Ki7sxl7C12XQ",
      tanggal: "Rabu, 8 September 2021",
      judul: "GPDS Hari Ke - 1 ",
      deskripsi: "Pengenalan Program GPDS dan Smarteschool",
    },
    {
      link: "https://www.youtube.com/watch?v=4YoClEcd3i0",
      thumbnail:
        "https://i.ytimg.com/vi/4YoClEcd3i0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYdm1LrieJuEZRzyqyzv_jW5II0w",
      tanggal: "Kamis, 9 September 2021",
      judul: "GPDS Hari Ke - 2",
      deskripsi: "E - Learning",
    },
    {
      link: "https://www.youtube.com/watch?v=eXLv-3QSCkU",
      thumbnail:
        "https://i.ytimg.com/vi/eXLv-3QSCkU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-qFaq8or09OhPOSwsGjEKAAkg7A",
      tanggal: "Jumat, 10 September 2021",
      judul: "GPDS Hari Ke - 3",
      deskripsi: "E - Manajement",
    },
    {
      link: "https://www.youtube.com/watch?v=SdDUV2JOtcs",
      thumbnail:
        "https://i.ytimg.com/vi/SdDUV2JOtcs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBL6EHbt4Rr-sDAL349hsc1Ad85cg",
      tanggal: "Senin, 13 September 2021",
      judul: "GPDS Hari Ke - 4",
      deskripsi: "E - Exam",
    },
    {
      link: "https://www.youtube.com/watch?v=UJn_k_bWACg",
      thumbnail:
        "https://i.ytimg.com/vi/UJn_k_bWACg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfEhFdlVkCbwVzAvERwlG9dmchrA",
      tanggal: "Selasa, 14 September 2021",
      judul: "GPDS Hari Ke - 4",
      deskripsi: "E - Rapor",
    },
  ];

  const gpdsKalsel = [
    {
      link: "https://www.youtube.com/watch?v=pSdJBY1e4TQ",
      thumbnail:
        "https://i.ytimg.com/vi/pSdJBY1e4TQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCI4eB52pvoPK1kqp3CSqPUh3U2DA",
      tanggal: "Senin, 10 Oktober 2021",
      judul: "GPDS Hari Ke - 1 ",
      deskripsi: "Pengenalan Program GPDS dan Smarteschool",
    },
  ];

  const navItems = [
    {
      url: `gpds-mandiri?nav=informasi-umum`,
      text: "Informasi Umum",
      active: nav == "informasi-umum" || !nav,
    },
    {
      url: `gpds-mandiri?nav=materi-pelatihan`,
      text: "Materi Pelatihan",
      active: nav == "materi-pelatihan",
    },
    {
      url: `gpds-mandiri?nav=peserta`,
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
        {(!nav || nav === "informasi-umum") && <InformasiUmumGpdsMandiri />}
        {nav === "materi-pelatihan" && (
          <MateriPelatihan
            data={gpdsSMASMKDKI}
            gpdsSDSMPDKI={gpdsSDSMPDKI}
            gpdsNasional={gpdsNasional}
            gpdsKalsel={gpdsKalsel}
          />
        )}
        {nav === "peserta" && <PesertaPageGpdsMandiri />}
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
