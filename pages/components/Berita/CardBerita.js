import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tooltip } from "antd";

const CardBerita = ({ data }) => {
  return (
    <>
      {data?.map((d, idx) => {
        return (
          <Link href={`berita/1`}>
            <div className="col-md-4 card-berita pointer">
              <img
                src={d?.img}
                alt=""
                className="img-fluid rounded-ss img-fit-cover mb-3"
                style={{
                  height: "174px",
                  width: "100%",
                }}
              />
              <Tooltip title={d?.judul}>
                <p className="fs-18-ss md-fs-6 color-dark fw-extrabold mb-2 clamp-2 judul">
                  {d?.judul}
                </p>
              </Tooltip>
              <p className="fs-14-ss fw-semibold">{d?.tanggal}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default CardBerita;
