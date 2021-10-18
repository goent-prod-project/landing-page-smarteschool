import { Tooltip } from "antd";
import React from "react";
import CardEvent from "../components/Event/CardEvent";
import Layout from "../components/Layout/Layout";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";

const index = ({ nav }) => {
  const dataEvent = [
    {
      linkEvent: "https://smarteschool.id/event",
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

  const navFaq = [
    {
      img: "/img/icon-faq-role-umum.svg",
      name: "Umum",
    },
    {
      img: "/img/icon-faq-role-guru.svg",
      name: "Guru",
    },
    {
      img: "/img/icon-faq-role-siswa.svg",
      name: "Siswa",
    },
    {
      img: "/img/icon-faq-role-orang-tua.svg",
      name: "Orang Tua",
    },
    {
      img: "/img/icon-faq-role-kepsek.svg",
      name: "Kepsek",
    },
    {
      img: "/img/icon-faq-role-manajemen.svg",
      name: "Manajemen",
    },
    {
      img: "/img/icon-faq-role-alumni.svg",
      name: "Alumni",
    },
    {
      img: "/img/icon-faq-role-perusahaan.svg",
      name: "Perusahaan",
    },
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
                Pertanyaan yang Sering Diajukan
              </h3>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-12">
              <div className="nav-faq card card-ss p-4 rounded-ss">
                <div className="row gx-4">
                  {navFaq.map((d) => (
                    <div className="col d-flex flex-column align-items-center">
                      <img src={d.img} alt="icon-faq" className="mb-2" />
                      <h6 className="fw-bold color-dark mb-0">{d.name}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
