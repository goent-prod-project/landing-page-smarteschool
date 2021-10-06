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
          <div className="card-body p-4">
            <h1 className="color-dark md-fs-5 sm-fs-6 fw-extrabold">
              Guru Penggerak Digitalisasi Sekolah{" "}
            </h1>
            <p className="fs-18-ss md-fs-6 sm-fs-14-ss">
              Program yang membantu guru untuk mengembangkan potensi dan
              kreatifitas dari Guru Penggerak agar dapat menyelenggarakan
              kegiatan belajar mengajar secara digital dan online kepada siswa.
            </p>
            <div className="row gy-4">
              <div className="col-md-6">
                <p className="fs-18-ss md-fs-6 sm-fs-14-ss fw-bold color-dark">
                  Syarat Bergabung dengan Program GPDS :
                </p>
                <ul className="checklist-ss">
                  <li className="md-fs-6 sm-fs-14-ss">
                    Digunakan oleh tenaga pendidik dalam instansi pendidikan
                    (Guru dan Dosen)
                  </li>
                  <li className="md-fs-6 sm-fs-14-ss">
                    Terbatas untuk 50 guru hingga awal tahun ajar
                  </li>
                  <li className="md-fs-6 sm-fs-14-ss">
                    Akses diberikan untuk 1 guru 1 sekolah
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <p className="fs-18-ss md-fs-6 sm-fs-14-ss fw-bold color-dark">
                  Keuntungan mengikuti Program GPDS :
                </p>
                <ul className="checklist-ss">
                  <li className="md-fs-6 sm-fs-14-ss">
                    Penggunaan Smarteschool selama 3 bulan
                  </li>
                  <li className="md-fs-6 sm-fs-14-ss">Materi Pelatihan</li>
                  <li className="md-fs-6 sm-fs-14-ss">
                    E-Sertifikat untuk peserta (Smart Teacher)
                  </li>
                </ul>
              </div>
            </div>
            <p className="fs-18-ss md-fs-6 sm-fs-14-ss fw-bold color-dark">
              Alur Pendaftaran Program GPDS :
            </p>
            <div className="row gy-4 mb-4">
              <div className="col-lg-4 col-md-6 mb-4 d-flex align-items-center">
                <img src="/img/icon-alur-step1.svg" alt="Icon step 1" />
                <h6 className="color-dark md-fs-6 sm-fs-14-ss fw-bold ms-4 mb-0">
                  Pendaftaran Calon Peserta Pendidikan GPDS bagi Guru
                </h6>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 d-flex align-items-center">
                <img src="/img/icon-alur-step2.svg" alt="Icon step 2" />
                <h6 className="color-dark md-fs-6 sm-fs-14-ss fw-bold ms-4 mb-0">
                  Undangan Grup / Kelompok WhatsApp
                </h6>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 d-flex align-items-center">
                <img src="/img/icon-alur-step3.svg" alt="Icon step 3" />
                <h6 className="color-dark md-fs-6 sm-fs-14-ss fw-bold ms-4 mb-0">
                  Pelaksanaan Workshop GPDS
                </h6>
              </div>
            </div>
            {/* <hr className="my-4" />
            <div className="row">
              <a className="w-100 bg-primary d-flex rounded-ss justify-content-center align-items-center text-white p-3">
                <img src="img/icon-daftar-sekarang.svg" alt="Icon step 1" />
                <p className="ms-4 fw-bold fs-18-ss mb-0">Daftar Sekarang</p>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default InformasiUmum;
