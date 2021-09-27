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
      desktopBanner: "/img/banner-desktop-berita.png",
      mobileSmBanner: "/img/banner-mobile-sm-berita.png",
      mobileXmBanner: "/img/banner-mobile-xm-berita.png",
    },
    {
      desktopBanner: "/img/banner-desktop-event.png",
      mobileSmBanner: "/img/banner-mobile-sm-event.png",
      mobileXmBanner: "/img/banner-mobile-xm-event.png",
    },
  ];

  return (
    <Layout isIndex isLandingPage={false}>
      <AnimatePage>
        <div className="slider">
          <Slider>
            {slider?.map((d, idx) => (
              <div
                key={idx}
                className="slider-body position-absolute"
                data-src={
                  sliderWidth > 576
                    ? d.desktopBanner
                    : sliderWidth > 424
                    ? d.mobileSmBanner
                    : d.mobileXmBanner
                }
              >
                <a
                  href="https://www.youtube.com/channel/UC5mNaPBo672Z-szp3k1QU_g"
                  target="_blank"
                ></a>
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
              <div className="col-md-10">
                <div className="card card-ss card-biaya-pendaftaran p-0">
                  <div className="card-header-ss rounded-ss d-flex justify-content-between align-items-between px-4 py-4">
                    <h4 className="fw-extrabold color-dark mb-0 mt-2 md-fs-5 sm-fs-6">
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
                    <div class="card-body card-footer-ss pb-4 px-4 pt-0 md-fs-14-ss">
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
                <a className="btn btn-ss btn-primary btn-primary-ss fw-bold shadow-primary-ss bg-gradient-primary rounded-pill fs-18-ss md-fs-6 sm-14-ss">
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
