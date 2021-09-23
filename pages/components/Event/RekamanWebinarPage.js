import React from "react";
import CardRekamanWebinar from "./CardRekamanWebinar";

const RekamanWebinarPage = ({ data }) => {
  return (
    <div
      className="container"
      style={{
        marginTop: "-32px",
      }}
    >
      <div className="card card-ss p-4">
        <div className="card-body p-0">
          <h1 className="color-dark fw-extrabold mt-1 mb-2">
            Guru Penggerak Digitalisasi Sekolah Provinsi DKI Jakarta
          </h1>
          <p
            className=""
            style={{
              fontSize: "20px",
            }}
          >
            Kamis, 22 Juli 2021 - Rabu, 28 Juli 2021
          </p>
          <div className="container">
            <div className="row g-4">
              {data.map((d) => (
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
