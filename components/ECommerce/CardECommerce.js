import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tooltip } from "antd";
import moment from "moment";

const CardECommerce = ({ data }) => {
  return (
    <div className="card-event card card-ss">
      <img
        class="card-img-top img-fit-cover"
        src={`http://139.180.139.229:1113${data?.coverPhoto?.url}`}
        alt="Card image cap"
        style={{ height: "250px", borderRadius: "15px 15px 0 0" }}
      />
      <div className="card-body p-4">
        <Tooltip title={data?.namaBarang}>
          <h6 className="fw-extrabold color-dark text-truncate mb-2">
            {data?.namaBarang}
          </h6>
        </Tooltip>
        <div className="d-flex justify-content-end">
          <a
            href={`https://api.whatsapp.com/send?phone=6285778537382&text=Halo Tim Smarteschool, Saya tertarik mengenai produk ${data?.namaBarang}`}
            target="_blank"
            className="me-3"
          >
            <img src="/img/btn-whatsapp-icon.svg" alt="btn-whatsapp-icon" />
          </a>
          <a href={data?.linkSiplah} target="_blank">
            <img src="/img/btn-siplah-icon.svg" alt="btn-siplah-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardECommerce;
