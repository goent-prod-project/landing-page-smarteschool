import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tooltip } from "antd";

const CardSideBerita = ({ data }) => {
  return (
    <>
      {data?.map((d, idx) => {
        return (
          <>
            <div className="pointer card-berita">
              <img
                src={d?.img}
                alt=""
                className="img-fluid rounded-ss img-fit-cover mb-3"
                style={{
                  height: "125px",
                  width: "100%",
                }}
              />
              <Tooltip title={d?.judul}>
                <p className="fs-16-ss fw-extrabold mb-0 color-dark judul clamp-2">
                  {d?.judul}
                </p>
              </Tooltip>

              <p className="fs-14-ss fw-semibold mb-0">{d?.tanggal}</p>
            </div>
            <hr className="my-4"></hr>
          </>
        );
      })}
    </>
  );
};

export default CardSideBerita;
