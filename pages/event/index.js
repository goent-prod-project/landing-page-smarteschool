import { Tooltip } from "antd";
import React from "react";
import CardEvent from "../components/Event/CardEvent";
import Layout from "../components/Layout/Layout";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";

const index = ({ nav }) => {
  const dataEvent = [
    {
      linkEvent:
        "https://smarteschool.id/event/guru-penggerak-digitalisasi-sekolah",
      bannerEvent: "/img/thumbnail-gpds.png",
      judulEvent: "Guru Penggerak Digitalisasi Sekolah",
      deskripsiEvent:
        "Program yang membantu guru untuk mengembangkan potensi dan kreatifitas dari Guru Penggerak agar dapat menyelenggarakan kegiatan belajar mengajar secara digital dan online kepada siswa.",
    },
    {
      linkEvent:
        "https://ditpsd.kemdikbud.go.id/gemapertiwi2021/videotik/daftar",
      bannerEvent: "/img/poster-gemapertiwi.png",
      judulEvent: "Gema Pertiwi Pelajar Pancasila 2021",
      deskripsiEvent:
        "Gema Pertiwi bertujuan untuk membangkitkan semangat dan kreativitas ekosistem pendidikan dalam rangka melahirkan profil Pelajar Pancasila. Nah, di dalam Gema Pertiwi terdapat serangkaian kegiatan berupa unjuk karya yang dapat diikuti oleh peserta didik, pendidik, dan atau satuan Pendidikan sekolah dasar Indonesia, baik yang ada di Indonesia maupun di luar negeri.",
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
          className="banner banner-event position-absolute"
          style={{
            height: "220px",
            background: `url("/img/banner-event.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "center",
            left: "0",
            right: "0",
          }}
        ></section>

        <div
          className="container pt-5 position-relative"
          style={{ zIndex: "1" }}
        >
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h3 className="fw-extrabold text-white mb-0 md-fs-5 sm-fs-6">
                Ikuti Event Bersama Smarteschool untuk Menambah Pengalaman Anda{" "}
              </h3>
            </div>
          </div>
          <div className="row g-4">
            {dataEvent?.map((d, idx) => (
              <div className="col-lg-4 col-md-6">
                <CardEvent data={d} key={idx} />
              </div>
            ))}
          </div>
        </div>

        {/* <section
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
        </section> */}
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
