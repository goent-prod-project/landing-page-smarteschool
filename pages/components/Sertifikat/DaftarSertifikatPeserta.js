import React, { useState } from "react";
import SelectShared from "../Shared/SelectShared/SelectShared";
import Link from "next/link";

const DaftarSertifikatPeserta = () => {
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
                Sertifikat GPDS
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
          className="col-md-10 position-absolute card-dropdown-gpds card-select-sertifikat-gpds"
          style={{
            bottom: "-16px",
            transform: "translateX(50%)",
            right: "50%",
            zIndex: "1",
          }}
        >
          <SelectShared
            name="selectProgram"
            placeholder="Pilih program GPDS..."
          />
        </div>
      </div>

      <div
        className="card card-ss p-0 py-4 "
        // style={{
        //   marginTop: "-32px",
        // }}
      >
        <div className="card-body p-0">
          <div className="row px-4 mb-4">
            <div className="col-md-9 d-flex align-items-center">
              <h4 className="fw-extrabold color-dark mb-md-0 mb-4">
                Daftar Peserta
              </h4>
            </div>
            <div className="col-md-3 mb-md-0 mb-4">
              <input
                type="text"
                className="form-control form-search form-search-mutasi rounded-pill fw-semibold border-secondary-ss w-100"
                style={{ height: "42px", width: "100%" }}
                id="exampleFormControlInput1"
                placeholder="Cari"
                //   value={searchTransaksi}
                //   onChange={(e) => setSearchTransaksi(e.target.value)}
              />
            </div>
          </div>
          <table className="table-ss mt-4">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Asal Sekolah</th>
                <th>Sertifikat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-th="No">1</td>
                <td data-th="Nama">Armando Salazar</td>
                <td data-th="Asal Sekolah">SMKN 7 Jakarta</td>
                <td data-th="Sertifikat">
                  {" "}
                  <Link href="/sertifikat-print">
                    <a
                      target="_blank"
                      className={`btn btn-primary btn-primary-ss shadow-primary-ss rounded-pill fs-14-ss py-1 px-4 hover-shadow-none fw-semibold`}
                    >
                      Unduh
                    </a>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DaftarSertifikatPeserta;
