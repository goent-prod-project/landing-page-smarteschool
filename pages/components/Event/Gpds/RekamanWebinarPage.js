import React from "react";
import { momentPackage } from "../../../../utilities/HelperUtils";
import CardRekamanWebinar from "../CardRekamanWebinar";

const RekamanWebinarPage = ({
  data,
  gpdsSDSMPDKI,
  gpdsNasional,
  gpdsKalsel,
  eventData,
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
            {eventData?.judul}
          </h1>
          <h5 className="fs-5 md-fs-6 sm-fs-14-ss mb-md-5 mb-4">
            {`${momentPackage(eventData?.tanggalAwal).format(
              "dddd, DD MMMM YYYY"
            )}`}{" "}
            {eventData?.tanggalAkhir
              ? `- ${momentPackage(eventData?.tanggalAkhir).format(
                  "dddd, DD MMMM YYYY"
                )}`
              : ""}
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
    </div>
  );
};

export default RekamanWebinarPage;
