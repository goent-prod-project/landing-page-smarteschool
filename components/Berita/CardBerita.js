import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tooltip } from "antd";
import { getDateTime, getImageUrl } from "utilities/AppUtils";

const CardBerita = ({ data }) => {
  return (
    <Link href={`/berita/${data?.slug}`}>
      <a className="col-md-4 card-berita pointer">
        <div className="card card-ss mb-3">
          <img
            src={getImageUrl(data?.banner?.url)}
            alt=""
            className="img-card img-fluid rounded-ss img-fit-cover"
            style={{
              height: "174px",
              width: "100%",
            }}
          />
          <div
            className="card-img-overlay rounded-ss p-3 d-flex align-items-end"
            style={{
              height: "174px",
              background: `linear-gradient(
              to bottom,
              transparent,
              rgba(4, 0, 36, 0.75))`,
            }}
          >
            <div className="rounded-pill bg-white px-3 py-0">
              <img
                src="/img/logo-smarteschool.png"
                alt="logo-smarteschool"
                style={{ height: "12px" }}
              />
            </div>
          </div>
        </div>
        <Tooltip title={data?.judul}>
          <p className="fs-18-ss md-fs-6 color-dark fw-extrabold mb-2 clamp-2 judul">
            {data?.judul}
          </p>
        </Tooltip>
        <p className="fs-14-ss fw-semibold">{getDateTime(data?.publishedAt)}</p>
      </a>
    </Link>
  );
};

export default CardBerita;
