import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tooltip } from "antd";
import { getDateTime, getImageUrl } from "utilities/AppUtils";

const CardSideBerita = ({ data }) => {
  return (
    <>
      <Link href={`/berita/${data?.slug}`}>
        <a className="pointer card-berita">
          <img
            src={getImageUrl(data?.banner?.url)}
            alt=""
            className="img-fluid rounded-ss img-fit-cover mb-3"
            style={{
              height: "125px",
              width: "100%",
            }}
          />
          <Tooltip title={data?.judul}>
            <p className="fs-16-ss fw-extrabold mb-0 color-dark judul clamp-2">
              {data?.judul}
            </p>
          </Tooltip>

          <p className="fs-14-ss fw-semibold mb-0">
            {getDateTime(data?.publishedAt)}
          </p>
        </a>
      </Link>
      <hr className="my-4"></hr>
    </>
  );
};

export default CardSideBerita;
