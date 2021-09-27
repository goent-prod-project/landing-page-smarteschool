import Head from "next/head";
import { useRouter } from "next/router";
import { FaEnvelope, FaFax, FaPhone } from "react-icons/fa";
import Link from "next/link";

const SectionMenuMobile = ({}) => {
  const router = useRouter();

  return (
    <>
      <div
        className="section py-md-5 py-4"
        style={{ backgroundColor: "#F6FAFF" }}
      >
        <div className="container">
          <div className="row mb-md-5 mb-4">
            <div className="col-md-12 text-center">
              <h1 className="fs-1 md-fs-5 sm-fs-6 fw-extrabold color-dark">
                Pelajari Lebih Lanjut
              </h1>
              <h5 className="fs-5 md-fs-6 sm-fs-14-ss color-secondary mb-0">
                Kami menyediakan solusi untuk semua aspek sekolah di
                Smarteschool
              </h5>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-4 d-flex justify-content-center align-items-center mb-3">
              <Link href="/about">
                <a className="text-decoration-none text-center">
                  <img
                    src="/img/icon-menu-about.svg"
                    alt=""
                    className="img-fluid mb-2"
                  />
                  <h6 className="fs-6 sm-fs-6 color-dark fw-bold mb-0">
                    About
                  </h6>
                </a>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center mb-3">
              <Link href="/berita">
                <a className="text-decoration-none text-center">
                  <img
                    src="/img/icon-menu-berita.svg"
                    alt=""
                    className="img-fluid mb-2"
                  />
                  <h6 className="fs-6 sm-fs-6 color-dark fw-bold mb-0">
                    Berita
                  </h6>
                </a>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center mb-3">
              <a
                className="text-decoration-none text-center"
                data-bs-toggle="modal"
                data-bs-target="#modalUjiCobaAkun"
              >
                <img
                  src="/img/icon-menu-demo.svg"
                  alt=""
                  className="img-fluid mb-2"
                />
                <h6 className="fs-6 sm-fs-6 color-dark fw-bold mb-0">Demo</h6>
              </a>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center mb-3">
              <Link href="/about">
                <a className="text-decoration-none text-center">
                  <img
                    src="/img/icon-menu-anggota.svg"
                    alt=""
                    className="img-fluid mb-2"
                  />
                  <h6 className="fs-6 sm-fs-6 color-dark fw-bold mb-0">
                    Anggota
                  </h6>
                </a>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center mb-3">
              <Link href="/event">
                <a className="text-decoration-none text-center">
                  <img
                    src="/img/icon-menu-event.svg"
                    alt=""
                    className="img-fluid mb-2"
                  />
                  <h6 className="fs-6 sm-fs-6 color-dark fw-bold mb-0">
                    Event
                  </h6>
                </a>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center mb-3">
              <a
                href={`https://api.whatsapp.com/send?phone=6281284538354&text=Halo CS Smarteschool`}
                target="_blank"
                className="text-decoration-none text-center"
              >
                <img
                  src="/img/icon-menu-kontak.svg"
                  alt=""
                  className="img-fluid mb-2"
                />
                <h6 className="fs-6 sm-fs-6 color-dark fw-bold mb-0">Kontak</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionMenuMobile;
