import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tooltip } from "antd";
import moment from "moment";

const CardEvent = ({ data }) => {
  const linkEvent = data?.gpds
    ? `/event/gpds/${data?.slug}`
    : data?.link
    ? data?.link
    : `/event/${data?.slug}`;
  return (
    <a href={linkEvent} target="_blank">
      <div className="card-event card card-ss">
        <img
          class="card-img-top img-fit-cover"
          src={`https://apidev.smarteschool.net${data?.banner?.[0]?.url}`}
          alt="Card image cap"
          style={{ height: "200px", borderRadius: "15px 15px 0 0" }}
        />
        <div className="card-body p-4">
          <Tooltip title={data?.judul}>
            <h6 className="fw-extrabold color-dark text-truncate mb-2">
              {data?.judul}
            </h6>
          </Tooltip>
          <div className="d-flex align-items-cneter mb-3">
            <img
              src="/img/icon-tanggal-event.svg"
              alt="icon-tanggal-event"
              className="me-2"
            />
            <span className="fs-14-ss color-primary mb-0 fw-semibold">
              {`${moment(data?.tanggalAwal).format("D MMM")}`}{" "}
              {data?.tanggalAkhir
                ? `- ${moment(data?.tanggalAkhir).format("D MMM YYYY")}`
                : ""}
            </span>
          </div>
          <Tooltip title={data?.deskripsi}>
            <p className="fw-semibold color-secondary clamp-2 mb-4">
              {data?.deskripsi}
            </p>
          </Tooltip>
          {/* <div className="d-flex justify-content-end">
            <a
              href={data?.linkEvent}
              target="_blank"
              className="btn btn-ss btn-primary btn-primary-ss bg-gradient-primary rounded-pill shadow-primary-ss fw-bold fs-6"
            >
              Lihat Detail
            </a>
          </div> */}
        </div>
      </div>
    </a>
  );
};

export default CardEvent;
