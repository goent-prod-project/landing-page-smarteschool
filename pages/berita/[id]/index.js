import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import AnimatePage from "../../components/Shared/AnimatePage/AnimatePage";
import Layout from "../../components/Layout/Layout";
import CardBerita from "../../components/Berita/CardBerita";
import CardSideBerita from "../../components/Berita/CardSideBerita";

const index = ({ id }) => {
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
  return (
    <Layout>
      <AnimatePage>
        <section
          className="banner-berita position-absolute"
          style={{
            background: `linear-gradient(
                to bottom,
                rgba(7, 0, 66, 0.6),
                rgba(4, 0, 36, 0.65)
          ), url("http://api.goent26.com/uploads/medium_Whats_App_Image_2021_08_19_at_23_25_01_8599dac6a1.jpeg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></section>
        <div className="container mt-4">
          <div className="row gy-4 d-flex justify-content-center">
            <div
              className={`d-flex justify-content-between
              `}
            >
              <Link href={`/berita`}>
                <a className="text-decoration-none fw-bolder position-relative text-white pointer">
                  <FaChevronLeft />
                  <span className="ms-2">Kembali</span>
                </a>
              </Link>
            </div>
            <div className="col-md-9">
              <div className="card card-ss p-4 pb-5  mb-4">
                <h2 className="color-dark fw-black mb-2">
                  Presentasi Smarteschool bersama Kepala Dinas Pendidikan
                  Pemprov DKI Jakarta
                </h2>
                <p className="fs-16-ss fw-semibold my-2 my-md-4">
                  Senin, 16 Agustus 2021
                </p>
                <div className="mt-4">
                  <img
                    src="http://api.goent26.com/uploads/medium_Whats_App_Image_2021_08_19_at_23_25_01_8599dac6a1.jpeg"
                    alt=""
                    className="img-fluid rounded-ss img-fit-cover mb-3"
                    style={{
                      width: "100%",
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      //   __html: data?.deskripsi,
                      __html: `<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem</p>`,
                    }}
                    className="color-dark fw-semibold fs-16-ss"
                  ></p>
                  <hr className="my-4" />
                  <h4 className="title-border fw-extrabold mb-4 color-dark">
                    Bagikan
                  </h4>
                  <div>
                    <img
                      src="/img/icon-share-wa.svg"
                      alt="Whatsapp"
                      className="me-3 pointer"
                    />
                    <img
                      src="/img/icon-share-facebook.svg"
                      alt="Facebook"
                      className="me-3 pointer"
                    />
                    <img
                      src="/img/icon-share-instagram.svg"
                      alt="Instagram"
                      className="me-3 pointer"
                    />
                    <img
                      src="/img/icon-share-twitter.svg"
                      alt="Twitter"
                      className="pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-0 mt-md-4">
              <div className="card card-ss p-4 pb-5  mb-4">
                <h4 className="title-border fw-extrabold mb-4 color-dark">
                  Berita Terbaru
                </h4>
                <CardSideBerita data={dataBerita} />

                <div className="text-center">
                  <a
                    href="/berita-terbaru"
                    className="bg-secondary py-2 px-4 text-white fw-bold fs-16-ss rounded-pill text-center pointer"
                  >
                    Berita Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="py-4 pt-0 pt-md-4">
              <h4 className="title-border fw-extrabold mb-4 color-dark">
                Berita Lainnya
              </h4>
              <div className="row gy-4">
                <CardBerita data={dataBerita} />
              </div>
            </div>
          </div>
        </div>
      </AnimatePage>
    </Layout>
  );
};

export async function getServerSideProps({ params: { id } }) {
  return {
    props: {
      id,
    },
  };
}

export default index;
