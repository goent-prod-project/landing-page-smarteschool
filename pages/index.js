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
import SectionMenuDesktop from "./components/SectionMenu/SectionMenuDesktop";
import SectionMenuMobile from "./components/SectionMenu/SectionMenuMobile";
import { getBanner } from "../client/BannerClient";
import { getFaq } from "../client/FaqClient";
import ReactMarkdown from "react-markdown";
import { getImageUrl } from "../utilities/AppUtils";

export default function Home({ banner, faq }) {
  const [sliderWidth, setsliderWidth] = useState(0);
  const [collapseOpen, setcollapseOpen] = useState({});

  useEffect(() => {
    setsliderWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setsliderWidth(window.innerWidth);
    });
  }, []);

  return (
    <Layout isIndex isLandingPage={false}>
      <AnimatePage>
        <div className="slider">
          <Slider>
            {banner?.map((d, idx) => (
              <div
                key={idx}
                className="slider-body position-absolute"
                data-src={
                  sliderWidth > 576
                    ? getImageUrl(d.bannerDesktop?.url)
                    : sliderWidth > 424
                    ? getImageUrl(d.bannerMobile?.url)
                    : getImageUrl(d.bannerMobileExtra?.url)
                }
              >
                <a href={d?.link} target="_blank"></a>
              </div>
            ))}
          </Slider>
        </div>

        {/* Section Menu Start*/}

        <div className="d-md-block d-none">
          <SectionMenuDesktop />
        </div>
        <div className="d-md-none d-block">
          <SectionMenuMobile />
        </div>

        {/* Section Menu End */}

        {/* Section Panduan Pengguna Start */}
        <div className="section py-md-5 py-4">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 text-center">
                <h1 className="fs-1 md-fs-5 sm-fs-6 fw-extrabold color-dark mb-0">
                  Panduan Pengguna
                </h1>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="position-relative">
                  <img
                    src="/img/element-1.svg"
                    alt="element-1"
                    className="position-absolute"
                    style={{ left: "20px", top: "10px" }}
                  />
                  <div
                    className="w-100 bg-soft-primary d-flex flex-column align-items-center justify-content-center p-5 px-sm-5 px-4"
                    style={{
                      borderRadius: "127px 0 70px 0",
                      minHeight: "475px",
                    }}
                  >
                    <span
                      className="d-flex align-items-center justify-content-center rounde-circle icon-panduan-pengguna"
                      style={{
                        width: "150px",
                        height: "150px",
                        boxShadow: `0 15px 30px rgba(244, 244, 247, 0.75)`,
                      }}
                    >
                      <img
                        src="/img/icon-buku-pengguna.svg"
                        alt="icon-buku-pengguna"
                        className="icon-panduan-pengguna"
                      />
                    </span>
                    <h4 className="fw-extrabold color-dark mt-4 md-fs-5 sm-fs-6">
                      Buku Panduan
                    </h4>
                    <p className="fw-semibold color-secondary text-center w-75 md-w-100 md-fs-14-ss">
                      Panduan cara menggunakan aplikasi Smarteschool secara
                      lengkap yang dapat dibaca secara offline
                    </p>
                    <Link href="/buku-panduan">
                      <a
                        // href="https://drive.google.com/file/d/1utbJsl9p_xhgiqbarty7vxx05e1ZBfU_/view?usp=sharing"
                        // target="_blank"
                        className="btn btn-ss btn-warning btn-warning-ss bg-gradient-warning shadow-warning-ss fw-bold rounded-pill d-flex align-items-center justify-content-center md-fs-6 sm-14-ss mt-3"
                        style={{ width: "140px" }}
                      >
                        Unduh
                      </a>
                    </Link>
                    {/* <a
                      href="https://drive.google.com/file/d/1utbJsl9p_xhgiqbarty7vxx05e1ZBfU_/view?usp=sharing"
                      target="_blank"
                      className="btn btn-ss btn-warning btn-warning-ss bg-gradient-warning shadow-warning-ss fw-bold rounded-pill d-flex align-items-center justify-content-center md-fs-6 sm-14-ss mt-3"
                      style={{ width: "140px" }}
                    >
                      Unduh
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <img
                    src="/img/element-2.svg"
                    alt="element-2"
                    className="position-absolute"
                    style={{ bottom: "-15px", right: "-25px" }}
                  />
                  <div
                    className="w-100 bg-soft-primary d-flex flex-column align-items-center justify-content-center p-5 px-sm-5 px-4"
                    style={{
                      borderRadius: "0 39px 0 127px",
                      minHeight: "475px",
                    }}
                  >
                    <span
                      className="d-flex align-items-center justify-content-center rounde-circle icon-panduan-pengguna"
                      style={{
                        width: "150px",
                        height: "150px",
                        boxShadow: `0 15px 30px rgba(244, 244, 247, 0.75)`,
                      }}
                    >
                      <img
                        src="/img/icon-video-pengguna.svg"
                        alt="icon-video-pengguna"
                        className="icon-panduan-pengguna"
                      />
                    </span>
                    <h4 className="fw-extrabold color-dark mt-4 md-fs-5 sm-fs-6">
                      Video Panduan
                    </h4>
                    <p className="fw-semibold color-secondary text-center w-75 md-w-100 md-fs-14-ss">
                      Panduan cara menggunakan aplikasi Smarteschool secara
                      lengkap dengan video interaktif
                    </p>
                    <a
                      href="https://www.youtube.com/channel/UC5mNaPBo672Z-szp3k1QU_g/videos"
                      target="_blank"
                      className="btn btn-ss btn-warning btn-warning-ss bg-gradient-warning shadow-warning-ss fw-bold rounded-pill d-flex align-items-center justify-content-center md-fs-6 sm-14-ss mt-3"
                      style={{ width: "140px" }}
                    >
                      Pelajari
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Panduan Pengguna Start */}

        {/* Section FaQ Start */}

        <div className="section py-md-5 py-4">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 text-center">
                <h1 className="fs-1 md-fs-5 sm-fs-6 fw-extrabold color-dark mb-0">
                  Pertanyaan yang Sering Diajukan
                </h1>
              </div>
            </div>
            <div className="row justify-content-center gy-4 mb-4">
              {faq?.map((d, idx) => (
                <div className="col-md-10">
                  <div className="card card-ss card-biaya-pendaftaran p-0">
                    <div className="card-header-ss rounded-ss d-flex justify-content-between align-items-between px-4 py-4">
                      <h4 className="fw-extrabold color-dark mb-0 mt-2 md-fs-5 sm-fs-6">
                        {d?.judulFaq}
                      </h4>
                      <div
                        className={`btn-collapse ${
                          collapseOpen[idx + 1] ? "active" : ""
                        }`}
                        onClick={() =>
                          setcollapseOpen({
                            ...collapseOpen,
                            [idx + 1]: !collapseOpen[idx + 1],
                          })
                        }
                      >
                        <a
                          data-bs-toggle="collapse"
                          href={`#faq-${idx + 1}`}
                          role="button"
                          aria-expanded="false"
                          aria-controls={`faq-${idx + 1}`}
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

                    <div class="collapse" id={`faq-${idx + 1}`}>
                      <hr className="mb-4 mt-0" />
                      <div class="card-body card-footer-ss pb-4 px-4 pt-0 md-fs-14-ss dangerous-html">
                        <ReactMarkdown children={d?.kontenFaq} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="row">
              <div className="col-md-12 text-center">
                <Link href="/faq">
                  <a className="btn btn-ss btn-primary btn-primary-ss fw-bold shadow-primary-ss bg-gradient-primary rounded-pill fs-18-ss md-fs-6 sm-14-ss">
                    Lihat Semua Pertanyaan
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
        </div>

        {/* Section FaQ End */}
      </AnimatePage>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data: banner } = await getBanner(`?_sort=id:DESC`);
  const { data: faq } = await getFaq(`?_sort=id:ASC`);

  return {
    props: {
      banner: banner || null,
      faq: faq || null,
    },
  };
}
