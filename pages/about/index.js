import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import SelectShared from "../components/Shared/SelectShared/SelectShared";
import SearchCariSekolah from "../components/SearchCariSekolah/SearchCariSekolah";
import { FaFilter } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";
import Slider from "../components/Slider/Slider";

export default function Home({ nav, search }) {
  const router = useRouter();
  const [sliderWidth, setsliderWidth] = useState(0);
  const [collapseOpen, setcollapseOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(`/`);

  useEffect(() => {
    setsliderWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setsliderWidth(window.innerWidth);
    });
  }, []);

  const slider = [
    {
      desktopBsanner: "/img/banner-desktop.png",
      mobileBanner: "/img/banner-mobile.png",
    },
    {
      desktopBsanner: "/img/banner-desktop.png",
      mobileBanner: "/img/banner-mobile.png",
    },
    // {
    //   desktopBsanner: "/img/banner-desktop.png",
    //   mobileBanner: "/img/banner-mobile.png",
    // },
    // {
    //   desktopBsanner: "/img/banner-desktop.png",
    //   mobileBanner: "/img/banner-mobile.png",
    // },
  ];

  return (
    <Layout isIndex>
      <AnimatePage>
        <section
          id="hero-section-about-smarteschool"
          className="py-4"
          style={{ minHeight: "868px" }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center text-center flex-column">
              <div className="col-md-4">
                <img
                  src="/img/logo-smarteschool.png"
                  alt=""
                  className="img-fluid mb-4"
                />
              </div>
              <div className="col-md-6 position-relative">
                <h1
                  className="fs-1 fw-extrabold color-dark position-relative"
                  style={{ zIndex: "2" }}
                >
                  Sistem Digitalisasi Sekolah
                </h1>
                <div
                  className="bg-soft-primary w-100 position-absolute"
                  style={{ height: "20px", bottom: "15px", zIndex: "1" }}
                ></div>
              </div>
              <div className="col-md-12 text-center">
                <p className="fs-18-ss fw-semibold color-dark">
                  Smartschool adalah sistem yang diciptakan untuk mendigitalkan
                  seluruh aspek yang ada di sekolah, meliputi pembelajaran,
                  manajemen sarana dan prasarana sekolah, dengan tujuan untuk
                  mempermudah kegiatan belajar mengajar di sekolah. Dilengkapi
                  dengan fitur ujian online dan E - learning yang memudahkan
                  guru dalam mengajar disaat pembelajaran jarak jauh. Memudahkan
                  kegiatan belajar lewat kecerdasan buatan (artificial
                  intelligence) sehingga meningkatkan efektivitas belajar siswa.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img
                  src="/img/illustrasi-landing-page-smarteschool.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#F6FAFF" }}>
          <div className="container">
            <div className="row position-relative card-pengguna-smarteschool">
              <div className="col-md-12">
                <div className="card card-ss p-5 rounded-ss text-center">
                  <h1 className="fs-1 fw-extrabold color-dark">
                    Pengguna Smarteschool
                  </h1>
                  <div className="row justify-content-center mb-4">
                    <div className="col-lg-6 col-md-8 text-center">
                      <h5 className="fs-5 color-secondary fw-semibold">
                        Total pengguna aktif yang telah terintegrasi dan telah
                        menggunakan aplikasi Smarteschool
                      </h5>
                    </div>
                  </div>
                  <div className="row justify-content-center pt-2">
                    <div className="col-lg-8 d-flex justify-content-md-around justify-content-md-between flex-md-row flex-column align-items-stretch">
                      <div
                        className="bg-soft-primary rounded-ss p-3 d-flex align-items-center justify-content-center flex-column md-w-auto mb-md-0 mb-3"
                        style={{ width: "175px", height: "125px" }}
                      >
                        <h1 className="fs-1 fw-extrabold color-primary mb-1">
                          52
                        </h1>
                        <h5 className="fw-bold color-dark mb-0">Sekolah</h5>
                      </div>
                      <div
                        className="bg-soft-primary rounded-ss p-3 d-flex align-items-center justify-content-center flex-column md-w-auto mb-md-0 mb-3"
                        style={{ width: "175px", height: "125px" }}
                      >
                        <h1 className="fs-1 fw-extrabold color-primary mb-1">
                          52
                        </h1>
                        <h5 className="fw-bold color-dark mb-0">Sekolah</h5>
                      </div>
                      <div
                        className="bg-soft-primary rounded-ss p-3 d-flex align-items-center justify-content-center flex-column md-w-auto"
                        style={{ width: "175px", height: "125px" }}
                      >
                        <h1 className="fs-1 fw-extrabold color-primary mb-1">
                          52
                        </h1>
                        <h5 className="fw-bold color-dark mb-0">Sekolah</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-4" style={{ backgroundColor: "#F6FAFF" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="fs-1 fw-extrabold color-dark">Layanan Kami</h1>
                <h5 className="fs-5 color-secondary fw-semibold mb-0">
                  Kami menyediakan solusi untuk semua aspek sekolah di
                  Smarteschool
                </h5>
              </div>
            </div>
          </div>
        </section>

        <section className="position-relative mb-5">
          <div
            className="w-100 h-50 position-absolute"
            style={{ backgroundColor: "#F6FAFF" }}
          ></div>
          <div className="container position-relative">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div
                  className="card-ss p-4 rounded-ss h-100 lg-h-auto bg-white"
                  style={{ minHeight: "465px" }}
                >
                  <div
                    className="rounded-circle shadow-primary-ss mb-4"
                    style={{ width: "85px", height: "85px" }}
                  >
                    <img src="/img/icon-platform.svg" alt="icon" />
                  </div>
                  <h4 className="fs-4 color-dark fw-bold mb-4">Platform</h4>
                  <p className="fs-18-ss fw-semibold color-secondary mb-0">
                    Kami menyediakan platform penunjang kegiatan sekolah secara
                    digital, dengan memberikan berbagai layanan yang dapat
                    memudahkan segala aktivitas siswa, guru, maupun tenaga ahli
                    sekolah dalam menjalankan kegiatan belajar mengajar yang
                    berbasis online.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="card-ss p-4 rounded-ss h-100 lg-h-auto bg-white"
                  style={{ minHeight: "465px" }}
                >
                  <div
                    className="rounded-circle shadow-primary-ss mb-4"
                    style={{ width: "85px", height: "85px" }}
                  >
                    <img src="/img/icon-it-konsultan.svg" alt="icon" />
                  </div>
                  <h4 className="fs-4 color-dark fw-bold mb-4">IT Konsultan</h4>
                  <p className="fs-18-ss fw-semibold color-secondary mb-0">
                    Kami menyadari bahwa setiap sekolah mempunyai sistem
                    pembelajaran yang berbeda-beda. Kami dapat mengkostumisasi
                    sesuai dengan kebutuhan dari sekolah. Kami juga menyediakan
                    layanan konsultasi berkaitan dengan teknologi untuk
                    menyelesaikan masalah yang ada di sekolah.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="card-ss p-4 rounded-ss h-100 lg-h-auto bg-white"
                  style={{ minHeight: "465px" }}
                >
                  <div
                    className="rounded-circle shadow-primary-ss mb-4"
                    style={{ width: "85px", height: "85px" }}
                  >
                    <img src="/img/icon-infrastruktur.svg" alt="icon" />
                  </div>
                  <h4 className="fs-4 color-dark fw-bold mb-4">
                    Infrastruktur
                  </h4>
                  <p className="fs-18-ss fw-semibold color-secondary mb-0">
                    Untuk membangun sekolah yang nyaman diperlukan infrastruktur
                    yang dapat mendukung segala macam kegiatan menjalankan
                    kegiatan belajar mengajar. Kami menyediakan berbagai
                    infrastruktur sekolah seperti Internet, CCTV dan
                    infrastruktur lainnya di bidang teknologi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="fs-3 fw-bold color-dark">Fitur Utama</h3>
                <h5 className="fs-5 color-secondary color-secondary">
                  Sudah saatnya akses digitalisasi didapatkan bagi seluruh
                  kalangan pendidikan
                </h5>
              </div>
            </div>
          </div>
          {/* <div className="slider-fitur">
            <Slider>
              {slider?.map((d, idx) => (
                <div
                  key={idx}
                  className="slider-body"
                  data-src={
                    sliderWidth >= 768 ? d.desktopBsanner : d.mobileBanner
                  }
                >
                  <div className="d-sm-block d-none">
                    <a
                      href="#"
                      className="btn btn-ss btn-warning btn-warning-ss fs-18-ss fw-bold rounded-pill shadow-warning-ss bg-gradient-warning"
                    >
                      Lihat Selengkapnya
                    </a>
                  </div>
                  <div className="d-sm-none d-block">
                    <a
                      href="#"
                      className="btn btn-ss btn-warning btn-warning-ss fs-12-ss fw-bold rounded-pill shadow-warning-ss bg-gradient-warning"
                    >
                      Lihat Selengkapnya
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div> */}
          <div className="slider-fitur">
            <Slider>
              <div className="container">
                <div className="row gx-4">
                  <div className="col-md-6">
                    <img
                      src="/img/smarteschool-illustration.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6">
                    <span className="rounded-pill bg-light-primary py-1 px-3 color-primary fw-bold mb-4">
                      Sebagai Guru
                    </span>
                    <h4 className="fs-4 color-dark fw-bold my-4">
                      Guru adalah Pemimpin Masa Depan Indonesia, Kami hadir
                      untuk membantu kegiatan belajar mengajar dengan maksimal
                    </h4>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row gx-4">
                  <div className="col-md-6">
                    <img
                      src="/img/smarteschool-illustration.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6">
                    <span className="rounded-pill bg-light-primary py-1 px-3 color-primary fw-bold mb-4">
                      Sebagai Guru
                    </span>
                    <h4 className="fs-4 color-dark fw-bold my-4">
                      Guru adalah Pemimpin Masa Depan Indonesia, Kami hadir
                      untuk membantu kegiatan belajar mengajar dengan maksimal
                    </h4>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </AnimatePage>
    </Layout>
  );
}

export async function getServerSideProps({ query: { nav, search } }) {
  return {
    props: {
      nav: nav || null,
      search: search || null,
    },
  };
}
