import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { showCertGDS } from "../../../client/ResourceCertClient";

const index = ({ id }) => {
  const router = useRouter();
  console.log(router);

  const [cert, setCert] = useState({});

  const _showCertGDS = async () => {
    const { data } = await showCertGDS(id);

    if (data) {
      setCert(data);
    }
  };

  useEffect(() => _showCertGDS(), []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      window.print();
    }, 1000);
  }, [loading]);

  return (
    <div className="sertifikat-gpds-print" style={{ color: "#333333" }}>
      <style jsx>
        {`
          @media print {
            @page {
              size: landscape;
              margin: 0 !important;
            }
            .sertifikat-gpds {
              -webkit-print-color-adjust: exact;
              -moz-print-color-adjust: exact;
            }
          }
        `}
      </style>
      <div
        className="bg-cover bg-center w-100 sertifikat-gpds text-center position-relative"
        style={{
          minHeight: "100vh",
          background: `url("/img/sertifikat-gpds.png")`,
        }}
      >
        <h6
          className="fs-18-ss fw-bold position-relative"
          style={{
            top: "215px",
          }}
        >
          {cert?.nomor}
        </h6>
        <div
          className="position-relative d-inline"
          style={{
            top: "255px",
          }}
        >
          <h1
            className="color-primary ff-great-vibes d-inline"
            style={{
              fontSize: "60px",
            }}
          >
            {cert?.name}
          </h1>

          <hr
            className="bg-primary w-100 position-absolute"
            style={{
              bottom: "0",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: "1",
            }}
          />
        </div>
      </div>

      {/* If Sertifikat 32 Jam Start */}
      {/* <div
        className="bg-cover bg-center w-100 sertifikat-gpds text-center position-relative"
        style={{
          minHeight: "100vh",
          background: `url("/img/sertifikat-gpds-32-jam-1.png")`,
        }}
      >
        <h6
          className="fs-18-ss fw-bold position-relative"
          style={{
            top: "215px",
          }}
        >
          Nomor. 1001/SES/SEM.1/V/2021
        </h6>
        <div
          className="position-relative d-inline"
          style={{
            top: "255px",
          }}
        >
          <h1
            className="color-primary ff-great-vibes d-inline"
            style={{
              fontSize: "60px",
            }}
          >
            Boy Andarsen Wicaksono
          </h1>
          <hr
            className="bg-primary w-100 position-absolute"
            style={{
              bottom: "0",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: "1",
            }}
          />
        </div>
      </div>

      <div
        className="bg-cover bg-center w-100 sertifikat-gpds text-center position-relative"
        style={{
          minHeight: "100vh",
          background: `url("/img/sertifikat-gpds-32-jam-2.jpeg")`,
        }}
      ></div> */}

      {/* If Sertifikat 32 Jam End */}
      <div
        className="position-absolute"
        style={{
          bottom: "50px",
          left: "140px",
        }}
      >
        <QRCode
          value={`https://smarteschool.id/sertifikat/${cert?.id}`}
          bgColor="transparent"
          size={100}
        />
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  return {
    props: {
      id: id,
    },
  };
}

export default index;
