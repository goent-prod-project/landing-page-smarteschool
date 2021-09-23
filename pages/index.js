import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import SelectShared from "./components/Shared/SelectShared/SelectShared";
import SearchCariSekolah from "./components/SearchCariSekolah/SearchCariSekolah";
import { FaFilter } from "react-icons/fa";
import Layout from "./components/Layout/Layout";
import AnimatePage from "./components/Shared/AnimatePage/AnimatePage";
import Slider from "./components/Slider/Slider";

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
    {
      desktopBsanner: "/img/banner-desktop.png",
      mobileBanner: "/img/banner-mobile.png",
    },
    {
      desktopBsanner: "/img/banner-desktop.png",
      mobileBanner: "/img/banner-mobile.png",
    },
  ];

  return (
    <Layout isIndex>
      <AnimatePage>
        <Slider>
          {slider?.map((d, idx) => (
            <div
              key={idx}
              className="slider-body"
              data-src={sliderWidth >= 768 ? d.desktopBsanner : d.mobileBanner}
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

        {/* Section Menu Start*/}

        <div className="section py-5" style={{ backgroundColor: "#F6FAFF" }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 text-center">
                <h1 className="fs-1 fw-extrabold color-dark">
                  Pelajari Lebih Lanjut
                </h1>
                <h5 className="fs-5 color-secondary mb-0">
                  Kami menyediakan solusi untuk semua aspek sekolah di
                  Smarteschool
                </h5>
              </div>
            </div>
            <div className="row gy-4">
              <div className="col-md-4 col-6">
                <Link href="#">
                  <a className="text-decoration-none smarte-menu">
                    {" "}
                    <div className="card card-ss rounded-ss p-sm-4 p-3 text-center">
                      <img
                        src="/img/fitur.png"
                        alt=""
                        className="img-fluid mb-4"
                      />
                      <h4 className="fs-4 sm-fs-6 color-dark fw-bold mb-0">
                        Fitur
                      </h4>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-md-4 col-6">
                <Link href="#">
                  <a className="text-decoration-none smarte-menu">
                    {" "}
                    <div className="card card-ss rounded-ss p-sm-4 p-3 text-center">
                      <img
                        src="/img/uji-coba.png"
                        alt=""
                        className="img-fluid mb-4"
                      />
                      <h4 className="fs-4 sm-fs-6 color-dark fw-bold mb-0">
                        Uji Coba
                      </h4>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-md-4 col-6">
                <Link href="#">
                  <a className="text-decoration-none smarte-menu">
                    {" "}
                    <div className="card card-ss rounded-ss p-sm-4 p-3 text-center">
                      <img
                        src="/img/sekolah-partner.png"
                        alt=""
                        className="img-fluid mb-4"
                      />
                      <h4 className="fs-4 sm-fs-6 color-dark fw-bold mb-0">
                        Sekolah Partner
                      </h4>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-md-4 col-6">
                <Link href="#">
                  <a className="text-decoration-none smarte-menu">
                    {" "}
                    <div className="card card-ss rounded-ss p-sm-4 p-3 text-center">
                      <img
                        src="/img/berita.png"
                        alt=""
                        className="img-fluid mb-4"
                      />
                      <h4 className="fs-4 sm-fs-6 color-dark fw-bold mb-0">
                        Berita
                      </h4>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-md-4 col-6">
                <Link href="#">
                  <a className="text-decoration-none smarte-menu">
                    {" "}
                    <div className="card card-ss rounded-ss p-sm-4 p-3 text-center">
                      <img
                        src="/img/program.png"
                        alt=""
                        className="img-fluid mb-4"
                      />
                      <h4 className="fs-4 sm-fs-6 color-dark fw-bold mb-0">
                        Program
                      </h4>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-md-4 col-6">
                <Link href="#">
                  <a className="text-decoration-none smarte-menu">
                    {" "}
                    <div className="card card-ss rounded-ss p-sm-4 p-3 text-center">
                      <img
                        src="/img/hubungi-kami.png"
                        alt=""
                        className="img-fluid mb-4"
                      />
                      <h4 className="fs-4 sm-fs-6 color-dark fw-bold mb-0">
                        Hubungi Kami
                      </h4>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section Menu End */}

        {/* Section FaQ Start */}

        <div className="section py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 text-center">
                <h1 className="fs-1 fw-extrabold color-dark mb-0">
                  Pertanyaan yang Sering Diajukan
                </h1>
              </div>
            </div>
            <div className="row justify-content-center gy-4 mb-4">
              <div className="col-md-10">
                <div className="card card-ss card-biaya-pendaftaran p-0">
                  <div className="card-header-ss rounded-ss d-flex justify-content-between align-items-between px-4 py-4">
                    <h4 className="fw-extrabold color-dark mb-0 mt-2">
                      Apa itu Smarteschool?
                    </h4>
                    <div
                      className={`btn-collapse ${collapseOpen ? "active" : ""}`}
                      onClick={() => setcollapseOpen(!collapseOpen)}
                    >
                      <a
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <span
                          class="d-flex justify-content-center align-items-center shadow-primary-ss rounded-circle p-1 shadow-primary-ss bg-primary"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <img
                            className="dropdown"
                            src="/img/arrow-bottom.svg"
                            alt=""
                          />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div class="collapse" id="collapseExample">
                    <hr className="mb-4 mt-0" />
                    <div class="card-body card-footer-ss pb-4 px-4 pt-0">
                      <p>
                        Smarteschool adalah sistem yang diciptakan untuk
                        mendigitalkan seluruh aspek yang ada di sekolah,
                        meliputi pembelajaran, manajemen sarana dan prasarana
                        sekolah, dengan tujuan untuk mempermudah kegiatan
                        belajar mengajar di sekolah. Dilengkapi dengan fitur
                        ujian online dan E - learning yang memudahkan guru dalam
                        mengajar disaat pembelajaran jarak jauh. Memudahkan
                        kegiatan belajar lewat kecerdasan buatan (artificial
                        intelligence) sehingga meningkatkan efektivitas belajar
                        siswa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <a className="btn btn-ss btn-primary btn-primary-ss fw-bold shadow-primary-ss bg-gradient-primary rounded-pill fs-18-ss">
                  Lihat Semua Pertanyaan
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section FaQ End */}
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
