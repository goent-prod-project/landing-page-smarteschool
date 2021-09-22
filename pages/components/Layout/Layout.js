import Head from "next/head";
import { useRouter } from "next/router";
import { FaEnvelope, FaFax, FaPhone } from "react-icons/fa";
import Header from "../Header/Header";
import Link from "next/link";

const Layout = ({
  children,
  isFluid,
  modalWrapper,
  isIndex,
  isDashboard,
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
        <div className="section py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="cta-section p-5"
                  style={{ borderRadius: "25px", backgroundColor: "#F6FAFF" }}
                >
                  <div className="row align-items-center justify-content-lg-start justify-content-md-center">
                    <div className="col-lg-7 col-md-12 order-lg-1 order-2 text-lg-start text-center">
                      <div>
                        <h1 className="fs-1 fw-extrabold color-dark mb-5">
                          Awali Kesuksesan Sekolah Anda dengan Smarteschool
                        </h1>
                        <div className="d-flex justify-content-lg-start justify-content-sm-center flex-sm-row flex-column align-items-center">
                          <a
                            href="#"
                            className="btn btn-ss btn-primary btn-primary-ss bg-gradient-primary shadow-primary-ss fw-bold rounded-pill d-flex align-items-center justify-content-center me-sm-4 mb-sm-0 mb-3"
                            style={{ width: "190px" }}
                          >
                            Daftar Sekarang
                          </a>
                          <a
                            href="#"
                            className="btn btn-ss btn-warning btn-warning-ss bg-gradient-warning shadow-warning-ss fw-bold rounded-pill d-flex align-items-center justify-content-center"
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

        <footer id="footer-ppdb">
          <section className="footer-content pb-4">
            <div className="container text-white">
              <div className="row gy-4">
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-12 col-8">
                      <img
                        src="/img/logo-smarteschool-putih.png"
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
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4">
                      <h4 className="fw-extrabold mb-4">Pelajari</h4>
                      <div className="mb-3">
                        <Link href={`/fitur`}>
                          <a className="text-white fs-14-ss text-decoration-none">
                            Fitur
                          </a>
                        </Link>
                      </div>
                      <div className="mb-3">
                        <Link href={`/sekolah`}>
                          <a
                            href={`#`}
                            className="text-white fs-14-ss text-decoration-none"
                          >
                            Sekolah
                          </a>
                        </Link>
                      </div>
                      <div className="mb-3">
                        <Link href="/berita">
                          <a
                            href="#"
                            className="text-white fs-14-ss text-decoration-none"
                          >
                            Berita
                          </a>
                        </Link>
                      </div>
                      <div className="mb-3">
                        <Link href={`/artikel`}>
                          <a
                            href="#"
                            className="text-white fs-14-ss text-decoration-none"
                          >
                            Artikel
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4">
                      <h4 className="fw-extrabold mb-4">Tautan Lain</h4>
                      <div className="mb-3">
                        <Link href={`/`}>
                          <a
                            href="#"
                            className="text-white fs-14-ss text-decoration-none"
                          >
                            Cari Sekolah
                          </a>
                        </Link>
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
                      <h4 className="fw-extrabold mb-4">Ikuti Kami</h4>
                      <div className="mb-3">
                        <a
                          href={`tel:sekolah`}
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
                      <div className="mb-3">
                        <a
                          href={`tel:sekolah`}
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
                      <div className="mb-3">
                        <a
                          href={`tel:sekolah`}
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
                      <div className="mb-3">
                        <a
                          href={`tel:sekolah`}
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
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4">
                      <h4 className="fw-extrabold mb-4">Kantor Pusat</h4>
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
    </>
  );
};

export default Layout;
