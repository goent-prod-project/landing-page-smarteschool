import React from "react";
import CardRekamanWebinar from "./CardRekamanWebinar";

const RekamanWebinarPage = ({
  data,
  gpdsSDSMPDKI,
  gpdsNasional,
  gpdsKalsel,
}) => {
  return (
    <div
      className="container pb-5"
      style={{
        marginTop: "-32px",
      }}
    >
      <div className="card card-ss p-4 pb-5 mb-4">
        <div className="card-body p-0">
          <h1 className="color-dark md-fs-5 sm-fs-6 fw-extrabold">
            Guru Penggerak Digitalisasi Sekolah Provinsi DKI Jakarta (SMA/SMK)
          </h1>
          <h5 className="fs-5 md-fs-6 sm-fs-14-ss mb-md-5 mb-4">
            Kamis, 22 Juli 2021 - Rabu, 28 Juli 2021
          </h5>
          <div className="container">
            <div className="row g-4">
              {data?.map((d) => (
                <div className="col-lg-4 col-md-6">
                  <CardRekamanWebinar
                    link={d?.link}
                    thumbnail={d?.thumbnail}
                    tanggal={d?.tanggal}
                    judul={d?.judul}
                    deskripsi={d?.deskripsi}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="card card-ss p-4 pb-5 mb-4">
        <div className="card-body p-0">
          <h1 className="color-dark md-fs-5 sm-fs-6 fw-extrabold">
            Guru Penggerak Digitalisasi Sekolah Provinsi DKI Jakarta (SD - SMP)
          </h1>
          <h5 className="fs-5 md-fs-6 sm-fs-14-ss mb-md-5 mb-4">
            Selasa, 10 Agustus 2021 - Senin, 16 Agustus 2021
          </h5>
          <div className="container">
            <div className="row g-4">
              {gpdsSDSMPDKI?.map((d) => (
                <div className="col-lg-4 col-md-6">
                  <CardRekamanWebinar
                    link={d?.link}
                    thumbnail={d?.thumbnail}
                    tanggal={d?.tanggal}
                    judul={d?.judul}
                    deskripsi={d?.deskripsi}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="card card-ss p-4 pb-5 mb-4">
        <div className="card-body p-0">
          <h1 className="color-dark md-fs-5 sm-fs-6 fw-extrabold">
            Guru Penggerak Digitalisasi Sekolah Nasional
          </h1>
          <h5 className="fs-5 md-fs-6 sm-fs-14-ss mb-md-5 mb-4">
            Selasa, 8 September 2021 - Senin, 14 September 2021
          </h5>
          <div className="container">
            <div className="row g-4">
              {gpdsNasional?.map((d) => (
                <div className="col-lg-4 col-md-6">
                  <CardRekamanWebinar
                    link={d?.link}
                    thumbnail={d?.thumbnail}
                    tanggal={d?.tanggal}
                    judul={d?.judul}
                    deskripsi={d?.deskripsi}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="card card-ss p-4 pb-5 mb-4">
        <div className="card-body p-0">
          <h1 className="color-dark md-fs-5 sm-fs-6 fw-extrabold">
            Guru Penggerak Digitalisasi Sekolah Kalimantan Selatan
          </h1>
          <h5 className="fs-5 md-fs-6 sm-fs-14-ss mb-md-5 mb-4">
            Selasa, 18 Oktober 2021 - Senin, 20 Oktober 2021
          </h5>
          <div className="container">
            <div className="row g-4">
              {gpdsKalsel?.map((d) => (
                <div className="col-lg-4 col-md-6">
                  <CardRekamanWebinar
                    link={d?.link}
                    thumbnail={d?.thumbnail}
                    tanggal={d?.tanggal}
                    judul={d?.judul}
                    deskripsi={d?.deskripsi}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RekamanWebinarPage;
