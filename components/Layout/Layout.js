import Head from "next/head";
import { useRouter } from "next/router";
import { FaEnvelope, FaFax, FaPhone } from "react-icons/fa";
import Header from "../Header/Header";
import Link from "next/link";
import BottomNavigation from "components/BottomNavigation/BottomNavigation";
import ModalUjiCobaAkun from "components/ModalUjiCobaAkun/ModalUjiCobaAkun";

const Layout = ({
  children,
  isFluid,
  modalWrapper,
  isIndex,
  isDashboard,
  isLandingPage = true,
  isFrontPage = false,
}) => {
  const router = useRouter();

  return (
    <>
      {/* <Head><link rel="shortcut icon" href={sekolah?.favicon} /></Head> */}
      <Header />
      <main
        className={`${isFrontPage && "main-ppdb"} ${
          isIndex ? "bg-light" : "bg-main"
        }`}
        style={{ paddingTop: "82px" }}
      >
        {children}
      </main>
      {modalWrapper}
      <>
        {/* Section CTA Start */}
        <div
          className={`section py-md-5 py-4 ${isIndex ? "bg-light" : "bg-main"}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="cta-section p-md-5 p-4"
                  style={{ borderRadius: "25px", backgroundColor: "#F6FAFF" }}
                >
                  <div className="row align-items-center justify-content-lg-start justify-content-md-center">
                    <div className="col-lg-7 col-md-12 order-lg-1 order-2 text-lg-start text-center">
                      <div>
                        <h1 className="fs-1 fw-extrabold color-dark mb-5 md-fs-5 sm-fs-6">
                          Awali Kesuksesan Sekolah Anda dengan Smarteschool
                        </h1>
                        <div className="d-flex justify-content-lg-start justify-content-sm-center flex-sm-row flex-column align-items-center">
                          <a
                            href={`https://api.whatsapp.com/send?phone=6285778537382&text=Halo, CS Smarteschool sekolah saya ingin menjadi anggota sekolah Smarteschool`}
                            target="_blank"
                            className="btn btn-ss btn-primary btn-primary-ss bg-gradient-primary shadow-primary-ss fw-bold rounded-pill d-flex align-items-center justify-content-center me-sm-4 mb-sm-0 mb-3 md-fs-6 sm-14-ss"
                            style={{ width: "190px" }}
                          >
                            Daftar Sekarang
                          </a>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#modalUjiCobaAkun"
                            className="btn btn-ss btn-warning btn-warning-ss bg-gradient-warning shadow-warning-ss fw-bold rounded-pill d-flex align-items-center justify-content-center md-fs-6 sm-14-ss"
                            style={{ width: "190px" }}
                          >
                            Uji Coba Akun
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 d-flex justify-content-end order-lg-2 order-1 mb-lg-0 mb-4">
                      <img
                        src="/img/smarteschool-illustration.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section CTA End */}

        {/* Layanan Pelanggan Section Start */}

        <section
          style={{ backgroundColor: "#F9F9FB", borderTop: "2px solid #E2E2E5" }}
        >
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center mb-lg-0 mb-4">
                <h4 className="fs-4 md-fs-5 sm-fs-6 fw-extrabold color-dark mb-0">
                  Layanan Pelanggan
                </h4>
              </div>
              <div className="col-lg-8 d-flex align-items-sm-center justify-content-between flex-sm-row flex-column flex-md-nowrap flex-wrap">
                <div className="d-flex align-items-center mb-sm-0 mb-3 ">
                  <img
                    src="/img/icon-whatsapp-dark.svg"
                    alt="icon"
                    className="me-3"
                    height="37px"
                  />
                  <div className="color-dark">
                    <h6 className="fw-bold mb-1">WhatsApp</h6>
                    <a
                      href={`https://api.whatsapp.com/send?phone=6285778537382&text=Halo, CS Smarteschool`}
                      target="_blank"
                      className="fs-14-ss fw-bold color-dark text-decoration-none mb-0"
                    >
                      +62 857 7853 7382 (Yesica)
                    </a>
                    <br />
                    <a
                      href={`https://api.whatsapp.com/send?phone=6287889192581&text=Halo, CS Smarteschool`}
                      target="_blank"
                      className="fs-14-ss fw-bold color-dark text-decoration-none mb-0"
                    >
                      +62 878 8919 2581 (Boy)
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-sm-0 mb-3">
                  <img
                    src="/img/icon-email-dark.svg"
                    alt="icon"
                    className="me-3"
                    height="30px"
                  />
                  <div className="color-dark">
                    <h6 className="fw-bold mb-1">Email</h6>
                    <a
                      href="mailto:adm.smartschool@gmail.com"
                      className="fs-14-ss fw-bold color-dark text-decoration-none mb-0"
                    >
                      adm.smartschool@gmail.com
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-sm-0 mb-3">
                  <img
                    src="/img/icon-clock-dark.svg"
                    alt="icon"
                    className="me-3"
                    height="35px"
                  />
                  <div className="color-dark">
                    <h6 className="fw-bold mb-1">Jam Kerja</h6>
                    <h6 className="fs-14-ss fw-bold mb-0">24/7</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan Pelanggan Section End */}

        <footer id="footer-ppdb">
          <section className="footer-content pb-4">
            <div className="container text-white">
              <div className="row gy-4">
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-lg-10 col-md-12 col-8">
                      <img
                        src="/img/logo-ss-new-putih.png"
                        alt="logo-smarteschool"
                        className="mb-4 img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    {/* <p
                    className="fs-14-ss dangerous-html text-white"
                    dangerouslySetInnerHTML={{
                      __html: sekolah?.informasi?.visi,
                    }}
                  /> */}
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row g-4">
                    <div className="col-md-3 col-6 mb-sm-0 mb-4">
                      <h4 className="fw-extrabold mb-4 md-fs-5 sm-fs-6">
                        Pelajari
                      </h4>
                      <div className="mb-3">
                        <Link href={`/about`}>
                          <a className="text-white fs-14-ss text-decoration-none">
                            About
                          </a>
                        </Link>
                      </div>
                      <div className="mb-3">
                        <a
                          href={`https://pencarian.smarteschool.net/`}
                          target="_blank"
                          className="text-white fs-14-ss text-decoration-none"
                        >
                          Sekolah
                        </a>
                      </div>
                      <div className="mb-3">
                        <Link href="/berita">
                          <a className="text-white fs-14-ss text-decoration-none">
                            Berita
                          </a>
                        </Link>
                      </div>
                      <div className="mb-3">
                        <Link href={`/event`}>
                          <a className="text-white fs-14-ss text-decoration-none">
                            Event
                          </a>
                        </Link>
                      </div>
                      <div className="mb-3">
                        <Link href={`/panduan`}>
                          <a className="text-white fs-14-ss text-decoration-none">
                            Panduan
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-sm-0 mb-4">
                      <h4 className="fw-extrabold mb-4 md-fs-5 sm-fs-6">
                        Tautan Lain
                      </h4>
                      <div className="mb-3">
                        <a
                          href="https://pencarian.smarteschool.net/"
                          target="_blank"
                          className="text-white fs-14-ss text-decoration-none"
                        >
                          Cari Sekolah
                        </a>
                      </div>
                      <div className="mb-3">
                        <a
                          href="https://www.goent26.com/"
                          className="text-white fs-14-ss text-decoration-none"
                        >
                          Go Entrepreneur
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4">
                      <h4 className="fw-extrabold mb-4 md-fs-5 sm-fs-6">
                        Ikuti Kami
                      </h4>
                      <div className="row">
                        <div className="col-sm-12 col-6 mb-3">
                          <a
                            href={`https://www.youtube.com/channel/UC5mNaPBo672Z-szp3k1QU_g`}
                            target="_blank"
                            className="text-white text-decoration-none fs-14-ss"
                          >
                            <div className="d-flex align-items-center">
                              <img
                                src="/img/icon-youtube.svg"
                                alt=""
                                className="me-2"
                                width="20px"
                                height="20px"
                              />
                              <span className="text-white fs-14-ss mb-0">
                                Smarteschool
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-sm-12 col-6 mb-3">
                          <a
                            href={`https://www.linkedin.com/company/smarteschool/`}
                            target="_blank"
                            className="text-white text-decoration-none fs-14-ss"
                          >
                            <div className="d-flex align-items-center">
                              <img
                                src="/img/icon-linkedin.svg"
                                alt=""
                                className="me-2"
                                width="20px"
                                height="20px"
                              />
                              <span className="text-white fs-14-ss mb-0">
                                Smarteschool
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-sm-12 col-6 mb-3">
                          <a
                            href={`https://web.facebook.com/smarteschool.smarteschool.id`}
                            target="_blank"
                            className="text-white text-decoration-none fs-14-ss"
                          >
                            <div className="d-flex align-items-center">
                              <img
                                src="/img/icon-facebook.svg"
                                alt=""
                                className="me-2"
                                width="20px"
                                height="20px"
                              />
                              <span className="text-white fs-14-ss mb-0">
                                @smarteschool
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-sm-12 col-6 mb-3">
                          <a
                            href={`https://www.instagram.com/smarteschool.id/`}
                            target="_blank"
                            className="text-white text-decoration-none fs-14-ss"
                          >
                            <div className="d-flex align-items-center">
                              <img
                                src="/img/icon-instagram.svg"
                                alt=""
                                className="me-2"
                                width="20px"
                                height="20px"
                              />
                              <span className="text-white fs-14-ss mb-0">
                                @smarteschool.id
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4">
                      <h4 className="fw-extrabold mb-4 md-fs-5 sm-fs-6">
                        Kantor Pusat
                      </h4>
                      <p className="fs-14-ss">
                        Gedung ITHO, Jl. Karang Tengah Raya, Cilandak, Kota
                        Jakarta Selatan, Daerah Khusus Ibukota 12440
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gradient-primary text-white">
            <div className="container py-4 text-center">
              <small>
                &copy;Smarteschool {new Date().getFullYear()}. Hak Cipta
                Dilindungi oleh undang-undang. | {""}
                <a
                  href="https://www.goent26.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-decoration-none fw-bold text-white"
                >
                  Powered by GoEnt
                </a>
              </small>
            </div>
          </section>
        </footer>
      </>
      <ModalUjiCobaAkun />
      {isLandingPage && <BottomNavigation />}
    </>
  );
};

export default Layout;
