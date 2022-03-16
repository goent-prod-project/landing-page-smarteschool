import Head from "next/head";
import { useRouter } from "next/router";
import { FaEnvelope, FaFax, FaPhone } from "react-icons/fa";
import Link from "next/link";

const SectionPanduanProposalDesktop = ({}) => {
  const router = useRouter();

  return (
    <>
      <div className="section py-5" style={{ backgroundColor: "#F6FAFF" }}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-4 col-6">
              <Link href="/buku-panduan">
                <a className="text-decoration-none smarte-menu">
                  {" "}
                  <div className="card card-ss rounded-ss p-sm-4 p-3 h-100">
                    <div className="d-flex align-items-sm-center flex-lg-row flex-column">
                      <img
                        src="/img/icon-buku-panduan.svg"
                        alt="icon-buku-panduan"
                        className="mb-lg-0 mb-3"
                      />
                      <div className="ms-lg-4">
                        <h5 className="fs-18-ss color-dark fw-bold mb-2">
                          Buku Panduan
                        </h5>
                        <p className="color-dark mb-0 fs-14-ss">
                          Panduan menggunakan aplikasi Smarteschool secara
                          lengkap yang dapat dibaca secara offline
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-4 col-6">
              <a
                className="text-decoration-none smarte-menu"
                href="https://www.youtube.com/channel/UC5mNaPBo672Z-szp3k1QU_g/videos"
                target="_blank"
              >
                {" "}
                <div className="card card-ss rounded-ss p-sm-4 p-3 h-100">
                  <div className="d-flex align-items-sm-center flex-lg-row flex-column">
                    <img
                      src="/img/icon-video-panduan.svg"
                      alt="icon-video-panduan"
                      className="mb-lg-0 mb-3"
                    />
                    <div className="ms-lg-4">
                      <h5 className="fs-18-ss color-dark fw-bold mb-2">
                        Video Panduan
                      </h5>
                      <p className="color-dark mb-0 fs-14-ss">
                        Panduan menggunakan aplikasi Smarteschool secara lengkap
                        dengan video interaktif
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-6">
              <Link href={`/proposal-smarteschool`}>
                <a className="text-decoration-none smarte-menu">
                  {" "}
                  <div className="card card-ss rounded-ss p-sm-4 p-3 h-100">
                    <div className="d-flex align-items-sm-center flex-lg-row flex-column">
                      <img
                        src="/img/icon-proposal-smarteschool.svg"
                        alt="icon-proposal-smarteschool"
                        className="mb-lg-0 mb-3"
                      />
                      <div className="ms-lg-4">
                        <h5 className="fs-18-ss color-dark fw-bold mb-2">
                          Proposal Smarteschool
                        </h5>
                        <p className="color-dark mb-0 fs-14-ss">
                          Proposal mengenai layanan dan fitur fitur dari
                          aplikasi Smarteschool secara lengkap
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionPanduanProposalDesktop;
