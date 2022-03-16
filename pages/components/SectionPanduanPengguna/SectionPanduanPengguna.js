import React from "react";

function SectionPanduanPengguna() {
  return (
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
                  Panduan cara menggunakan aplikasi Smarteschool secara lengkap
                  yang dapat dibaca secara offline
                </p>
                <Link href="/buku-panduan">
                  <a
                    // href="https://drive.google.com/file/d/1utbJsl9p_xhgiqbarty7vxx05e1ZBfU_/view?usp=sharing"
                    // target="_blank"
                    className="btn btn-ss btn-warning btn-warning-ss bg-gradient-warning shadow-warning-ss fw-bold rounded-pill d-flex align-items-center justify-content-center md-fs-6 sm-14-ss mt-3"
                    style={{ width: "140px" }}
                  >
                    Lihat
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
                className="position-absolute video-panduan-element-2"
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
                  Panduan cara menggunakan aplikasi Smarteschool secara lengkap
                  dengan video interaktif
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
  );
}

export default SectionPanduanPengguna;
