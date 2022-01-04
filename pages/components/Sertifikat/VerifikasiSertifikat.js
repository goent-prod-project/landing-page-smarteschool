import React, { useState } from "react";
import SelectShared from "../Shared/SelectShared/SelectShared";
import Link from "next/link";
import {
  FaAddressCard,
  FaCheck,
  FaCheckCircle,
  FaSearch,
  FaTimesCircle,
} from "react-icons/fa";

const VerifikasiSertifikat = () => {
  const initialState = {
    pilihanGPDS: `Guru Penggerak Digitalisasi Sekolah Provinsi DKI
        Jakarta`,
  };
  const [formData, setFormData] = useState(initialState);
  const [dropdownOpen, setdropdownOpen] = useState(false);

  return (
    <div
      className="container"
      style={{
        marginTop: "-32px",
      }}
    >
      <div className="row justify-content-center position-relative mb-5">
        <div className="col-md-12">
          <div className="search-illustasi-kolaborasi rounded-ss bg-soft-primary p-4 position-relative d-flex mb-4 flex-md-row flex-column">
            <div className="search-illustasi-kolaborasi-content mb-4">
              <h2 className="md-fs-5 sm-fs-6 fw-extrabold color-dark text-capitalize mb-2">
                Verifikasi Sertifikat
              </h2>
              <h6 className="md-fs-18-ss sm-fs-14-ss color-secondary mb-4 fs-18-ss">
                Bersama mendigitalkan komunitas pendidikan Indonesia bersama
                Smarteschool
              </h6>
            </div>
            <img
              src="/img/smarteschool-illustration.png"
              alt="illustrasi"
              class="search-illustrasi-kolaborasi-img img-fluid"
            ></img>
          </div>
        </div>
        <div
          className="col-md-10 position-absolute card-dropdown-gpds card-select-sertifikat-gpds card-verifikasi-sertifikat-gpds"
          style={{
            bottom: "-16px",
            transform: "translateX(50%)",
            right: "50%",
            zIndex: "1",
          }}
        >
          <div className="position-relative">
            <input
              className="form-control"
              autoComplete="off"
              placeholder="Tulis nomor sertifikat Anda disini"
              type="text"
              name="verifikasiSertifikat"
              // onChange={handleChangeForm}
              // value={formData?.jabatan}
            />
            <FaSearch
              className="color-secondary position-absolute fs-4"
              style={{
                right: "24px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card card-ss p-4 pb-5">
            <div className="card-body p-0">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="w-100 rounded-ss p-4 bg-soft-success color-success d-flex align-items-center mb-4">
                    <FaCheckCircle className="me-2 fs-5" />{" "}
                    <h6 className="fw-semibold mb-0">
                      Sertifikat Anda Valid - Nomor. 1001/SES/SEM.1/V/2021
                    </h6>
                  </div>
                  <div className="w-100 rounded-ss p-4 bg-very-soft-secondary color-dark mb-4">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="/img/icon-data-peserta-sertifikat.svg"
                        alt="icon-data-peserta-sertifikat"
                        className="me-2"
                      />
                      <h6 className="fw-extrabold text-uppercase mb-0">
                        DATA PESERTA
                      </h6>
                    </div>
                    <h4 className="fw-extrabold mb-2">
                      Adrihanna Qaisara Binti Amra
                    </h4>
                    <h6 className="fw-bold color-secondary mb-0">
                      SMKN 69 Jakarta
                    </h6>
                  </div>
                  <div className="w-100 rounded-ss p-4 bg-very-soft-secondary color-dark mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="/img/icon-program-sertifikat.svg"
                        alt="icon-program-sertifikat"
                        className="me-2"
                      />
                      <h6 className="fw-extrabold text-uppercase mb-0">
                        PROGRAM
                      </h6>
                    </div>
                    <h4 className="fw-extrabold mb-2">
                      Workshop Guru Penggerak Digitalisasi Sekolah Nusa Tenggara
                      Timur
                    </h4>
                    <h6 className="fw-bold color-secondary mb-0">
                      15 November 2021 - 19 November 2021
                    </h6>
                  </div>
                  <Link href="/sertifikat-print">
                    <a
                      target="_blank"
                      className="btn btn-ss btn-primary btn-primary-ss w-100 fs-5 fw-bold"
                      style={{ borderRadius: "10px" }}
                    >
                      Unduh Sertifikat
                    </a>
                  </Link>
                </div>

                {/* If Tidak Ada Data Start */}

                {/* <div className="col-md-10">
                  <div className="w-100 rounded-ss p-4 bg-soft-danger color-danger d-flex align-items-center mb-4">
                    <FaTimesCircle className="me-2 fs-5" />{" "}
                    <h6 className="fw-semibold mb-0">
                      Sertifikat Anda Tidak Valid
                    </h6>
                  </div>
                  <div className="text-center">
                    <img src="/img/empty-state-data.svg" alt="" width="200" />
                    <h6 className="color-dark fw-bold mt-3">
                      Tidak Ada Data Sertifikat
                    </h6>
                  </div>
                </div> */}

                {/* If Tidak Ada Data End */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifikasiSertifikat;
