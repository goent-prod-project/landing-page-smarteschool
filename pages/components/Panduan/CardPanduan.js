import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tooltip } from "antd";
import { FaBook, FaFileDownload } from "react-icons/fa";

const CardPanduan = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1utbJsl9p_xhgiqbarty7vxx05e1ZBfU_/view?usp=sharing"
      target="_blank"
    >
      <div className="card-event card card-ss">
        <div
          class="card-img-top img-fit-cover d-flex justify-content-center align-items-center"
          //   src={data?.bannerEvent}
          alt="Card image cap"
          style={{
            height: "200px",
            borderRadius: "15px 15px 0 0",
            background: `url("/img/banner-event.png")`,
          }}
        >
          <FaFileDownload color="white" style={{ fontSize: 48 }} />
        </div>
        <div className="card-body p-4">
          <Tooltip title="Download Buku Panduan">
            <h6 className="fw-extrabold color-dark text-truncate mb-2">
              Download Buku Panduan
            </h6>
          </Tooltip>
          <Tooltip title="Kupas Tuntas Panduan Lengkap Penggunaan Platform Smarteschool sebagai media digitalisasi sekolah versi 2022">
            <p className="fw-semibold color-secondary clamp-2 mb-4">
              "Kupas Tuntas Panduan Lengkap Penggunaan Platform Smarteschool
              sebagai media digitalisasi sekolah versi 2022"
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

export default CardPanduan;
