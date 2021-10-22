import Head from "next/head";
import { useRouter } from "next/router";
import { FaEnvelope, FaFax, FaPhone } from "react-icons/fa";
import Link from "next/link";

const SectionMenuDesktop = ({}) => {
  const router = useRouter();

  return (
    <>
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
              <Link href="/about">
                <a className="text-decoration-none smarte-menu">
                  {" "}
                  <div className="card card-ss rounded-ss p-sm-4 p-3 text-center">
                    <img
                      src="/img/fitur.png"
                      alt=""
                      className="img-fluid mb-4"
                    />
                    <h4 className="fs-4 sm-fs-6 color-dark fw-bold mb-0">
                      About
                    </h4>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-4 col-6">
              <Link href="#">
                <a
                  className="text-decoration-none smarte-menu"
                  data-bs-toggle="modal"
                  data-bs-target="#modalUjiCobaAkun"
                >
                  <div className="card card-ss rounded-ss p-sm-4 p-3 text-center">
                    <img
                      src="/img/uji-coba.png"
                      alt=""
                      className="img-fluid mb-4"
                    />
                    <h4 className="fs-4 sm-fs-6 color-dark fw-bold mb-0">
                      Demo
                    </h4>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-4 col-6">
              <Link href="/berita">
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
                      src="/img/sekolah-partner.png"
                      alt=""
                      className="img-fluid mb-4"
                    />
                    <h4 className="fs-4 sm-fs-6 color-dark fw-bold mb-0">
                      Anggota
                    </h4>
                  </div>
                </a>
              </Link>
            </div>

            <div className="col-md-4 col-6">
              <Link href="/event">
                <a className="text-decoration-none smarte-menu">
                  {" "}
                  <div className="card card-ss rounded-ss p-sm-4 p-3 text-center">
                    <img
                      src="/img/program.png"
                      alt=""
                      className="img-fluid mb-4"
                    />
                    <h4 className="fs-4 sm-fs-6 color-dark fw-bold mb-0">
                      Event
                    </h4>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-4 col-6">
              <a
                href={`https://api.whatsapp.com/send?phone=6281284538354&text=Halo CS Smarteschool`}
                target="_blank"
                className="text-decoration-none smarte-menu"
              >
                <div className="card card-ss rounded-ss p-sm-4 p-3 text-center">
                  <img
                    src="/img/hubungi-kami.png"
                    alt=""
                    className="img-fluid mb-4"
                  />
                  <h4 className="fs-4 sm-fs-6 color-dark fw-bold mb-0">
                    Kontak
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionMenuDesktop;
