import React from "react";

const InformasiUmum = ({ data }) => {
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "-32px",
        }}
      >
        <div className="card card-ss">
          <div className="card-body p-4 ">
            <h1 className="color-dark fw-extrabold mt-1">
              Guru Penggerak Digitalisasi Sekolah{" "}
            </h1>
            <p className="fs-18-ss">
              Program yang membantu guru untuk mengembangkan potensi dan
              kreatifitas dari Guru Penggerak agar dapat menyelenggarakan
              kegiatan belajar mengajar secara digital dan online kepada siswa.
            </p>
            <div className="row gy-4">
              <div className="col-md-6">
                <p className="fs-18-ss fw-bold color-dark">
                  Syarat Bergabung dengan Program GPDS :
                </p>
                <ul className="checklist-ss">
                  <li>
                    Digunakan oleh tenaga pendidik dalam instansi pendidikan
                    (Guru dan Dosen)
                  </li>
                  <li>Terbatas untuk 50 guru hingga awal tahun ajar</li>
                  <li>Akses diberikan untuk 1 guru 1 sekolah</li>
                </ul>
              </div>
              <div className="col-md-6">
                <p className="fs-18-ss fw-bold color-dark">
                  Keuntungan mengikuti Program GPDS :
                </p>
                <ul className="checklist-ss">
                  <li>Penggunaan Smarteschool selama 3 bulan</li>
                  <li>Materi Pelatihan</li>
                  <li>E-Sertifikat untuk peserta (Smart Teacher)</li>
                </ul>
              </div>
            </div>
            <p className="fs-18-ss fw-bold color-dark">
              Alur Pendaftaran Program GPDS :
            </p>
            <div className="row gy-4 mb-4">
              <div className="col-md-4 mb-4 d-flex align-items-center">
                <img src="img/icon-alur-step1.svg" alt="Icon step 1" />
                <h6 className="color-dark fw-bold ms-4">
                  Pendaftaran Calon Peserta Pendidikan GPDS bagi Guru
                </h6>
              </div>
              <div className="col-md-4 mb-4 d-flex align-items-center">
                <img src="img/icon-alur-step2.svg" alt="Icon step 2" />
                <h6 className="color-dark fw-bold ms-4">
                  Undangan Grup / Kelompok WhatsApp
                </h6>
              </div>
              <div className="col-md-4 mb-4 d-flex align-items-center">
                <img src="img/icon-alur-step3.svg" alt="Icon step 3" />
                <h6 className="color-dark fw-bold ms-4">
                  Pelaksanaan Workshop GPDS
                </h6>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row">
              <a className="w-100 bg-primary d-flex rounded-ss justify-content-center align-items-center text-white p-3">
                <img src="img/icon-daftar-sekarang.svg" alt="Icon step 1" />
                <p className="ms-4 fw-bold fs-18-ss mb-0">Daftar Sekarang</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformasiUmum;
