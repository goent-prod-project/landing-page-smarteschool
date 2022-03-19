import React from "react";

const CardRekamanWebinar = ({ link, thumbnail, tanggal, judul, deskripsi }) => {
  return (
    <a href={link} target="_blank">
      <div
        className="card card-rekaman rounded-ss position-relative border border-1 border-light-secondary p-0 positiion overflow-hidden h-100"
        style={{ minHeight: "312px" }}
      >
        <img
          src={thumbnail}
          alt=""
          className="img-fluid img-fit-cover card-img-top mb-3"
          style={{
            height: "165px",
            width: "100%",
            borderRadius: "15px 15px 0px 0px",
          }}
        />
        <span
          className="bg-primary text-white py-1 px-3 fs-12-ss rounded-pill position-absolute shadow-primary-ss"
          style={{
            top: "150px",
            left: "24px",
          }}
        >
          {tanggal}
        </span>
        <div className="px-4">
          <p className="fs-18-ss color-dark fw-extrabold mt-2 text-truncate">
            {judul}
          </p>
          <p className="fs-18-ss color-dark fw-semibold clamp-2">
            {" "}
            "{deskripsi}"{" "}
          </p>
        </div>
        <img src="/img/icon-play-video.svg" alt="" className="btn-play" />
      </div>
    </a>
  );
};

export default CardRekamanWebinar;
