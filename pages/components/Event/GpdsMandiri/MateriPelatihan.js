import React from "react";
import CardRekamanWebinar from ".././CardRekamanWebinar";

const MateriPelatihan = ({ data, gpdsSDSMPDKI, gpdsNasional, gpdsKalsel }) => {
  return (
    <div
      className="container pb-5"
      style={{
        marginTop: "-32px",
      }}
    >
      <div className="card card-ss p-4 pb-5 mb-4">
        <div className="card-body p-0">
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
    </div>
  );
};

export default MateriPelatihan;
