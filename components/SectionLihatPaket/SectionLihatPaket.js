import Head from "next/head";
import { useRouter } from "next/router";
import { FaCheck, FaEnvelope, FaFax, FaPhone } from "react-icons/fa";
import Link from "next/link";

const SectionLihatPaket = ({}) => {
  const router = useRouter();

  return (
    <>
      <div className="section py-5" style={{ backgroundColor: "#F6FAFF" }}>
        <div className="container">
          <div className="row mb-md-5 mb-3">
            <div className="col-md-12 text-center mb-md-3 mb-0">
              <h1 className="fs-1 md-fs-5 fw-extrabold color-dark">
                Pilihan Paket
              </h1>
            </div>
          </div>
          <div className="row gy-4">
            {/* Paket Free Trial Start */}
            <div className="col-lg-3 col-md-6 col-12 mb-md-0 mb-5">
              <a className="text-decoration-none smarte-menu">
                {" "}
                <div className="card card-ss rounded-ss p-sm-4 p-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <h4 className="fw-extrabold color-dark">Free Trial</h4>
                    <div className="fs-14-ss fw-bold color-dark">
                      Gratis untuk sekolah tertentu dan sekolah 3T
                    </div>
                    <div className="mt-4">
                      <h2 className="fw-black mb-0">Gratis</h2>
                      <div className="fs-16 fw-bold color-secondary">
                        per user per tahun
                      </div>
                    </div>
                    <div
                      className="my-4 bg-soft-secondary"
                      style={{ height: "2px" }}
                    ></div>
                    <div className="mb-4">
                      <div className="fs-12-ss fw-bold color-dark">
                        *Sekolah tertentu s/d 1 tahun
                      </div>
                      <div className="fs-12-ss fw-bold color-dark">
                        *Sekolah 3T penggunaan selamanya
                      </div>
                    </div>
                    <div
                      className="fs-12-ss fw-bold color-dark"
                      style={{ marginBottom: "38px" }}
                    >
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Semua fitur Smart E School</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Domain gratis</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Website informasi sekolah</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Virtual tour sekolah</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Customer service 24/7</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a
                      href={`https://api.whatsapp.com/send?phone=6285778537382&text=Halo, CS Smarteschool sekolah saya ingin menjadi anggota sekolah Smarteschool`}
                      target="_blank"
                      className="w-100 btn btn-ss btn-primary btn-primary-ss bg-gradient-primary shadow-primary-ss fw-bold rounded-pill d-flex align-items-center justify-content-center mb-sm-0 mb-4 fs-18-ss"
                    >
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </a>
            </div>
            {/* Paket Free Trial End */}

            {/* Paket Pro Start */}
            <div className="col-lg-3 col-md-6 col-12">
              <a className="text-decoration-none smarte-menu">
                {" "}
                <div
                  className="card card-paket-pro p-sm-4 p-3 h-100 d-flex flex-column justify-content-between postion-relative"
                  style={{ borderRadius: "0px 0px 15px 15px !important" }}
                >
                  <div
                    className="position-absolute w-100"
                    style={{
                      top: "-44px",
                      right: "0",
                      right: "0",
                      borderRadius: "15px 15px 0px 0px !important",
                    }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center bg-warning px-5 card-paket"
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <div
                        className="fs-18-ss fw-bold"
                        style={{
                          color: "white",
                        }}
                      >
                        Paling Populer
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-extrabold color-dark">Pro</h4>
                    <div className="fs-14-ss fw-bold color-dark">
                      Cocok untuk sekolah kecil dan menengah
                    </div>
                    <div className="mt-4">
                      <h2 className="fw-black mb-0">Rp50.000</h2>
                      <div className="fs-16 fw-bold color-secondary">
                        per user per tahun
                      </div>
                    </div>
                    <div
                      className="my-4 bg-soft-secondary"
                      style={{ height: "2px" }}
                    ></div>
                    <div
                      className="fs-12-ss fw-bold color-dark"
                      style={{ marginBottom: "38px" }}
                    >
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Semua fitur Smart E School</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Ujian sepuasnya</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Domain gratis</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Website informasi sekolah</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Virtual tour sekolah</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Customer service 24/7</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center sticky-bottom">
                    <a
                      href={`https://api.whatsapp.com/send?phone=6285778537382&text=Halo, CS Smarteschool sekolah saya ingin menjadi anggota sekolah Smarteschool`}
                      target="_blank"
                      className="w-100 btn btn-ss btn-warning btn-warning-ss bg-gradient-warning shadow-warning-ss fw-bold rounded-pill d-flex align-items-center justify-content-center mb-sm-0 mb-4 fs-18-ss"
                    >
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </a>
            </div>
            {/* Paket Pro End */}

            {/* Paket Premium Start */}
            <div className="col-lg-3 col-md-6 col-12">
              <a className="text-decoration-none smarte-menu">
                {" "}
                <div className="card card-ss rounded-ss p-sm-4 p-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <h4 className="fw-extrabold color-dark">Premium</h4>
                    <div className="fs-14-ss fw-bold color-dark">
                      Cocok untuk sekolah dengan siswa banyak
                    </div>
                    <div className="mt-2">
                      <div className="fs-12-ss fw-bold">Mulai dari</div>
                      <h2 className="fw-black mb-0">Rp100.000</h2>
                      <div className="fs-16 fw-bold color-secondary">
                        per user per tahun
                      </div>
                    </div>
                    <div
                      className="my-4 bg-soft-secondary"
                      style={{ height: "2px" }}
                    ></div>
                    <div
                      className="fs-12-ss fw-bold color-dark"
                      style={{ marginBottom: "38px" }}
                    >
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Semua fitur Smart E School</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Ujian sepuasnya</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Domain gratis</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Website informasi sekolah</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Virtual tour sekolah</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Customer service 24/7</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Request fitur sesuai kebutuhan</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a
                      href={`https://api.whatsapp.com/send?phone=6285778537382&text=Halo, CS Smarteschool sekolah saya ingin menjadi anggota sekolah Smarteschool`}
                      target="_blank"
                      className="w-100 btn btn-ss btn-primary btn-primary-ss bg-gradient-primary shadow-primary-ss fw-bold rounded-pill d-flex align-items-center justify-content-center mb-sm-0 mb-4 fs-18-ss"
                    >
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </a>
            </div>
            {/* Paket Premium End */}

            {/* Paket Platinum Start */}
            <div className="col-lg-3 col-md-6 col-12">
              <a className="text-decoration-none smarte-menu">
                {" "}
                <div className="card card-ss rounded-ss p-sm-4 p-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <h4 className="fw-extrabold color-dark">Platinum</h4>
                    <div className="fs-14-ss fw-bold color-dark">
                      Cocok untuk sekolah yang ingin mengcostumize aplikasi
                    </div>
                    <div className="mt-4">
                      <img src="/img/icon-message.svg" alt="" />
                    </div>
                    <div
                      className="my-4 bg-soft-secondary"
                      style={{ height: "2px" }}
                    ></div>
                    <div
                      className="fs-12-ss fw-bold color-dark"
                      style={{ marginBottom: "38px" }}
                    >
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Semua fitur Smart E School</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Ujian sepuasnya</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Domain gratis</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Website informasi sekolah</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Virtual tour sekolah</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Customer service 24/7</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Request fitur sesuai kebutuhan</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCheck
                          className="color-primary"
                          style={{ marginRight: "7.9px" }}
                        />
                        <span>Costumize aplikasi sesuai sekolah</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a
                      href={`https://api.whatsapp.com/send?phone=6285778537382&text=Halo, CS Smarteschool sekolah saya ingin menjadi anggota sekolah Smarteschool`}
                      target="_blank"
                      className="w-100 btn btn-ss btn-primary btn-primary-ss bg-gradient-primary shadow-primary-ss fw-bold rounded-pill d-flex align-items-center justify-content-center mb-sm-0 mb-4 fs-18-ss"
                    >
                      Hubungi Sales
                    </a>
                  </div>
                </div>
              </a>
            </div>
            {/* Paket Platinum End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionLihatPaket;
