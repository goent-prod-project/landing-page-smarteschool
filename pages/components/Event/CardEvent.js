import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tooltip } from "antd";

const CardEvent = ({ data }) => {
  return (
    <a href={data?.linkEvent} target="_blank">
      <div className="card-event card card-ss">
        <img
          class="card-img-top img-fit-cover"
          src={data?.bannerEvent}
          alt="Card image cap"
          style={{ height: "200px", borderRadius: "15px 15px 0 0" }}
        />
        <div className="card-body p-4">
          <Tooltip title={data?.judulEvent}>
            <h6 className="fw-extrabold color-dark text-truncate mb-2">
              {data?.judulEvent}
            </h6>
          </Tooltip>
          <Tooltip title={data?.deskripsiEvent}>
            <p className="fw-semibold color-secondary clamp-2 mb-4">
              {data?.deskripsiEvent}
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
