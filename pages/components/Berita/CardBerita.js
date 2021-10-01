import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tooltip } from "antd";
import { getDateTime, getImageUrl } from "../../../utilities/AppUtils";

const CardBerita = ({ data }) => {
  return (
    <Link href={`/berita/${data?.slug}`}>
      <a className="col-md-4 card-berita pointer">
        <img
          src={getImageUrl(data?.banner?.url)}
          alt=""
          className="img-fluid rounded-ss img-fit-cover mb-3"
          style={{
            height: "174px",
            width: "100%",
          }}
        />
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
